// constants
var currSceneNum = 1;
var currComicNum = 1;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var selectTargets = document.querySelectorAll(".js-selectTarget");

/*
var naviLeftArrow = document.querySelector(".naviArrow.left");
var naviRightArrow = document.querySelector(".naviArrow.right");
var gamePageScenes = document.querySelectorAll(".gamePageScene");
var gamePageSceneLength = gamePageScenes.length;
var naviImgs = document.querySelectorAll(".naviImg");

var comicViewBtn = document.querySelector(".comicViewBtn");
var comicWrap = document.querySelector(".comicWrap");
var comicCloseBtn = document.querySelector(".comicCloseBtn");
var comicNaviLeftArrow = document.querySelector(".comicNaviArrow.left");
var comicNaviRightArrow = document.querySelector(".comicNaviArrow.right");
var comics = document.querySelectorAll(".comicR");
var comicLength = comics.length;
var comicNaviImgs = document.querySelectorAll(".comicNaviImg");
*/

// get
function getParentPlayPage(element) {
	var parentElement = element.parentElement;
	
	while (!parentElement.classList.contains("playPage")) {
		parentElement = parentElement.parentElement;
	}
	
	return parentElement;
}

// update dom elements
function addClassAnswered(element) {
	element.classList.add("answered");
}
function removeClassAnswered(element) {
	element.classList.remove("answered");
}
function addClassSelected(element) {
	element.classList.add("selected");
}
function removeClassSelected(element) {
	element.classList.remove("selected");
}

function ableAllSelectTargetsPointer() {
	selectTargets.forEach(removeClassSelected);
}

/* 외계인 클릭 시 */
function onSelectTargetClick() {
	var selectTargeAnswer = this.dataset.selectAnswer;
	var parentPlayPageElement = getParentPlayPage(this);
	
	var isCorrect = selectTargeAnswer === "o";
	
	if (isCorrect) {
		var selectTargetPage = parentPlayPageElement.querySelectorAll(".selectTarget");
		selectTargetPage.forEach(addClassSelected);
		
		window.completePlayPage(1000);
		window.efSound("correct");
		window.stopSpriteAni("incorrect");
	    window.playSpriteAni("correct");
	}
	else {
		window.shake(this);
		window.efSound("incorrect");
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
	//resetScene()
});
