
(function() {
  var induceLights = $ts.getEl('.induceLight');
  var drawLines = [];
  var answers = [
    [{
      end: {x: 642, y: 23},
      start: {x: 32, y: 23}
    }]
  ];

  function lightOff() {
    var _off = function(el) {
      el.classList.add('hide');
    }
    induceLights.forEach(_off);
  }
  function lightOn() {
    var _on = function(el) {
      el.classList.remove('hide');
    }
    induceLights.forEach(_on);
  }
  function resetAnswer(drawLine) {
    drawLine.reset();
  }

  function setDrawLine(container, index) {
    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons'),
      answer: answers[index],
      lineColor: '#eec27a',
      callback: {
        start: function(DrawLine) {
          lightOff();
        },
        correct: function(DrawLine) {
          console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {
          lightOff();
        },
        reset: function(DrawLine) {
          lightOn();
        },
      },
    }));
  }

  function pageReset() {
    drawLines.forEach(resetAnswer);
  }

  window.addEventListener('load', function() {
    $ts.getEl('.js-drawLine').forEach(setDrawLine);

    window.$callBack.sliderMove = function(Slider) {
      pageReset();
    }

    setTimeout(function() { drawLines.forEach(resetAnswer); }, 100);
  });
})();