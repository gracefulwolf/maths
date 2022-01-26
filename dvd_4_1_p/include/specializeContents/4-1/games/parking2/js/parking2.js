// override
function compareAnswer(dragObj) {
  log(dragObj.getAttribute("answerValue"));

  if (gameManager.CURRENT_ANSWER[0] === dragObj.getAttribute("answerValue")) {
    //getAttribute = 요소의 클래스 속성의 값을 가져옴
    //parseInt = 문자열을 구문 분석하고 정수를 반환합니다.

    log("@ correct!!");
    gameOver(dragObj);
    // switch (gameManager.CURRENT_TYPE) {
    // case 'colorpencilRibbon':
    // 	if(!gameManager.flag){
    // 		Pensilposi();
    // 	}
    // 	gameOver(dragObj);
    // 	break;
    // }
  } else {
    log("@ incorrect!!");
    incorrectAnimation(dragObj);
    streamSound.setSound("../include/media/incorrect.mp3");

    switch (gameManager.CURRENT_TYPE) {
      case "frog":
        log("@ frog!");
        streamSound.setSound("../include/media/incorrect.mp3");
        break;
    }

    // logCounter.tryCounter();
  }
}

function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER_TEXT);

  appendCircleElement("answerObject", "rect", document.getElementById("bgCanvas"));
  appendCircleElement("question1", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("question2", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("question3", "circle", document.getElementById("bgCanvas"));

  appendChoiceQuestion("drag", gameManager.choiceQuestion);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();
}

function initNumber() {
  log("initNumber...");

  var Num1 = gameManager.TOTAL_ANSWER_ARRAY[1],
    Num2 = gameManager.TOTAL_ANSWER_ARRAY[2],
    Num3 = gameManager.TOTAL_ANSWER_ARRAY[3],
    Question1 = document.querySelector("#question1"),
    Question2 = document.querySelector("#question2"),
    Question3 = document.querySelector("#question3"),
    numpadBg = document.createElement("div"),
    circleAnswer = document.querySelector("#answerObject"),
    // questionLeftValue = 620,
    questionLeftValue = 705,
    answerLeftValue = 700;

  if (gameManager.CURRENT_ANSWER[0] == Num1) {
    answerPosition = 1;
    Question1.setAttribute("style", "top:160px; left: " + answerLeftValue + "px;");
    circleAnswer.setAttribute("style", "top:100px; left: " + answerLeftValue + "px;");
  } else if (gameManager.CURRENT_ANSWER[0] == Num2) {
    answerPosition = 2;
    Question2.setAttribute("style", "top:350px; left: " + answerLeftValue + "px;");
    circleAnswer.setAttribute("style", "top:290px; left: " + answerLeftValue + "px;");
  } else if (gameManager.CURRENT_ANSWER[0] == Num3) {
    answerPosition = 3;
    Question3.setAttribute("style", "top:540px; left: " + answerLeftValue + "px;");
    circleAnswer.setAttribute("style", "top:479px; left: " + answerLeftValue + "px");
  }

  numpadBg.setAttribute("id", "numpadBg");

  bgCanvas.appendChild(numpadBg);

  Question1.setAttribute("style", "top:160px; left: " + questionLeftValue + "px;");
  Question2.setAttribute("style", "top:350px; left: " + questionLeftValue + "px;");
  Question3.setAttribute("style", "top:540px; left: " + questionLeftValue + "px;");

  Question1.innerHTML = Num1;
  Question2.innerHTML = Num2;
  Question3.innerHTML = Num3;
}

function initBus(busimg) {
  log("initBus...");

  var left = 30,
    bus_imgs;

  switch (BusTypes) {
    case 0:
      bus_imgs = "images/parking_bus_1.png";
      break;
    case 1:
      bus_imgs = "images/parking_bus_2.png";
      break;
    case 2:
      bus_imgs = "images/parking_bus_3.png";
      break;
  }

  for (var i = 0; i < busimg; i++) {
    var eventCallback = function () {
      arguments[0].preventDefault();
    };
    if (busimg <= 5) fruitsTop = 50;
    else fruitsTop = 5;
  }
  createObject(i, left, eventCallback, bus_imgs);
}

function createObject(index, left, eventCallback, parentObjSrc) {
  var parentObj = document.createElement("img"),
    parentObj_text = document.createElement("div");

  parentObj_text.setAttribute("id", "parentObj_text");

  parentObj.src = parentObjSrc;

  parentObj.addEventListener('mousedown', eventCallback, false);
  // parentObj.addEventListener('touchstart', eventCallback, false);
  parentObj_text.addEventListener('mousedown', eventCallback, false);
  // parentObj_text.addEventListener('touchstart', eventCallback, false);

  document.getElementById("choiceQuestion_0").appendChild(parentObj);
  document.getElementById("choiceQuestion_0").appendChild(parentObj_text);

  parentObj_text.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];

  if (gameManager.TOTAL_ANSWER_ARRAY[0].length >= 7) {
    parentObj_text.style.fontSize = "35px";

    if (gameManager.TOTAL_ANSWER_ARRAY[0].length >= 8) {
      parentObj_text.style.fontSize = "24px";

      if (gameManager.TOTAL_ANSWER_ARRAY[0].length >= 10) {
        parentObj_text.style.fontSize = "20px";
      }
    }
  }
}

