
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
      [{start: {x: 95, y: 133}, end: {x: 53, y: 7}}, {start: {x: 95, y: 133}, end: {x: 137, y: 9}},],
      [{start: {x: 163, y: 189}, end: {x: 324, y: 190}}, {start: {x: 163, y: 189}, end: {x: 35, y: 62}},],
      [{start: {x: 40, y: 270}, end: {x: 38, y: 35}}, {start: {x: 40, y: 270}, end: {x: 261, y: 49}},],
      [{start: {x: 149, y: 165}, end: {x: 289, y: 166}}, {start: {x: 149, y: 165}, end: {x: 149, y: 29}},]
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