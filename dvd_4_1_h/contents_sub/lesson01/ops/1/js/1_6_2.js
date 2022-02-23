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
      // window.$efSound.correct();

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


    var clickObjs = $ts.getEl('.js-click');
    var pops = $ts.getEl('.js-pop');
    var oxObjs = $ts.getEl('[data-ox-obj]');

    oxObjs.forEach(function(obj) {
      obj.addEventListener('click', closePop.bind(obj));
    });
    clickObjs.forEach(function(obj) {
      obj.addEventListener('click', openPop.bind(obj));
    });

    window.$callBack.oxCorrect = function(OX) {
      var parent = OX.curTarget[0].parentNode;
      var oxObj = OX.curTarget[0].parentNode.querySelectorAll('symbol');
      oxObj.forEach(function (obj) {
        obj.classList.remove('on')
      })
      parent.querySelector('[data-ox-target="'+OX.curObj.getAttribute('data-ox-obj')+'"]').classList.add('on');
    };
    window.$callBack.oxIncorrect = function(OX) {
      var parent = OX.curTarget[0].parentNode;
      var oxObj = OX.curTarget[0].parentNode.querySelectorAll('symbol');
      oxObj.forEach(function (obj) {
        obj.classList.remove('on')
      })
      parent.querySelector('[data-ox-target="'+OX.curObj.getAttribute('data-ox-obj')+'"]').classList.add('on');
    };

    function openPop() {
      var clickObj = this;
      pops.forEach(function(target, index) {
        if (index !== clickObj.getAttribute('data-index')-1) target.classList.remove('on');
        else target.classList.add('on');
      });
    }
    function closePop() {
      pops.forEach(function(target, index) {
        target.classList.remove('on');
      });
    }

    var answerButton = document.querySelector('.js-chainButtons');
    var oxTargets = $ts.getEl('[data-ox-target]');
    var dropAreas = $ts.getEl('.js-dropArea');

    answerButton.addEventListener('click', function () {
      var isReset = this.className.indexOf('reset') === -1;

      dropAreas.forEach(function (dropArea) {
        dropArea.innerHTML = '';
      })
      if (isReset) {
        $ts.getEl('.dragContainer')[0].classList.remove('complete');
        oxTargets.forEach(function (obj) {
          obj.classList.remove('on');
          obj.classList.remove('blue');
        })
      }else{
        $ts.getEl('.dragContainer')[0].classList.add('complete');

        dropAreas[1].innerHTML = '<div class="js-dragObj dragObj dragObj_2"></div>';
        dropAreas[6].innerHTML = '<div class="js-dragObj dragObj dragObj_1"></div>';
        closePop();
        showAnswer();
      }
    })

    function showAnswer() {
      oxTargets.forEach(function (obj) {
        obj.classList.remove('on');
      })
      oxObjs.forEach(function (obj) {
        if(obj.hasAttribute('data-answer')){
          var idx = obj.getAttribute('data-ox-obj');
          $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('on');
          $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('blue');
        }
      })
    }

    var resetButtons = $ts.getEl('.dragResetButton');
    resetButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        $pm.array.quiz.inPage.forEach(function(quiz) {
          quiz.reset();
        });

        dropAreas.forEach(function (dropArea) {
          dropArea.innerHTML = '';
        })
      })
    })
  });
})();