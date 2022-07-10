(function() {
  window.addEventListener('load', function() {

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
    createDot($ts.getEl('.page1 .js-drawLine')[0], [17, 7]);
    createDot($ts.getEl('.page2 .js-drawLine')[0], [17, 7]);
    var drawLines =  new DrawLine({
      container: $ts.getEl('.page1 .js-drawLine')[0],
      resetButton: document.querySelector('.page1 .js-resetButton'),
      answer:  [
        {start: {x: 415, y: 57}, end: {x: 639, y: 57},},
        {start: {x: 415, y: 57}, end: {x: 359, y: 165}},
        {start: {x: 639, y: 57}, end: {x: 695, y: 165}},
        {start: {x: 359, y: 165}, end: {x: 415, y: 327}},
        {start: {x: 695, y: 165}, end: {x: 639, y: 327}},
        {start: {x: 415, y: 327}, end: {x: 527, y: 381}},
        {start: {x: 639, y: 327}, end: {x: 527, y: 381}}
      ],
      lineWidth: 6,
      callback: {
        start: function(DrawLine) {},
        correct: function(DrawLine) {
          var a = DrawLine.drawArea.cloneNode(true);
          if($ts.getEl('.page2 canvas') == null ) $ts.getEl('.page2 .js-drawLine')[0].appendChild(a);

          var canvas = $ts.getEl('.page2 canvas')[0];
          var canvasContext = canvas.getContext('2d');

          canvasContext.strokeStyle = 'tomato';
          canvasContext.lineWidth = 6;
          canvasContext.lineCap = 'round';
          canvasContext.lineJoin = 'round';
          canvasContext.save();

          canvasContext.beginPath();
          canvasContext.moveTo(DrawLine.startPointer.x, DrawLine.startPointer.y);
          canvasContext.lineTo(DrawLine.endPointer.x, DrawLine.endPointer.y);
          canvasContext.closePath();
          canvasContext.stroke();
          canvasContext.save();
        },
        showAnswer: function(DrawLine) {},
        reset: function(DrawLine) {
          canvasReset();
        }
      },
    })

    function canvasReset() {
      if($ts.getEl('.page2 canvas')) {
        if($ts.getEl('.page2 canvas')){
          var canvas = $ts.getEl('.page2 canvas')[0];
          var canvasContext = canvas.getContext('2d');

          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }
    window.$callBack.sliderMove = function(SLIDER) {
      if(SLIDER.idx === 0) {
        setTimeout(function() { drawLines.reset(); }, 100);
        canvasReset();

      }else{

      }
    }
  });

})();