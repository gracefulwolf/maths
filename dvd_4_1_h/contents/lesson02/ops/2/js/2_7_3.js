(function() {
  var drawedPointer = [];


  function createDrawLine(container) {
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

    createDot(container, [10, 7]);

    return new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answer: [
        {x: 225, y: 107},
        {x: 225, y: 307},
        {x: 225, y: 307},
        {x: 425, y: 307}
      ],
      lineWidth: 6,
      callback: {
        start: function(DrawLine) {},
        correct: function(DrawLine) {
          console.log('correct', DrawLine);
          var startObj = DrawLine.DRAGDROP.startObj;
          startObj.resetPosition();
        },
        showAnswer: function(DrawLine) {},
        reset: function(DrawLine) {
          drawedPointer = [];
        }
      },
    });
  }


  function crateRotate(obj) {
    return new $Rotate({
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
    });
  }
  

  window.addEventListener('load', function() {
    var drawLines = $ts.getEl('.js-drawLine').map(createDrawLine);
    var rotateArray = $ts.getEl('.js-rotate').map(crateRotate);

    window.$callBack.sliderMove = function(SLIDER) {
      rotateArray.forEach(function(rotate) { rotate.reset(); });

      if (SLIDER.idx === 0) {
        // page1
        drawLines.forEach(function(drawLine) {
          drawLine.reset();
          drawLine.container.classList.remove('hide');
          drawLine.container.classList.remove('pointerOff');
        });
      } else if (SLIDER.idx === 1) {
        // page2
        drawLines.forEach(function(drawLine) { drawLine.container.classList.add('pointerOff'); });
      } else {
        drawLines.forEach(function(drawLine) { drawLine.container.classList.add('hide'); });
      }
    }
  });


  // var isAnswered = false;
  // var resetButton = document.querySelector('.page1 .js-chainButtons');
  // resetButton.addEventListener('click', function() {
  //   rotateArray.forEach(function(rotate) { rotate.reset(); });
  // });
})();