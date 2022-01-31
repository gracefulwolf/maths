
(function() {
  window.addEventListener('load', function() {
    function insertObjs(dropArea) {
      dropArea.innerHTML = '';
      for (var i = 0; i < 4; i++) {
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
          if (DRAGDROP.droppedArea.element.children.length === 4) DRAGDROP.droppedArea.DISABLED = true;
        }

        if ($ts.getEl('.page1 .dragBox .dragObjComplete').length === 12) {
          // dragAnswerButton.classList.add('reset');
        }
      },
    };

    var dragAnswerButton = document.querySelector('.page1 .js-buttons');
    dragAnswerButton.addEventListener('click', toggleDragAnswer);
    
    // $pm.array.mainSlider.reset({idx: 2});
  });
})();