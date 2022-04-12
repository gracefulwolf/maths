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
      var page = dropArea.dragDrop.elements.container;
      if(dropArea.element.classList.contains('dropArea_1')) {
        if (dropArea.element.children.length === 9) dropArea.DISABLED = true;
      }else if(dropArea.element.classList.contains('dropArea_2')) {
        if (dropArea.element.children.length === 6) dropArea.DISABLED = true;
      }else{
        if (dropArea.element.children.length === 6) dropArea.DISABLED = true;
      }

    }

    var button = $ts.getEl('.page1 .quizButtons')[0];
    var dropArea = $ts.getEl('.page1 .dropArea');
    var dropObj = $ts.getEl('.page1 .dropObj');
    button.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1) {
        dropArea.forEach(function (area) {
          area.innerHTML = '';
        })
      }
      else {
        dropArea.forEach(function (area) {
          area.innerHTML = '';
        })
        showAnswer();
      }
    })

    function showAnswer() {
      dropArea.forEach(function (area) {
        if(area.classList.contains('dropArea_1')){
          for(var i = 0; i < 5; i++){
            var div = document.createElement('div');
            div.setAttribute('class', 'dragObj can');
            area.appendChild(div);
          }
        }else if(area.classList.contains('dropArea_2')){
          for(var i = 0; i < 3; i++){
            var div = document.createElement('div');
            div.setAttribute('class', 'dragObj bread');
            area.appendChild(div);
          }
        }else{
          for(var i = 0; i < 4; i++){
            var div = document.createElement('div');
            div.setAttribute('class', 'dragObj water');
            area.appendChild(div);
          }
        }
      })
    }
    var resetButtons = $ts.getEl('.dragResetButton');
    resetButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
      })
    })
  });

})();