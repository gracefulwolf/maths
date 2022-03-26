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
        start: {x: 9, y: 75},
        end: {x: 70, y: 75}
      }],
      [{
        start: {x: 9, y: 75},
        end: {x: 436, y: 75}
      }]
    ];

    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      // answerButton: document.querySelector('.js-buttons'),
      answer: answers[index],
      callback: {
        start: function(DrawLine) {
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        correct: function(DrawLine) {
          console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        reset: function(DrawLine) {
          lightOn(document.querySelector('.induceLight.light_'+(index+1)));
        }
      },
    }));
  }

  function setResetButtons(btn, index) {
    btn.addEventListener('click', function() {
      lightOn(document.querySelector('.induceLight.light_'+(index+1)));
    });
  }

  window.addEventListener('load', function() {
    var rotateArray = [];
    var rotateContainer = $ts.getEl('.js-rotate');

    rotateContainer.forEach(function(obj, index) {
      rotateArray.push(new $Rotate({
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
      }));
    });

    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    $ts.getEl('.js-resetButton').forEach(setResetButtons);

    setTimeout(function() {
      drawLines.forEach(function(drawLine) { drawLine.reset(); });

      }, 100);

  });
})();