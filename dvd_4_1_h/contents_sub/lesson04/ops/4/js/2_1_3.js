
(function() {
  var ATTR_TYPE = 'data-type';
  var drawLines = [];

  function off(btn) {
    btn.classList.add('off');
  }
  function on(btn) {
    btn.classList.remove('off');
  }
  function showAnswer(drawLine) {
    drawLine.showAnswer();
  }
  function resetAnswer(drawLine) {
    drawLine.reset();
  }

  function showAnswers() {
    var solveButton = document.querySelector('[data-solve-btn]');
    if (this.getAttribute(ATTR_TYPE) === 'answer') {
      this.setAttribute(ATTR_TYPE, 'reset');
      drawLines.forEach(showAnswer);
      solveButton.classList.add('on');
      $ts.getEl('.js-resetButton').forEach(off);
    } else {
      this.setAttribute(ATTR_TYPE, 'answer');
      drawLines.forEach(resetAnswer);
      solveButton.classList.remove('on');
      $ts.getEl('.js-resetButton').forEach(on);
    }
  }
  
  window.addEventListener('load', function() {
    var quizButton = document.querySelector('.js-buttons');
    
    drawLines.push(new DrawLine({
      container: document.querySelector('.js-drawLine'),
      resetButton: document.querySelector('.js-resetButton'),
      answer: [{
        start: {x: 317, y: 278},
        end: {x: 499, y: 306}
      },{
        start: {x: 320, y: 107},
        end: {x: 96, y: 381}
      },{
        start: {x: 568, y: 96},
        end: {x: 707, y: 387}
      }],
      callback: {
        correct: function(DrawLine) {
          console.log('isCallback - correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {},
      },
    }));
  
    setTimeout(function() { drawLines.forEach(resetAnswer); }, 100);
    quizButton.addEventListener('click', showAnswers);
  });
})();