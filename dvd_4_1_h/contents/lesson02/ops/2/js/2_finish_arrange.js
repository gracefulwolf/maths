(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');


  var containers = $ts.getEl('.js-drawLine');
  var buttons = $ts.getEl('.js-button');
  var lastButton = document.querySelector('.js-button[data-index="3"]');
  var isCompleted = [false, false];
  var isInputValue = [];
  var isValue1 = $ts.getEl('.type01value');
  var isValue2 = $ts.getEl('.type02value');

  // var answerbutton_page1 = document.querySelector('.page1 .js-chainButtons');
  // var answerbutton_page2 = document.querySelector('.page2 .js-chainButtons');

  // answerbutton_page1.addEventListener('click', function() {
  //   isCompleted[0] = true;
  // });
  // answerbutton_page1.addEventListener('click', function() {
  //   isCompleted[1] = true;
  // });

  function resetButtons() {
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  }

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var index = this.getAttribute('data-index')-0;
      nextButton.setAttribute(ATTR_INDEX, index);
      showNextButton();

      resetButtons();
      btn.classList.add('selected');
    });
    btn.addEventListener('click', $efSound.click);
  });

  function crateRotate(obj) {
    return new $Rotate({
      obj: obj,
      target: obj.querySelector('.js-rotateTarget'),
      degree: 5,
      rightButton: obj.querySelector('.js-rotateButton.right'),
      leftButton: obj.querySelector('.js-rotateButton.left'),
      resetButton: false,
      copy: false,
      callback: {
        move: function(Rotate) {},
        end: function(Rotate) {}
      }
    });
  }

  function createDot(container, dotLength) {
    function createElement(container, i, j) {
      var dot = document.createElement('div');

      dot.classList.add('js-dragObj');
      dot.classList.add('dragObj');
      dot.classList.add('horizon_' + (i+1));
      dot.classList.add('vertical_' + (j+1));
      dot.setAttribute('data-type', 'drop');
      dot.setAttribute('data-index', '1');

      container.appendChild(dot);

      return dot;
    }

    for (var i = 0; i < dotLength[0]; i++) {
      for (var j = 0; j < dotLength[1]; j++) {
        createElement(container, i, j);
      }
    }
  }
  
  var rotateArray = $ts.getEl('.js-rotate').map(crateRotate);
  var drawLines = containers.map(function(container, index) {
    // if (index === 0) createDot(container, [10, 10]);
    // else if (index === 1) createDot(container, [30, 11]);

    return new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answer: [
        {
          start: {x: -10, y: -10},
          end: {x: -10, y: -10},
        }
      ],
      lineWidth: 6,
      callback: {
        start: function(DrawLine) {},
        correct: function(DrawLine) {
          console.log('correct', DrawLine);
        },
        incorrect: function(DrawLine) {},
        showAnswer: function(DrawLine) {},
        reset: function(DrawLine) {}
      },
    });
  });
    
  window.$callBack.sliderMove = function(SLIDER) {
    hideTitle(SLIDER.idx);
    rotateArray.forEach(function(rotate) { rotate.reset(); });
  }

  window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
    showNextButton();
  }

  function drawReset() {
    drawLines.forEach(function(draw) { draw.reset(); });
    rotateArray.forEach(function(rotate) { rotate.reset(); });
  }

  var inputs = $ts.getEl('input');
  inputs.forEach(function (input) {
    input.addEventListener('input', onlyNumberInput);
    input.addEventListener('focusout', onlyNumberInput);
    input.addEventListener('keyup', onlyNumberInput);
    // isInputValue.splice(0, 1, parseInt($ts.getEl('.type01')[0].value));
    // isInputValue.splice(1, 1, parseInt($ts.getEl('.type02')[0].value));
  })
  function onlyNumberInput() {
    var regexp = /[^0-9]/gi;
    if(regexp.test(this.value)){
      this.value = this.value.replace(regexp, '');
    }

    if(this.classList.contains('type01')) {
      isInputValue.splice(0, 1, parseInt(this.value));
    }else if(this.classList.contains('type02')) {
      isInputValue.splice(1, 1, parseInt(this.value));
    }
  }

  SETPAGE.page_1 = function() {
    hideTitle(false);
    drawReset();

    resetButtons();
    if (isCompleted[0] && isCompleted[1] && isInputValue.length === 2) lastButton.classList.remove('pointerOff');
  }
  SETPAGE.page_2 = function() {
    hideTitle(true);
    drawReset();

    isCompleted[0] = true;
    nextButton.setAttribute(ATTR_INDEX, 0);
    console.log('예각 입력 구간')
  }
  SETPAGE.page_3 = function() {
    hideTitle(true);
    drawReset();

    isCompleted[1] = true;
    nextButton.setAttribute(ATTR_INDEX, 0);
    console.log('둔각 입력 구간')
  }
  SETPAGE.page_4 = function() {


    hideTitle(true);
    drawReset();

    isValue1.forEach(function (input) {
      input.value = isInputValue[0];
    })
    isValue2.forEach(function (input) {
      input.value = isInputValue[1];
    })

    $ts.getEl('.sumValue')[0].setAttribute('data-answer', isInputValue[1]+isInputValue[0]);
    $ts.getEl('.diffValue')[0].setAttribute('data-answer', isInputValue[1]-isInputValue[0]);

    isCompleted = [false, false];
    isInputValue = [];
    lastButton.classList.add('pointerOff');
    
    nextButton.setAttribute(ATTR_INDEX, 0);

  }


  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);
    nextButton.addEventListener('click', $efSound.click);

    drawReset();
  });

  // 공통 함수
  function setPage(index) {
    SETPAGE['page_'+ (index+1)]();
    setNextButton(index);
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else {
      nextButton.classList.remove('home');
      // hideNextButton();
    }
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    
    // nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }

  function hideTitle(boolean) {
    if (boolean) TITLE.style.display = 'none';
    else TITLE.style.display = '';
  }
})();