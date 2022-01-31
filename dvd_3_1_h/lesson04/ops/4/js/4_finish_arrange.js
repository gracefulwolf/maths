// 정리는꼼꼼 공통 요소
var ATTR_INDEX = 'data-index';
var pageLength = $ts.getEl('.basicSlider_slides > li').length;
var nextButton = document.querySelector('.js-nextButton');
var SETPAGE = {};
var numCard = [];
var quizButtons = $ts.getEl('.page2 .quizButtons')[0];
var inputs = $ts.getEl('.page2 .how_wrap input');

// 공통 함수
function setPage(index) {
  SETPAGE['page_' + (index + 1)]();
  setNextButton(index);
}

function setNextButton(index) {
  if (index === pageLength - 1) nextButton.classList.add('home');
  else hideNextButton();
}

function goPage() {
  var index = nextButton.getAttribute(ATTR_INDEX) - 0;

  $pm.array.mainSlider.reset({idx: index});
  setPage(index);
  $pm.array.quiz.inPage.forEach(function (quiz) {
    quiz.reset();
  });

  nextButton.setAttribute(ATTR_INDEX, (index + 1) % pageLength);
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
SETPAGE.page_1 = function () {
  // 1페이지 이동시 실행 동작
  // document.querySelector('.page1 .dropArea').innerHTML = '';
}

SETPAGE.page_2 = function () {
  // 2페이지 이동시 실행 동작

  console.log(numCard[0], numCard[1], numCard[2])

  document.querySelector('[data-num="1"]').setAttribute("data-index", numCard[0]);
  document.querySelector('[data-num="2"]').setAttribute("data-index", numCard[1]);
  document.querySelector('[data-num="3"]').setAttribute("data-index", numCard[2]);

  document.querySelector('[data-input-obj="1"]').setAttribute("data-answer", numCard[0] * 10 * numCard[2]);
  document.querySelector('[data-input-obj="2"]').setAttribute("data-answer", numCard[1] * numCard[2]);
  document.querySelector('[data-input-obj="3"]').setAttribute("data-answer", numCard[0] * 10 * numCard[2] + numCard[1] * numCard[2]);

  document.querySelector('[data-num="4"]').setAttribute("data-index", numCard[0]);
  document.querySelector('[data-num="5"]').setAttribute("data-index", numCard[1]);
  document.querySelector('[data-num="6"]').setAttribute("data-index", numCard[2]);

  document.querySelector('[data-num="7"]').setAttribute("data-index", numCard[0]);
  document.querySelector('[data-num="8"]').setAttribute("data-index", numCard[1]);
  document.querySelector('[data-num="9"]').setAttribute("data-index", numCard[2]);

  document.querySelector('[data-input-obj="4"]').setAttribute("data-answer", numCard[1] * numCard[2]);
  document.querySelector('[data-input-obj="5"]').setAttribute("data-answer", numCard[0] * 10 * numCard[2]);
  document.querySelector('[data-input-obj="6"]').setAttribute("data-answer", numCard[0] * 10 * numCard[2] + numCard[1] * numCard[2]);
  document.querySelector('[data-input-obj="7"]').setAttribute("data-answer", numCard[0] * 10 * numCard[2] + numCard[1] * numCard[2]);

  quizButtons.addEventListener('click', function () {
    if(this.className.indexOf('reset') === -1){
      inputs.forEach(function (input) {
        if(input.classList.length > 1){
          input.setAttribute('class', input.classList[0]);
        }else input.setAttribute('class', '');
      })
    }else{
      document.querySelector('[data-input-obj="4"]').classList.add('textLength_' + (numCard[1] * numCard[2]).toString().length );

      document.querySelector('[data-input-obj="5"]').classList.add('textLength_' + (numCard[0] * 10 * numCard[2]).toString().length );

      document.querySelector('[data-input-obj="6"]').classList.add('textLength_' + (numCard[0] * 10 * numCard[2] + numCard[1] * numCard[2]).toString().length );

      document.querySelector('[data-input-obj="7"]').classList.add('textLength_' + (numCard[0] * 10 * numCard[2] + numCard[1] * numCard[2]).toString().length );
    }
  })

  setTimeout(function () {
    showNextButton();
  }, 100);
}

SETPAGE.page_3 = function () {
  document.querySelector('[data-num="10"]').setAttribute("data-index", numCard[0]);
  document.querySelector('[data-num="11"]').setAttribute("data-index", numCard[1]);
  document.querySelector('[data-num="12"]').setAttribute("data-index", numCard[2]);

  $ts.getEl('.page3 .answerText')[0].innerHTML = ' <ins class="exam circle blue">예</ins>'+'오렌지가 '+ (numCard[0]+numCard[1].toString()) +'개씩 '+ numCard[2] +'상자가 있습니다. 오렌지는 모두 몇 개인지 구해 보세요.'

  console.log(numCard)
  numCard = [];
}


// mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //
window.$efSound.muted(true);
window.$efSound.correct(); // 정답 사운드
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

window.$callBack.dragCorrect = function (DRAG) {

  if (DRAG.droppedArea.element.children.length > 1) {
    DRAG.droppedArea.element.innerHTML = '';
  }

  if(!DRAG.droppedArea){
    window.$efSound.incorrect();
    return console.log('dropArea 없음.');
  }else{
    DRAG.droppedArea.DISABLED = true;
    window.$efSound.correct();
  }

  selectedFigureValue = DRAG.movingObj.element.getAttribute('data-value');
  var idx = parseInt(DRAG.droppedArea.element.getAttribute('data-type'));

  numCard[idx] = DRAG.movingObj.element.getAttribute('data-value');
  if (numCard.length == 3) {
    showNextButton();
  }
}

var resetButtons = $ts.getEl('.page1 .quizButtons')[0];
resetButtons.addEventListener('click', function () {
  hideNextButton();
  // console.log(numCard)
  numCard = [];
})

window.$callBack.dragIncorrect = function (DRAG) {
  console.log('dragIncorrect:', DRAG);
  window.$efSound.incorrect();
}

window.addEventListener('load', function () {
  // 다음 버튼 이벤트(공통)
  nextButton.addEventListener('click', goPage);

  inputs.forEach(function (input) {
    input.addEventListener('input', onlyNumberInput);
    input.addEventListener('focusout', onlyNumberInput);
    input.addEventListener('keyup', onlyNumberInput);

    input.addEventListener('blur', letterSpacing);

  })

  function onlyNumberInput() {
    var regexp = /[^0-9]/gi;
    if (regexp.test(this.value)) {
      this.value = this.value.replace(regexp, '');
    }
  }

  function letterSpacing(e) {
    if (e.target.classList.contains('pinkBox')) {
      e.target.setAttribute('class', 'pinkBox offBg textLength_' + e.target.value.length);
    } else if (e.target.classList.contains('blueBox')) {
      e.target.setAttribute('class', 'blueBox offBg textLength_' + e.target.value.length);
    } else {
      e.target.setAttribute('class', 'offBg textLength_' + e.target.value.length);
    }
  }

});
