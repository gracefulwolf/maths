
(function() {
  var paperDotLength = [5, 5];
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

    if (i == 0 && j == 2) dot.classList.add('drag_3');
    if (i == 0 && j == 4) dot.classList.add('drag_2');
    if (i == 0 && j == 0) dot.classList.add('drag_1');
    if (i == 4 && j == 0) dot.classList.add('drag_4');

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
      // resetButton: container.querySelector('.js-quizButton'),
      lineWidth: 25,
      lineColor: '#756fb3',
      innerColor: '#fedbbd',
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

          light.classList.add('hide');
          console.log('asdf', DrawLine.DRAGDROP.currentObj.dom);
          document.querySelector('.drag_3').classList.remove('drag_3');
          DrawLine.DRAGDROP.currentObj.dom.classList.add('drag_3');
        },
        incorrect: function(DrawLine, startObj) {
          var newPointer = {
            x: startObj.style.x + startObj.style.centerX,
            y: startObj.style.y + startObj.style.centerY,
          }
          console.log('incorrect')
          figureBoardLines.drawAnswer([
            {x: 195, y: 335},
            {x: 335, y: 335},
            newPointer,
          ], '#756fb3');
        },
      }
    });
  }

  window.addEventListener('load', function() {

    figureBoardLines = setFigureBoardLine(document.querySelector('.js-figureBoardLine'), paperDotLength);

    var answerButton = $ts.getEl('.js-chainButtons')[0];

    answerButton.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1){
        figureBoardLines.reset();
        figureBoardLines.drawAnswer([
          {x: 195, y: 335},
          {x: 335, y: 335},
          {x: 195, y: 55}
        ], '#756fb3');

        light.classList.remove('hide');

        $efSound.click();
        document.querySelector('.drag_3').classList.remove('drag_3');
        document.querySelector('.dragObj.horizon_1.vertical_3').classList.add('drag_3');
        $ts.getEl('.drawLine')[0].classList.remove('pointerOff');
      }else{
        figureBoardLines.reset();
        figureBoardLines.drawAnswer([
          {x: 195, y: 335},
          {x: 335, y: 335},
          {x: 55, y: 55}
        ]);

        light.classList.add('hide');

        $efSound.click();
        $ts.getEl('.drawLine')[0].classList.add('pointerOff');
        document.querySelector('.drag_3').classList.remove('drag_3');
        document.querySelector('.dragObj.horizon_1.vertical_1').classList.add('drag_3');
      }
    })


    figureBoardLines.drawAnswer([
      {x: 195, y: 335},
      {x: 335, y: 335},
      {x: 195, y: 55}
    ], '#756fb3');
  });
})();
