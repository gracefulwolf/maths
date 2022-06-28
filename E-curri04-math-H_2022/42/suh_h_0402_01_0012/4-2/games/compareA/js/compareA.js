function initScene() {
  log("initScene...");
  // log(gameManager.QUIZ_ANSWER);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var questionBox = createElement("div", bgCanvas, "questionBox");
  questionBox.innerHTML = gameManager.QUIZ_OPTION[0];

  var currentQuestion = document.getElementById("currentQuestion");
  var fish = createElement("div", currentQuestion, "fish");
  fish.style.top = "100px";
  fish.style.display = "none";

  appendChoiceQuestion("click", gameManager.quizObj);

  if (gameManager.QUIZ_ANSWER[0] === "42-5-06.svg") {
    questionBox.style.left = "50%";
    questionBox.style.width = "650px";
    questionBox.style.backgroundSize = "100% 160px";
    questionBox.style.letterSpacing = "-0.05em";
    questionBox.style.transform = "translateX(-50%)";
  }
}

function gameOver(currentObj) {
  var clickContainer = document.querySelector(".clickContainer").childNodes;

  for (var i = 0; i < clickContainer.length; i++) {
    clickContainer[i].style.pointerEvents = "none";
  }
  var fish = document.querySelector(".fish"),
    currentTop = parseInt(fish.style.top.replace("px", ""));

  fish.style.position = "absolute";
  fish.style.display = "block";
  fish.style.left = "70px";
  fish.style.top = "210px";
  fish.style.backgroundImage = "url(./images/checkmark.png)";
  fish.style.zIndex = "1";

  // animate({
  //   delay: 20,
  //   duration: 400,
  //   delta: makeEaseOut(circ),
  //   step: function (delta) {
  //     fish.style.display = "block";
  //     // fish.style.top = currentTop + 220 * delta + "px";
  //     fish.style.zIndex = 2;
  //     fish.style.opacity = 1 - 0.5 * delta;
  //   },
  // });

  streamSound.setSound("media/orgel.mp3");

  setTimeout(function () {
    gameOverAnimation();
    // logCounter.tryCounter();
    // logCounter.endTime();
    streamSound.setSound("../include/media/correct.mp3");
  }, 1000);

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
  }, 1800);
}

function appendChoiceQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    clickContainer = createElement("div", bgCanvas, "clickContainer"),
    line = document.createElement("div"),
    choiceTop = 0;

  switch (gameManager.quizObj.length) {
    case 2:
      choiceLeft = -200;
      break;
    case 3:
      choiceLeft = -310;
      break;
  }

  var questionBox = document.querySelector(".questionBox");
  questionBox.style.fontSize = "35px";

  var clickContainer = document.querySelector(".clickContainer");
  clickContainer.style.top = "0";
  clickContainer.style.left = "0";
  clickContainer.style.width = "auto";
  clickContainer.style.height = "auto";

  var top = 300;
  var height = 320;

  for (var i = 0, quizObj; i < choiceQuestionArray.length; i++) {
    choiceLeft = choiceLeft + 460;
    quizObj = gameManager.quizObj[i];

    // var short = createElement("div", clickContainer, "waterTank waterTank_" + i);
    var frameElement = createElement("div", clickContainer, "frame frame_" + i);
    var imageElement = createElement("img", frameElement, "waterTank waterTank_" + i);

    frameElement.style.background = "url(./images/4-2-frame.png) center / contain no-repeat";
    frameElement.style.position = "absolute";
    frameElement.style.left = choiceLeft - 70 + "px";
    frameElement.style.top = top - 50 + "px";
    frameElement.style.width = 425 + "px";
    frameElement.style.height = 430 + "px";
    frameElement.style.textAlign = "center";
    // short.style.background = "url(images/compareA_water_tank_" + gameManager.quizObj[i] + ".png) no-repeat";
    imageElement.src = "images/" + quizObj;
    // short.style.left = choiceLeft + "px";
    // imageElement.style.left = choiceLeft + "px";
    // imageElement.style.top = top + "px";
    imageElement.style.width = "auto";
    imageElement.style.height = height + "px";
    imageElement.style.margin = "50px 0 0 25px";
    imageElement.style.verticalAlign = "top";
    imageElement.style.position = "static";
    imageElement.style.top = "auto";

    // var waterTank = document.querySelectorAll(".waterTank");
    frameElement.setAttribute("answerValue", gameManager.quizObj[i]);
    gameManager.quizPosition.push([top - 50, choiceLeft - 70]);

    if (buttonType === "drag") {
      new Dragdrop(waterTank);
    } else {
      frameElement.addEventListener(
        "click",
        function () {
          log("click");
          clickCompareAnswer(this);

          var currentQuestion = document.getElementById("currentQuestion");
          currentQuestion.style.left = this.style.left;
        },
        false
      );
    }
  }
}
