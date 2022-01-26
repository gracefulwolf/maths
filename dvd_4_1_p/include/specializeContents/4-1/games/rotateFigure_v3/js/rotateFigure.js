function initScene() {
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var isImgMode = gameManager.QUIZ_OPTION[0][0] === 7;

  var bgCanvas = document.getElementById("bgCanvas");
  var board = createElement("div", bgCanvas, "board");

  var quizImgFormat = isImgMode ? "img" : "div";
  var quizImg = createElement(quizImgFormat, bgCanvas, "quizImg");
  var imgExt = isImgMode ? "svg" : "png";
  var imgSrc = "images/flatFigure_" + gameManager.QUIZ_OPTION[0][0] + "_" + gameManager.QUIZ_OPTION[0][1];
  if (isImgMode) {
    imgSrc += "_bg";
  }
  imgSrc += "." + imgExt;

  var rotateLeft;

  if (gameManager.QUIZ_OPTION[0][0] == 5) {
    quizImg.style.width = "217px";
    quizImg.style.height = "217px";
  } else {
    quizImg.style.width = "220px";
    quizImg.style.height = "220px";
  }

  if (isImgMode) {
    quizImg.src = imgSrc;
    quizImg.style.width = "auto";
  } else {
    quizImg.style.background = "url(" + imgSrc + ") no-repeat";
    quizImg.style.transform = "rotate(" + gameManager.QUIZ_OPTION[0][2] + "deg)";
  }

  if (gameManager.QUIZ_OPTION[0][1] === 8) {
    quizImg.style.left = "370px";
  } else if (gameManager.QUIZ_OPTION[0][1] === 9) {
    quizImg.style.left = "360px";
  }

  if (gameManager.QUIZ_OPTION[1].length == 1) {
    rotateLeft = 482;
  } else {
    rotateLeft = 425;
  }

  if (!isImgMode) {
    for (var i = 0; i < gameManager.QUIZ_OPTION[1].length; i++) {
      rotate = createElement("div", bgCanvas, "rotation rotation_" + i);

      rotateLeft = i ? 730 : 465;

      rotate.style.background = "url(images/rotateFigure_rotateSymbol_" + gameManager.QUIZ_OPTION[1][i] + ".png) no-repeat";
      rotate.style.backgroundSize = "cover";
      rotate.style.left = rotateLeft + "px";
      if (i == 0) {
        if (gameManager.QUIZ_OPTION[1][0] == "x") {
          setElTransformStyle(rotate, "rotateX(180deg)");
          // rotate.style.WebkitTransform = "rotateX(180deg)";
          // rotate.style.mozTransform = "rotateX(180deg)";
          // rotate.style.msTransform = "rotateX(180deg)";
          // rotate.style.oTransform = "rotateX(180deg)";
          // rotate.style.transform = "rotateX(180deg)";
        } else if (gameManager.QUIZ_OPTION[1][0] == "y") {
          setElTransformStyle(rotate, "rotate(90deg)");
          // rotate.style.WebkitTransform = "rotate(90deg)";
          // rotate.style.mozTransform = "rotate(90deg)";
          // rotate.style.msTransform = "rotate(90deg)";
          // rotate.style.oTransform = "rotate(90deg)";
          // rotate.style.transform = "rotate(90deg)";
        }
      }
    }
  } else {
    if (gameManager.QUIZ_OPTION[0][1] === 4) {
      quizImg.style.height = "270px";
      quizImg.style.top = "105px";
    }
  }

  for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
    var dropArea = createElement("div", bgCanvas, "dropArea_" + i);
    var answerValue = gameManager.QUIZ_ANSWER[i];
    var dropAreaTop = 128;
    var dropAreaLeft = i ? 780 : 560;

    if (gameManager.QUIZ_OPTION[0][1] === 6) {
      dropAreaLeft = 500;
    } else if (gameManager.QUIZ_OPTION[0][1] === 8) {
      dropAreaTop = 130;
      dropAreaLeft = 690;
    } else if (gameManager.QUIZ_OPTION[0][1] === 9) {
      dropAreaTop = 130;
      dropAreaLeft = 487;
    }

    // if (isImgMode) {
    dropArea.setAttribute("style", "background: url(images/flatFigure_questionBox_" + 6 + ".png)");
    // } else {
    // dropArea.setAttribute("style", "background: url(images/flatFigure_questionBox_" + gameManager.QUIZ_OPTION[0][0] + "." + isImgMode ? "svg" : "png" + ")");
    // }
    dropArea.setAttribute("answerValue", answerValue);
    gameManager.dropArea.push(dropArea);
    dropArea.style.top = dropAreaTop + "px";
    dropArea.style.left = dropAreaLeft + "px";

    if (gameManager.QUIZ_OPTION[0][0] === 7) {
      if (gameManager.QUIZ_OPTION[0][1] === 4) {
        dropArea.style.width = "270px";
        dropArea.style.height = "270px";
      }
    }
  }

  appendSelectQuestion("drag", gameManager.quizObj);
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
  }, 200);

  // save starIcon
  setTimeout(function () {
    log("excute stampStarIcon!");
    // parent.window.stampStarIcon();
  }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2300);

  // dropArea 숨기기
  document.querySelector(".dropArea_0").style.display = "none";
}

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas");
  var quizObjContainer = createElement("div", bgCanvas, "quizObjContainer");
  var choiceTop = 460;
  var choiceLeft = -190;
  var imgExt = gameManager.QUIZ_OPTION[0][0] === 7 ? "svg" : "png";

  if (gameManager.QUIZ_OPTION[0][1] === 4) {
    choiceTop = 430;
  }

  for (var i = 0; i < 3; i++) {
    // console.log(gameManager.quizObj);

    var dragObj = createElement("div", quizObjContainer, "dragObj dragObj_" + i),
      dragImg = document.createElement("img");

    dragObj.appendChild(dragImg);
    dragImg.setAttribute("src", "images/flatFigure_" + gameManager.QUIZ_OPTION[0][0] + "_" + gameManager.QUIZ_OPTION[0][1] + "_" + (i + 1).toString() + "." + imgExt);
    choiceLeft = choiceLeft + 350;

    // dragObj.style.width = "220px";
    // dragObj.style.height = "220px";
    dragImg.style.width = "220px";
    dragImg.style.height = "220px";

    dragObj.setAttribute("style", " top: " + choiceTop + "px; left: " + choiceLeft + "px;");
    setElTransformStyle(dragObj, "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)");
    //       dragObj.style.WebkitTransform = "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)";
    // dragObj.style.mozTransform = "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)";
    // dragObj.style.msTransform = "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)";
    // dragObj.style.oTransform = "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)";
    // dragObj.style.transform = "rotate(" + gameManager.QUIZ_OPTION[i + 2][1] + "deg)";

    if (gameManager.QUIZ_OPTION[i + 2][0] == "x" || gameManager.QUIZ_OPTION[i + 2][0] == "y") {
      setElTransformStyle(dragImg, "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)");
      //     dragImg.style.WebkitTransform = "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)";
      // dragImg.style.mozTransform = "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)";
      // dragImg.style.msTransform = "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)";
      // dragImg.style.oTransform = "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)";
      // dragImg.style.transform = "rotate" + gameManager.QUIZ_OPTION[i + 2][0] + "(180deg)";
    }
    dragObj.setAttribute("answerValue", i);

    gameManager.quizPosition.push([choiceTop, choiceLeft]);

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

    // customize dragObj
    if (gameManager.QUIZ_OPTION[0][0] === 7) {
      if (gameManager.QUIZ_OPTION[0][1] === 4) {
        dragImg.style.width = "270px";
        dragImg.style.height = "270px";
      }
    }
  }
}

