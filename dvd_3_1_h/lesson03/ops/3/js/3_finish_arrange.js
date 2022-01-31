
       // 정리는꼼꼼 공통 요소
      var ATTR_INDEX = 'data-index';
      var pageLength = $ts.getEl('.basicSlider_slides > li').length;
      var nextButton = document.querySelector('.js-nextButton');
      var SETPAGE = {};

     // 공통 함수
    function setPage(index) {
      SETPAGE['page_'+ (index+1)]();
      setNextButton(index);
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
      
      nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
      window.$efSound.click();
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
     window.$efSound.incorrect();
    document.querySelector('.page1 .dropArea').innerHTML = '';
  }

  SETPAGE.page_2 = function() {
    // 2페이지 이동시 실행 동작
    var card = document.createElement("div");

    document.querySelector('.page2 .dragView').innerHTML = '<div data-value="'+selectedFigureValue+'"></div>';
    console.log(selectedFigureValue);

    var d1,d2;

    if(selectedFigureValue<=7){
       d2 = parseInt(selectedFigureValue)+2;
       d1 = d2*3;
      
    }else if(selectedFigureValue<14){
       d2 = parseInt(selectedFigureValue)-4;
       d1 = d2*4;

    }else if(selectedFigureValue<19){
       d2 = parseInt(selectedFigureValue)-9;
       d1 = d2*5;

    }else if(selectedFigureValue<23){
       d2 = parseInt(selectedFigureValue)-13;
       d1 = d2*6;

    }else if(selectedFigureValue<26){
       d2 = parseInt(selectedFigureValue)-16;
       d1 = d2*7;

    }else if(selectedFigureValue<28){
       d2 = parseInt(selectedFigureValue)-18;
       d1 = d2*8;
    }else{
       d2 = parseInt(selectedFigureValue)-19;
       d1 = d2*9;
    }

    document.querySelector('.page2 [data-input-obj="1"]').setAttribute("data-answer",d1);
    document.querySelector('.page2 [data-input-obj="2"]').setAttribute("data-answer",d2);
    document.querySelector('.page2 [data-input-obj="3"]').setAttribute("data-answer",d1/d2);

    document.querySelector('.page3 [data-input-obj="1"]').setAttribute("data-answer",d1);
    document.querySelector('.page3 [data-input-obj="2"]').setAttribute("data-answer",d2);
    document.querySelector('.page3 [data-input-obj="3"]').setAttribute("data-answer",d1/d2);
    document.querySelector('.page3 [data-input-obj="4"]').setAttribute("data-answer",  '사탕 '+d1+'개를  '+d2+'명에게 똑같이 나누어 준다면 한 명에게 사탕을  '+d1/d2+'개씩 줄 수 있습니다. ');

  
    
     setTimeout(function() { showNextButton(); }, 100);
  }

   SETPAGE.page_3 = function() {


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
    if (DRAG.droppedArea.element.children.length > 0) {
      //DRAG.droppedArea.element.innerHTML = '';
      //DRAG.droppedArea.element.appendChild(DRAG.movingObj.element);// = DRAG.movingObj.element;
      //console.log(DRAG.movingObj.element.innerHTML);
    }

    if(!DRAG.droppedArea){
      window.$efSound.incorrect();
      return console.log('dropArea 없음.');
    } else window.$efSound.correct();
     
    DRAG.dragObjs.forEach(function(obj) { obj.DISABLED = true; })

    selectedFigureValue = DRAG.movingObj.element.getAttribute('data-value');

    showNextButton();
  }

  window.$callBack.dragIncorrect = function(DRAG) {
    window.$efSound.incorrect();
    console.log('dragIncorrect:', DRAG);
  }

  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);

  });
