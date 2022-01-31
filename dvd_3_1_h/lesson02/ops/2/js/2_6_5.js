(function() {
  (function drawDots() {
    var container = $ts.getEl('.js-drawLine');
    var dotLength = [5, 5];
    
    var create = function(parent) {
      for (var i = 0; i < dotLength[0]; i++) {
        for (var j = 0; j < dotLength[1]; j++) {
          var dot = document.createElement('div');
          dot.classList.add('js-dragObj');
          dot.classList.add('dragObj');
          dot.classList.add('horizon_'+(i+1));
          dot.classList.add('vertical_'+(j+1));
          dot.setAttribute('data-type', 'drag');
          dot.setAttribute('data-index', 1);
          parent.appendChild(dot);
        }
      }
    }
    container.forEach(create);
  })();

  var induceLights = $ts.getEl('.induceLight');
  var drawLines = [];
  var answers = [
    [{
      end: {x: 365, y: 145},      
      start: {x: 125, y: 145}
    },{
      end: {x: 365, y: 385},
      start: {x: 365, y: 145}
    }],
    [{
      end: {x: 205, y: 65},
      start: {x: 45, y: 225}
    },{
      end: {x: 365, y: 225},
      start: {x: 205, y: 65}
    }],
    [{
      end: {x: 45, y: 65},
      start: {x: 45, y: 305}
    },{
      end: {x: 285, y: 65},
      start: {x: 45, y: 65}
    },{
      end: {x: 285, y: 305},
      start: {x: 285, y: 65}
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
          DrawLine.DRAGDROP.startObj.resetPosition();
          console.log(DrawLine.savedLines)
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

  window.addEventListener('load', function() {
    $ts.getEl('.js-drawLine').forEach(setDrawLine);

    window.$callBack.sliderMove = function(Slider) {
      drawLines.forEach(resetAnswer);
    }

    setTimeout(function() { drawLines.forEach(resetAnswer); }, 100);
  });

})();