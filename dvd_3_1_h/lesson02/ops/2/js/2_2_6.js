
(function() {
  var drawLines = [];

  function lightOff(light) {
    light.classList.add('hide');
  }
  function lightOn(light) {
    light.classList.remove('hide');
  }

  function setDrawLine(container, index) {
    var answers = [
      [{
        start: {x: 337, y: 88},
        end: {x: 46, y: 86}
      }],
      [{
        start: {x: 111, y: 89},
        end: {x: 61, y: 293}
      }],
      [{
        start: {x: 171, y: 240},
        end: {x: 53, y: 107}
      },{
        start: {x: 171, y: 240},
        end: {x: 350, y: 59}
      }]
    ];

    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons'),
      answer: answers[index],
      callback: {
        start: function(DrawLine) {
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        correct: function(DrawLine) {
          console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {
          $ts.getEl('.induceLight').forEach(lightOff);
        },
        reset: function(DrawLine) {
          // $ts.getEl('.induceLight').forEach(lightOn);
        }
      },
    }));
  }

  function setResetButtons(btn, index) {
    btn.addEventListener('click', function() {
      lightOn(document.querySelector('.induceLight.light_'+(index+1)));
    });
  }

  var quizButton = $ts.getEl('.js-buttons')[0];
  quizButton.addEventListener('click', function () {
    if(this.className.indexOf('reset') > -1) {
      $ts.getEl('.induceLight').forEach(lightOn);
    }
  })
  
  window.addEventListener('load', function() {
    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    $ts.getEl('.js-resetButton').forEach(setResetButtons);
  
    setTimeout(function() { drawLines.forEach(function(drawLine) { drawLine.reset(); }); }, 100);
  });

})();