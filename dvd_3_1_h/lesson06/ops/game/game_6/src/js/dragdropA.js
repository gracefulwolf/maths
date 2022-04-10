document.addEventListener("DOMContentLoaded", function(e) {
	initDragDropA();
});

var dragdropCountA;
var svgObjA;

window.dragDropManagerA = {
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
function initDragDropA() {
	dragdropCountA = document.querySelectorAll(".playPage[data-play-page='1'] > .dragObj").length; // 드래그 드랍 갯수
	svgObjA = document.querySelector(".playPage[data-play-page='1'] > svg");
	
	setTimeout(function() {
	    setdragDropManagerA();
	}, 1500);
}

// dragDropManagerA 설정
function setdragDropManagerA() {
    if (dragDropManagerA.dragdrops.length > 0) { // dragObj가 있다면.
        dragDropManagerA.dragdrops.forEach(function(el) {
            el.removeEvents();
        });
    }

    dragDropManagerA.active = true,
    dragDropManagerA.dragdrops = [] || null,
    dragDropManagerA.dragObjs = document.querySelectorAll(".playPage[data-play-page='1'] > .dragObj") || null,
    dragDropManagerA.dropAreas = document.querySelectorAll(".playPage[data-play-page='1'] > .dropArea") || null,
    dragDropManagerA.dropIdx = 0;
    dragDropManagerA.ansCount = 0;
    dragDropManagerA.dragObjPosition = [];

    for (var i = 0; i < dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i];
        // 초기화
        if (dragObj.classList.contains("dragComplete")) {
            dragObj.classList.remove("dragComplete");
        }

        // 설정
        dragDropManagerA.dragObjPosition.push([dragObj.offsetTop, dragObj.offsetLeft]);

        var dragdrop = new dragdropFncA(dragObj); // 인스턴스 실행
        dragDropManagerA.dragdrops.push(dragdrop);
		
		dragObj.classList.remove("dragAble");
    }

    for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
        if (dragDropManagerA.dropAreas[i].classList.contains("dropComplete")){
            dragDropManagerA.dropAreas[i].classList.remove("dropComplete")
        }
    }
}

function dragdropFncA(dragObj) {
    var dragdrop = this;
    dragdrop = {
        element : dragObj,
        parentElement : window,
        startDrag : function(e) {
            var eventMaster = eventSelector("downEvent", e);
            dragdrop.offY = eventMaster.clientY - (dragdrop.element.offsetTop);
            dragdrop.offX = eventMaster.clientX - (dragdrop.element.offsetLeft);

            dragdrop.element.classList.add("draging");
            for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
                dragDropManagerA.dropAreas[i].classList.add("highlight");
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
			for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
				dragDropManagerA.dropAreas[i].classList.add("dropAble");
			}
			
			// svg
			var lineIndex = parseInt(dragdrop.element.getAttribute("drag-idx"));
			var lineNum = parseInt(dragdrop.element.getAttribute("drag-idx"))+1;
			var lineObj = svgObjA.querySelector("line:nth-child("+lineNum+")");
			
			var top = dragDropManagerA.dragObjPosition[lineIndex][0];	// 시작 top
	        var left = dragDropManagerA.dragObjPosition[lineIndex][1];	// 시작 left
			
			lineObj.setAttribute("x1", left+7);
			lineObj.setAttribute("y1", top+7);
			lineObj.setAttribute("x2", dragdrop.newX+7);
			lineObj.setAttribute("y2", dragdrop.newY+7);
        },
        endDrag : function(e) {
            var eventMaster = eventSelector("upEvent", e);
            dragdrop.parentElement.removeEventListener(gameManager.eventSelector.moveEvent, dragdrop.drag, true);
            dragdrop.element.addEventListener(gameManager.eventSelector.upEvent, boundingA(this, eventMaster.clientX, eventMaster.clientY), false);

            dragdrop.element.classList.remove("draging");
            for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
                dragDropManagerA.dropAreas[i].classList.remove("highlight");
				dragDropManagerA.dropAreas[i].classList.remove("dropAble")
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

function boundingA(dragObj, x, y) {
	// svg
	var lineIndex = parseInt(dragObj.getAttribute("drag-idx"));
	var lineNum = parseInt(dragObj.getAttribute("drag-idx"))+1;
	var lineObj = svgObjA.querySelector("line:nth-child("+lineNum+")");
	
	var wrapperLeft = getPosLeft(document.querySelector(".wrapper"));
	var wrapperTop = getPosTop(document.querySelector(".wrapper"));
	
	var left = getPosLeft(dragDropManagerA.dropAreas[lineIndex]) - wrapperLeft;
	var top = getPosTop(dragDropManagerA.dropAreas[lineIndex]) - wrapperTop;
		
    if (dropCompareA(dragObj, x, y)) {
        window.efSound("correct");

        // dragObj : 위치 이동
        correctPositionA(dragObj);
		dragDropManagerA.ansCount++;
		
		if (dragDropManagerA.isComplete()) {
            dragDropManagerA.ansCount = 0;

			console.log("드래그 종료");
			window.completePlayPage(1000);
        }
		
		lineObj.setAttribute("x2", left+7);
		lineObj.setAttribute("y2", top+7);
    }
	else {
        incorrectAnimationA(dragObj, 300, 1);
        window.efSound("incorrect");
		
		lineObj.removeAttribute("x1");
		lineObj.removeAttribute("y1");
		lineObj.removeAttribute("x2");
		lineObj.removeAttribute("y2");
    }
}

function dropCompareA(dragObj, x, y) {
    var dragObjValue = dragObj.getAttribute("drag-ans"),
        bool = false;

    for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
        var dropValue = dragDropManagerA.dropAreas[i].getAttribute("drag-ans"),
            dropIdx = dragDropManagerA.dropAreas[i].getAttribute("drop-Idx"),
            left = getPosLeft(dragDropManagerA.dropAreas[i]),
            top = getPosTop(dragDropManagerA.dropAreas[i]);

        if (x > left &&
            x < (left) + (dragDropManagerA.dropAreas[i].clientWidth+10) &&
            y > top &&
            y < (top) + (dragDropManagerA.dropAreas[i].clientHeight+10)) {

            if (dragObjValue == dropValue) {
                dragDropManagerA.dropIdx = parseInt(dropIdx);
                return true;
            }
        }
    }
    return bool;
}

function correctPositionA(dragObj) {
	var nextDragIdx = parseInt(dragObj.getAttribute("drag-idx"))+1;
	if (nextDragIdx < dragdropCountA) {
		var nextDrag = document.querySelector(".playPage[data-play-page='1'] > .dragObj[drag-idx='"+nextDragIdx+"']");
		nextDrag.classList.add("dragAble");
	}
	
    dragObj.style.top = (parseInt(dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].offsetTop)) + "px";
    dragObj.style.left = (parseInt(dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].offsetLeft)) + "px";
	dragObj.classList.remove("dragAble");
    dragObj.classList.add("dragComplete");
    dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].classList.add("dropComplete");
}

