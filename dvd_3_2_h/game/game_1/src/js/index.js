// constants
var currSceneNum = 1;
var currComicNum = 1;

// dom elements
var selectPlays = document.querySelectorAll(".selectPlay");
var selectTargets = document.querySelectorAll(".js-selectTarget");

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
function resetScene() { // scene 리셋
	// currSceneNum = 1;
	
	for (var i=0; i<gamePageSceneLength; i++) {
		gamePageScenes[i].classList.remove("view");
		naviImgs[i].classList.remove("active");
	}
	gamePageScenes[currSceneNum-1].classList.add("view");
	naviImgs[currSceneNum-1].classList.add("active");
	naviLeftArrow.classList.add("inactive");
	naviRightArrow.classList.remove("inactive");
	
	// currComicNum = 1;
	
	for (var i=0; i<comicLength; i++) {
		comics[i].classList.remove("view");
		comicNaviImgs[i].classList.remove("active");
	}
	comics[0].classList.add("view");
	comicNaviImgs[0].classList.add("active");
	comicNaviLeftArrow.classList.add("inactive");
	comicNaviRightArrow.classList.remove("inactive");
}

/* 도형 클릭 시 */
function onSelectTargetClick() {
	var selectTargeAnswer = this.dataset.selectAnswer;
	var parentPlayPageElement = getParentPlayPage(this);
	
	var isCorrect = selectTargeAnswer === "o";
	
	if (isCorrect) {
		var selectTargetPage = parentPlayPageElement.querySelectorAll(".selectTarget");
		addClassAnswered(this);
		selectTargetPage.forEach(addClassSelected);
		
		window.completePlayPage(1000);
		window.efSound("correct");
	}
	else {
		window.shake(this);
		window.efSound("incorrect");
	}
}

/* 내비게이션 가운데 버튼 클릭 시 */
function onNaviImgClick() {
	var pageNum = this.dataset.num;
	
	currSceneNum = pageNum;

	for (var i=0; i<gamePageSceneLength; i++) {
		gamePageScenes[i].classList.remove("view");
		naviImgs[i].classList.remove("active");
	}
	this.classList.add("active");
	gamePageScenes[currSceneNum-1].classList.add("view");
	
	naviLeftArrow.classList.remove("inactive");
	naviRightArrow.classList.remove("inactive");
	if (currSceneNum == 1) {
		naviLeftArrow.classList.add("inactive");
	}
	if (currSceneNum == gamePageSceneLength) {
		naviRightArrow.classList.add("inactive");
	}
}

/* 만화보기 내비게이션 가운데 버튼 클릭 시 */
function onComicNaviImgClick() {
	var pageNum = this.dataset.num;
	
	currComicNum = pageNum;

	for (var i=0; i<comicLength; i++) {
		comics[i].classList.remove("view");
		comicNaviImgs[i].classList.remove("active");
	}
	this.classList.add("active");
	comics[currComicNum-1].classList.add("view");
	
	comicNaviLeftArrow.classList.remove("inactive");
	comicNaviRightArrow.classList.remove("inactive");
	if (currComicNum == 1) {
		comicNaviLeftArrow.classList.add("inactive");
	}
	if (currComicNum == comicLength) {
		comicNaviRightArrow.classList.add("inactive");
	}
}

/* 내비게이션 이벤트 */
naviLeftArrow.onclick = function() {
	currSceneNum--;
	
	naviRightArrow.classList.remove("inactive");
	for (var i=0; i<gamePageSceneLength; i++) {
		gamePageScenes[i].classList.remove("view");
		naviImgs[i].classList.remove("active");
	}
	gamePageScenes[currSceneNum-1].classList.add("view");
	naviImgs[currSceneNum-1].classList.add("active");

	if (currSceneNum == 1) { // 첫 페이지라면
		this.classList.add("inactive");
	}
};
naviRightArrow.onclick = function() {
	currSceneNum++;
	
	naviLeftArrow.classList.remove("inactive");
	for (var i=0; i<gamePageSceneLength; i++) {
		gamePageScenes[i].classList.remove("view");
		naviImgs[i].classList.remove("active");
	}
	gamePageScenes[currSceneNum-1].classList.add("view");
	naviImgs[currSceneNum-1].classList.add("active");

	if (currSceneNum == gamePageSceneLength) { // 마지막 페이지라면
		this.classList.add("inactive");
		
	}
};
naviImgs.forEach(function (selectTarget) {
	selectTarget.onclick = onNaviImgClick;
});

/* 만화 보기 이벤트 */
comicViewBtn.onclick = function() {
	comicWrap.classList.add("view");
};
comicCloseBtn.onclick = function() {
	comicWrap.classList.remove("view");
};
comicNaviLeftArrow.onclick = function() {
	currComicNum--;
	
	comicNaviRightArrow.classList.remove("inactive");
	for (var i=0; i<comicLength; i++) {
		comics[i].classList.remove("view");
		comicNaviImgs[i].classList.remove("active");
	}
	comics[currComicNum-1].classList.add("view");
	comicNaviImgs[currComicNum-1].classList.add("active");

	if (currComicNum == 1) { // 첫 페이지라면
		this.classList.add("inactive");
	}
};
comicNaviRightArrow.onclick = function() {
	currComicNum++;
	
	comicNaviLeftArrow.classList.remove("inactive");
	for (var i=0; i<comicLength; i++) {
		comics[i].classList.remove("view");
		comicNaviImgs[i].classList.remove("active");
	}
	comics[currComicNum-1].classList.add("view");
	comicNaviImgs[currComicNum-1].classList.add("active");

	if (currComicNum == comicLength) { // 마지막 페이지라면
		this.classList.add("inactive");
		
	}
};
comicNaviImgs.forEach(function (selectTarget) {
	selectTarget.onclick = onComicNaviImgClick;
});

// process
selectTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onSelectTargetClick;
	window.addHoverEvent(selectTarget);
});
selectPlays.forEach(window.addHoverEvent);

// [공통] 모든 게임 종료 후, 다시하기를 했을 때, 플레이 페이지 내부 요소 리셋 콜백 함수.
window.setResetCallback(function () {
	ableAllSelectTargetsPointer();
	selectTargets.forEach(removeClassAnswered);
	currSceneNum = 1;
	currComicNum = 1;
	resetScene();
});
