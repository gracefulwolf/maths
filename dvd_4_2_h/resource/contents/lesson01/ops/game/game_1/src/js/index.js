// constants
var QUERY_SELECT_PLAY = ".selectPlay";
var CLASSNAME_PLAY_PAGE = "playPage";
var QUERY_PLAY_PAGE = ".js-" + CLASSNAME_PLAY_PAGE;
var QUERY_SELECT_TARGET = ".js-selectTarget";
var QUERY_PLAY_ANSWER = ".playAnswer";

// dom elements
var selectPlays = document.querySelectorAll(QUERY_SELECT_PLAY);
var selectTargets = document.querySelectorAll(QUERY_SELECT_TARGET);
var playAnswers = document.querySelectorAll(QUERY_PLAY_ANSWER);

// get
function getParentPlayPage(element) {
  var parentElement = element.parentElement;

  while (!parentElement.classList.contains(CLASSNAME_PLAY_PAGE)) {
    parentElement = parentElement.parentElement;
  }

  return parentElement;
}

// update dom elements
function disableElementPointer(element) {
  element.style.pointerEvents = "none";
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
  playAnswers.forEach(removeClassAnswered);
}

// event handlers
function onSelectTargetClick() {
  var selectTargetIndex = this.dataset.selectTarget;
  var parentPlayPageElement = getParentPlayPage(this);
  var playPageIndex = parentPlayPageElement.dataset.playPage;
  var isCorrect = selectTargetIndex === playPageIndex;

  if (isCorrect) {
    var selectTargets = parentPlayPageElement.querySelectorAll(QUERY_SELECT_TARGET);
    selectTargets.forEach(disableElementPointer);
    var selectTargetAnsweredElement = document.querySelectorAll(".selectTarget[data-select-target='"+selectTargetIndex+"']")
    selectTargetAnsweredElement.forEach(addClassAnswered);
    var playAnsweredElement = document.querySelectorAll(".playAnswer[data-play-page='"+playPageIndex+"']")
    playAnsweredElement.forEach(addClassAnswered);
    
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

// process
selectTargets.forEach(function (selectTarget) {
  selectTarget.onclick = onSelectTargetClick;
  window.addHoverEvent(selectTarget);
});

selectPlays.forEach(window.addHoverEvent);

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
  ableAllSelectTargetsPointer();
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
