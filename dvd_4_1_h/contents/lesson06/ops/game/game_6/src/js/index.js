// constants
var movieViewCount = 0;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var selectTargets = document.querySelectorAll(".js-selectTarget");

var answerBoxInputs = document.querySelectorAll(".js-answerBoxInput");
var confirmButtons = document.querySelectorAll(".js-confirmButton");

var answerAll = document.querySelectorAll(".playPage__answer");

// get
function getParentPlayPage(element) {
	var parentElement = element.parentElement;
	
	while (!parentElement.classList.contains("playPage")) {
		parentElement = parentElement.parentElement;
	}
	
	return parentElement;
}
function getParentElement(element) {
	var parentElement = element.parentElement;
	
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
function addClassInactive(element) {
	element.classList.add("inactive");
}
function removeClassInactive(element) {
	element.classList.remove("inactive");
}

function resetAnswerBoxInputs() {
	answerBoxInputs.forEach(function (answerBoxInput) {
		answerBoxInput.value = "";
	});
}

function resetGame() {
	selectTargets.forEach(removeClassSelected);
	
	answerBoxInputs.forEach(removeClassInactive);
	answerBoxInputs.forEach(removeClassSelected);
	confirmButtons.forEach(removeClassInactive);
	
	answerAll.forEach(removeClassView);
	
	resetAnswerBoxInputs();
}

// selectTarget 클릭 시 */
function onSelectTargetClick() {
	var selectTargeAnswer = this.dataset.selectAnswer;
	var parentPlayPageElement = getParentPlayPage(this);
		
	var playPageIndex = parentPlayPageElement.dataset.playPage;
	var isCorrect = selectTargeAnswer === "o";
	
	if (isCorrect) {
		// playPage 공통 */
		var playPageAnswers = document.querySelectorAll(".playPage__answer[data-answer-index='"+playPageIndex+"']");
		playPageAnswers.forEach(addClassView);
		//
		
		var selectTargetsPage = parentPlayPageElement.querySelectorAll(".selectTarget");
		selectTargetsPage.forEach(addClassSelected);

		window.efSound("correct");
		window.completePlayPage(1000);
	}
	else {
		window.shake(this);
		window.efSound("incorrect");
	}
}

// 내용 입력 완료 시
function onConfirmButtonClick() {
	console.log("onConfirmButtonClick()" + this);
	
	var parentPlayPageElement = getParentPlayPage(this);
	var playPageIndex = parentPlayPageElement.dataset.playPage;
	var inputElements = parentPlayPageElement.querySelectorAll(".js-answerBoxInput");
	var isAnswer = true;
	
	// 정답 체크
	inputElements.forEach(function(element) {
		if (element.value != element.dataset.answer) {
			isAnswer = false;
		}
	});
	
	if (isAnswer) {
		// playPage 공통 */
		var playPageAnswers = document.querySelectorAll(".playPage__answer[data-answer-index='"+playPageIndex+"']");
		playPageAnswers.forEach(addClassView);
		//
		
		var inputs = parentPlayPageElement.querySelectorAll(".js-answerBoxInput");
		var buttons = parentPlayPageElement.querySelectorAll(".js-confirmButton");
		inputs.forEach(addClassInactive);
		buttons.forEach(addClassInactive);
		
		window.efSound("correct");
		window.completePlayPage(1000);
	}
	else {
		window.efSound("incorrect");
	}
}

function onAnswerBoxInputKeyUp(event) {
	var keyCode = event.keyCode;
	
	if (keyCode === 13) {
		var parentPlayPageElement = getParentPlayPage(this);
		var buttonElement = parentPlayPageElement.querySelector(".js-confirmButton");
		
		buttonElement.click();
	}
}

// process
selectTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetClick;
	window.addHoverEvent(selectTarget);
});

selectPlays.forEach(window.addHoverEvent);

/* 입력 박스 */
answerBoxInputs.forEach(function (answerBoxInput) {
	answerBoxInput.onkeyup = onAnswerBoxInputKeyUp;
	answerBoxInput.onclick = function() {
		addClassSelected(this);
	};
});
confirmButtons.forEach(function (selectTarget) {
	selectTarget.onclick = onConfirmButtonClick;
});

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	resetGame();
});
