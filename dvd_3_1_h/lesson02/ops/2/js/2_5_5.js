
(function() {
  var induceLights = $ts.getEl('.induceLight');
  var drawLines = [];
  var answers = [
    [{
      end: {x: 129, y: 414},
      start: {x: 129, y: 54}
    },{
      end: {x: 129, y: 414},
      start: {x: 313, y: 414}
    }],
    [{
      end: {x: 398, y: 145},
      start: {x: 38, y: 145}
    },{
      end: {x: 398, y: 145},
      start: {x: 398, y: 327}
    }],
    [{
      end: {x: 219, y: 413},
      start: {x: 38, y: 234}
    },{
      end: {x: 220, y: 413},
      start: {x: 401, y: 234}
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