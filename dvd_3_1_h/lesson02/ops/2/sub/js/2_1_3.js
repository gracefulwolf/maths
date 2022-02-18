
(function() {
  window.addEventListener('load', function() {
    var drawLines = [];

    function resetAnswer(drawLine) {
      drawLine.reset();
    }
    
    drawLines.push(new DrawLine({
      container: document.querySelector('.js-drawLine'),
      resetButton: document.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons.quizButtons[data-type="answer"]'),
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
  });
})();