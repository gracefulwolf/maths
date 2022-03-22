// constants
var QUERY_SELECT_PLAY = ".selectPlay";
var CLASSNAME_PLAY_PAGE = "playPage";
var QUERY_PLAY_PAGE = ".js-" + CLASSNAME_PLAY_PAGE;
var QUERY_SELECT_TARGET = ".js-selectTarget";

// dom elements
var selectPlays = document.querySelectorAll(QUERY_SELECT_PLAY);
var selectTargets = document.querySelectorAll(QUERY_SELECT_TARGET);

// get
function getParentPlayPage(element) {
	var parentElement = element.parentElement;
	
	while (!parentElement.classList.contains(CLASSNAME_PLAY_PAGE)) {
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
	selectTargets.forEach(removeClassAnswered);
	selectTargets.forEach(removeClassSelected);
}

function onSelectTargetClick() {
	var selectTargeAnswer = this.dataset.selectAnswer;
	var parentPlayPageElement = getParentPlayPage(this);
		
	var playPageIndex = parentPlayPageElement.dataset.playPage;
	var isCorrect = selectTargeAnswer === "o";
	
	if (isCorrect) {
		var selectTargetsPage = parentPlayPageElement.querySelectorAll(QUERY_SELECT_TARGET);
		var selectTargeIndex = this.dataset.selectIndex;
		var selectTargetAnsweredElement = document.querySelectorAll(".selectTarget[data-select-index='"+selectTargeIndex+"']")
		
		selectTargetsPage.forEach(addClassSelected);
		selectTargetAnsweredElement.forEach(addClassAnswered);

		window.completePlayPage(1000);

		window.efSoundMy("correct");
		window.stopSpriteAni("incorrect");
	    window.playSpriteAni("correct");
	}
	else {
		window.shake(this);
		//window.efSound("incorrect");
		window.efSoundMy("incorrect");
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

efSoundMy = function (soundName) {
	//console.log("efSound()", soundName);
	var audio = new Audio();
	audio.preload = false;

	audio.onloadeddata = function () {
		this.play();
	};

	audio.src = "./src/audio/" + soundName + ".mp3";
	audio.load();
};