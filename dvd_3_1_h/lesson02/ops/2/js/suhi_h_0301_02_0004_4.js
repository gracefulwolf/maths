
(function() {
  var drawLines = [];

  function resetAnswer(drawLine) {
    drawLine.reset();
  }

  function pageReset(btn) {
    var reset = function() {
      drawLines.forEach(resetAnswer);
    }
    btn.addEventListener('click', reset);
  }




  function createDrawLine(container, index) {
    var answers = [
      [{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      },{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      }],
      [{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      },{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      }]
    ];
    drawLines.push(new DrawLine({
      container: container.querySelector('.js-drawLine'),
      resetButton: container.querySelector('.js-quizButton'),
      answerButton: document.querySelector('.js-quizButton'),
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
    var pageMoveBtns = $ts.getEl('.basicSlider_btn');
    var pageTabBtns = $ts.getEl('[data-tabs] > li');

    [document.querySelector('.draw_1'), 
    document.querySelector('.draw_2')].forEach(createDrawLine);


    var rotateArray = $ts.getEl('.js-rotate').map(crateRotate);

    function crateRotate(obj) {
      return new $Rotate({
        obj: obj,
        target: obj.querySelector('.js-rotateTarget'),
        degree: 1,
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
    window.$callBack.sliderReset = function(SLIDER) {
      rotateArray.forEach(function(rotate) { rotate.reset(); });
    }

    pageMoveBtns.forEach(pageReset);
    pageTabBtns.forEach(pageReset);
    setTimeout(function() { drawLines.forEach(resetAnswer, 100); });
  });
})();