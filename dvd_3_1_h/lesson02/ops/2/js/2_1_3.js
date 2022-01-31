
(function() {
  var drawLine = new DrawLine({
    container: document.querySelector('.js-drawLine'),
    resetButton: document.querySelector('.js-resetButton'),
    answerButton: document.querySelector('.js-buttons'),
    answer: [{
      start: {x: 322, y: 147}, // DrawLine.startPointer
      end: {x: 822, y: 147} // DrawLine.endPointer
    }],
    callback: {
      start: function(DrawLine) {},
      move: function(DrawLine) {},
      end: function(DrawLine) {},
      out: function(DrawLine) {},
      correct: function(DrawLine) {
        console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
      },
      incorrect: function(DrawLine) {},
      showAnswer: function(DrawLine) {},
    },
  });
  
  window.addEventListener('load', function() {
    setTimeout(function() { drawLine.reset(); }, 100);
  });
})();