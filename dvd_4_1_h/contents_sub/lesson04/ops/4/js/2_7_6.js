
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
    if (this.getAttribute(ATTR_TYPE) === 'answer') {
      this.setAttribute(ATTR_TYPE, 'reset');
      drawLines.forEach(showAnswer);
      $ts.getEl('.js-resetButton').forEach(off);
    } else {
      this.setAttribute(ATTR_TYPE, 'answer');
      drawLines.forEach(resetAnswer);
      $ts.getEl('.js-resetButton').forEach(on);
    }
  }
  
  window.addEventListener('load', function() {
    var quizButton = document.querySelector('.js-buttons');
    
    drawLines.push(new DrawLine({
      container: document.querySelector('.js-drawLine'),
      resetButton: document.querySelector('.js-resetButton'),
      answer: [{
        start: {x: 508, y: 122},
        end: {x: 46, y: 315}
      },{
        start: {x: 508, y: 122},
        end: {x: 343, y: 338}
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