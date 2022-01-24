function initScene() {
  // log('initScene...');
  // log(gameManager.CURRENT_ANSWER);
  // log(gameManager.TOTAL_ANSWER_ARRAY);

  // log('excute initClockTimer!');
  // parent.window.initClockTimer();

  appendCircleElement("answerObject_1", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("answerObject_2", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("answerObject_3", "circle", document.getElementById("bgCanvas"));
  appendImageElement("hangerBar", "images/hanger_bar.png", document.getElementById("bgCanvas"));

  var circleAnswer = document.querySelector("#answerObject_1");
  triangleAnswer = document.querySelector("#answerObject_2");
  finalAnswer = document.querySelector("#answerObject_3");

  var answerPosition = [170, 275, 380, 485, 590, 695, 800, 905, 1010];
  var answer0 = gameManager.CURRENT_ANSWER[0],
    answer1 = gameManager.CURRENT_ANSWER[1],
    answer2 = gameManager.CURRENT_ANSWER[2];

  circleAnswer.setAttribute("style", "top:81px; left: " + answerPosition[answer0 - 1] + "px");
  triangleAnswer.setAttribute("style", "top:81px; left: " + answerPosition[answer1 - 1] + "px");
  finalAnswer.setAttribute("style", "top:81px; left: " + answerPosition[answer2 - 1] + "px");

  setRand(1, 3, 3);
  gameManager.hangerImgArray = [
    "images/hanger_hanger_" + randResult[0] + ".png",
    "images/hanger_hanger_" + randResult[1] + ".png",
    "images/hanger_hanger_" + randResult[2] + ".png",
  ];
  appendSelectQuestion("drag", gameManager.choiceQuestion, gameManager.hangerImgArray);

  var dotNum = gameManager.TOTAL_ANSWER_ARRAY[0] + ".";
  circleAnswer.setAttribute("candleValue", dotNum + gameManager.CURRENT_ANSWER[0]);
  triangleAnswer.setAttribute("candleValue", dotNum + gameManager.CURRENT_ANSWER[1]);
  finalAnswer.setAttribute("candleValue", dotNum + gameManager.CURRENT_ANSWER[2]);

  var Hanger = document.getElementById("Hanger");
  for (var i = 0; i < 11; i++) {
    appendImageElement("hanger_" + i, "images/hanger_bar_point.png", Hanger, "Hanger");
    document.querySelector("#hanger_" + i).setAttribute("style", "position: relative; margin-left: 65px;");
  }
}

function setRand(min, max, number) {
  randResult = new Array();
  randList = new Array();
  for (var z = min; z <= max; z++) {
    randList.push(z);
  }
  for (var x = 0; x < number; x++) {
    getRand();
  }
  return randResult;
}

function getRand(dragObj) {
  randNumber = Math.floor(Math.random() * randList.length);
  randResult.push(randList[randNumber]);
  randList.splice(randNumber, 1);
}

function minority() {
  appendCircleElement("startNum", "Num", document.getElementById("bgCanvas"));
  appendCircleElement("endNum", "Num", document.getElementById("bgCanvas"));

  startNum.setAttribute("style", "left: 125px;top: 119px;");
  endNum.setAttribute("style", "right: 80px;top: 119px;");

  startNum.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];
  endNum.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0] + 1;
}

function returnCurrentObj(dragObj) {
  var answerValue = dragObj.getAttribute("answerValue");

  for (var i = 1; i < gameManager.CURRENT_ANSWER.length + 1; i++) {
    if (answerValue === document.querySelector("#answerObject_" + i).getAttribute("candleValue")) {
      return document.querySelector("#answerObject_" + i);
    }
  }
}

function gameOver(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  streamSound.setSound("../include/media/correct.mp3");
  // logCounter.tryCounter();
  // logCounter.endTime();
  clearInterval(countTimer);
  gameOverAnimation();

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
}

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceTop = 450,
    choiceLeft = -70;

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

      var imgIndex = parseInt(Math.random() * 3);

      log(imgIndex);
      appendImageElement("choiceQuestion_" + i, imgSrcArray[i], choiceQuestionGroup);
      currentQuestion = document.querySelector("#choiceQuestionGroup_" + i);
      currentQuestion.className = className[0] + "s";
    } else {
      appendCircleElement("choiceQuestion_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
      currentQuestion = document.querySelector("#choiceQuestion_" + i);
    }

    choiceLeft = choiceLeft + 330;

    currentQuestion.setAttribute("style", "left: " + choiceLeft + "px; Top: " + choiceTop + "px;");

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 0px;");
      imgObjText.innerHTML = gameManager.choiceQuestionText[i];

      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      currentQuestion.innerHTML = gameManager.choiceQuestion[i];
      //여기를 읽어욤...
    }

    currentQuestion.setAttribute("answerValue", gameManager.choiceQuestion[i]);

    gameManager.choiceQuestionPosition.push([choiceTop, choiceLeft]);

    if (buttonType === "drag") {
      new Dragdrop(currentQuestion);
      //여기를 읽어욤...
    } else {
      currentQuestion.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          log("click");
          contrastAnswer(this);
        },
        false
      );
    }
  }
}

function puzzleCompareAnswer(dragObj, arrayNum) {
  dragObj.className += " correct";
  var correct = document.querySelectorAll(".correct");

  if (correct.length === gameManager.CURRENT_ANSWER.length) {
    setTimeout(function () {
      gameOver(dragObj);
    }, 400);
  }
}
