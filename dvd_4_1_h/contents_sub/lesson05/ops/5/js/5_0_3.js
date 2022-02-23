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
      if (dropArea.sizes.width > 620) {
        dropAreaElement.removeChild(children[0]);
      }
    }

    function toggleDragAnswer() {
      var dragObjs = $ts.getEl('.js-dragObj');
      var dropAreas = $ts.getEl('.js-dropArea');

      function dragReset() {
        $ts.getEl('.contentsArea')[0].classList.remove('complete');
      }
      function dragAnswer() {
        dropAreas.forEach(function (obj) {
          obj.innerHTML = '';
        })
        $ts.getEl('.contentsArea')[0].classList.add('complete');
      }

      var isReset = this.className.indexOf('reset') === -1;

      if (isReset) dragReset();
      else dragAnswer();
    }

    var dragAnswerButton = $ts.getEl('.js-buttons');
    dragAnswerButton.forEach(function (btn) {
      btn.addEventListener('click', toggleDragAnswer);
    })

  });
})();