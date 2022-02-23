// NodeList forEach polyfill for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var DRAG_ELEMENT_SIZES = [220, 112];
var IMAGE_SOURCES;
var IMAGE_POSITIONS_ARRAY;
var DRAG_DATAS;
var DROP_POSITIONS_ARRAY;
var DRAG_ELEMENT_SIZE_RATIO;
var DRAG_POSITIONS_ARRAY;
var TABLE_DATA;
var TABLE_HEADER_COLOR = "rgb(233, 227, 205)";

function initScene() {
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  IMAGE_SOURCES = gameManager.QUIZ_OPTION[0];
  IMAGE_POSITIONS_ARRAY = gameManager.QUIZ_OPTION[1];
  DRAG_DATAS = gameManager.QUIZ_OPTION[2];
  DROP_POSITIONS_ARRAY = gameManager.QUIZ_OPTION[3];
  DRAG_ELEMENT_SIZE_RATIO = gameManager.QUIZ_OPTION[4];
  DRAG_POSITIONS_ARRAY = gameManager.QUIZ_OPTION[5];
  TABLE_DATA = gameManager.QUIZ_OPTION[6] || [];

  var bgCanvas = document.getElementById("bgCanvas");
  // blackBord = createElement("div", bgCanvas, "blackBord");
  var blackBoard = createElement("div", bgCanvas, "blackBoard");
  // (circleImg = createElement("div", blackBord, "circleImg")), (intX = Math.floor(Math.random() * 4 + 1));
  //

  // 배경 변경
  // if (IMAGE_SOURCES[0] === "42-5-07") {
  blackBoard.style.background = "url(images/diameter_blackboard.png)";
  // } else {
  //   blackBoard.style.backgroundImage = "url(./images/diameter_blackboard_blank.png)";
  // }

  // 이미지 생성
  for (var i = 0, imgSrc, imageElement, imgPositions; i < IMAGE_SOURCES.length; i++) {
    imgSrc = IMAGE_SOURCES[i];
    imgPositions = IMAGE_POSITIONS_ARRAY[i];
    imageElement = document.createElement("img");
    imageElement.src = "./images/" + imgSrc + ".svg";
    imageElement.style.position = "absolute";
    imageElement.style.left = imgPositions[0] + "px";
    imageElement.style.top = imgPositions[1] + "px";
    imageElement.style.width = imgPositions[2] + "px";
    imageElement.style.height = imgPositions[3] + "px";
    bgCanvas.appendChild(imageElement);
  }

  var dropTopDiff = 20;

  // 텍스트 생성
  var textBoxData = ["자료를 막대그래프로 나타낼 때는", "1@ |drop|와 |drop|에 각각 무엇을 <br>나타낼지 정합니다.", "2@ 눈금 |drop| 칸의 크기를 정합니다.", "3@ 자료의 수에 맞게 막대를 그려 <br>막대그래프로 나타냅니다."];
  var textBox = createElement("div", bgCanvas, "textBox");

  textBox.style.position = "absolute";
  textBox.style.top = "60px";
  textBox.style.left = "100px";
  textBox.style.width = "660px";
  textBox.style.fontSize = "40px";
  textBox.style.color = "#FFF";
  textBox.style.fontFamily = "NanumGothicExtraBold";
  textBox.style.lineHeight = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO + "px";
  textBox.style.verticalAlign = "middle";

  textBoxData.forEach(function (data, idx) {
    var paragraph = document.createElement("div");
    var inner = data;

    console.log(data, /. /g.test(inner));

    // edit innerHTML
    if (/@/g.test(inner)) {
      inner = inner.split("@ ");
      inner = '<div style="flex: 0 0 48px;">' + inner[0] + ".</div><div>" + inner[1] + "</div>";
    }

    if (/\|drop\|/g.test(inner)) {
      inner = inner.replace(/\|drop\|/g, '<div class="drop"></div>');
    }

    paragraph.innerHTML = inner;
    paragraph.style.display = "flex";
    paragraph.style.alignItems = "flex-start";
    paragraph.style.margin = "8px 0 0";

    textBox.appendChild(paragraph);

    if (idx === 1 || idx === 2) {
      paragraph.querySelector("div").style.transform = "translateY(" + dropTopDiff + "px)";
    }
  });

  // 표 생성
  if (TABLE_DATA.length) {
    createTable(bgCanvas);
  }

  // for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
  //   var circleText = createElement("div", bgCanvas, "circleText circleText_" + i);
  //   circleText.innerHTML = gameManager.QUIZ_OPTION[i];
  // }

  // drop style 지정
  var drops = document.querySelectorAll(".drop");
  drops.forEach(function (el, idx) {
    el.style.display = "inline-block";
    el.style.width = DRAG_ELEMENT_SIZES[0] * DRAG_ELEMENT_SIZE_RATIO + "px";
    el.style.height = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO + "px";
  });

  function getDropRealRect(drop) {
    var canvas = document.querySelector("#bgCanvas");
    var canvasRect = bgCanvas.getBoundingClientRect();
    var dropRect = drop.getBoundingClientRect();
    return {
      left: dropRect.left - canvasRect.left,
      top: dropRect.top - canvasRect.top,
    };
  }
          
  fixDropAreaRect(window, 200, 20);
  
  function fixDropAreaRect(_window, _interval, _repeatance) {
    console.log('>> fixDropAreaRect', arguments);

    var interval = _interval || 200;
    var repeatance = _repeatance || 50;
    var intervalId;
    var cnt = 0;
  
    intervalId = setInterval(intervalFnc, interval);
  
    function intervalFnc() {
      console.log('>> fixDropAreaRect.intervalFnc', cnt);
  
      cnt++;
  
      if (cnt >= repeatance) {
        clearInterval(intervalId);
      }

      for (var i = 0, dropArea; i < DROP_POSITIONS_ARRAY.length; i++) {
        // dropPositions = DROP_POSITIONS_ARRAY[i];
        dropArea = document.querySelector(".dropArea_" + i);
  
        // if (drops && drops.length) {
          dropArea.style.left = getDropRealRect(drops[i]).left + "px";
          dropArea.style.top = getDropRealRect(drops[i]).top + dropTopDiff + "px";
        // } else {
        //   dropArea.style.left = dropPositions[0] + "px";
        //   dropArea.style.top = dropPositions[1] + "px";
        // }
  
        // dropArea.style.width = DRAG_ELEMENT_SIZES[0] * DRAG_ELEMENT_SIZE_RATIO + "px";
        // dropArea.style.height = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO + "px";
        // dropArea.style.backgroundSize = "contain";
  
        // answerValue = gameManager.QUIZ_ANSWER[i];
        // dropArea.setAttribute("answerValue", answerValue);
  
        // gameManager.dropArea.push(dropArea);
      }
    }
  }

  // 드롭 영역 생성
  // setTimeout(function () {
    for (var i = 0, dropPositions, dropArea, answerValue; i < DROP_POSITIONS_ARRAY.length; i++) {
      dropPositions = DROP_POSITIONS_ARRAY[i];
      dropArea = createElement("div", bgCanvas, "dropArea dropArea_" + i);

      // if (drops && drops.length) {
      //   dropArea.style.left = getDropRealRect(drops[i]).left + "px";
      //   dropArea.style.top = getDropRealRect(drops[i]).top + dropTopDiff + "px";
      // } else {
      //   dropArea.style.left = dropPositions[0] + "px";
      //   dropArea.style.top = dropPositions[1] + "px";
      // }

      dropArea.style.width = DRAG_ELEMENT_SIZES[0] * DRAG_ELEMENT_SIZE_RATIO + "px";
      dropArea.style.height = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO + "px";
      dropArea.style.backgroundSize = "contain";

      answerValue = gameManager.QUIZ_ANSWER[i];
      dropArea.setAttribute("answerValue", answerValue);

      gameManager.dropArea.push(dropArea);
    }
  // }, 100);

  // switch (intX) {
  //   case 1:
  //     circleText.setAttribute("style", "top:234px; left:330px;");
  //     dropArea.setAttribute("style", "top:362px; left:438px;");
  //     break;
  //   case 2:
  //     circleText.setAttribute("style", "top:397px; left:489px;");
  //     dropArea.setAttribute("style", "top:232px; left:198px;");
  //     break;
  //   case 3:
  //     circleText.setAttribute("style", "top:432px; left:408px;");
  //     dropArea.setAttribute("style", "top:232px; left:198px;");
  //     break;
  //   case 4:
  //     circleText.setAttribute("style", "top:422px; left:460px;");
  //     dropArea.setAttribute("style", "top:232px; left:197px;");
  //     break;
  // }

  appendSelectQuestion("drag", DRAG_DATAS);
}

