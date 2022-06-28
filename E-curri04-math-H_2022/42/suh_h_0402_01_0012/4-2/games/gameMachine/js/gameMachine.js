var btnTxtTop = 19;
var btnTxtFontSize = 50;

function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var machine = document.getElementById("machine");

  appendCircleElement("questionTxt", "questionTxt", machine);
  appendCircleElement("question", "question", machine);

  var questionTxt = document.querySelector("#questionTxt"),
    question = document.querySelector("#question");

  question.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];
  questionTxt.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[gameManager.TOTAL_ANSWER_ARRAY.length - 1];

  if (gameManager.TOTAL_ANSWER_ARRAY[1].toString().length >= 4 || gameManager.TOTAL_ANSWER_ARRAY[2].toString().length >= 4) {
    btnTxtTop = 25;
    btnTxtFontSize = 48;
  }
}

function initMachine(machineCounter) {
  log("initMachine...");

  var machine = document.getElementById("machine"),
    top = 353,
    left = 62;

  for (var i = 0; i < machineCounter; i++) {
    var eventCallback = function () {
      arguments[0].preventDefault();

      feedBackAnimation(this);
    };
    createObject(i, top, left, eventCallback, "images/gamemachine_btn" + i + "_0.png");
    left = left + 181;
  }
}

function gameOver() {
  gameOverAnimation();
  streamSound.setSound("../include/media/correct.mp3");

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

function createObject(index, top, left, eventCallback, parentObjSrc) {
  var btnWrap = document.createElement("div"),
    btnTxt = document.createElement("div"),
    parentObj = document.createElement("img");

  parentObj.src = parentObjSrc;

  btnWrap.setAttribute("id", "btnWrap_" + index);

  btnWrap.setAttribute("answerValue", gameManager.TOTAL_ANSWER_ARRAY[index + 1]);
  btnWrap.setAttribute("style", "position:absolute; top:" + top + "px; left : " + left + "px;");

  btnTxt.className = "btnTxt";

  btnWrap.className = "btnWrap";
  parentObj.className = "machineBtn";

  btnTxt.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[index + 1];
  btnTxt.style.top = btnTxtTop + "px";
  btnTxt.style.fontSize = btnTxtFontSize + "px";

  btnWrap.appendChild(btnTxt);
  btnWrap.appendChild(parentObj);

  btnWrap.addEventListener('mousedown', eventCallback, false);
  // btnWrap.addEventListener('touchstart', eventCallback, false);

  document.getElementById("machine").appendChild(btnWrap);
}

function feedBackAnimation(parentObj, callback) {
  var parentObjId = parentObj.id;
  parentObjId = parentObjId.split("_");
  parentObjId = parentObjId.slice(parentObjId.length - 1);

  var answerValue = parentObj.getAttribute("answervalue"),
    parentHitSrc = "images/gamemachine_btn" + parentObjId + "_1.png",
    parentOriSrc = "images/gamemachine_btn" + parentObjId + "_0.png",
    parentObjTxt = parentObj.childNodes[0],
    parentObjImg = parentObj.childNodes[1],
    btns = document.querySelectorAll(".btnWrap");

  parentObjTxt.style.top = "25px";
  parentObjImg.src = parentHitSrc;

  if (gameManager.CURRENT_ANSWER[0] === answerValue) {
    streamSound.setSound("media/click.mp3");
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.pointerEvents = "none";
    }
    setTimeout(function () {
      parentObjTxt.style.top = btnTxtTop + "px";
      parentObjTxt.style.fontSize = btnTxtFontSize + "px";
      parentObjImg.src = "images/gamemachine_btn" + parentObjId + "_2.png";
    }, 250);
    setTimeout(function () {
      gameOver();
    }, 800);
  } else {
    streamSound.setSound("../include/media/incorrect.mp3");
    setTimeout(function () {
      parentObjTxt.style.top = btnTxtTop + "px";
      parentObjTxt.style.fontSize = btnTxtFontSize + "px";
      parentObjImg.src = parentOriSrc;
    }, 250);
  }

  // logCounter.tryCounter();
}
