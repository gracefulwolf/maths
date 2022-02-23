function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  // 선택창
  appendChoiceQuestion("click", gameManager.choiceQuestion);

  drawQuestion();
  // positioningChecks();
  drawImages();

  log(gameManager.choiceQuestionBg);
}

function initExercise(fruitsCounter, exerciseContainer) {
  log("initFruits...");

  var left = 30;
  var comparisonAnswer_0 = gameManager.TOTAL_ANSWER_ARRAY[0];
  var comparisonAnswer_1 = gameManager.TOTAL_ANSWER_ARRAY[1];
  var comparisonAnswer;
  var fruitsOriginal;
  var fruitsSlice;

  //Min, Max, Number
  setRand(1, 3, 3);

  if (comparisonAnswer_0 > comparisonAnswer_1) {
    comparisonAnswer = comparisonAnswer_0;
  } else {
    comparisonAnswer = comparisonAnswer_1;
  }

  log(comparisonAnswer + "위치값");

  fruitsOriginal = "images/ball_" + randResult[0] + ".png";
  fruitsOriginalexe = "images/ball_" + randResult[1] + ".png";

  for (var i = 0; i < fruitsCounter; i++) {
    var top = 260,
      eventCallback = function () {
        arguments[0].preventDefault();
        feedBackAnimation(this, function () {});
      };
    createObject(i, top, left, eventCallback, fruitsOriginal);
  }

  for (var i = 0; i < exerciseContainer; i++) {
    var topExE = 520,
      eventCallbackExe = function () {
        arguments[0].preventDefault();
        feedBackAnimationExe(this, function () {});
      };
    createobjexe(i, top, left, eventCallbackExe, fruitsOriginalexe);
  }

  var fruitsContainer = document.getElementById("fruitsContainer");
  var containerWidth = 1002;
  var bgCanvasLeft = gameManager.bgCanvasWidth - gameManager.clientWidth * gameManager.zoomRate;
  var containerLeft = gameManager.bgCanvasWidth - containerWidth - 210;

  fruitsContainer.setAttribute("style", "width:" + containerWidth + "px; top:" + top + "px; left:" + containerLeft / 2.1 + "px;");

  var ballBox = document.createElement("img");

  appendImageElement("picSelectBox01", "images/picSelectBox.png", document.querySelector("#fruitsContainer")); // (id/img/appendChild)

  var exerciseContainer = document.getElementById("exerciseContainer");

  exerciseContainer.setAttribute("style", "width:" + containerWidth + "px; top:" + topExE + "px; left:" + containerLeft / 2.1 + "px;");

  appendImageElement("picSelectBox01", "images/picSelectBox.png", document.querySelector("#exerciseContainer"));
}

function gameOver(currentObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  var fruitsContainer = document.querySelectorAll(".fruits");

  for (var i = 0; i < fruitsContainer.length; i++) {
    fruitsContainer[i].style.pointerEvents = "none";
  }

  gameOverAnimation();
  streamSound.setSound("../include/media/correct.mp3");

  document.querySelector("#currentQuestion").setAttribute("style", "display:block; top:" + (currentObj.offsetTop + 30) + "px; left:" + (currentObj.offsetLeft + 30) + "px;");

  // logCounter.tryCounter();
  // logCounter.endTime();
  // setTimeout(function() {
  // 	log('excute stampStarIcon!');
  // 	parent.window.stampStarIcon();
  // }, 500);
  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 1800);
}

function onParentObjUp() {
  document.querySelector("#numberPanel").setAttribute("style", "display:none;");
}

function createObject(index, top, left, eventCallback, parentObjSrc) {
  var parentObj = document.createElement("img");

  parentObj.src = parentObjSrc;

  parentObj.setAttribute("id", "parentObj_" + index);
  parentObj.className = "fruits";

  parentObj.setAttribute("style", "padding-top: 15px; padding-left : " + left / 2 + "px; padding-right : " + left / 2 + "px;");

  parentObj.addEventListener('mousedown', eventCallback, false);
  // parentObj.addEventListener('touchstart', eventCallback, false);
  parentObj.addEventListener('mouseup', onParentObjUp, false);
  // parentObj.addEventListener('touchend', onParentObjUp, false);

  log(top);

  document.getElementById("fruitsContainer").appendChild(parentObj);
}

function onParentObjExUp() {
  document.querySelector("#numberPanelEx").setAttribute("style", "display:none;");
}

function createobjexe(index, top, left, eventCallback, parentObjSrc) {
  var parentObjEx = document.createElement("img");

  parentObjEx.src = parentObjSrc;

  parentObjEx.setAttribute("id", "parentObjEx_" + index);
  parentObjEx.className = "fruits";

  parentObjEx.setAttribute("style", "padding-top: 15px; padding-left : " + left / 2 + "px; padding-right : " + left / 2 + "px;");

  parentObjEx.addEventListener('mousedown', eventCallback, false);
  // parentObjEx.addEventListener('touchstart', eventCallback, false);
  parentObjEx.addEventListener('mouseup', onParentObjExUp, false);
  // parentObjEx.addEventListener('touchend', onParentObjExUp, false);

  document.getElementById("exerciseContainer").appendChild(parentObjEx);
}

