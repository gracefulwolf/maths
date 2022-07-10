var paletteCompleteCount = 0;
var fillColor = "";
var paletteColors = document.querySelectorAll(".paletteColor");
var paletteTargets = document.querySelectorAll(".paletteTarget");
var paletteTargetNum = paletteTargets.length;

/* 팔레트 색상 선택 */
paletteColors.forEach(function (selectTarget) {
	selectTarget.onclick = onPaletteClick;
});

/* 팔레트 타겟 클릭 */
paletteTargets.forEach(function (selectTarget) {
	selectTarget.onclick = onPaletteTargetClick;
});

/* 팔레트 정답 확인 */
confirmButtons3.forEach(function (selectTarget) {
	selectTarget.onclick = onPaletteConfirmButtonClick;
});

/* 팔레트 리셋 */
resetBtns3.forEach(function (selectTarget) {
	selectTarget.onclick = paletteReset;
});

/* 팔레트 색상 선택 함수 */
function onPaletteClick() {
	var thisPaletteColor = this.dataset.paletteColor;
	fillColor = thisPaletteColor;
	
	paletteColors.forEach(removeClassSelected);
	paletteColors.forEach(addClassInactive);
	addClassSelected(this);
	removeClassInactive(this);
	
	paletteTargets.forEach(addClassSelectAble);
}

/* 팔레트 타겟 클릭 함수 */
function onPaletteTargetClick() {
	var paletteElement = getParentElement(this);
	
	if (fillColor != "") {
        if (this.classList.contains("selected")) {
            console.log("selected 포함");
            if (this.classList.contains(fillColor)) {
                paletteCompleteCount--;

                // window.efSound("click");

                this.classList.remove(fillColor);
                removeClassSelected(this);
                console.log("컬러가 다른 경우");
            }
            else {
                // window.efSound("correct");
                
                this.classList.remove("orange");
                this.classList.remove("blue");
                this.classList.remove("green");
                
                this.classList.add(fillColor);
                console.log("컬러가 같은 경우");
            }
        }
        else {
            paletteCompleteCount++;

            // window.efSound("correct");

            this.classList.add(fillColor);
            addClassSelected(this);
            
            console.log("selected 미포함");
        }
		
		if (paletteCompleteCount == paletteTargetNum) {
			paletteCompleteCount = 0;
			window.completePlayPage(1000);
		}
	}
}

function onPaletteConfirmButtonClick() {
	window.completePlayPage(1000);
}

function paletteReset() {
	paletteCompleteCount = 0;
	paletteColors.forEach(removeClassInactive);
	paletteColors.forEach(removeClassSelected);
	
	paletteTargets.forEach(removeClassSelectAble);
	paletteTargets.forEach(removeClassSelected);
	paletteTargets.forEach(removeClassColor);
}

function addClassSelectAble(element) {
	element.classList.add("selectAble");
}
function removeClassSelectAble(element) {
	element.classList.remove("selectAble");
}
function removeClassColor(element) {
	element.classList.remove("orange");
	element.classList.remove("blue");
	element.classList.remove("green");
}