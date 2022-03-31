(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');
  var chainButton = $ts.getEl('.js-chainButtons');

  var countObj = $ts.getEl('[data-count-obj]');
  var countTarget = $ts.getEl('[data-count-target');

  var graphContainer = document.querySelector('.js-graph');
  var fillNew;
  var graphs = $ts.getEl('.js-fillContainer').forEach(function(container) {
    fillNew = new FillTarget({
      container: container,
      answerButton: document.querySelector('.js-graphResetButton')
    });
  });

  chainButton.forEach(function(btn) {
    btn.addEventListener('click', showNextButton);
    btn.addEventListener('click', $efSound.click);
  });
  
    
  window.$callBack.sliderMove = function(SLIDER) {
    hideTitle(SLIDER.idx);
  }

  countObj.forEach(function (obj) {
    obj.addEventListener('input', updateValue);
  })

  function updateValue(e) {
    var container = $ts.getEl('.js-fillContainer'),
      index = e.target.getAttribute('data-count-obj'),
      target = $ts.getEl('[data-count-target="'+index+'"]'),
      value = parseInt(e.target.value);

    if(value > 10 || value === 0){
      showAlert();
      e.target.value = '';
    }else{
      for(var i = 0; i < target.length; i++){
        target[i].classList.remove('on');
      }
      for(var i = 1; i < value; i++){
        target[i-1].classList.add('on');
      }
    }
    if(e.target.value) {
      for(var i = 0; i < container.length; i++){
        container[i].classList.remove('noContent');
      }
      container[value-1].classList.add('noContent');
    }else if(e.target.value === '') {
      container[0].classList.add('noContent');
    }
  }

  function showAlert() {
    function closeAlert() {
      alert.classList.remove('on');
    }
    var alert = document.querySelector('.js-alert');
    alert.classList.add('on');
    setTimeout(closeAlert, 1500);
  }

  var resetButton = $ts.getEl('.dragResetButton')[0];
  resetButton.addEventListener('click', function () {
    var squareFill = $ts.getEl('.square .target');
    squareFill.forEach(function (obj) {
      obj.classList.remove('fill');
      obj.classList.remove('last');
    })
  })
  function resetAllCount() {
    resetCount();
    // inputResize();
    var squareFill = $ts.getEl('.square .target');
    squareFill.forEach(function (obj) {
      obj.classList.remove('fill');
      obj.classList.remove('last');
    })
    $ts.getEl('.page1 input')[0].value = '';
    $ts.getEl('.page1 input')[0].classList.remove('offBg');
  }

  function resetCount() {
    countTarget.forEach(function (obj) {
      obj.classList.remove('on');
    })
  }
  SETPAGE.page_1 = function() {
    graphContainer.classList.remove('pointerOff');
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    fillNew.fillReset();
    resetAllCount();
    $ts.getEl('.dragResetButton')[0].classList.remove('displayN');
  }
  SETPAGE.page_2 = function() {
    graphContainer.classList.add('pointerOff');
    $ts.getEl('.dragResetButton')[0].classList.add('displayN');
    showNextButton();
  }
  SETPAGE.page_3 = function() {
    graphContainer.classList.add('pointerOff');
    $ts.getEl('.dragResetButton')[0].classList.add('displayN');
    showNextButton();
  }
  SETPAGE.page_4 = function() {
    graphContainer.classList.add('pointerOff');
    $ts.getEl('.dragResetButton')[0].classList.add('displayN');
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

    // hideTitle(index === 0 ? false : true);
  }
  
  function setNextButton(index) {
    console.log(index)
    if (index === pageLength-1) nextButton.classList.add('home');
    else if (index === 0) hideNextButton();
    else nextButton.classList.remove('home');
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    // $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    
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
    if (boolean) TITLE.style.display = 'none';
    else TITLE.style.display = '';
  }
})();