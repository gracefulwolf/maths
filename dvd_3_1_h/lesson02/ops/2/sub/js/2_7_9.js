
(function() {
  var paperDotLength = [6, 9];
  // var answerPointers = [
  //   {x: 125, y: 335},
  //   {x: 405, y: 335},
  //   {x: 545, y: 125}
  // ];
  var figureBoardLines;
  var light = document.querySelector('.induceLight');

  function createElement(container, i, j) {
    var dot = document.createElement('div');
    dot.classList.add('js-dragObj');
    dot.classList.add('dragObj');
    dot.classList.add('horizon_' + (i+1));
    dot.classList.add('vertical_' + (j+1));
    dot.setAttribute('data-type', 'drag');
    dot.setAttribute('data-index', '1');
    container.appendChild(dot);

    if (i == 1 && j == 7) dot.classList.add('drag_1');
    if (i == 4 && j == 1) dot.classList.add('drag_2');
    if (i == 4 && j == 5) dot.classList.add('drag_3');

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
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons'),
      lineWidth: 5,
      lineColor: '#000',
      innerLine: false,
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

          light.classList.add('hide');

          document.querySelector('.drag_3').classList.remove('drag_3');
          DrawLine.DRAGDROP.currentObj.dom.classList.add('drag_3');
        },
        incorrect: function(DrawLine, startObj) {
          var newPointer = {
            x: startObj.style.x + startObj.style.centerX,
            y: startObj.style.y + startObj.style.centerY,
          }
          
          figureBoardLines.drawAnswer([
            {x: 125, y: 335},
            newPointer,
            {x: 545, y: 125}
          ], 'black');
        },
        showAnswer: function(DrawLine) {
          var examIcon = document.querySelector('.exam');

          
          DrawLine.clearCanvas();

          DrawLine.drawAnswer([
            {x: 125, y: 335},
            {x: 545, y: 335},
            {x: 545, y: 125}
          ]);

          examIcon.classList.add('on');
          light.classList.add('hide');

          $efSound.click();

          document.querySelector('.drag_3').classList.remove('drag_3');
          document.querySelector('.dragObj.horizon_5.vertical_8').classList.add('drag_3');
        },
        reset: function(DrawLine) {
          var examIcon = document.querySelector('.exam');

          DrawLine.drawAnswer([
            {x: 125, y: 335},
            {x: 405, y: 335},
            {x: 545, y: 125}
          ], '#000');

          examIcon.classList.remove('on');
          light.classList.remove('hide');

          $efSound.click();

          document.querySelector('.drag_3').classList.remove('drag_3');
          document.querySelector('.dragObj.horizon_5.vertical_6').classList.add('drag_3');
        }
      }
    });
  }

  window.addEventListener('load', function() {
    figureBoardLines = setFigureBoardLine(document.querySelector('.js-figureBoardLine'), paperDotLength);
    
    figureBoardLines.drawAnswer([
      {x: 125, y: 335},
      {x: 405, y: 335},
      {x: 545, y: 125}
    ], '#000');
  });
})();
