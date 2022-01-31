
(function() {
  var boardDotLength = [6, 6];
  var paperDotLength = [8, 17];
  var answerArray = [
    [
      {x: 95, y: 275},
      {x: 275, y: 275},
      {x: 275, y: 95}
    ],
    [
      {x: 35, y: 95},
      {x: 275, y: 95},
      {x: 155, y: 215}
    ],
  ];
  var isRightAngle;

  function createElement(container, i, j) {
    var dot = document.createElement('div');
    dot.classList.add('js-dragObj');
    dot.classList.add('dragObj');
    dot.classList.add('horizon_' + (i+1));
    dot.classList.add('vertical_' + (j+1));
    dot.setAttribute('data-type', 'drag');
    dot.setAttribute('data-index', '1');
    container.appendChild(dot);

    return dot;
  }

  function createDot(container, dotLength) {
    for (var i = 0; i < dotLength[0]; i++) {
      for (var j = 0; j < dotLength[1]; j++) {
        createElement(container, i, j);
      }
    }
  }

  function setFigureBoardLine(container, dotLength) {
    createDot(container, dotLength);

    return new FigureBoardLine({
      container: container,
      resetButton: container.querySelector('.js-quizButton'),
      lineWidth: 30,
      lineColor: '#e4a023',
      innerColor: '#cbdfab',
      innerLine: true,
      maxLength: 3,
      callback: {
        start: function(DrawLine) {},
        move: function(DrawLine) {},
        end: function(DrawLine) {},
        out: function(DrawLine) {},
        correct: function(DrawLine) {
          var startObj = DrawLine.DRAGDROP.startObj;
          var savedPointers = DrawLine.savedPointers;

          startObj.resetPosition();

          if (savedPointers.length == 3) {
            if (getResult(DrawLine).rightAngle != 0) isRightAngle = true;
          }
        },
        incorrect: function(DrawLine) {},
      }
    });
  }

  function setDrawLine(container, dotLength) {
    createDot(container, dotLength);

    return new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-quizButton'),
      lineWidth: 6,
      callback: {
        start: function(DrawLine) {},
        move: function(DrawLine) {},
        end: function(DrawLine) {},
        out: function(DrawLine) {},
        correct: function(DrawLine) {
          var startObj = DrawLine.DRAGDROP.startObj;
          var savedLines = DrawLine.savedLines;

          startObj.resetPosition();
        },
        incorrect: function(DrawLine) {},
      }
    });
  }

  function movePrev() {
    window.$pm.array.mainSlider.prevBtn.click();
  }


  var circleButton = $ts.getEl('.circleButton')[0];
  circleButton.addEventListener('click', $efSound.click);
  circleButton.addEventListener('click', function () {
    showAlert(2000);
  });

  function showAlert(time) {
    function closeAlert() {
      alert.classList.remove('on');
    }
    var alert = document.querySelector('.js-alert');
    alert.classList.add('on');
    setTimeout(closeAlert, time);
  }

  window.addEventListener('load', function() {
    var figureBoardDontainers = $ts.getEl('.js-figureBoardLine');
    var figureBoardLines = figureBoardDontainers.map(function(container) {
      return setFigureBoardLine(container, boardDotLength);
    });
    var section = document.querySelector('.contentsArea > section');
    var drawLine = setDrawLine(document.querySelector('.js-drawLine'), paperDotLength);

    window.$completeButton = document.querySelector('.js-completeButton');
    window.$completeButton.addEventListener('click', $efSound.click);
    window.$nextButton = document.querySelector('.js-nextbutton');
    window.$nextButton.addEventListener('click', $efSound.click);
    window.$prevButton = document.querySelector('.js-prevbutton');
    window.$prevButton.addEventListener('click', $efSound.click);
    window.$prevButton.addEventListener('click', movePrev);

    figureBoardLines[0].drawAnswer(answerArray[0], '#e4a023');
    figureBoardLines[1].drawAnswer(answerArray[1], '#e4a023');
    
    window.$callBack.sliderMove = function(SLIDER) {
      section.className = 'page' + (SLIDER.idx+1);
      drawLine.reset();
    }

    $completeButton.addEventListener('click', function() {
      window.$pm.array.mainSlider.nextBtn.click();
      // if (isRightAngle) window.$pm.array.mainSlider.nextBtn.click();
      // else showAlert();
    });
    $completeButton.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
    });
    
    setTimeout(function() {
      drawLine.reset();
      figureBoardLines[2].reset();
      showAlert(2500);
    }, 100);
  });
})();
