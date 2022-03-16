(function () {
  // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //
  window.$efSound.muted(true);
  window.$efSound.incorrect(); // 오답 사운드

  function setSound() {
    if (isMuted) {
      window.$efSound.muted(false);
      isMuted = false;
    }
  }
  var isMuted = true;
  document.body.addEventListener('mousedown', setSound);
  document.body.addEventListener('touchstart', setSound);
  // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //

  window.addEventListener('load', function() {
    window.$callBack.dragCorrect = function(DRAG) {
    }
    window.$callBack.dragIncorrect = function(DRAG) {
      window.$efSound.incorrect();
    }


    window.dragDropCallbacks = {
      "drag-obj": dragCallback
    };
    function dragCallback(dragDrop) {
      // console.log('DRAG: ', DRAG);
      var dropArea, droppedArea, dropAreaElement, children;
      dropArea = dragDrop.dropAreas;
      droppedArea = dragDrop.droppedArea;
      if (!droppedArea) {
        window.$callBack.dragIncorrect();
        return console.log('dropArea 없음.');
      }
      if(dragDrop.quiz.TOTAL_COUNT === 2){
        dragAnswerShow();
      }
    }

    var quizButtons = $ts.getEl('.page2 .quizButtons.answer')[0];
    var dropArea = $ts.getEl('.js-dropArea');

    function dragAnswerShow(){
      dropArea.forEach(function (obj) {
        obj.innerHTML = '<div class="js-dragObj dragObj triangle dragObjComplete" data-drag-obj-answer="1"></div>';
      })
    }
    quizButtons.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1){
        dropArea.forEach(function (obj) {
          obj.innerHTML = '';
        })
      }else{
        dragAnswerShow();
      }
    })

    window.$callBack.sliderMove = function () {
      var drags = $ts.getEl('[data-drag]');
      drags.forEach(function (drag) {
        drag.style.top = '';
        drag.style.left = '';
      })
    };
  });
})();