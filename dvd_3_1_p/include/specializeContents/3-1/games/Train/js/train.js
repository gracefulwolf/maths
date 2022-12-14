function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var trainBlank = parseInt(Math.random() * 2),
    trainContainer = document.getElementById("trainContainer");

  appendImageElement("trainRoad", "images/train_road.png", document.querySelector("#bgObject"));
  //appendImageElement('answerObject', 'images/trainAnswer_' + trainBlank + '.png', trainContainer, 'trainAnswer');
  appendImageElement("answerObject", "images/train2_question_0.png", trainContainer, "trainAnswer");
  //train2_question_0
  appendImageElement("trainEqual", "images/train_symbol_4.png", trainContainer);
  log("gameManager.trainSymbolIndex" + gameManager.trainSymbolIndex);
  appendImageElement("trainSymbol", gameManager.trainSymbolArray[gameManager.trainSymbolIndex], trainContainer);

  for (var i = 0; i < gameManager.trainTextArray.length; i++) {
    var trainRandom = parseInt(Math.random() * 4);
    appendImageElement("train_" + i, "images/train_" + (trainRandom + 1) + ".png", trainContainer, "trainAnswer");
    document.querySelector("#train_" + i).setAttribute("style", "top:" + gameManager.trainPosition[i][0] + "px; left:" + gameManager.trainPosition[i][1] + "px;");

    var trainText = document.createElement("div");

    trainText.innerHTML = gameManager.trainTextArray[i];
    trainText.className = "trainText";
    trainText.setAttribute("style", "top:" + (gameManager.trainPosition[i][0] + 30) + "px; left:" + (gameManager.trainPosition[i][1] + 20) + "px;");

    trainContainer.appendChild(trainText);
  }

  var circleAnswer = document.querySelector("#answerObject");
  circleAnswer.setAttribute("style", "top: 281px; left: 838px;");

  appendChoiceQuestion("drag", gameManager.choiceQuestion, gameManager.trainHeadArray);
  //trainSymbolArray
  //appendChoiceQuestion('drag', gameManager.choiceQuestion, gameManager.trainHeadArray);
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
  trainContainer.style.left = "3px";

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
