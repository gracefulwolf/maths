
(function() {
  var drawLines = [];
  var answers = [
    [{
      start: {x: 72, y: 246},
      end: {x: 282, y: 246}
    }],
    [{
      start: {x: 72, y: 145},
      end: {x: 393, y: 330}
    }],
    [{
      start: {x: 20, y: 326},
      end: {x: 376, y: 120}
    }]
  ];

  function resetAnswer(drawLine) {
    drawLine.reset();
  }

  function createDrawLine(container, index) {
    drawLines.push(new DrawLine({
      container: container.querySelector('.js-drawLine'),
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons'),
      answer: answers[index],
      callback: {
        correct: function(DrawLine) {
          // console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {},
      },
    }));
  }
  
  window.addEventListener('load', function() {
    [document.querySelector('.draw_1'), 
    document.querySelector('.draw_2'),
    document.querySelector('.draw_3')].forEach(createDrawLine);
  
    setTimeout(function() { drawLines.forEach(resetAnswer); }, 100);
  });
})();