
(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};


  // 각 페이지별 개별 요소
  var ATTR_ANSWER = 'data-answer';
  var selectedFigureValue;
  var myFigure, moreFigure;
  var myFigureData = {};
  var myFigureEl = document.querySelector('.js-drawLine.myFigure');
  var moreFigureEl = document.querySelector('.js-drawLine.moreFigure');
  var inputs = $ts.getEl('.page3 input');
  var quizButtons = $ts.getEl('.js-buttons');



  // 공통 함수
  function setPage(index) {
    SETPAGE['page_'+ (index+1)]();
    setNextButton(index);
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else {
      // hideNextButton();
      nextButton.classList.remove('home');
    }
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

  


  // 개별 함수
  // 페이지가 줄어들거나 늘어나는 경우 함수 추가 혹은 삭제
  SETPAGE.page_1 = function() {
    // 1페이지 이동시 실행 동작
    myFigureEl.classList.remove('show');
    myFigureEl.classList.remove('viewMode');
    myFigure.reset();
    myFigureData = {};
    
    moreFigure.reset();
    document.querySelector('.page1 .dropArea').innerHTML = '';
  }

  SETPAGE.page_2 = function() {
    // 2페이지 이동시 실행 동작
    myFigureEl.classList.add('show');
    myFigureEl.classList.remove('viewMode');
  }

  SETPAGE.page_3 = function () {
    // 3페이지 이동시 실행 동작
    myFigureEl.classList.add('viewMode');
    myFigureEl.classList.add('show');
    inputs.forEach(function(input, index) {
      switch(index) {
        case 0:
          if (myFigureData.result) input.setAttribute(ATTR_ANSWER, myFigureData.result.side);
          break;
        case 1:
          if (myFigureData.result) input.setAttribute(ATTR_ANSWER, myFigureData.result.vertex);
          break;
        case 2:
          if (myFigureData.result) input.setAttribute(ATTR_ANSWER, myFigureData.result.rightAngle);
          break;
        case 3:
          if (myFigureData.result) input.setAttribute(ATTR_ANSWER, myFigureData.result.rightAngle);
          break;
      }
    });
  }

  SETPAGE.page_4 = function() {
    // 마지막 페이지 실행 동작
    myFigureEl.classList.remove('show');
    moreFigure.reset();
  }




  function create(parent, dotLength) {
    for (var i = 0; i < dotLength[0]; i++) {
      for (var j = 0; j < dotLength[1]; j++) {
        var dot = document.createElement('div');
        dot.classList.add('horizon_'+(i+1));
        dot.classList.add('vertical_'+(j+1));
        dot.classList.add('js-dragObj');
        dot.classList.add('dragObj');
        dot.setAttribute('data-type', 'drag');
        dot.setAttribute('data-index', 1);
        parent.appendChild(dot);
      }
    }
  }

  function completeDrawLine() {
    console.log(selectedFigureValue);
    var basicResult = myFigureData.savedLines && myFigureData.result;
    var result;

    if (!basicResult) {
      alert('나의 도형을 그려주세요.');
      return;
    }
    
    switch (selectedFigureValue) {
      case '1':
        // 각
        result = myFigureData.result.angle > 0;
        break;
      case '2':
        // 직각삼각형
        result = myFigureData.savedLines.length === 3 && myFigureData.result.rightAngle === 1 && myFigureData.result.angle === 3;
        break;
      case '3':
        // 직사각형
        result = myFigureData.savedLines.length === 4 && myFigureData.result.angle === 4;
        break;
      case '4':
        // 정사각형
        result = myFigureData.savedLines.length === 4 && myFigureData.result.rightAngle === 4 && isSameSize();
        break;
    }
    
    if (result) showNextButton();
    else alert('나의 도형을 그려주세요.');
  }

  function isSameSize() {
    var size = myFigureData.sideLines[0].line;
    return myFigureData.sideLines.filter(function(sideLine) {
      return sideLine.line === size;
    }).length === 4;
  }

  function setMyFigureData(DrawLine) {
    var savedLines = DrawLine.savedLines;
    myFigureData.savedLines = savedLines;
    myFigureData.sideLines = DrawLine.sideLines;
    myFigureData.result = getResult(DrawLine);
  }

  function setDrawLine(container, index) {
    var isMyFigure = container.className.indexOf('myFigure') > -1;
    var newDrawLine = new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      lineWidth: 6,
      callback: {
        start: function(DrawLine) {},
        correct: function(DrawLine) {
          var startObj = DrawLine.DRAGDROP.startObj;
          startObj.resetPosition();

          if (isMyFigure) setMyFigureData(DrawLine);
        },
        showAnswer: function(DrawLine) {},
      },
    });

    if (isMyFigure) myFigure = newDrawLine;
    else moreFigure = newDrawLine;
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

  window.$callBack.dragCorrect = function(DRAG) {
    console.log('dragCorrect:', DRAG);

    if (DRAG.droppedArea.element.children.length > 0) {
      DRAG.droppedArea.element.innerHTML = '';
      DRAG.droppedArea.element.innerHTML = DRAG.movingObj.element.innerHTML;
      window.$efSound.correct();
    }
    if(!DRAG.droppedArea){
      window.$efSound.incorrect();
      return console.log('dropArea 없음.');
    }

    DRAG.dragObjs.forEach(function(obj) { obj.DISABLED = false; })

    selectedFigureValue = DRAG.movingObj.element.getAttribute('data-value');

    showNextButton();
  }

  window.$callBack.dragIncorrect = function(DRAG) {
    console.log('dragIncorrect:', DRAG);
    window.$efSound.incorrect();
  }

  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);

    // 페이지별 실행 함수들
    create(myFigureEl, [6, 11]);
    create(moreFigureEl, [6, 19]);
    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    quizButtons.forEach(function(btn) {
      btn.addEventListener('click', completeDrawLine);
    });
  });

  window.$callBack.sliderMove = function(SLIDER) {
    // setPage(SLIDER.idx);
    // moreFigure.reset();
  }
})();