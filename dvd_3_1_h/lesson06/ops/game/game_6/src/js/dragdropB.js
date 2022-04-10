document.addEventListener("DOMContentLoaded", function(e) {
	initDragDropB();
});

var dragdropCountB;
var svgObjB;

window.dragDropManagerB = {
    active : false,
    dragdrops : [] || null,
    dragObjs : [] || null,
    dragObjPosition : [] || null,
    dropAreas : null,
    dropIdx : 0,
    ansCount : 0,
    isComplete : function() {
        var boolean = false;
        if(this.ansCount == this.dropAreas.length) {
            boolean = true;
        }
        return boolean;
    }
}

// dragdrop 시작
function initDragDropB() {
	dragdropCountB = document.querySelectorAll(".playPage[data-play-page='2'] > .dragObj").length; // 드래그 드랍 갯수
	svgObjB = document.querySelector(".playPage[data-play-page='2'] > svg");
	
	setTimeout(function() {
	    setdragDropManagerB();
	}, 1500);
}

// dragDropManagerB 설정
function setdragDropManagerB() {
    if (dragDropManagerB.dragdrops.length > 0) { // dragObj가 있다면.
        dragDropManagerB.dragdrops.forEach(function(el) {
            el.removeEvents();
        });
    }

    dragDropManagerB.active = true,
    dragDropManagerB.dragdrops = [] || null,
    dragDropManagerB.dragObjs = document.querySelectorAll(".playPage[data-play-page='2'] > .dragObj") || null,
    dragDropManagerB.dropAreas = document.querySelectorAll(".playPage[data-play-page='2'] > .dropArea") || null,
    dragDropManagerB.dropIdx = 0;
    dragDropManagerB.ansCount = 0;
    dragDropManagerB.dragObjPosition = [];

    for (var i = 0; i < dragDropManagerB.dragObjs.length; i++) {
        var dragObj = dragDropManagerB.dragObjs[i];
        // 초기화
        if (dragObj.classList.contains("dragComplete")) {
            dragObj.classList.remove("dragComplete");
        }

        // 설정
        dragDropManagerB.dragObjPosition.push([dragObj.offsetTop, dragObj.offsetLeft]);

        var dragdrop = new dragdropFncB(dragObj); // 인스턴스 실행
        dragDropManagerB.dragdrops.push(dragdrop);
		
		if (i != 0) {
			dragObj.classList.remove("dragAble");
		}
    }

    for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
        if (dragDropManagerB.dropAreas[i].classList.contains("dropComplete")){
            dragDropManagerB.dropAreas[i].classList.remove("dropComplete")
        }
    }
}

function dragdropFncB(dragObj) {
    var dragdrop = this;
    dragdrop = {
        element : dragObj,
        parentElement : window,
        startDrag : function(e) {
            var eventMaster = eventSelector("downEvent", e);
            dragdrop.offY = eventMaster.clientY - (dragdrop.element.offsetTop);
            dragdrop.offX = eventMaster.clientX - (dragdrop.element.offsetLeft);

            dragdrop.element.classList.add("draging");
            for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
                dragDropManagerB.dropAreas[i].classList.add("highlight");
            }
			
            dragdrop.parentElement.addEventListener(gameManager.eventSelector.moveEvent, dragdrop.drag, true);
        },
        drag : function(e) {
            e.preventDefault();
            var eventMaster = eventSelector("moveEvent", e);

            dragdrop.newY = eventMaster.clientY - dragdrop.offY;
            dragdrop.newX = eventMaster.clientX - dragdrop.offX;

            dragdrop.element.style.left = dragdrop.newX + "px";
            dragdrop.element.style.top = dragdrop.newY + "px";
			for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
				dragDropManagerB.dropAreas[i].classList.add("dropAble");
			}
			
			// svg
			var lineIndex = parseInt(dragdrop.element.getAttribute("drag-idx"));
			var lineNum = parseInt(dragdrop.element.getAttribute("drag-idx"))+1;
			var lineObj = svgObjB.querySelector("line:nth-child("+lineNum+")");
			
			var top = dragDropManagerB.dragObjPosition[lineIndex][0];	// 시작 top
	        var left = dragDropManagerB.dragObjPosition[lineIndex][1];	// 시작 left
			
			lineObj.setAttribute("x1", left+7);
			lineObj.setAttribute("y1", top+7);
			lineObj.setAttribute("x2", dragdrop.newX+7);
			lineObj.setAttribute("y2", dragdrop.newY+7);
        },
        endDrag : function(e) {
            var eventMaster = eventSelector("upEvent", e);
            dragdrop.parentElement.removeEventListener(gameManager.eventSelector.moveEvent, dragdrop.drag, true);
            dragdrop.element.addEventListener(gameManager.eventSelector.upEvent, boundingB(this, eventMaster.clientX, eventMaster.clientY), false);

            dragdrop.element.classList.remove("draging");
            for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
                dragDropManagerB.dropAreas[i].classList.remove("highlight");
				dragDropManagerB.dropAreas[i].classList.remove("dropAble")
            }
        },
        addEvents : function() {
            this.element.addEventListener(gameManager.eventSelector.downEvent, this.startDrag, false);
            this.element.addEventListener(gameManager.eventSelector.upEvent, this.endDrag, false);
        },
        removeEvents : function() {
            this.element.removeEventListener(gameManager.eventSelector.downEvent, this.startDrag, false);
            this.element.removeEventListener(gameManager.eventSelector.upEvent, this.endDrag, false);
        }
    }

    dragdrop.addEvents();

    return dragdrop;
}

