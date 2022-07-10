// constants
var QUERY_SELECT_PLAY = ".selectPlay";
var CLASSNAME_SELECT_PLAY_DISABLED = "selectPlay--disabled";
var CLASSNAME_PLAY_PAGE = "playPage";
var QUERY_PLAY_PAGE = ".js-" + CLASSNAME_PLAY_PAGE;
var QUERY_SELECT_TARGET = ".js-selectTarget";
var QUERY_NOTICE_BOARD = '.noticeBoard';
var QUERY_SPEECH_BUBBLE = '.speechBubble';
var QUERY_FIRST_TARGET = '.firstTarget';
var QUERY_SECOND_TARGET = '.secondTarget';
var CLASSNAME_SECOND_TARGET = 'secondTarget';
var CLASSNAME_ZOOMBUTTON = '.js-zoomButton';
var CLASSNAME_POPUP = '.js-popup';

// dom elements
var selectPlays = document.querySelectorAll(QUERY_SELECT_PLAY);
var selectTargets = document.querySelectorAll(QUERY_SELECT_TARGET);
var noticeBoards = document.querySelectorAll(QUERY_NOTICE_BOARD);
var speechBubbles = document.querySelectorAll(QUERY_SPEECH_BUBBLE);
var zoomButton = document.querySelectorAll(CLASSNAME_ZOOMBUTTON);
var popup = document.querySelector(CLASSNAME_POPUP);

// custom variable
var currentPlayIndex = 1;

// get
function getParentPlayPage(element) {
  var parentElement = element.parentElement;

  while (!parentElement.classList.contains(CLASSNAME_PLAY_PAGE)) {
    parentElement = parentElement.parentElement;
  }

  return parentElement;
}

// update dom elements
function visibleElement(element) {
  element.style.visibility = 'visible';
}
function hiddenElement(element) {
  element.style.visibility = 'hidden';
}
function disableElementPointer(element) {
  element.style.pointerEvents = "none";
  // element.style.cursor = "default";
}
function ableElementPointer(element) {
  element.style.pointerEvents = "";
}
function addClassAnswered(element) {
	element.classList.add("answered");
}
function removeClassAnswered(element) {
	element.classList.remove("answered");
}

function ableAllSelectTargetsPointer() {
  selectTargets.forEach(ableElementPointer);
  selectTargets.forEach(removeClassAnswered);
  selectPlays.forEach(removeClassAnswered);
  noticeBoards.forEach(removeClassAnswered);
  speechBubbles.forEach(removeClassAnswered);
}

// event handlers
function onSelectTargetClick() {
  var selectTargetIndex = this.dataset.selectTarget;
  var parentPlayPageElement = getParentPlayPage(this);
  var playPageIndex = parentPlayPageElement.dataset.playPage;
  var isCorrect = selectTargetIndex === playPageIndex;

  if (isCorrect) {
    if (currentPlayIndex === 3) { // firstTarget
      // [공통] 정답 음원 실행
      window.efSound("correct");

      var firstTargets = parentPlayPageElement.querySelectorAll(QUERY_FIRST_TARGET);  
      firstTargets.forEach(hiddenElement);
      var secondTargets = parentPlayPageElement.querySelectorAll(QUERY_SECOND_TARGET);
      secondTargets.forEach(visibleElement);
      var noticeBoardAnsweredElement = document.querySelectorAll(".noticeBoard[data-play-page='"+playPageIndex+"']");
      noticeBoardAnsweredElement.forEach(addClassAnswered);
      currentPlayIndex = ++playPageIndex;

      return;
    }
    if (currentPlayIndex === 4) { // secondTarget
      speechBubbles.forEach(addClassAnswered); 
    }
    
    var selectTargets = parentPlayPageElement.querySelectorAll(QUERY_SELECT_TARGET);
    selectTargets.forEach(disableElementPointer);    

    var selectTargetsAnsweredElement = parentPlayPageElement.querySelectorAll(QUERY_SELECT_TARGET + "[data-select-target='" + playPageIndex + "']");
    selectTargetsAnsweredElement.forEach(addClassAnswered);
    
    var selectPlayAnsweredElement = document.querySelectorAll(".selectPlay[data-play-index='"+playPageIndex+"']");
    selectPlayAnsweredElement.forEach(addClassAnswered);
    var noticeBoardAnsweredElement = document.querySelectorAll(".noticeBoard[data-play-page='"+playPageIndex+"']");
    noticeBoardAnsweredElement.forEach(addClassAnswered);
    
    currentPlayIndex = ++playPageIndex;
    setSelectPlayDisabled();

    window.completePlayPage(1000);
    // [공통] 정답 음원 실행
    window.efSound("correct");
    // [공통] 스프라이트 애니 정지(오답)
    window.stopSpriteAni("incorrect");
    // [공통] 스프라이트 애니 실행(정답)
    window.playSpriteAni("correct");
  } else {
    // [공통] dom 요소를 흔듦
    window.shake(this);
    // [공통] 오답 음원 실행
    window.efSound("incorrect");
    // [공통] 스프라이트 애니 실행(오답)
    window.playSpriteAni("incorrect");
  }
}

// custom method
function setSelectPlayDisabled() {  
  selectPlays.forEach(function (selectPlay) {
    if (Number(selectPlay.dataset.playIndex) > currentPlayIndex) {
      selectPlay.classList.add(CLASSNAME_SELECT_PLAY_DISABLED);
    }
    else {
      selectPlay.classList.remove(CLASSNAME_SELECT_PLAY_DISABLED);
    }
  });
}

function resetCustom() {
  currentPlayIndex = 1;
  var firstTargets = document.querySelectorAll(QUERY_FIRST_TARGET);  
  firstTargets.forEach(visibleElement);
  var secondTargets = document.querySelectorAll(QUERY_SECOND_TARGET);
  secondTargets.forEach(hiddenElement);
  setSelectPlayDisabled();
}

function setOpenPopup() {
  Array.prototype.forEach.call(zoomButton, function(btn) {
    btn.addEventListener('click', function() {
      window.efSound("click");
      popup.classList.add('visible');
    });
  });

  popup.querySelector('.closeButton').addEventListener('click', function() {
    window.efSound("click");
    popup.classList.remove('visible');
  });
}

// process
selectTargets.forEach(function (selectTarget) {
  selectTarget.onclick = onSelectTargetClick;
  window.addHoverEvent(selectTarget);
});
selectPlays.forEach(window.addHoverEvent);
setSelectPlayDisabled();
setOpenPopup();

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
  ableAllSelectTargetsPointer();
  resetCustom();
});

// 테스트
// var testCanvas = document.querySelector("#testCanvas");
// console.log(testCanvas);
// var charAni = new Sprite({
//   canvas: testCanvas,
//   src: "./src/image/",
//   name: "char_3_basic",
//   fileType: "png",
//   mode: "sheet",
//   length: 40,
//   duration: 1.2,
//   width: 450,
//   height: 450,
//   index: 1,
//   autoPlay: false,
//   loop: false,
//   callback: function (Sprite) {
//     console.log(Sprite);
//   },
// });
// charAni.spriteAni();
