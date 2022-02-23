(function() {
  var drawLine = new DrawLine({
    container: document.querySelector('.js-drawLine'),
    resetButton: document.querySelector('.js-resetButton'),
    answerButton: document.querySelector('.js-buttons'),
    answer: [{
      start: {x: 322, y: 147}, // DrawLine.startPointer
      end: {x: 822, y: 147} // DrawLine.endPointer
    }],
    callback: {
      start: function(DrawLine) {},
      move: function(DrawLine) {},
      end: function(DrawLine) {},
      out: function(DrawLine) {},
      correct: function(DrawLine) {
        console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        var a = DrawLine.drawArea.cloneNode(true);
        if($ts.getEl('.copyPopup canvas') == null ) $ts.getEl('.copyPopup .js-drawLine')[0].appendChild(a);

        var canvas = $ts.getEl('.copyPopup canvas')[0];
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
      incorrect: function(DrawLine) {},
      showAnswer: function(DrawLine) {},
      reset: function (DrawLine) {}
    },
  });

  var resetBtn = $ts.getEl('.popQuizWrap .resetButton')[0];
  resetBtn.addEventListener('click', function () {
    canvasReset();
  })
  function canvasReset() {
    if($ts.getEl('.copyPopup canvas')){
      var canvas = $ts.getEl('.copyPopup canvas')[0];
      var canvasContext = canvas.getContext('2d');

      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  window.$popupCallBack = window.$popupCallBack || {};

  window.$popupCallBack.open = function(POPUP) {
  };
  window.$popupCallBack.close = function(POPUP) {
    $ts.getEl('.copyPopup')[0].classList.remove('on');
    setTimeout(function() { drawLine.reset(); }, 100);
  }
  window.$callBack.sliderReset = function(SLIDER) {
    if(SLIDER.container.getAttribute('data-slide-container') === 'popup') {
      $ts.getEl('.copyPopup')[0].classList.remove('on');
      if(SLIDER.idx === 0) canvasReset();
    }
    setTimeout(function() { drawLine.reset(); }, 100);
  }


  var pop2Button = $ts.getEl('.pop2 .js-buttons')[0];
  pop2Button.addEventListener('click', function () {
    window.$pm.array.quiz.inPopup.forEach(function(quiz) { quiz.reset(); });
  });

  window.dragDropCallbacks = {
    "drag-obj": dragCallback,
  };
  window.dragMoveCallbacks = {
    "drag-obj": dragObjMoveCallback,
  };
  window.dragStartCallbacks = {
    "drag-obj": dragObjStartCallback,
  };

  function toggleInputsPointer(bool) {
    var inputs = document.querySelectorAll(".js-dragObj input");

    for (var i = 0, len = inputs.length; i < len; i++) {
      inputs[i].style.pointerEvents = bool ? "" : "none";
    }
  }
  function dragObjStartCallback(dragDrop) {
    toggleInputsPointer(true);
  }
  function dragObjMoveCallback(dragDrop) {
    toggleInputsPointer(true);
  }


  function dragCallback(dragDrop) {
    var dropArea, dropAreaElement, children;

    if(dragDrop.droppedArea) {
      dropAreaElement = dragDrop.droppedArea.element;
      children = Array.prototype.slice.call(dropAreaElement.children);

      children.forEach(function (obj) {
        obj.addEventListener('click', removeChild);
      })
    }else{
        window.$efSound.incorrect();
        return console.log('dropArea 없음.');
    }
  }

  function removeChild() {
    this.parentNode.removeChild(this);
  }
  window.addEventListener('load', function() {
    setTimeout(function() { drawLine.reset(); }, 100);

  });

})();