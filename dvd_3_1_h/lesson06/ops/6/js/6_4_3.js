
(function() {
  window.addEventListener('load', function() {
    document.querySelector('[data-popup-btn="1"]').addEventListener('click', function() {
      this.classList.remove('reset');
    })
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
      console.log('dragCorrect:', DRAG);
      if(!DRAG.droppedArea){
        window.$efSound.incorrect();
        return console.log('dropArea 없음.');
      }

    }
    window.$callBack.dragIncorrect = function(DRAG) {
      console.log('dragIncorrect:', DRAG);
    }

    var answerButton = document.querySelector('.js-buttons.quizButtons.answer');
    var exam = $ts.getEl('.exam');
    answerButton.addEventListener('click', function() {
      if (this.classList.contains('reset')) {
        var noDropArea = document.querySelectorAll('.js-dropArea.noAnswer');
        var noDrag = document.querySelectorAll('.js-dragObj.noDragObj');

        noDropArea.forEach(function(area) {
          area.innerHTML = '';
        });
        console.log('here')
        noDrag.forEach(function(drag) {
          drag.classList.remove('dragObjComplete');
        })
        exam.forEach(function(icon) {
          icon.classList.add('on');
        })
      }else{
        exam.forEach(function(icon) {
          icon.classList.remove('on');
        })
      }
    });

    window.$callBack.sliderMove = function(SLIDER) {
      exam.forEach(function (icon) {
        icon.classList.remove('on');
      })
    }
  });
})();