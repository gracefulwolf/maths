(function() {

  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');


  var clickObjs = $ts.getEl('.js-click');
  var targets = $ts.getEl('.js-shape');
  var buttons = $ts.getEl('.js-button');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var index = this.getAttribute('data-type')-0;
      nextButton.setAttribute(ATTR_INDEX, index);
      showNextButton();
    });
    btn.addEventListener('click', $efSound.click);
  });

  clickObjs.forEach(function(obj) {
    obj.addEventListener('click', function() {
      var type = obj.getAttribute('data-type');
      clearTarget();
      $efSound.click();

      this.classList.add('on');

      targets.forEach(function(target) {
        target.setAttribute('data-type', type);
      });

      buttons.forEach(function(btn) {
        btn.classList.remove('pointerOff');
      });
    });
  });

  function clearTarget() {
    clickObjs.forEach(function(obj) {
      obj.classList.remove('on');
    });
  }

  function crateRotate(obj) {
    return new $Rotate({
      obj: obj,
      target: obj.querySelector('.js-rotateTarget'),
      reflectXTarget: obj.querySelector('.js-reflectXBox'),
      reflectYTarget: obj.querySelector('.js-reflectYBox'),
      degree: 90,
      rightButton: obj.querySelector('.js-rotateButton.right'),
      leftButton: obj.querySelector('.js-rotateButton.left'),
      topReflectButton: obj.querySelector('.js-reflectButton.top'),
      bottomReflectButton: obj.querySelector('.js-reflectButton.bottom'),
      leftReflectButton: obj.querySelector('.js-reflectButton.left'),
      rightReflectButton: obj.querySelector('.js-reflectButton.right'),
      resetButton: false,
      copy: false,
      noDrag: true,
      callback: {
        move: function(Rotate) {},
        end: function(Rotate) {},
        reset: function(Rotate) {}
      }

    });
  }

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

  function getReflectData(dragObj) {
    return {
      x: dragObj.querySelector('.js-reflectXBox').getAttribute('reflect') || 0,
      y: dragObj.querySelector('.js-reflectYBox').getAttribute('reflect') || 0,
    }
  }

  function getRotateData(dragObj) {
    var value = dragObj.querySelector('.js-rotateTarget').getAttribute('rotate')-0 || 0;

    while (value > 360) value -= 360;

    return value;
  }

  window.$callBack.dragCorrect = function(DRAG) {
    console.log('dragCorrect:', DRAG.movingObj.element);
    console.log('dragCorrect:', DRAG.droppedArea.element);

    var dropArea = DRAG.droppedArea.element;
    var dragObj = DRAG.movingObj.element;

    var isReflect = dropArea.hasAttribute('data-reflect');

    var children = dropArea.children;

    if (children.length > 1) {
      // $efSound.incorrect();
      dropArea.removeChild(children[0]);
      return;
    }
    window.$efSound.correct();
    if (isReflect) {

      // if (dropArea.getAttribute('data-reflect') === "true") {
      //   if (getReflectData(dragObj).x == '180'
      //     && getReflectData(dragObj).y == '0') $efSound.correct();
      //   else {
      //     dropArea.innerHTML = '';
      //     $efSound.incorrect();
      //   }
      // } else {
      //   if (getReflectData(dragObj).y == '180'
      //     && getReflectData(dragObj).x == '0') $efSound.correct();
      //   else {
      //     dropArea.innerHTML = '';
      //     $efSound.incorrect();
      //   }
      // }
    } else {
      // var answer = dropArea.getAttribute('data-rotate')-0;
      // var rotateValue = getRotateData(dragObj);
      //
      // if (answer === rotateValue || (answer === 360 && rotateValue === 0)) $efSound.correct();
      // else {
      //     dropArea.innerHTML = '';
      //     $efSound.incorrect();
      // }
    }
  }
  window.$callBack.dragIncorrect = function(DRAG) {
    console.log('dragIncorrect:', DRAG);
    window.$efSound.incorrect();
  }

  function clickReset() {
    var clickObjs = $ts.getEl('[data-click-obj]');
    var clickTargets = $ts.getEl('[data-click-target]');

    clickObjs.forEach(function(obj) { obj.classList.remove('complete'); });
    clickTargets.forEach(function(target) { target.classList.remove('on'); });
  }

  var rotateArray = $ts.getEl('.js-rotate').map(crateRotate);


  window.$callBack.sliderMove = function(SLIDER) {
    hideTitle(SLIDER.idx);
    rotateArray.forEach(function(rotate) { rotate.reset(); });
    var quizGroup = $ts.getEl('[data-quiz]');
    quizGroup.forEach(function (quiz) {
      quiz.classList.remove('complete');
    })
  }

  window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
    showNextButton();
    QUIZCHAIN.quizArray[0].container.classList.add('complete');
  }
  window.$callBack.quizChainReset = function(QUIZCHAIN) {
    QUIZCHAIN.quizArray[0].container.classList.remove('complete');

  }
  SETPAGE.page_1 = function() {
    // hideTitle(false);
    // clearTarget();
    // buttons.forEach(function(btn) {
    //   btn.classList.add('pointerOff');
    // });
  }
  SETPAGE.page_2 = function() {
    // hideTitle(true);
  }
  SETPAGE.page_3 = function() {
    // hideTitle(true);
  }
  SETPAGE.page_4 = function() {
    // hideTitle(true);
  }


  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);
    nextButton.addEventListener('click', $efSound.click);

  });

  // 공통 함수
  function setPage(index) {
    SETPAGE['page_'+ (index+1)]();
    setNextButton(index);
    clickReset();

    hideTitle(index === 0 ? false : true);
    rotateArray.forEach(function(rotate) { rotate.reset(); });
  }

  function setNextButton(index) {
    hideNextButton();
    if (index === 0) nextButton.classList.remove('home');
    else nextButton.classList.add('home');
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });

    nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }

  function hideTitle(boolean) {
    //if (boolean) TITLE.style.display = 'none';
    //else TITLE.style.display = '';
  }

  var _dapBtn = document.querySelectorAll( ".dapCheckBtn" );

  document.querySelector( "main" ).addEventListener("click", function(obj){
    if( obj.path[0].classList.contains( "reflectIcon" ) || obj.path[0].classList.contains( "rotateButton" ) ){ window.$efSound.click(); }

    // if( obj.path[0].classList.contains( "nextButton" ) ){
    //   _dapBtn.forEach(function(obj, index){
    //     if( obj.classList.contains( "reset" ) ){
    //       console.log( "a" )
    //       obj.classList.remove( "reset" );
    //     }
    //   });
    // }

  });

})();