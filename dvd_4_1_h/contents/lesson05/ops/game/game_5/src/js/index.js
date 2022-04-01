// constants
var movieViewCount = 0;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
//var selectTargets = document.querySelectorAll(".js-selectTarget");

var answerBoxInputs = document.querySelectorAll(".js-answerBoxInput");
var confirmButton = document.querySelector(".js-confirmButton");

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
	resetPositionA();
	
	answerBoxInputs.forEach(removeClassInactive);
	removeClassInactive(confirmButton);
	
	resetAnswerBoxInputs();
	
	window.playSpriteAniByName("1_correct");
	window.playSpriteAniByName("2_correct");
	window.playSpriteAniByName("3_correct");
	window.playSpriteAniByName("4_correct");
}

// 내용 입력 완료 시
function onConfirmButtonClick(target) {
	console.log("onConfirmButtonClick()" + this);
	
	var isAnswer = true;
	
	// 정답 체크
	answerBoxInputs.forEach(function(element) {
		if (element.value != element.dataset.answer) {
			isAnswer = false;
		}
	});
	
	if (isAnswer) {
		answerBoxInputs.forEach(addClassInactive);
		addClassInactive(confirmButton);
		
		window.efSoundMy("correct");
		window.completePlayPage(1000);
	}
	else {
		window.efSoundMy("incorrect");
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
/*
selectTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetClick;
	window.addHoverEvent(selectTarget);
});
*/
selectPlays.forEach(window.addHoverEvent);

/* 입력 박스 */
answerBoxInputs.forEach(function (answerBoxInput) {
	answerBoxInput.onkeyup = onAnswerBoxInputKeyUp;
});
confirmButton.onclick = function() {
	onConfirmButtonClick(this);
}

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	resetGame();
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

window.playSpriteAniByName("1_correct");
window.playSpriteAniByName("2_correct");
window.playSpriteAniByName("3_correct");
window.playSpriteAniByName("4_correct");