(function() {
  var drawLine = new DrawLine({
    container: document.querySelector('.js-drawLine'),
    resetButton: document.querySelector('.js-resetButton'),
    answerButton: document.querySelector('.js-buttons'),
    answer: [{
      start: {x: 211 , y: 98}, // DrawLine.startPointer
      end: {x: 822, y: 147} // DrawLine.endPointer
    }],
    callback: {
      start: function(DrawLine) {},
      move: function(DrawLine) {},
      end: function(DrawLine) {},
      out: function(DrawLine) {},
      correct: function(DrawLine) {
        console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        // var a = DrawLine.drawArea.cloneNode(true);
        // if($ts.getEl('.pwu_popupImg canvas') == null ) $ts.getEl('.pwu_popupImg .js-drawLine')[0].appendChild(a);
        //
        // var canvas = $ts.getEl('.pwu_popupImg canvas')[0];
        // var canvasContext = canvas.getContext('2d');
        //
        // canvasContext.strokeStyle = 'tomato';
        // canvasContext.lineWidth = 6;
        // canvasContext.lineCap = 'round';
        // canvasContext.lineJoin = 'round';
        // canvasContext.save();
        //
        // canvasContext.beginPath();
        // canvasContext.moveTo(DrawLine.startPointer.x, DrawLine.startPointer.y);
        // canvasContext.lineTo(DrawLine.endPointer.x, DrawLine.endPointer.y);
        // canvasContext.closePath();
        // canvasContext.stroke();
        // canvasContext.save();
      },
      incorrect: function(DrawLine) {},
      showAnswer: function(DrawLine) {},
      reset: function(DrawLine) {
      }
    },
  });
  window.addEventListener('load', function() {
    setTimeout(function() { drawLine.reset(); }, 100);
  });
  window.$callBack.sliderMove = function(SLIDER) {
    setTimeout(function() { drawLine.reset(); }, 100);
  }
})();