function boundingB(dragObj, x, y) {
	// svg
	var lineIndex = parseInt(dragObj.getAttribute("drag-idx"));
	var lineNum = parseInt(dragObj.getAttribute("drag-idx"))+1;
	var lineObj = svgObjB.querySelector("line:nth-child("+lineNum+")");
	
	var wrapperLeft = getPosLeft(document.querySelector(".wrapper"));
	var wrapperTop = getPosTop(document.querySelector(".wrapper"));
	
	var left = getPosLeft(dragDropManagerB.dropAreas[lineIndex]) - wrapperLeft;
	var top = getPosTop(dragDropManagerB.dropAreas[lineIndex]) - wrapperTop;
			
		
    if (dropCompareB(dragObj, x, y)) {
        window.efSound("correct");

        // dragObj : 위치 이동
        correctPositionB(dragObj);
		dragDropManagerB.ansCount++;
		
		if (dragDropManagerB.isComplete()) {
            dragDropManagerB.ansCount = 0;

			console.log("드래그 종료");
			window.completePlayPage(1000);
        }
		
		lineObj.setAttribute("x2", left+7);
		lineObj.setAttribute("y2", top+7);
    }
	else {
        incorrectAnimationB(dragObj, 300, 1);
        window.efSound("incorrect");
		
		lineObj.removeAttribute("x1");
		lineObj.removeAttribute("y1");
		lineObj.removeAttribute("x2");
		lineObj.removeAttribute("y2");
    }
}

function dropCompareB(dragObj, x, y) {
    var dragObjValue = dragObj.getAttribute("drag-ans"),
        bool = false;

    for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
        var dropValue = dragDropManagerB.dropAreas[i].getAttribute("drag-ans"),
            dropIdx = dragDropManagerB.dropAreas[i].getAttribute("drop-Idx"),
            left = getPosLeft(dragDropManagerB.dropAreas[i]),
            top = getPosTop(dragDropManagerB.dropAreas[i]);

        if (x > left &&
            x < (left) + (dragDropManagerB.dropAreas[i].clientWidth+10) &&
            y > top &&
            y < (top) + (dragDropManagerB.dropAreas[i].clientHeight+10)) {

            if (dragObjValue == dropValue) {
                dragDropManagerB.dropIdx = parseInt(dropIdx);
                return true;
            }
        }
    }
    return bool;
}

function correctPositionB(dragObj) {
	var nextDragIdx = parseInt(dragObj.getAttribute("drag-idx"))+1;
	if (nextDragIdx < dragdropCountB) {
		var nextDrag = document.querySelector(".playPage[data-play-page='2'] > .dragObj[drag-idx='"+nextDragIdx+"']");
		nextDrag.classList.add("dragAble");
	}
	
    dragObj.style.top = (parseInt(dragDropManagerB.dropAreas[dragDropManagerB.dropIdx].offsetTop)) + "px";
    dragObj.style.left = (parseInt(dragDropManagerB.dropAreas[dragDropManagerB.dropIdx].offsetLeft)) + "px";
	dragObj.classList.remove("dragAble");
    dragObj.classList.add("dragComplete");
    dragDropManagerB.dropAreas[dragDropManagerB.dropIdx].classList.add("dropComplete");
}

function incorrectAnimationB(dragObj, dTime, dValue) {
    var dragIdx = dragObj.getAttribute("drag-idx"),
        top = dragDropManagerB.dragObjPosition[dragIdx][0],
        left = dragDropManagerB.dragObjPosition[dragIdx][1];

    motion({
        delay : 0,
        duration : dTime,
        degree: dValue,
        alpha : alphaShow(alphaValue),
        delta : deltaShow(deltaValue),
        step : function(alpha, delta) {
            dragObj.style.top = ((-30 * alpha) + (30) + top)  + "px";
            dragObj.style.left = left + "px";
        }
    });
}

// 위치 초기화(필요한 곳에서 실행하면 됨)
function resetPositionB() {
    if (dragDropManagerB.active == false) return;

    dragDropManagerB.ansCount =0;

    for(var i=0 ; i<dragDropManagerB.dragObjs.length; i++) {
        var dragObj = dragDropManagerB.dragObjs[i];
        dragObj.style.top = dragDropManagerB.dragObjPosition[i][0] + "px";
        dragObj.style.left = dragDropManagerB.dragObjPosition[i][1] + "px";

		dragObj.classList.remove("dragComplete");
		dragObj.classList.remove("dragAble");
		if (i == 0) {
			dragObj.classList.add("dragAble");
		}
    }
    for (var i=0; i<dragDropManagerB.dropAreas.length; i++) {
        if(dragDropManagerB.dropAreas[i].classList.contains("dropComplete")) {
            dragDropManagerB.dropAreas[i].classList.remove("dropComplete");
        }
    }
}