function gameOver(currentObj) {
  var quizObjContainer = document.querySelector(".quizObjContainer").childNodes;

  for (var i = 0; i < quizObjContainer.length; i++) {
    quizObjContainer[i].style.pointerEvents = "none";
  }

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);

  setTimeout(function () {
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
  }, 700);

  // save starIcon
  // setTimeout(function() {
  // 	log('excute stampStarIcon!');
  // 	// parent.window.stampStarIcon();
  // }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2300);
}

// 드래그 아이템 생성
function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas");
  var quizObjContainer = createElement("div", bgCanvas, "quizObjContainer");
  var line = document.createElement("div");
  var choiceLeft = 350;
  var choiceLeftDiff = 220;
  var choiceTop = 560;

  if (choiceQuestionArray.length === 2) {
    choiceLeft = 480;
    choiceLeftDiff = 220;
  }

  for (var i = 0, dragObj, height, dragPositions, left, top; i < choiceQuestionArray.length; i++) {
    dragObj = createElement("div", quizObjContainer, "dragObj dragObj_" + i);
    height = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO;
    dragPositions = DRAG_POSITIONS_ARRAY[i];
    left = dragPositions[0];
    top = dragPositions[1];

    // if (i) {
    //   choiceLeft += choiceLeftDiff;
    // }

    // choiceTop = choiceTop + 180;

    // dragObj.setAttribute("style", "left: 860px; Top:" + choiceTop + "px;");
    dragObj.style.left = left + "px";
    dragObj.style.top = top + "px";
    dragObj.style.width = DRAG_ELEMENT_SIZES[0] * DRAG_ELEMENT_SIZE_RATIO + "px";
    dragObj.style.height = height + "px";
    dragObj.style.backgroundSize = "contain";
    dragObj.style.fontSize = "35px";
    dragObj.style.lineHeight = height + "px";

    dragObj.innerHTML = choiceQuestionArray[i];

    dragObj.setAttribute("answerValue", choiceQuestionArray[i]);

    gameManager.quizPosition.push([top, left]);

    if (buttonType === "drag") {
      new Dragdrop(dragObj);
    } else {
      dragObj.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          log("click");
          compareAnswer(this);
        },
        false
      );
    }
  }
}