function incorrectAnimationA(dragObj, dTime, dValue) {
    var dragIdx = dragObj.getAttribute("drag-idx"),
        top = dragDropManagerA.dragObjPosition[dragIdx][0],
        left = dragDropManagerA.dragObjPosition[dragIdx][1];

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
function resetPositionA() {
    if (dragDropManagerA.active == false) return;

    dragDropManagerA.ansCount =0;

    for(var i=0 ; i<dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i];
        dragObj.style.top = dragDropManagerA.dragObjPosition[i][0] + "px";
        dragObj.style.left = dragDropManagerA.dragObjPosition[i][1] + "px";

		dragObj.classList.remove("dragComplete");
		dragObj.classList.remove("dragAble");
    }
    for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
        if(dragDropManagerA.dropAreas[i].classList.contains("dropComplete")) {
            dragDropManagerA.dropAreas[i].classList.remove("dropComplete");
        }
    }
}

// 기본 애니메이션(0~1)
function motion(opts) {
    var start = new Date;

    var id = setInterval(function() {
        var timePassed = new Date - start, // 2~500
            progress = (timePassed / opts.duration) * opts.degree;
			// (0~1) * opts.time

        if (progress > opts.degree)
            progress = opts.degree;

        var alpha = opts.alpha(progress);
        var delta = opts.delta(progress);
        opts.step(alpha, delta);

        if (progress == opts.degree) {
            clearInterval(id);
        }
    }, opts.delay);
}
function alphaShow(alpha) {
    return function(progress) {
        return 1 - alpha(1 - progress);
    }
}
function deltaShow(delta) {
    return function(progress) {
        return 1 - delta(1 - progress);
    }
}
function alphaValue(progress) {
    return progress; // 1 ~ 0;
}
function deltaValue(progress) {
    return progress; // 1 ~ 0;
}

function createElement(type, targetElement, className) {
    var createObject = document.createElement(type);
    if (className !== undefined) {
        createObject.className = className;
    }
    targetElement.appendChild(createObject);
    return createObject;
}

function getPosLeft(e) {
    return e.getBoundingClientRect().left;
}
function getPosTop(e) {
    return e.getBoundingClientRect().top;
}

var eventCheck = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
var gameManager = {
    eventSelector : {
        downEvent : eventCheck ? "touchstart" : "mousedown",
        moveEvent : eventCheck ? "touchmove" : "mousemove",
        upEvent : eventCheck ? "touchend" : "mouseup",
        outEvent : eventCheck ? "touchleave" : "mouseout",
        overEvent : eventCheck ? "touchstart" : "mouseover"
    }
}
function eventSelector(eventType, e) {
    var eventMaster;

    if (eventType === "downEvent") {
        switch (gameManager.eventSelector.downEvent) {
            case "mousedown":
                eventMaster = e;
                break;
            case "touchstart":
                e.preventDefault();
                eventMaster = e.touches.item(0);
                break;
        }
    }
    else if (eventType === "moveEvent") {
        switch (gameManager.eventSelector.moveEvent) {
            case "mousemove":
                eventMaster = e;
                break;
            case "touchmove":
                eventMaster = e.touches.item(0);
                break;
        }
    }
    else if (eventType === "upEvent") {
        switch (gameManager.eventSelector.upEvent) {
            case "mouseup":
                eventMaster = e;
                break;
            case "touchend":
                eventMaster = e.changedTouches[0];
                break;
        }
    }
    else if (eventType === "outEvent") {
        switch (gameManager.eventSelector.outEvent) {
            case "mouseout":
                eventMaster = e;
                break;
            case "touchleave":
                eventMaster = e.touches.item(0);
                break;
        }
    }
    else if (eventType === "overEvent") {
        switch (gameManager.eventSelector.overEvent) {
            case "mouseover":
                eventMaster = e;
                break;
            case "touchstart":
                eventMaster = e.touches.item(0);
                break;
        }
    }

    return eventMaster;
}
