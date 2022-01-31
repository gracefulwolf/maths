
(function() {
  window.addEventListener('load', function() {
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

    window.$callBack.dragCorrect = function(DRAG) {
      console.log('dragCorrect:', DRAG._droppedArea.element);
      DRAG._droppedArea.element.classList.add('hide');

      if(!DRAG.droppedArea){
        window.$efSound.incorrect();
        return console.log('dropArea 없음.');
      }
    }
    window.$callBack.dragIncorrect = function(DRAG) {
      console.log('dragIncorrect:', DRAG);
      window.$efSound.incorrect();
    }

    var answerButton = document.querySelector('.js-buttons.quizButtons.answer');
    var answerArea = document.querySelectorAll('.page1 .js-dropArea.answerArea');
    var dropArea = document.querySelector('.js-dropArea[data-drop-area-answer="4"]');
    answerButton.addEventListener('click', function() {
      if (this.classList.contains('reset')) {
        dropArea.innerHTML = '';
        answerArea.forEach(function(answer){
          answer.classList.add('hide');
        })
        console.log(dropArea)
        dropArea.classList.remove('hide');
        // document.querySelector('.js-dragObj[data-drag-obj-answer="4"]').style.opacity = '0.3';
      }
      else {
        dropArea.classList.remove('hide');
        answerArea.forEach(function(answer){
          answer.classList.remove('hide');
        })
        console.log('answerArea', answerArea)
      }
    });

    window.$callBack.sliderReset = function () {
      answerArea.forEach(function(answer){
        answer.classList.remove('hide');
      })
      dropArea.classList.remove('hide');
    }
  });
})();