// override dropCompare
function dropCompare(dragObj, x, y) {
  var dragObjValue = dragObj.getAttribute("answervalue");

  for (var i = 0; i < gameManager.dropArea.length; i++) {
    var dropValue = gameManager.dropArea[i].getAttribute("answervalue");
    dropValue = dropValue.split(",");

    if (
      x > gameManager.dropArea[i].offsetLeft * gameManager.zoomRate &&
      x < gameManager.dropArea[i].offsetLeft * gameManager.zoomRate + (gameManager.dropArea[i].clientWidth + 10) * gameManager.zoomRate &&
      y > gameManager.dropArea[i].offsetTop * gameManager.zoomRate &&
      y < gameManager.dropArea[i].offsetTop * gameManager.zoomRate + (gameManager.dropArea[i].clientHeight + 10) * gameManager.zoomRate
    ) {
      for (var j = 0; j < dropValue.length; j++) {
        // 1번 문제의 경우, 첫 번째 드래그요소만 아니면 정답 처리
        if (gameManager.QUIZ_OPTION[0][1] === 1) {
          if (dragObjValue !== "0") {
            gameManager.dropIdx = i;
            return true;
          }
        }

        if (dragObjValue == dropValue[j]) {
          gameManager.dropIdx = i;
          return true;
        }
      }
      return false;
    }
  }
}

// override correctPosition
function correctPosition(dragObj) {
  var correct_left = 0;
  var correct_top = 0;
  // console.log("correctPosition 호출!!!");
  // if (gameManager.QUIZ_TYPE == "connectTrain") {
  //   dragObj.style.top = parseInt(gameManager.dropArea[gameManager.dropIdx].style.top.replace("px", "")) + "px";
  //   dragObj.style.left = parseInt(gameManager.dropArea[0].style.left.replace("px", "")) + 315 * (gameManager.dabCount - 1) + "px";
  // } else {

  // customize correct
  if (gameManager.QUIZ_OPTION[0][0] === 7) {
    if (gameManager.QUIZ_OPTION[0][1] === 6) {
      // correct_left = -3;
      // correct_top = -3;
    }
  }

  dragObj.style.top = parseInt(gameManager.dropArea[gameManager.dropIdx].style.top.replace("px", "")) + correct_top + "px";
  dragObj.style.left = parseInt(gameManager.dropArea[gameManager.dropIdx].style.left.replace("px", "")) + correct_left + "px";
  // }

  dragObj.style.pointerEvents = "none";
}

// set element transform style
function setElTransformStyle(el, transformStyle) {
  el.style.WebkitTransform = transformStyle;
  el.style.mozTransform = transformStyle;
  el.style.msTransform = transformStyle;
  el.style.oTransform = transformStyle;
  el.style.transform = transformStyle;
}
