// constants

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var selectTargets = document.querySelectorAll(".js-selectTarget");
var animals = document.querySelectorAll(".animal");

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
function addClassView(element) {
	element.classList.add("view");
}
function removeClassView(element) {
	element.classList.remove("view");
}

function resetGame() {
	selectTargets.forEach(removeClassSelected);
	animals.forEach(removeClassView);
}

/* 숫자 클릭 시 */
function onSelectTargetClick() {
	var selectTargeAnswer = this.dataset.selectAnswer;
	var parentPlayPageElement = getParentPlayPage(this);
	var selectTargePlayPage = parentPlayPageElement.dataset.playPage;
	var pageSelectTargets = parentPlayPageElement.querySelectorAll(".js-selectTarget");
	
	var isCorrect = selectTargeAnswer === "o";
	
	if (isCorrect) {
		pageSelectTargets.forEach(addClassSelected);
		window.efSound("correct");
		window.completePlayPage(1000);
		
		var animals = document.querySelectorAll(".animal[data-animal='"+selectTargePlayPage+"']");
		animals.forEach(addClassView);
	}
	else {
		window.shake(this);
		window.efSound("incorrect");
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
	resetGame();
});
