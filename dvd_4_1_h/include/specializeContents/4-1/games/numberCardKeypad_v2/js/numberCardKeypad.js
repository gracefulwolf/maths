function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();
  appendCircleElement("question", "question", document.getElementById("keypad"));
  appendCircleElement("answer", "answer", document.getElementById("keypad"));

  keypadAppend();
}

function initKeypad() {
  log("initKeypad...");

  var question = document.querySelector("#question");
  var answer = document.querySelector("#answer");

  var questionDatas = gameManager.TOTAL_ANSWER_ARRAY[0];

  questionDatas.forEach(function (questionData) {
    var paragraph = document.createElement("p");

    questionData = questionData.replace(/ \- /g, ' <img src="./images/symbol_-.png" style="width: 30px;" /> ');
    questionData = questionData.replace(/ \+ /g, ' <img src="./images/symbol_+.png" style="width: 30px;" /> ');
    questionData = questionData.replace(/ \* /g, ' <img src="./images/symbol_multi.png" style="width: 30px;" /> ');
    questionData = questionData.replace(/ div /g, ' <img src="./images/symbol_div.png" style="width: 30px;" /> ');

    paragraph.innerHTML = questionData;

    question.appendChild(paragraph);
  });

  var answerData = gameManager.TOTAL_ANSWER_ARRAY[1];
  var answerPos = answerData[0];
  var answerSize = answerData[1];

  answer.style.left = answerPos[0] + "px";
  answer.style.top = answerPos[1] + "px";
  answer.style.width = answerSize[0] + "px";
  answer.style.height = answerSize[1] + "px";
  answer.style.lineHeight = answerSize[1] + "px";

  // customize
  if (gameManager.CURRENT_ANSWER[0] === 3333) {
    question.style.top = "210px";
  } else if (gameManager.CURRENT_ANSWER[0] === 998001) {
    question.style.top = "190px";
    question.style.fontSize = "40px";
    answer.style.fontSize = "40px";
  } else if (gameManager.CURRENT_ANSWER[0] === 1234321) {
    question.style.top = "200px";
    question.style.fontSize = "36px";
    answer.style.fontSize = "36px";
  } else if (gameManager.CURRENT_ANSWER[0] === 444444444) {
    question.style.top = "200px";
    question.style.fontSize = "34px";
    answer.style.fontSize = "34px";
  }
}

function gameOver() {
  if (gameManager.CURRENT_ANSWER[0] === parseInt(answer.innerHTML)) {
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
    clearInterval(countTimer);
    // logCounter.endTime();

    var keypadContainerGroup = document.querySelector("#keypadContainerGroup").childNodes;

    for (var i = 0; i < keypadContainerGroup.length; i++) {
      keypadContainerGroup[i].style.pointerEvents = "none";
    }

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
  } else {
    streamSound.setSound("../include/media/incorrect.mp3");
    answer.innerHTML = "";
  }
  // logCounter.tryCounter();
}

function keypadAppend() {
  var bgCanvas = document.getElementById("keypad"),
    keypadContainer = document.createElement("div"),
    keypadContainerGroup = document.createElement("div");

  keypadContainer.setAttribute("id", "keypadContainer");
  bgCanvas.appendChild(keypadContainer);

  keypadContainerGroup.setAttribute("id", "keypadContainerGroup");

  for (var i = 0; i < gameManager.keypadImgArray.length; i++) {
    var currentQuestion;
    if (gameManager.keypadImgArray) {
      var className = gameManager.keypadImgArray[0].split("/");
      className = className[className.length - 1];
      className = className.split("_");

      createObject(i, gameManager.keypadImgArray[i], gameManager.keypadImgHoverArray[i], keypadContainerGroup);
      keypadContainer.appendChild(keypadContainerGroup);

      currentQuestion = document.querySelector("#keypadContainerGroup");
      currentQuestion.className = className[0];
    }
  }
}

function createObject(index, keyObjSrc, keyHoverSrc, targetElement) {
  var keyObj = document.createElement("img");

  keyObj.src = keyObjSrc;
  index = index + 1;

  keyObj.setAttribute("id", "keyObj_" + index);
  keyObj.className = "key";

  keypadDown = function (e) {
    e.preventDefault();
    keyObj.src = keyHoverSrc;
    streamSound.setSound("./media/keyClick.mp3");
  };
  keypadUp = function (e) {
    writeNumber(this);
    e.preventDefault();
    keyObj.src = keyObjSrc;
  };

  keyObj.addEventListener('mousedown', keypadDown, false);
  // keyObj.addEventListener('touchstart', keypadDown, false);
  keyObj.addEventListener('mouseup', keypadUp, false);
  // keyObj.addEventListener('touchend', keypadUp, false);

  targetElement.appendChild(keyObj);
}

function writeNumber(keyObj) {
  var maxLength = gameManager.CURRENT_ANSWER[0].toString().length;
  var keyObj = keyObj;
  var keyNum = keyObj.id.split("_");
  keyNum = keyNum.slice(keyNum.length - 1);
  keyNum = parseInt(keyNum);

  console.log(keyObj);
  console.log(keyNum);

  switch (keyNum) {
    case 10:
      answer.innerHTML = "";
      break;
    case 11:
      if (answer.innerHTML.length === maxLength) return;
      answer.innerHTML = answer.innerHTML + 0;
      break;
    case 12:
      gameOver();
      break;
    default:
      if (answer.innerHTML.length === maxLength) return;
      answer.innerHTML = parseInt(answer.innerHTML + keyNum);
  }
}
