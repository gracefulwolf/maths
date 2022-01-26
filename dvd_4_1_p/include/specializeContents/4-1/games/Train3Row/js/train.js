function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var trainBlank = parseInt(Math.random() * 2),
    trainContainer = document.getElementById("trainContainer");

  appendImageElement("trainRoad", "images/train_road.png", document.querySelector("#bgObject"));
  appendImageElement("answerObject", "images/trainAnswer_" + trainBlank + ".png", trainContainer, "trainAnswer");
  appendImageElement("trainHead", "images/train_0.png", trainContainer);

  for (var i = 0, inner; i < gameManager.trainTextArray.length; i++) {
    inner = gameManager.trainTextArray[i];
    var trainRandom = parseInt(Math.random() * 4);
    appendImageElement("train_" + i, "images/train_" + (trainRandom + 1) + ".png", trainContainer, "trainAnswer");
    document.querySelector("#train_" + i).setAttribute("style", "top:" + gameManager.trainPosition[i][0] + "px; left:" + gameManager.trainPosition[i][1] + "px;");

    var trainText = document.createElement("div");

    trainText.innerHTML = inner;
    trainText.className = "trainText";
    trainText.setAttribute("style", "top:" + (gameManager.trainPosition[i][0] + 30) + "px; left:" + (gameManager.trainPosition[i][1] + 40) + "px;");

    trainContainer.appendChild(trainText);
  }

  var circleAnswer = document.querySelector("#answerObject");
  // circleAnswer.setAttribute("style", "top: 216px; left: 554px;");
  circleAnswer.setAttribute("style", "top: 216px; left: 692px;");

  appendChoiceQuestion("drag", gameManager.choiceQuestion, gameManager.trainImgArray);

  // trainText font size 변경
  var trainTexts = document.querySelectorAll(".trainText");
  for (var len = trainTexts.length, i = 0, trainText; i < len; i++) {
    trainText = trainTexts[i];

    if (trainText.innerText.length === 4) {
      trainText.style.fontSize = "35px";
      trainText.style.lineHeight = "50px";
    } else if (trainText.innerText.length === 5) {
      trainText.style.fontSize = "28px";
      trainText.style.lineHeight = "50px";
    }
  }
}

function gameOver(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  gameOverAnimation();
  document.querySelector("#answerObject").style.display = "none";
  streamSound.setSound("media/trainStart.mp3");

  var trainContainer = document.getElementById("trainContainer");
  trainContainer.style.left = "0px";

  var currentLeft = parseInt(trainContainer.style.left),
    dragObjCurrentLeft = parseInt(dragObj.style.left),
    left = 1200;

  setTimeout(function () {
    animate({
      delay: 20,
      duration: 2000,
      delta: makeEaseInOut(quad),
      step: function (delta) {
        trainContainer.style.left = left * delta + currentLeft + "px";
        dragObj.style.left = left * delta + dragObjCurrentLeft + "px";
      },
    });
  }, 500);

  // logCounter.tryCounter();
  // logCounter.endTime();

  // setTimeout(function () {
  // 	log('excute stampStarIcon!');
  //     parent.window.stampStarIcon();
  // }, 500);
  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2200);
}
