(function() {
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
    window.dragDropCallbacks = {
      "drag-obj": dragCallback
    };

    window.$callBack.dragCorrect = function(DRAG) {
      console.log('dragCorrect:', DRAG);

    }
    window.$callBack.dragIncorrect = function(DRAG) {
      console.log('dragIncorrect:', DRAG);
    }

    function dragCallback(dragDrop) {
      // console.log('DRAG: ', DRAG);
      var dropArea, dropAreaElement, children;
      dropArea = dragDrop.droppedArea;
      if (!dropArea) {
        window.$efSound.incorrect();
        return console.log('dropArea 없음.');
      }
      dropAreaElement = dragDrop.droppedArea.element;
      children = dropAreaElement.children;


      if (children.length > 1) {
        dropAreaElement.removeChild(children[0]);
      }
    }


    var quizButtons = $ts.getEl('.quizButtons')[0];
    var dropArea = $ts.getEl('.js-dropArea');

    quizButtons.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1){
        dropArea.forEach(function (obj) {
          obj.innerHTML = '';
        })
      }else{
        dropArea.forEach(function (obj, index) {
          if(index === 0) obj.innerHTML = '<div class="js-dragObj dragObj ico04" data-name="drag-obj" data-drag-obj-answer="4"></div>';
          else if(index === 1) obj.innerHTML = '<div class="js-dragObj dragObj ico04" data-name="drag-obj" data-drag-obj-answer="4"></div>';
          else obj.innerHTML = ' <div class="js-dragObj dragObj ico01" data-name="drag-obj" data-drag-obj-answer="1"></div>'
        })
      }
    })
  });
})();