
(function() {
  window.addEventListener('load', function() {
    // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //
    window.$efSound.muted(true);
    window.$efSound.correct(); // 정답 사운드
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


    function insertObjs(dropArea) {
      dropArea.innerHTML = '';
      for (var i = 0; i < 2; i++) {
        dropArea.innerHTML += '<div class="circle dragObj"></div>';
      }
    }
    function removeObjs(dropArea) {
      dropArea.innerHTML = '';
    }
    function setCompleted(dragObj) {
      dragObj.classList.add('dragObjComplete');
    }
    function resetCompleted(dragObj) {
      dragObj.classList.remove('dragObjComplete');
    }

    function toggleDragAnswer() {
      var dragObjs = $ts.getEl('.page1 .js-dragObj');
      var dropAreas = $ts.getEl('.page1 .js-dropArea');
      
      function dragReset() {
        dropAreas.forEach(removeObjs);
        dragObjs.forEach(resetCompleted);
      }
      function dragAnswer() {
        dropAreas.forEach(insertObjs);
        dragObjs.forEach(setCompleted);
      }

      var isReset = this.className.indexOf('reset') === -1;

      if (isReset) dragReset();
      else dragAnswer();
    }

    window.dragDropCallbacks = {
      "drag-obj": function(DRAGDROP) {
        if (DRAGDROP.droppedArea) {
          if (DRAGDROP.droppedArea.element.children.length === 2) DRAGDROP.droppedArea.DISABLED = true;
        }

        if ($ts.getEl('.page1 .dragBox .dragObjComplete').length === 12) {
          dragAnswerButton.classList.add('reset');
        }
      },
    };

    window.$callBack.dragCorrect = function(DRAG) {
      console.log('dragCorrect:', DRAG);
      window.$efSound.correct();
    }
    window.$callBack.dragIncorrect = function(DRAG) {
      console.log('dragIncorrect:', DRAG);
      window.$efSound.incorrect();
    }

    var dragAnswerButton = document.querySelector('.page1 .js-buttons');
    dragAnswerButton.addEventListener('click', toggleDragAnswer);
    
    // $pm.array.mainSlider.reset({idx: 2});
  });
})();