// 표 생성
function createTable(parentElement) {
  var TABLE_TITLE = TABLE_DATA[0];
  var TABLE_CELL_DATAS_ARRAY = TABLE_DATA[1];
  var TABLE_POSITIONS = TABLE_DATA[2];
  var TABLE_STYLES = TABLE_DATA[3];

  var width = DRAG_ELEMENT_SIZES[0] * DRAG_ELEMENT_SIZE_RATIO + "px";
  var height = DRAG_ELEMENT_SIZES[1] * DRAG_ELEMENT_SIZE_RATIO + "px";
  var margin = (TABLE_STYLES && TABLE_STYLES.margin) || 4;
  var fontSize = (TABLE_STYLES && TABLE_STYLES.fontSize) || 35;

  var tableElement = document.createElement("div");
  var titleElement = document.createElement("div");

  tableElement.style.position = "absolute";
  tableElement.style.left = TABLE_POSITIONS[0] + "px";
  tableElement.style.top = TABLE_POSITIONS[1] + "px";
  tableElement.style.background = "white";
  tableElement.style.fontSize = fontSize + "px";
  tableElement.style.textAlign = "center";

  titleElement.style.lineHeight = "2";
  titleElement.innerHTML = TABLE_TITLE;
  tableElement.appendChild(titleElement);

  TABLE_CELL_DATAS_ARRAY.forEach(function (tableCellDatas, rowIdx) {
    console.log(tableCellDatas);

    var tableRowElement = document.createElement("div");
    tableRowElement.style.display = "flex";

    // if (rowIdx === 0) {
    //   tableRowElement.style.background = TABLE_HEADER_COLOR;
    // }

    tableCellDatas.forEach(function (tableCellData, cellIdx) {
      var tableCellElement = document.createElement("div");
      var tableCellTextElement = document.createElement("div");

      tableCellElement.style.marginTop = margin + "px";
      tableCellElement.style.marginLeft = margin + "px";

      if (rowIdx === TABLE_CELL_DATAS_ARRAY.length - 1) {
        tableCellElement.style.marginBottom = margin + "px";
      }

      if (cellIdx === tableCellDatas.length - 1) {
        tableCellElement.style.marginRight = margin + "px";
      }

      tableCellTextElement.style.display = "flex";
      tableCellTextElement.style.alignItems = "center";
      tableCellTextElement.style.justifyContent = "center";
      tableCellTextElement.style.width = width;
      tableCellTextElement.style.height = height;
      tableCellTextElement.style.borderRadius = "4px";
      tableCellTextElement.innerHTML = tableCellData;

      if (rowIdx === 0 || (rowIdx !== 0 && cellIdx === 0)) {
        tableCellTextElement.style.background = TABLE_HEADER_COLOR;
      }

      tableCellElement.appendChild(tableCellTextElement);
      tableRowElement.appendChild(tableCellElement);
    });

    tableElement.appendChild(tableRowElement);
  });

  parentElement.appendChild(tableElement);
}

// override dropCompare
function dropCompare(dragObj, x, y) {
  var dragObjValue = dragObj.getAttribute("answervalue");

  console.log("dropCompare", dragObjValue);

  for (var i = 0; i < gameManager.dropArea.length; i++) {
    var dropValue = gameManager.dropArea[i].getAttribute("answervalue");
    dropValue = dropValue.split(",");

    if (
      x > gameManager.dropArea[i].offsetLeft * gameManager.zoomRate &&
      x < gameManager.dropArea[i].offsetLeft * gameManager.zoomRate + (gameManager.dropArea[i].clientWidth + 10) * gameManager.zoomRate &&
      y > gameManager.dropArea[i].offsetTop * gameManager.zoomRate &&
      y < gameManager.dropArea[i].offsetTop * gameManager.zoomRate + (gameManager.dropArea[i].clientHeight + 10) * gameManager.zoomRate
    ) {
      if (dragObjValue !== "한" && dropValue[0] !== "한") {
        gameManager.dropIdx = i;
        return true;
      }
      for (var j = 0; j < dropValue.length; j++) {
        if (dragObjValue == dropValue[j]) {
          gameManager.dropIdx = i;
          return true;
        }
      }
      return false;
    }
  }
}
