document.addEventListener("DOMContentLoaded", function(e) {
	initDragDropA();
});

var dragIngYN = false;
var dragCount = 0;
var answerBtns = document.querySelectorAll(".answerBtn");
var replayBtns = document.querySelectorAll(".replayBtn");

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
	dragDropManagerA.dragObjs = document.querySelectorAll(".dragObj") || null,
    dragDropManagerA.dropAreas = document.querySelectorAll(".dropArea") || null,
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

			dragIngYN = false;
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
			
			var rotateButton = dragdrop.element.querySelector(".rotateButton");
			addClassInactive(rotateButton);
			
			dragIngYN = true;
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
			
			var rotateButton = dragdrop.element.querySelector(".rotateButton");
			removeClassInactive(rotateButton);
			
			dragIngYN = false;
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
	setTimeout(function() {
		dragIngYN = false;	
	}, 1000);
	
	dragObj.classList.remove("dragAble");
    dragObj.classList.add("dragComplete");
    dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].classList.add("dropComplete");
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

            if (dragObjValue == dropValue && !dragDropManagerA.dropAreas[i].classList.contains("dropX")) {
                dragDropManagerA.dropIdx = parseInt(dropIdx);

                return true;
            }
        }
    }
    return bool;
}

function correctPositionA(dragObj) {
    dragObj.style.top = (parseInt(dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].offsetTop)) + "px";
    dragObj.style.left = (parseInt(dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].offsetLeft)) + "px";
	dragObj.classList.remove("dragAble");
    dragObj.classList.add("dragComplete");
    dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].classList.add("dropComplete");
	dragDropManagerA.dropAreas[dragDropManagerA.dropIdx].classList.add("dropX");
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

// 정답 보여주기(필요한 곳에서 실행하면 됨)
function completeDragDropA() {
    if (dragDropManagerA.active == false) return;

    for (var i=0; i<dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i],
            dragAnswer = dragDropManagerA.dragObjs[i].getAttribute('drag-ans');
			dragObjRotate = dragObj.getAttribute("data-degree") || 0;
			
		var dragObjImg = dragObj.querySelector(".dragImage");

		var playPageIndex = getParentPlayPage(dragObj).dataset.playPage;
		var btnIndex = this.getAttribute("data-index");

		if (playPageIndex == btnIndex) {
			dragObj.classList.add("allComplete");
			dragObjImg.style.transform = "rotate("+dragObjRotate+"deg)";
				
			for (var j=0; j<dragDropManagerA.dropAreas.length; j++) {
				var dropArea = dragDropManagerA.dropAreas[j],
					dropAnswer = dragDropManagerA.dropAreas[j].getAttribute('drag-ans');
	
				if (dragAnswer == dropAnswer) {
					dragDropManagerA.dragObjs[i].classList.add("dragComplete");
					dragDropManagerA.dropIdx = parseInt(dropArea.getAttribute('drop-idx'));
	
					correctPositionA(dragObj);
				}
			}
		}
    }

    dragDropManagerA.ansCount = 0;
	
	addClassInactive(this);
	window.completePlayPage(1000);
}

// 위치 초기화(필요한 곳에서 실행하면 됨)
function resetPositionA() {
	if (dragDropManagerA.active == false) return;

    dragDropManagerA.ansCount =0;

    for(var i=0 ; i<dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i];
		var dragObjImg = dragObj.querySelector(".dragImage");
		
		var playPageIndex = getParentPlayPage(dragObj).dataset.playPage;
		var btnIndex = getParentPlayPage(dragObj).querySelector(".replayBtn").getAttribute("data-index");
		
		if (playPageIndex == btnIndex) {
			dragObj.classList.remove("allComplete");
			
			dragObj.style.top = dragDropManagerA.dragObjPosition[i][0] + "px";
			dragObj.style.left = dragDropManagerA.dragObjPosition[i][1] + "px";
	
			dragObj.classList.remove("dragComplete");
			dragObj.classList.remove("dragAble");
			dragObj.style.transform = "rotate(0deg)";
			dragObjImg.style.transform = "rotate(0deg)";
			dragObjImg.setAttribute("data-degree", "0");
		}
    }
    for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
		var playPageIndex = getParentPlayPage(dragObj).dataset.playPage;
		var btnIndex = getParentPlayPage(dragObj).querySelector(".replayBtn").getAttribute("data-index");
		
		if (playPageIndex == btnIndex) {
			if(dragDropManagerA.dropAreas[i].classList.contains("dropComplete")) {
				dragDropManagerA.dropAreas[i].classList.remove("dropComplete");
			}
		}
    }
	
	answerBtns.forEach(removeClassInactive);
}

/* 리셋 버튼 */
replayBtns.forEach(function (selectTarget) {
	selectTarget.onclick = resetPositionA;
});

/* 정답 확인 */
answerBtns.forEach(function (selectTarget) {
	selectTarget.onclick = completeDragDropA;
});

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