function feedBackAnimation(parentObj, parentObjSrc, callback) {
  // parentObj.src = parentObjSrc;

  var checkNumber = false,
    objId = parentObj.id.split("_");

  log(objId + "aaaaaaaaaaaaaaaaaa");

  for (var i = 0; i < gameManager.selectedQuestion.length; i++) {
    if (objId[1] === gameManager.selectedQuestion[i]) {
      checkNumber = true;
    }
  }

  var top = 0,
    currentTop = 30;

  animate({
    delay: 20,
    duration: 800,
    delta: makeEaseOut(elastic),
    step: function (delta) {
      parentObj.style.top = -currentTop * delta + +(currentTop + top) + "px";
      //parentObj.style.left = gameManager.choiceDessertPosition[parentObj[1]][1] + 'px';
    },
  });

  if (!checkNumber) gameManager.selectedQuestion.push(objId[1]);

  var numberPanel = document.querySelector("#numberPanel"),
    leftMargin = gameManager.choiceQuestion.length * 100;
  //152

  // numberPanel.setAttribute('style', 'display:block; top : -28px; left:' + (parentObj.offsetLeft + 21) + 'px;');
  // numberPanel.innerHTML = gameManager.selectedQuestion.length;

  // var soundSrcNum = gameManager.selectedQuestion.length < 10 ? '0' + gameManager.selectedQuestion.length : gameManager.selectedQuestion.length;

  if (gameManager.SoundSrcType === "numberVoice") streamSound.setSound("media/balloon01.mp3");
  else streamSound.setSound("media/balloon01.mp3");

  setTimeout(function () {
    // callback();
  }, 200);
}

function feedBackAnimationExe(parentObjEx, parentObjSrc, callback) {
  // parentObj.src = parentObjSrc;

  var checkNumber = false,
    objId = parentObjEx.id.split("_");

  log(objId + "aaaaaaaaaaaaaaaaaa");

  for (var i = 0; i < gameManager.selectedQuestionNum.length; i++) {
    if (objId[1] === gameManager.selectedQuestionNum[i]) {
      checkNumber = true;
    }
  }

  var top = 0,
    currentTop = 30;

  animate({
    delay: 20,
    duration: 800,
    delta: makeEaseOut(elastic),
    step: function (delta) {
      parentObjEx.style.top = -currentTop * delta + +(currentTop + top) + "px";
      //parentObj.style.left = gameManager.choiceDessertPosition[parentObj[1]][1] + 'px';
    },
  });

  if (!checkNumber) gameManager.selectedQuestionNum.push(objId[1]);

  var numberPanelEx = document.querySelector("#numberPanelEx"),
    leftMargin = gameManager.choiceQuestion.length * 100;
  //152

  // numberPanelEx.setAttribute('style', 'display:block; top : -28px; left:' + (parentObjEx.offsetLeft + 21) + 'px;');
  // numberPanelEx.innerHTML = gameManager.selectedQuestionNum.length;

  // var soundSrcNum = gameManager.selectedQuestionNum.length < 10 ? '0' + gameManager.selectedQuestionNum.length : gameManager.selectedQuestionNum.length;

  if (gameManager.SoundSrcType === "numberVoice") streamSound.setSound("media/balloon01.mp3");
  else streamSound.setSound("media/balloon01.mp3");

  setTimeout(function () {
    // callback();
  }, 200);
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

function getRand() {
  randNumber = Math.floor(Math.random() * randList.length);
  randResult.push(randList[randNumber]);
  randList.splice(randNumber, 1);
}

// 질문 생성
function drawQuestion() {
  var QUESTION = gameManager.TOTAL_ANSWER_ARRAY[4];
  var questionElement = document.createElement("div");
  questionElement.id = "question";
  questionElement.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[4];
  questionElement.style.background = "url(./images/questioningBox.png) center / 100% 100% no-repeat";
  document.querySelector("#bgCanvas").appendChild(questionElement);
}

// 선택 항목 위치 조정
// function positioningChecks() {
//   var POSITIONS_ARRAY = [
//     [1080, 220],
//     [1080, 480],
//   ];
//   for (var i = 0, checkElement, positions; i < 2; i++) {
//     checkElement = document.querySelector("#choiceQuestion_" + i);
//     positions = POSITIONS_ARRAY[i];
//     checkElement.style.left = positions[0] + "px";
//     checkElement.style.top = positions[1] + "px";
//   }
// }

// 이미지 생성
function drawImages() {
  var IMAGE_DATAS = [gameManager.TOTAL_ANSWER_ARRAY[0], gameManager.TOTAL_ANSWER_ARRAY[1]];

  IMAGE_DATAS.forEach(function (imageData, idx) {
    var imgLeft = 230;
    var imgTop = 180;
    var imgTopDiff = 260;
    var imgWidth = 800;
    var imgHeight = 220;
    var imgMt = 10;
    var imgSrc = imageData[0];
    var imgPositions = imageData[1];
    // var imgHeight = imageData[2];

    var imageContainerElement = document.createElement("div");
    var imageElement = document.createElement("img");

    imageContainerElement.classList.add("imageContainer");
    imageContainerElement.style.boxSizing = "border-box";
    imageContainerElement.style.position = "absolute";
    imageContainerElement.style.left = imgLeft + "px";
    imageContainerElement.style.top = imgTop + imgTopDiff * idx + "px";
    imageContainerElement.style.width = imgWidth + "px";
    imageContainerElement.style.height = imgHeight + "px";
    imageContainerElement.style.borderBottom = "4px solid #cccccc";
    imageContainerElement.style.borderRadius = "8px";
    imageContainerElement.style.background = "#fff";
    imageContainerElement.style.textAlign = "center";

    imageElement.src = imgSrc;
    imageElement.style.width = "auto";
    imageElement.style.height = imageData[2] + "px";
    imageElement.style.marginTop = (imgHeight - imageData[2]) / 2 + "px";
    imageElement.style.verticalAlign = "middle";

    imageContainerElement.appendChild(imageElement);
    document.querySelector("#bgCanvas").appendChild(imageContainerElement);
  });
}
