// constants

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
//var selectTargets = document.querySelectorAll(".js-selectTarget");

var answerBoxInputs = document.querySelectorAll(".js-answerBoxInput");

var confirmButtons = document.querySelectorAll(".playPage[data-play-page='1'] .js-confirmButton");
var confirmButtons2 = document.querySelectorAll(".playPage[data-play-page='2'] .js-confirmButton");
var resetBtns2 = document.querySelectorAll(".playPage[data-play-page='2'] .js-resetBtn");
var confirmButtons3 = document.querySelectorAll(".playPage[data-play-page='3'] .js-confirmButton");
var resetBtns3 = document.querySelectorAll(".playPage[data-play-page='3'] .js-resetBtn");

var rotateButtons = document.querySelectorAll(".rotateButton");

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
	answerBoxInputs.forEach(removeClassInactive);
	answerBoxInputs.forEach(removeClassSelected);
	confirmButtons.forEach(removeClassInactive);
	confirmButtons2.forEach(removeClassInactive);
	confirmButtons3.forEach(removeClassInactive);
	
	resetAnswerBoxInputs();
	
	onResetButtonClick();
	
	paletteReset();
}

// ?????? ?????? ?????? ???
function onConfirmButtonClick() {
	console.log("onConfirmButtonClick()");
	
	var parentPlayPageElement = getParentPlayPage(this);
	var playPageIndex = parentPlayPageElement.dataset.playPage;
	var inputElements = parentPlayPageElement.querySelectorAll(".js-answerBoxInput");
	
	// ?????? ??????
	var inputAnswerArr = new Array();
	var inputValueArr = new Array();
	
	inputElements.forEach(function(element) {
		element.value = element.dataset.answer;
	});
	
	var inputs = parentPlayPageElement.querySelectorAll(".js-answerBoxInput");
	var buttons = parentPlayPageElement.querySelectorAll(".js-confirmButton");
	inputs.forEach(addClassInactive);
	buttons.forEach(addClassInactive);
	
	window.efSound("correct");
	window.completePlayPage(1000);
}
function onAnswerBoxInputKeyUp(event) {
	var keyCode = event.keyCode;
	
	if (keyCode === 13) {
		var parentPlayPageElement = getParentPlayPage(this);
		var buttonElement = parentPlayPageElement.querySelector(".js-confirmButton");
		
		buttonElement.click();
	}
}

/* ?????? ?????? ?????? ?????? ??? */
function onSelectTargetRotate() {
	var parentElement = getParentElement(this);
	var transRotateImg = parentElement.querySelector(".dragImage");
	var dropObj = document.querySelector(".dropArea[drop-idx='"+dragDropManagerA.dropIdx+"']");
	var dataDegree = Number(dropObj.dataset.degree);
	var transRotate = Number(transRotateImg.dataset.rotate) || 0;
	var dataDegree = Number(dropObj.dataset.degree);
	
	var nextRotate;
	
	if (this.classList.contains("left")) {
		nextRotate = transRotate - 60;	
	}
	else {
		nextRotate = transRotate + 60;
	}

	transRotateImg.style.transform = "rotate("+nextRotate+"deg)";
	transRotateImg.setAttribute("data-rotate", nextRotate);
	
	var nextRotate2 = nextRotate + 360;
	var nextRotate3 = nextRotate - 360;
	
	if (dataDegree == nextRotate || dataDegree == nextRotate2 || dataDegree == nextRotate3) {
		var targetRotateButtons = parentElement.querySelectorAll(".rotateButton");
		dragCount++;
		
		var playPage = getParentPlayPage(parentElement);
		var playPageDragCount = playPage.dataset.dragCount;
		var dropObjIdx = parentElement.getAttribute("drag-ans");
		var dropObj = document.querySelectorAll(".dropArea[drag-ans='"+dropObjIdx+"']");
		for (var i=0; i<dropObj.length; i++) {
			dropObj[i].style.zIndex = 0;
		}
		
		parentElement.style.zIndex = 1;

		targetRotateButtons.forEach(addClassInactive);
		window.efSound("correct");
		
		if (playPageDragCount == dragCount) {
			window.completePlayPage(1000);
		}
	}
}

function onDragConfirmButtonClick() {
	completeDragDropA();
	addClassInactive(this);
	window.completePlayPage(1000);
}

function onResetButtonClick() {
	resetPositionA();
	confirmButtons2.forEach(removeClassInactive);
	rotateButtons.forEach(removeClassInactive);
}

// process
/*
selectTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetClick;
	window.addHoverEvent(selectTarget);
});
*/
selectPlays.forEach(window.addHoverEvent);

/* ?????? ?????? */
answerBoxInputs.forEach(function (answerBoxInput) {
	answerBoxInput.onkeyup = onAnswerBoxInputKeyUp;
	answerBoxInput.onclick = function() {
		addClassSelected(this);
	};
});
confirmButtons.forEach(function (selectTarget) {
	selectTarget.onclick = onConfirmButtonClick;
});

/* ?????? ?????? ????????? */
rotateButtons.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetRotate;
});

/* ????????? ?????? ?????? */
confirmButtons2.forEach(function (selectTarget) {
	selectTarget.onclick = onDragConfirmButtonClick;
});

/* ????????? ?????? */
resetBtns2.forEach(function (selectTarget) {
	selectTarget.onclick = onResetButtonClick;
});

// [??????] ?????? ?????? ?????? ???, ??????????????? ?????? ???, ????????? ????????? ?????? ?????? ?????? ?????? ??????.
window.setResetCallback(function () {
	resetGame();
});
