// 정리는꼼꼼 공통 요소
var ATTR_INDEX = 'data-index';
var pageLength = $ts.getEl('.basicSlider_slides > li').length;
var nextButton = document.querySelector('.js-nextButton');
var SETPAGE = {};
var numCard = [0, 0, 0];
var quizButtons = $ts.getEl('.quizButtons');
var quizInputs = $ts.getEl('input');
var INDEX = 1;

// 공통 함수
function setPage(index) {
  SETPAGE['page_' + (index + 1)]();
  setNextButton(index);
}

function setNextButton(index) {
  if (index === pageLength - 1) nextButton.classList.add('home');
  else hideNextButton();
}

function goPage() {
  var index = nextButton.getAttribute(ATTR_INDEX) - 0;

  if (index == 1) {
    numCard[0] = parseInt(document.querySelector('[data-input-obj="1"]').value);
    numCard[1] = parseInt(document.querySelector('[data-input-obj="2"]').value);
    numCard[2] = parseInt(document.querySelector('[data-input-obj="3"]').value);
  }

  $pm.array.mainSlider.reset({idx: index});
  setPage(index);

  nextButton.setAttribute(ATTR_INDEX, (index + 1) % pageLength);
  INDEX = (index + 1) % pageLength;
  window.$efSound.click();
}

function showNextButton() {
  nextButton.classList.remove('hide');
}

function hideNextButton() {
  nextButton.classList.add('hide');
  nextButton.classList.remove('home');
}

quizInputs.forEach(function (input) {
  input.addEventListener('input', onlyNumberInput);
  input.addEventListener('focusout', onlyNumberInput);
  input.addEventListener('keyup', onlyNumberInput);
})

function onlyNumberInput() {
  var regexp = /[^0-9]/gi;
  if (regexp.test(this.value)) {
    this.value = this.value.replace(regexp, '');
  }
}

var page1Inputs = $ts.getEl('.page1 input');
var q1Btn = $ts.getEl('.page1 .quizButtons')[0];
page1Inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if(page1Inputs.every(inputValueCheck)){
      q1Btn.classList.remove('off');
    }else {
      q1Btn.classList.add('off');
    }
  });
})


function inputValueCheck(inputs) {
  return inputs.value !== '';
}

// 개별 함수
// 페이지가 줄어들거나 늘어나는 경우 함수 추가 혹은 삭제
SETPAGE.page_1 = function () {
  // 1페이지 이동시 실행 동작
  numCard = [0, 0, 0];
  $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
  
  var input = document.querySelectorAll('.page1 input');
  console.log('asdf', input);
  input.forEach(function(obj){
    obj.value = '';
    // input.classList.remove('answerMode');
    obj.classList.remove('offBg');
  })
}

SETPAGE.page_2 = function () {
  // 2페이지 이동시 실행 동작
  //
 document.querySelector('[data-input-obj="5"]').classList.add("offBg");
  var tag = document.querySelectorAll(".inputWrap ul li input");
  var i = 0;
  // var num1,var num2;
  // if (numCard)
  console.log(numCard)
  numCard.forEach(function(card, idx) {
    if (card == null || card == undefined || isNaN(card)) {
      numCard[idx] = '';
    }
  })
  console.log('card', numCard);
  // if (numCard.includes(Nan)) {
  //   console.log(numCard.findIndex());
  // }
  document.querySelector(".numView1").innerHTML = numCard[1];
  document.querySelector(".numView2").innerHTML = numCard[2];

  while (i < tag.length) {
    if (i == 0) {
      num = numCard[0] * 1;
      tag[i].value = num;
    } else if (i % 5 == 0) {
      num = numCard[0] * 1 + Math.floor(i / 5) * numCard[1];
    } else {
      num += numCard[2];
    }

    tag[i].setAttribute("data-answer", num);


    console.log(tag.length , tag[i].getAttribute("data-input-obj"),i, numCard[0], numCard[1], numCard[2], num, i % 5);
    i++;
  }
}

function checkQuiz() {
  if(this.className.indexOf('reset') === -1){
    if(INDEX === 1) {
      numCard = [0, 0, 0];
    }
  }else{
    setTimeout(function() { showNextButton(); }, 100);

  }
}

window.addEventListener('load', function () {
  // 다음 버튼 이벤트(공통)


  nextButton.addEventListener('click', goPage);

  quizButtons.forEach(function (btn) {
    btn.addEventListener('click', checkQuiz);
  })

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
});
