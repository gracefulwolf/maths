// constants
var movieViewCount = 0;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");

var movieBtns = document.querySelectorAll(".movieBtn");
var mediaContainers = document.querySelectorAll(".mediaContainer");
var videoCloseBtns = document.querySelectorAll(".videoCloseBtn");

var introWrap = document.querySelector(".introWrap");
var introNextStepButton = document.querySelector(".intro-nextStepButton");

var dragImages = document.querySelectorAll(".dragImage");
var rotateButtons = document.querySelectorAll(".rotateButton");
var dragClones = document.querySelectorAll(".dragClone");

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

function movieContainerView(element) {
	var movieNumber = this.dataset.movieNum;
	var targetMediaContainer = document.querySelector(".mediaContainer[data-movie-num='"+movieNumber+"']");

	targetMediaContainer.classList.add("on");
	
	movieViewCount++;
	if (movieViewCount == mediaContainers.length) {
		introNextStepButton.classList.add("nextStepButton--show");
	}
}
function movieContainerHide(element) {
	var targetMediaContainer = this.parentNode;
	var targetMedia = targetMediaContainer.querySelector("video");
	
	video_1.stop();
	video_2.stop();

	targetMediaContainer.classList.remove("on");
}

function resetGame() {
	addClassView(introWrap);
	movieViewCount = 0;
	//selectTargets.forEach(removeClassSelected);
	resetPositionA();
	dragClones.forEach(removeClassView);
	rotateButtons.forEach(removeClassInactive);
	
	dragImages.forEach(function (selectTarget) {
		selectTarget.style.transform = "rotate(0deg)";
		selectTarget.setAttribute("data-rotate", 0);
	});
	
	window.playSpriteAniByName("11_basic");
	window.playSpriteAniByName("12_basic");
	window.playSpriteAniByName("13_basic");
	window.playSpriteAniByName("14_basic");
	window.playSpriteAniByName("15_basic");
	window.playSpriteAniByName("16_basic");
	window.playSpriteAniByName("17_basic");
	window.playSpriteAniByName("18_basic");
	window.playSpriteAniByName("19_basic");
	window.playSpriteAniByName("20_basic");
	window.playSpriteAniByName("21_basic");
	window.playSpriteAniByName("22_basic");
	window.playSpriteAniByName("23_basic");
	window.playSpriteAniByName("24_basic");
	window.playSpriteAniByName("25_basic");
	window.playSpriteAniByName("26_basic");

	introNextStepButton.classList.add("nextStepButton--show");
}

/* 도형 회전 버튼 클릭 시 */
function onSelectTargetRotate() {
	var parentElement = getParentElement(this);
	var transRotateImg = parentElement.querySelector(".dragImage");
	var transRotate = Number(transRotateImg.dataset.rotate) || 0;
	var dataDegree = Number(transRotateImg.dataset.degree);
	
	var nextRotate;
	
	if (this.classList.contains("left")) {
		nextRotate = transRotate - 90;	
	}
	else {
		nextRotate = transRotate + 90;
	}

	transRotateImg.style.transform = "rotate("+nextRotate+"deg)";
	transRotateImg.setAttribute("data-rotate", nextRotate);
	
	var nextRotate2 = nextRotate + 360;
	var nextRotate3 = nextRotate - 360;
	
	if (dataDegree == nextRotate || dataDegree == nextRotate2 || dataDegree == nextRotate3) {
		var targetRotateButtons = parentElement.querySelectorAll(".rotateButton");
		targetRotateButtons.forEach(addClassInactive);
		window.efSound("correct");
		window.completePlayPage(1000);
		
		// 물새는 모션 중지
		var dragDataAnswer = parentElement.getAttribute("drag-ans");
		var waters = document.querySelectorAll(".waterWrap");
		var waterIndex;
		var playIndex;
		
		for (var i=0; i<waters.length; i++) {
			waterIndex = waters[i].dataset.waterIndex;
			if (dragDataAnswer == waterIndex) {
				playIndex = waters[i].dataset.playIndex;
				window.stopSpriteAniByName(playIndex+"_basic");
			}
		}
	}
}

// process
selectPlays.forEach(window.addHoverEvent);

/* 비디오 이벤트 */
// movieBtns.forEach(function (selectTarget) {
// 	selectTarget.onclick = movieContainerView;
// });
// videoCloseBtns.forEach(function (selectTarget) {
// 	selectTarget.onclick = movieContainerHide;
// });

/* gamePage 인트로 다음 버튼 */
introNextStepButton.onclick = function() {
	console.log("gamePage 인트로 다음 버튼");
	removeClassView(introWrap);
};

/* 회전 버튼 이벤트 */
rotateButtons.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetRotate;
});

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	resetGame();
});

window.playSpriteAniByName("5_basic");
window.playSpriteAniByName("6_basic");
window.playSpriteAniByName("25_basic");
window.playSpriteAniByName("26_basic");

window.playSpriteAniByName("7_basic");
window.playSpriteAniByName("8_basic");

window.playSpriteAniByName("9_basic");
window.playSpriteAniByName("10_basic");
window.playSpriteAniByName("11_basic");
window.playSpriteAniByName("12_basic");
window.playSpriteAniByName("13_basic");
window.playSpriteAniByName("14_basic");
window.playSpriteAniByName("15_basic");
window.playSpriteAniByName("16_basic");
window.playSpriteAniByName("17_basic");
window.playSpriteAniByName("18_basic");
window.playSpriteAniByName("19_basic");
window.playSpriteAniByName("20_basic");
window.playSpriteAniByName("21_basic");
window.playSpriteAniByName("22_basic");
window.playSpriteAniByName("23_basic");
window.playSpriteAniByName("24_basic");


introNextStepButton.classList.add("nextStepButton--show");