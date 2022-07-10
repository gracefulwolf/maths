(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');


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
    if (index === 0) createDot(container, [10, 10]);
    else if (index === 1) createDot(container, [30, 11]);

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
    showNextButton();
  }

  function drawReset() {
    drawLines.forEach(function(draw) {
      draw.reset();
    });
  }


  SETPAGE.page_1 = function() {
    hideTitle(0);
    drawReset();

    var clickObjs = $ts.getEl('[data-click-obj]');
    var clickTargets = $ts.getEl('[data-click-target]');

    clickObjs.forEach(function(obj) { obj.classList.remove('complete'); });
    clickTargets.forEach(function(target) { target.classList.remove('on'); });
  }
  SETPAGE.page_2 = function() {
    hideTitle(1);
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
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else hideNextButton();
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