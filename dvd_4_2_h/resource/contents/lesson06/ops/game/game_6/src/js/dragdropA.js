document.addEventListener("DOMContentLoaded", function(e) {
	initDragDropA();
});

var dragIngYN = false;
var dragCount = 0;

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
			if (!dragdrop.element.classList.contains("dragComplete")) {
				var eventMaster = eventSelector("downEvent", e);
				dragdrop.offY = eventMaster.clientY - (dragdrop.element.offsetTop);
				dragdrop.offX = eventMaster.clientX - (dragdrop.element.offsetLeft);
	
				dragdrop.element.classList.add("draging");
				for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
					dragDropManagerA.dropAreas[i].classList.add("highlight");
				}
				
				dragdrop.parentElement.addEventListener(gameManager.eventSelector.moveEvent, dragdrop.drag, true);
	
				dragIngYN = false;
				
				// 드래그 활성화
				dragdrop.element.style.zIndex = 3;
				
				// 드랍영역 활성화
				var dragdropIdx = dragdrop.element.getAttribute("drag-ans");
				var targetDrop = document.querySelectorAll(".dropArea[drag-ans='"+dragdropIdx+"']");
				for (var i=0; i<targetDrop.length; i++) {
					targetDrop[i].style.zIndex = 2;
				}
			}
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
			
			dragIngYN = true;
        },
        endDrag : function(e) {
			if (!dragdrop.element.classList.contains("dragComplete")) {
				var eventMaster = eventSelector("upEvent", e);
				dragdrop.parentElement.removeEventListener(gameManager.eventSelector.moveEvent, dragdrop.drag, true);
				dragdrop.element.addEventListener(gameManager.eventSelector.upEvent, boundingA(this, eventMaster.clientX, eventMaster.clientY), false);
	
				dragdrop.element.classList.remove("draging");
				
				for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
					dragDropManagerA.dropAreas[i].classList.remove("highlight");
					dragDropManagerA.dropAreas[i].classList.remove("dropAble")
				}
				
				dragIngYN = false;
				
				// 드랍영역 활성화
				var dragdropIdx = dragdrop.element.getAttribute("drag-ans");
				var targetDrop = document.querySelectorAll(".dropArea[drag-ans='"+dragdropIdx+"']");
				for (var i=0; i<targetDrop.length; i++) {
					targetDrop[i].style.zIndex = 0;
				}
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
	if (dropCompareA(dragObj, x, y)) {

		// dragObj : 위치 이동
		correctPositionA(dragObj);
		
		var dropObj = document.querySelector(".dropArea[drop-idx='"+dragDropManagerA.dropIdx+"']");
		var dataDegree = Number(dropObj.dataset.degree);
		dragObj.setAttribute("data-degree", dataDegree);

		var boolean = dataDegree == 0;
		
		if (boolean) {
			dragCount++;
			
			var targetRotateButtons = dragObj.querySelectorAll(".rotateButton");
			targetRotateButtons.forEach(addClassInactive);
			
			window.efSound("correct");
			
			var playPage = getParentPlayPage(dragObj);
			var playPageDragCount = playPage.dataset.dragCount;
		
			var dropObjIdx = dragObj.getAttribute("drag-ans");
			var dropObj = document.querySelectorAll(".dropArea[drag-ans='"+dropObjIdx+"']");
			for (var i=0; i<dropObj.length; i++) {
				dropObj[i].style.zIndex = 0;
			}
			
			dragObj.style.zIndex = 1;
			
			if (playPageDragCount == dragCount) {
				console.log("드래그 종료");
				
				var playPageDragObjs = playPage.querySelectorAll(".dragObj");
				for (var i=0; i<playPageDragObjs.length; i++) {
					playPageDragObjs[i].classList.add("dragEnd");
				}
				
				window.completePlayPage(1000);
				dragCount = 0;
			}
		}
	}
	else {
		var dragdropIdx = dragObj.getAttribute("drag-ans");
		var targetDrop = document.querySelectorAll(".dropArea[drag-ans='"+dragdropIdx+"']");
		for (var i=0; i<targetDrop.length; i++) {
			targetDrop[i].style.zIndex = 1;
		}
		
		incorrectAnimationA(dragObj, 300, 1);
		window.efSound("incorrect");
	}
}

// 정답 보여주기(필요한 곳에서 실행하면 됨)
function completeDragDropA() {
    if (dragDropManagerA.active == false) return;

    for (var i=0; i<dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i],
            dragAnswer = dragDropManagerA.dragObjs[i].getAttribute('drag-idx');
			dragObjRotate = dragObj.getAttribute("data-rotate") || 0;

		var dropDegree = dragDropManagerA.dropAreas[i].getAttribute('data-degree');
		var dragObjImg = dragObj.querySelector(".dragImage");
			
		dragObj.classList.add("allComplete");
		dragObjImg.style.transform = "rotate("+dropDegree+"deg)";
			
        for (var j=0; j<dragDropManagerA.dropAreas.length; j++) {
            var dropArea = dragDropManagerA.dropAreas[j],
                dropAnswer = dragDropManagerA.dropAreas[j].getAttribute('drop-idx');

            if (dragAnswer == dropAnswer) {
                dragDropManagerA.dragObjs[i].classList.add("dragComplete");
                dragDropManagerA.dropIdx = parseInt(dropArea.getAttribute('drop-idx'));

                correctPositionA(dragObj);
            }
        }
    }

    dragDropManagerA.ansCount = 0;
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

// 위치 초기화(필요한 곳에서 실행하면 됨)
function resetPositionA() {
    if (dragDropManagerA.active == false) return;
	dragCount = 0;
    dragDropManagerA.ansCount =0;

    for(var i=0 ; i<dragDropManagerA.dragObjs.length; i++) {
        var dragObj = dragDropManagerA.dragObjs[i];
        dragObj.style.top = dragDropManagerA.dragObjPosition[i][0] + "px";
        dragObj.style.left = dragDropManagerA.dragObjPosition[i][1] + "px";

		dragObj.classList.remove("dragComplete");
		dragObj.classList.remove("dragAble");
		dragObj.classList.remove("dragEnd");
		dragObj.classList.remove("allComplete");
		
		var dragObjImg = dragObj.querySelector(".dragImage");
		dragObjImg.style.transform = "rotate(0deg)";
		dragObjImg.setAttribute("data-rotate", "0");
    }
    for (var i=0; i<dragDropManagerA.dropAreas.length; i++) {
        if(dragDropManagerA.dropAreas[i].classList.contains("dropComplete")) {
            dragDropManagerA.dropAreas[i].classList.remove("dropComplete");
			dragDropManagerA.dropAreas[i].classList.remove("dropX");
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
