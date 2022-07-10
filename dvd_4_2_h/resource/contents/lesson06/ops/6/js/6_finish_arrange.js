(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');


  function crateRotate(obj) {
    return new $Rotate({
      obj: obj,
      target: obj.querySelector('.js-rotateTarget'),
      degree: 45,
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
  
  var rotateArray = $ts.getEl('.js-rotate').map(crateRotate);

  var containers = $ts.getEl('.js-drawLine');
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

  function createDot(container, dotLength) {
    for (var i = 0; i < dotLength[0]; i++) {
      for (var j = 0; j < dotLength[1]; j++) {
        createElement(container, i, j);
      }
    }
  }


  var drawLines = containers.map(function(container, index) {
    // if (container.getAttribute('data-option') !== 'drawing') createDot(container, [10, 6]);
    // else if (index === 1) createDot(container, [27, 9]);

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
  }

  window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
    // showNextButton();
  }

  function drawReset() {
    drawLines.forEach(function(draw) {
      draw.reset();
    });
  }

  var userDrawing = document.querySelector('.userDrawing');
  var dragBox = document.querySelector('.dragBox');


  SETPAGE.page_1 = function() {
    userDrawing.classList.remove('hide');
    userDrawing.classList.remove('pointerOff');
    drawReset();
  }
  SETPAGE.page_2 = function() {
    userDrawing.classList.add('pointerOff');
    dragBox.classList.add('hide');
  }
  SETPAGE.page_3 = function() {
    userDrawing.classList.add('hide');
    dragBox.classList.remove('hide');
    drawReset();
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
    hideTitle(index);

    rotateArray.forEach(function(rotate) { rotate.reset(); })
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else nextButton.classList.remove('home');
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    
    nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }

  function hideTitle(idx) {
    if (idx !== 0) TITLE.style.display = 'none';
    else TITLE.style.display = '';
  }
})();