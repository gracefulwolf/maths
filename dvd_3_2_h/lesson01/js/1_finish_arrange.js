(function () {

  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var questionButtons = $ts.getEl('.questionChoice');
  var questionType = 0;
  var quizButtons = $ts.getEl('.quizButtons');
  var clickBtns = $ts.getEl('.clickButton');
  var quizInputs = $ts.getEl('input');
  var num = ["",""];


  window.addEventListener('load', function () {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', function () {
      if (this.classList.contains("home")) {
        questionType = 1;
      }
      goPage();
      resetQuiz();
    });
    questionButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        
       
        if(this.classList.contains("select_on") == false){
          var i = 0;
          while(i<questionButtons.length){
            questionButtons[i].classList.remove("select_on");
            i++;
          }
          this.classList.add("select_on");
        }
        
        questionType = parseInt(this.getAttribute("data-value")) + 1;
        console.log('page_'+questionType+' open!');
        showNextButton();

      });
      btn.addEventListener('click', $efSound.click);
    });
  });

  // 공통 함수
  function setPage(index) {
    SETPAGE['page_' + (index + 1)]();
  }

  function goPage() {
    var index = questionType - 1;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    $pm.array.quiz.inPage.forEach(function (quiz) {
      quiz.reset();
    });

    //nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }

  // 개별 함수
  // 페이지가 줄어들거나 늘어나는 경우 함수 추가 혹은 삭제
  SETPAGE.page_1 = function () {
    // 1페이지 이동시 실행 동작
    num = [];
    hideNextButton();
  }

  SETPAGE.page_2 = function () {
    // 2페이지 이동시 실행 동작
    nextButton.classList.remove('hide');
    nextButton.classList.add('home');
    inputQuizInit();
  }

  SETPAGE.page_3 = function () {
    nextButton.classList.remove('hide');
    nextButton.classList.add('home');
    inputQuizInit();
  }

  SETPAGE.page_4 = function () {
    // 마지막 페이지 실행 동작
    nextButton.classList.remove('hide');
    nextButton.classList.add('home');
    inputQuizInit();
  }

  function inputQuizInit() {
    var nums = $ts.getEl('.page'+questionType+' .writeNum');
    var inputs = $ts.getEl('.page'+questionType+' input');

    inputs.forEach(function (input) {
      input.addEventListener("input", function () {
        btnControl(inputs.every(inputValueCheck));
      });
      input.addEventListener('input', onlyNumberInput);
      input.addEventListener('blur', onlyNumberInput);
      input.addEventListener('keyup', onlyNumberInput);
    })

    nums.forEach(function (input) {

      input.addEventListener('input', inputValueUpdate);
    });

    clickBtns.forEach(function (btn) {
      btn.addEventListener('click', setInputValue);
      btn.addEventListener('click', $efSound.click);
    })

    quizButtons.forEach(function (btn) {
      btn.classList.add('off');
      btn.classList.add('pointerOff');
      btn.addEventListener('click', function () {
        if(this.className.indexOf('reset') === -1) {
          resetQuiz();
          inputResizing(false);
        }
        else {
          inputResizing(true);
          clickBtnControl(true);
        }
      });
    })
  }

  function clickBtnControl(boolean) {
    var clickButton = $ts.getEl('.page' + questionType + ' .clickButton')[0];
    if(boolean) {
      clickButton.classList.remove('hide');
    }else{
      clickButton.classList.add('hide');
    }
  }
  function btnControl(boolean) {
    var btn = $ts.getEl('.page'+questionType+' .quizButtons')[0];
    if(boolean) {
      btn.classList.remove('off');
      btn.classList.remove('pointerOff');
    }else{
      btn.classList.add('off');
      btn.classList.add('pointerOff');
    }
  }

  function inputValueCheck(inputs) {
    return inputs.value !== '';
  }

  function resetQuiz() {
    quizInputs.forEach(function (input) {
      input.value = '';
      input.classList.remove('offBg');
      input.classList.remove('answerMode');

      if(input.getAttribute('data-answer')){
        input.setAttribute('data-answer', '');
      }
    })
    clickBtns.forEach(function (btn) {
      btn.classList.add('hide');
    })
    num = ["",""];
  }


  function onlyNumberInput() {
    var regexp = /[^0-9]/gi;
    if(regexp.test(this.value)){
      this.value = this.value.replace(regexp, '');
    }

    if(this.classList.contains('resizeInput')){
      this.setAttribute('class', 'resizeInput offBg textLength_' + this.value.length);
    }

    if (!this.value) {
      this.classList.remove('offBg');
      for (var i = 1; i <= 3; i++) {
        this.classList.remove('textLength_' + i);
      }
    }
  }
  function inputValueUpdate(e) {
    var idx = parseInt(e.target.getAttribute("data-input-obj")) - 1;
    var inputs = $ts.getEl('.page'+questionType+' .writeNum');

    num.splice(idx, 1, e.target.value);

    if(inputs.every(isArrayValueLength)){
      e.target.setAttribute("data-answer", e.target.value);
      clickBtnControl(true);
    }else{
      clickBtnControl(false);
    }
  }

  function isArrayValueLength(value, index, array) {
    return parseInt(value.getAttribute("maxlength")) === num[index].length
  }

  function setInputValue() {
    var correct = num[0] * num[1];
    var page = '.page' + questionType;
    var tag = $ts.getEl('.page' + questionType + ' .numPrt');
    var i = 0;

    if (questionType == 2) {

      while (i < tag.length) {
        var idx = i % 4;
        tag[i].value = (idx == 3 ? num[1] : num[0][idx]);
        i++;
      }

      document.querySelector(page + ' [data-input-obj="3"]').setAttribute("data-answer", num[0][0] * 100*num[1][0]);
      document.querySelector(page + ' [data-input-obj="4"]').setAttribute("data-answer", num[0][1] * 10*num[1][0]);
      document.querySelector(page + ' [data-input-obj="5"]').setAttribute("data-answer", num[0][2] * 1*num[1][0]);
      document.querySelector(page + ' [data-input-obj="6"]').setAttribute("data-answer", correct);
      document.querySelector(page + ' [data-input-obj="7"]').setAttribute("data-answer", correct);

    } else if (questionType == 3) {

      while (i < tag.length) {
        var idx = i % 3;
        tag[i].value = (idx == 0 ? num[0] : num[1][idx - 1]);
        i++;
      }

      document.querySelector(page + ' [data-input-obj="3"]').setAttribute("data-answer", num[1][0] * 10 * num[0]);
      document.querySelector(page + ' [data-input-obj="4"]').setAttribute("data-answer", num[1][1] * num[0]);
      document.querySelector(page + ' [data-input-obj="5"]').setAttribute("data-answer", correct);
      document.querySelector(page + ' [data-input-obj="6"]').setAttribute("data-answer", correct);

    } else if (questionType == 4) {

      while (i < tag.length) {
        var idx = i % 4;
        tag[i].value = num[(idx < 2 ? 0 : 1)][idx % 2];
        i++;
      }

      document.querySelector(page + ' [data-input-obj="3"]').setAttribute("data-answer", num[0] * (num[1][0] * 10));
      document.querySelector(page + ' [data-input-obj="4"]').setAttribute("data-answer", num[0] * num[1][1]);
      document.querySelector(page + ' [data-input-obj="5"]').setAttribute("data-answer", correct);
      document.querySelector(page + ' [data-input-obj="6"]').setAttribute("data-answer", correct);
    }

  }

  function inputResizing(bool) {
    var resizeInput = $ts.getEl('.resizeInput');
    resizeInput.forEach(function (input) {
     if(bool){
       var letters = input.getAttribute('data-answer').length;
       input.setAttribute('class', 'resizeInput offBg answerMode textLength_' + letters);
     }else{
       input.setAttribute('class', 'resizeInput');
     }
    })
  }
  if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
      'use strict';
      var T, k;
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      var len = O.length >>> 0;

      if (typeof callbackfn !== 'function') {
        throw new TypeError();
      }
      if (arguments.length > 1) {
        T = thisArg;
      }
      k = 0;
      while (k < len) {
        var kValue;
        if (k in O) {
          kValue = O[k];
          var testResult = callbackfn.call(T, kValue, k, O);
          if (!testResult) {
            return false;
          }
        }
        k++;
      }
      return true;
    };
  }
})();