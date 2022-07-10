// constants

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var selectTargets = document.querySelectorAll(".js-selectTarget");

/* 팝업 */
var popupWrap = document.querySelectorAll(".popupWrap");
var popupBtns = document.querySelectorAll(".popupBtn");
var popupCloseBtns = document.querySelectorAll(".popupCloseBtn");

/* 드래그 */
var dragObjs = document.querySelectorAll(".dragObj");
var dragImages = document.querySelectorAll(".dragImage");
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
	selectTargets.forEach(removeClassSelected);
	
	resetPositionA();
	rotateButtons.forEach(removeClassInactive);
	dragImages.forEach(function (selectTarget) {
		selectTarget.style.transform = "rotate(0deg)";
		selectTarget.setAttribute("data-rotate", 0);
	});
}

/* 도형 회전 버튼 클릭 시 */
function onSelectTargetRotate() {
	var parentElement = getParentElement(this);
	var transRotateImg = parentElement.querySelector(".dragImage");

	var dropObj = dragDropManagerA.dropAreas[dragDropManagerA.dropIdx];

	var transRotate = Number(transRotateImg.dataset.rotate) || 0;
	var dataDegree = Number(parentElement.dataset.degree);
	
	var nextRotate;
	
	if (this.classList.contains("left")) {
		nextRotate = transRotate - 15;	
	}
	else {
		nextRotate = transRotate + 15;
	}

	transRotateImg.style.transform = "rotate("+nextRotate+"deg)";
	transRotateImg.setAttribute("data-rotate", nextRotate);
	
	var nextRotate2 = nextRotate + 360;
	var nextRotate3 = nextRotate - 360;
	var boolean = dataDegree == nextRotate || dataDegree == nextRotate2 || dataDegree == nextRotate3;

	if (boolean) {
		var targetRotateButtons = parentElement.querySelectorAll(".rotateButton");
		targetRotateButtons.forEach(addClassInactive);
		
		parentElement.style.zIndex = 1;
		
		dragCount++;
		
		if (dragCount == 12) {
			console.log("회전 종료");
			window.completePlayPage(1000);
			dragCount = 0;
		}
	}
}

// process
selectPlays.forEach(window.addHoverEvent);

/* 팝업 이벤트 */
popupBtns.forEach(function(popupBtn) {
	popupBtn.onclick = function() {
		var index = this.getAttribute('data-index');
		
		popupWrap.forEach(function(popup) {
			if (popup.getAttribute('data-index') === index) addClassView(popup);
		});
		// addClassView(popupWrap);
	};
});

popupCloseBtns.forEach(function(popupCloseBtn) {
	popupCloseBtn.onclick = function() {
		var currentPopup = this.parentElement.parentElement;
		removeClassView(currentPopup);
	};
});

/* 회전 버튼 이벤트 */
rotateButtons.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetRotate;
});

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	resetGame();
});
