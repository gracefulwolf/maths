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
        start: {x: 12, y: 75},
        end: {x: 56, y: 75}
      }],
      [{
        start: {x: 12, y: 75},
        end: {x: 374, y: 75}
      }]
    ];

    drawLines.push(new DrawLine({
      container: container,
      resetButton: document.querySelector('.js-resetButton'),
      // answerButton: document.querySelector('.js-buttons'),
      answer: answers[index],
      callback: {
        start: function(DrawLine) {
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        correct: function(DrawLine) {
          console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
          // $ts.getEl('.ruler')[0].classList.add('on');
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
    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    $ts.getEl('.js-resetButton').forEach(setResetButtons);

    setTimeout(function() { drawLines.forEach(function(drawLine) { drawLine.reset(); }); }, 100);
  });

  window.$callBack.sliderMove = function(SLIDER) {
    setTimeout(function() { drawLines.forEach(function(drawLine) { drawLine.reset(); }); }, 100);
    $ts.getEl('.ruler')[0].classList.remove('on');
    $ts.getEl('.ruler')[0].setAttribute('style', '');
  }
})();