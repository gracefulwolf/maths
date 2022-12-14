// constants
var answerArr = [6, 20];
var answerCnt = 0;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var confirmButtons = document.querySelectorAll(".js-confirmButton");
var answerBoxInputs = document.querySelectorAll(".js-answerBoxInput");
var selectTargets = document.querySelectorAll(".js-selectTarget");
var answerBoxes = document.querySelectorAll(".js-answerBox");

var lineObjs = document.querySelectorAll("line");

// get
function getParentPlayPage(element) {
	var parentElement = element.parentElement;
	
	while (!parentElement.classList.contains("playPage")) {
		parentElement = parentElement.parentElement;
	}
	
	return parentElement;
}
function getParentAnswerBox(element) {
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

function ableAllSelectTargetsPointer() {
	selectTargets.forEach(removeClassAnswered);
	selectTargets.forEach(removeClassSelected);
}
function resetAnswerBoxInputs() {
	answerBoxInputs.forEach(function (answerBoxInput) {
		answerBoxInput.value = "";
	});
	
	selectTargets.forEach(removeClassView);
	var selectTargetFirst = document.querySelector(".js-selectTarget[data-select-index='1']");
	addClassView(selectTargetFirst);
}
function resetLineObjs() {
	lineObjs.forEach(removeAttribute);
}
function removeAttribute(element) {
	element.removeAttribute("x1");
	element.removeAttribute("y1");
	element.removeAttribute("x2");
	element.removeAttribute("y2");
}

function turnOnAnswerBox(answerBox) {
	answerBox.classList.add("answerBox--on");
}
function turnOffAnswerBox(answerBox) {
	answerBox.classList.remove("answerBox--on");
}

/* ????????? ?????? ??? */
function onSelectTargetClick() {
	var selectTargeIndex = this.dataset.selectIndex;
	var parentPlayPageElement = getParentPlayPage(this);
		
	var answerBox = parentPlayPageElement.querySelector(".js-answerBox[data-answer-index='"+selectTargeIndex+"']");
	
	turnOnAnswerBox(answerBox);
	selectTargets.forEach(addClassSelected);
}

// ?????? ?????? ???
function onConfirmButtonClick() {
	console.log("onConfirmButtonClick()");
	
	var isAnswer = true;
	var parentAnswerBoxElement = getParentAnswerBox(this);
	var inputElements = parentAnswerBoxElement.querySelectorAll(".js-answerBoxInput");
	
	// ?????? ??????
	inputElements.forEach(function(element) {
		if (element.value != element.dataset.answer) {
			isAnswer = false;
		}
	});
	
	if (isAnswer) {
		selectTargets.forEach(removeClassSelected);
		
		var AnswerBoxIndex = parentAnswerBoxElement.dataset.answerIndex;
		var parentPlayPageElement = getParentPlayPage(parentAnswerBoxElement);
		var selectPlay = parentPlayPageElement.querySelector(".js-selectTarget[data-select-index='"+AnswerBoxIndex+"']");

		// [??????] ?????? ?????? ??????
		window.efSound("correct");
		
		turnOffAnswerBox(parentAnswerBoxElement);
		addClassAnswered(selectPlay);
		
		answerCnt++;
		
		if (answerCnt == answerArr[0]) {
			//initDragDropA();
			document.querySelector(".playPage[data-play-page='1'] > .dragObj[drag-idx='0']").classList.add("dragAble");
			//dragObj.classList.remove("dragAble");
			answerCnt = 0;
		}
		else {
			var nextIndex = Number(AnswerBoxIndex) + 1;
			var nextSelectTarget = parentPlayPageElement.querySelector(".js-selectTarget[data-select-index='"+nextIndex+"']");
			nextSelectTarget.classList.add("view");
		}
	}
	else {
		// [??????] ?????? ?????? ??????
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
confirmButtons.forEach(function (confirmButton) {
	confirmButton.onclick = onConfirmButtonClick;
});

answerBoxInputs.forEach(function (answerBoxInput) {
	answerBoxInput.onkeyup = onAnswerBoxInputKeyUp;
});

selectPlays.forEach(window.addHoverEvent);

// [??????] ?????? ?????? ?????? ???, ??????????????? ?????? ???, ????????? ????????? ?????? ?????? ?????? ?????? ??????.
window.setResetCallback(function () {
	ableAllSelectTargetsPointer();
	resetAnswerBoxInputs();
	resetLineObjs(); // svg line??? attribute ??????
	resetPositionA(); // ????????? ??????
	resetPositionB(); // ????????? ??????
});