function gameOver(dragObj, x, y) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  var choiceQuestion = document.getElementById("choiceQuestion_0"),
    choiceQuestionLeft = parseInt(choiceQuestion.style.left),
    dragObjchoiceQuestionLeft = parseInt(dragObj.style.left),
    left = 170;
  // left = 250;

  // clearInterval(countTimer);
  gameOverAnimation();
  // logCounter.tryCounter();
  // logCounter.endTime();
  streamSound.setSound("media/carsound.mp3");

  setTimeout(function () {
    animate({
      duration: 1000,
      delta: makeEaseInOut(quad),
      step: function (delta) {
        choiceQuestion.style.left = left * delta + choiceQuestionLeft + "px";
        dragObj.style.left = left * delta + dragObjchoiceQuestionLeft + "px";
      },
    });
  }, 500);

  // setTimeout(function() {
  // 	log('excute stampStarIcon!');
  // 	parent.window.stampStarIcon();
  // }, 500);

  // save log data
  setTimeout(function () {
    // log('excute insDrillHis!');
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2000);
}

function appendChoiceQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceLeft = 0;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceTop = 240;
      break;
    case 2:
      choiceTop = 150;
      break;
    case 3:
      choiceTop = -100;
      break;
    case 4:
      choiceTop = -50;
      break;
    case 5:
      choiceTop = -150;
      break;
  }

  choiceQuestionContainer.setAttribute("id", "choiceQuestionContainer");
  bgCanvas.appendChild(choiceQuestionContainer);

  for (var i = 0; i < choiceQuestionArray.length; i++) {
    var currentQuestion;
    if (imgSrcArray) {
      var choiceQuestionGroup = document.createElement("div"),
        className = imgSrcArray[0].split("/");
      className = className[className.length - 1];
      className = className.split("_");

      choiceQuestionGroup.setAttribute("id", "choiceQuestionGroup_" + i);
      choiceQuestionContainer.appendChild(choiceQuestionGroup);

      log(imgIndex);
      appendImageElement("choiceQuestion_" + i, imgSrcArray[imgIndex], choiceQuestionGroup);
      currentQuestion = document.querySelector("#choiceQuestionGroup_" + i);
      currentQuestion.className = className[0];

      /*	if (imgSrcArray[1] !== undefined) {

			 addIdleSprite(200, 100, document.querySelector('#choiceQuestion_' + i), gameManager.fishImgArray);
			 }*/
    } else {
      appendCircleElement("choiceQuestion_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
      currentQuestion = document.querySelector("#choiceQuestion_" + i);
    }

    choiceTop = choiceTop + 200;

    currentQuestion.setAttribute("style", "top: " + 279 + "px; left: 200px;");

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = gameManager.choiceQuestionText[i];

      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      // currentQuestion.innerHTML = gameManager.choiceQuestion[i];
    }

    currentQuestion.setAttribute("answerValue", gameManager.choiceQuestion[i]);

    gameManager.choiceQuestionPosition.push([279, 200]);

    if (buttonType === "drag") {
      new Dragdrop(currentQuestion);
    } else {
      currentQuestion.addEventListener(
        "click",
        function () {
          log("click");
          compareAnswer(this);
        },
        false
      );
    }
  }
}

function incorrectAnimation(dragObj) {
  var dragObjId = dragObj.id;
  dragObjId = dragObjId.split("_");

  var left = gameManager.choiceQuestionPosition[dragObjId[1]][1],
    currentLeft = parseInt(dragObj.style.left.replace("px", ""));

  logCounter.tryCounter();
  if (gameManager.CURRENT_TYPE === "click" || gameManager.CURRENT_TYPE === "train") currentLeft = 100;
  streamSound.setSound("../../media/incorrect.mp3");

  animate({
    delay: 20,
    duration: 800,
    delta: makeEaseOut(elastic),
    step: function (delta) {
      dragObj.style.left = -currentLeft * delta + +(currentLeft + left) + "px";
      dragObj.style.top = gameManager.choiceQuestionPosition[dragObjId[1]][0] + "px";
    },
  });
}
