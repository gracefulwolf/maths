// constants
var QUERY_SELECT_PLAY = ".js-selectPlay";
var CLASSNAME_PLAY_PAGE = "playPage";
var QUERY_PLAY_PAGE = ".js-" + CLASSNAME_PLAY_PAGE;
var QUERY_SELECT_TARGET = ".js-selectTarget";

// dom elements
var selectPlays = document.querySelectorAll(QUERY_SELECT_PLAY);
var selectTargets = document.querySelectorAll(QUERY_SELECT_TARGET);
var currentPlayIndex = 0;

var walkLocationCounts = [
	{playPage: 1, locationCount: 4 },
	{playPage: 2, locationCount: 4 }
];

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
		var selectTargetAnsweredElement = document.querySelectorAll(".selectTarget[data-select-index='" + selectTargeIndex + "']")

		selectTargetsPage.forEach(addClassSelected);
		selectTargetAnsweredElement.forEach(addClassAnswered);

		window.endPlay(currentPlayIndex);
		nextPlayIndex();
		window.showNextStepButton();
		// window.completePlayPage(1000);

		window.efSound("correct");
		window.playFunny.stopSpriteAni(playPageChildren, "incorrect");
		walkChildren();
		// window.stopSpriteAni("incorrect");
		// window.playSpriteAni("correct");
	} else {
		// window.shake(this);
		window.efSound("incorrect");
		// window.playSpriteAni("incorrect");
		window.playFunny.playSpriteAni(playPageChildren, "incorrect");
	}
}

// process
selectTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetClick;
	window.addHoverEvent(selectTarget);
});

/* 별도입력 코드 */
const startMazeButton = document.querySelector('.js-startMazeButton');
const nextButton = document.querySelector('.js-nextStepButton');
const playPageChildren = document.querySelector('.js-playPage_children');

function nextPlayIndex() {
	currentPlayIndex ++;
	const selectPlay = document.querySelector("[data-play-index='" + currentPlayIndex + "']");
	selectPlay.click();
}

function selectStartMazeButton() {
	startMazeButton.classList.add('startMazeButton--selected');
	startMazeButton.disabled = true;
}

function resetStartMazeButton() {
	startMazeButton.classList.remove('startMazeButton--selected');
	startMazeButton.disabled = false;
}

function walkChildren() {
	window.playFunny.playSpriteAni(playPageChildren, "walk");
	playPageChildren.classList.add('walk');
}

function stopWalkChildren() {
	window.playFunny.stopSpriteAni(playPageChildren, "walk");
	playPageChildren.classList.remove('walk');
}

// 캐릭터 이동
playPageChildren.addEventListener('transitionend', (event) => {
	// const currentLocation = 'location_' + currentWalkLocationIndex;
	// if (playPageChildren.classList.contains(currentLocation)) {
	// 	if (!playPageChildren.classList.contains('turn')) {
	// 		playPageChildren.classList.add('turn');
	// 	}
	// 	else {
	// 		playPageChildren.classList.remove(currentLocation);
	// 		playPageChildren.classList.remove('turn');
	// 		currentWalkLocationIndex ++;
	// 		walkChildren();
	// 	}
	// }

	// const currentPlayPage = playPageChildren.dataset.playPage;
	// walkLocationCounts.forEach((playPage, locationCount) => {
	// 	if (currentPlayPage === playPage) {

	// 	}
	// });
});

// 출발 버튼
startMazeButton.addEventListener('click', () => {
	selectStartMazeButton();
	window.showNextStepButton();
	nextPlayIndex();
	window.playFunny.playSpriteAni(playPageChildren, "basic");
});

// next 버튼
nextButton.addEventListener('click', () => {
	playPageChildren.dataset.playPage = currentPlayIndex;
	stopWalkChildren();
	if (currentPlayIndex === 1) {
		window.playFunny.stopSpriteAni(playPageChildren, "basic");
	}
	else if (currentPlayIndex === selectPlays.length) {
		window.playFunny.stopSpriteAni(playPageChildren, "incorrect");
		window.playFunny.playSpriteAni(playPageChildren, "correct");
		window.showNextStepButton();
		currentPlayIndex = 0;
	}
});

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	ableAllSelectTargetsPointer();
	resetStartMazeButton();
	window.playFunny.stopSpriteAni(playPageChildren, "correct");
});