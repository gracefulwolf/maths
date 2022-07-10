(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};


  var TITLE = document.querySelector('h1');
  var dropAreas = $ts.getEl('.js-dropArea');
  var clickObj = $ts.getEl('.clickObj');

  var denominator = 6;
  var improperFraction = 0;
  var mixedFraction = [0, 0];
  var isAnswered = false;

  clickObj.forEach(function(obj) {
    obj.addEventListener('click', function() {
      var index = this.getAttribute('data-type');
      nextButton.setAttribute(ATTR_INDEX, index);

      $efSound.click();
      showNextButton();
    });
  });

  window.$callBack.dragCorrect = function(DRAG) {
    console.log('dragCorrect:', DRAG);

    window.$efSound.correct();
    var dropArea = DRAG.droppedArea.element;
    var movingObj = DRAG.movingObj.element;

    console.log('dragCorrect:', dropArea);
    dropArea.innerHTML = '';
    dropArea.appendChild(movingObj.cloneNode(true));

    var numData = movingObj.getAttribute('data-index')-0;
    
    if (isImproper(dropArea)) {
      if (isChild(dropArea)) mixedFraction[1] = numData;
      else mixedFraction[0] = numData;
    } else {
      improperFraction = numData;
    }

    setAnswer();
  }

  window.$callBack.dragIncorrect = function(DRAG) {
    console.log('dragIncorrect:', DRAG);
    window.$efSound.incorrect();
  }
  
  window.$callBack.sliderMove = function(SLIDER) {
    hideTitle(SLIDER.idx);
  }
  var popupBtn = $ts.getEl('[data-popup-btn]');
  popupBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
      showHomeNextButton();
     nextButton.setAttribute(ATTR_INDEX, '0');
    })
  })
  // window.$popupCallBack.open = function(POPUP) {
  // // window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
  //   console.log(POPUP.btn)
  //   if (POPUP.btn.hasAttribute('data-show-button')) showNextButton();
  // }


  SETPAGE.page_1 = function() {
    $pm.array.quiz.inPage.forEach(function(quiz) {
      if (quiz.reset) quiz.reset();
    });
    
    improperFraction = 0;
    mixedFraction = [0, 0];

    setAnswer();
    dropAreas.forEach(function(area) { area.innerHTML = ''; });
  }
  SETPAGE.page_2 = function() {
    console.log('adsf')
    setNumber();
    // hideNextNoHomeButton();
  }
  SETPAGE.page_3 = function() {
    setNumber();
    hideNextNoHomeButton();
  }

  function setNumber() {
    var inputs = $ts.getEl('.js-setNumber');
    inputs.forEach(function(input) {
      input.value = input.getAttribute('data-answer');
    });
  }

  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);
    nextButton.addEventListener('click', $efSound.click);
    
  });

  function setAnswer() {
    var inputObjs = $ts.getEl('[data-input-value]');

    var answer;
    
    inputObjs.forEach(function(input, index) {
      switch(input.getAttribute('data-input-value')-0) {
        case 1: answer = mixedFraction[0] * denominator + mixedFraction[1]; break;
        case 2: answer = Math.floor(improperFraction / denominator); break;
        case 3: answer = improperFraction % denominator; break;

        case 4: answer = mixedFraction[0]; break;
        case 5: answer = mixedFraction[1]; break;
        case 6: answer = improperFraction; break;

        case 7: answer = mixedFraction[0] + Math.floor(improperFraction / denominator); break;
        case 8: answer = mixedFraction[1] + improperFraction % denominator; break;

        case 9: answer = (mixedFraction[0] * denominator + mixedFraction[1]) + improperFraction; break;
        case 10: answer = Math.floor(((mixedFraction[0] * denominator + mixedFraction[1]) + improperFraction) / 6); break;
        case 11: answer = ((mixedFraction[0] * denominator + mixedFraction[1]) + improperFraction) % 6; break;

        case 12: answer = mixedFraction[0] - Math.floor(improperFraction / denominator); break;
        case 13: answer = mixedFraction[1] - improperFraction % denominator; break;

        case 14: answer = (mixedFraction[0] * denominator + mixedFraction[1]) - improperFraction; break;
        case 15: answer = Math.floor(((mixedFraction[0] * denominator + mixedFraction[1]) - improperFraction) / 6); break;
        case 16: answer = ((mixedFraction[0] * denominator + mixedFraction[1]) - improperFraction) % 6; break;
      }

      input.setAttribute('data-answer', answer);
    });
  }


  function isChild(dropArea) {
    return dropArea.hasAttribute('data-child');
  }
  function isImproper(dropArea) {
    return dropArea.getAttribute('data-drop-area-answer') === '1';
  }

  // 공통 함수
  function setPage(index) {
    SETPAGE['page_'+ (index+1)]();
    setNextButton(index);
    hideTitle(index);
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else hideNextButton();
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    
    nextButton.setAttribute(ATTR_INDEX, (index+1) / pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }
  function hideNextNoHomeButton() {
    nextButton.classList.add('hide');
  }
  function showHomeNextButton() {
    nextButton.classList.remove('hide');
    nextButton.classList.add('home');
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

  function hideTitle(idx) {
    if (idx !== 0) TITLE.style.display = 'none';
    else TITLE.style.display = '';
  }
})();