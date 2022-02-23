var isUpperFourLength;

function initScene(randomCount) {
  isUpperFourLength = gameManager.quizText.some(function (each) {
    return each.toString().length > 3;
  });

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  console.log("sentenceCompleteSceneElement...");
  createElement("div", document.querySelector("#bgCanvas"), "content");
  createElement("div", document.querySelector(".content"), "question");

  for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
    var dropArea = createElement("div", document.querySelector("#bgCanvas"), "dropArea");
    dropArea.setAttribute("answerValue", gameManager.QUIZ_ANSWER[i]);
    gameManager.dropArea.push(dropArea);
  }
  appendQuiz("drag", gameManager.quizText, randomCount);
}

function initObject(randomCount) {
  console.log("sentenceCompleteSceneGetElement...");

  var content = document.querySelector(".content"),
    question = document.querySelector(".question"),
    dropArea = document.querySelector(".dropArea");

  content.setAttribute("style", 'background:url("images/sentenceComplete_note_' + randomCount + '.png") center / 100% 100% no-repeat;');
  question.innerHTML = gameManager.quizConvertNumber[0] + "<div class='drop'></div>" + gameManager.quizConvertNumber[1];

  // customize
  if (/돌린 도형과 같습니다/g.test(gameManager.quizConvertNumber[1])) {
    question.style.lineHeight = "60px";
  }

  var drop = QS(".drop");

  if (isUpperFourLength) {
    drop.style.background = "url(images/centenceComplete_textBox_q.png) no-repeat";
    drop.style.width = "262px";
  } else {
    drop.style.background = "url(images/sentenceComplete_textBox_s_q.png) no-repeat";
    drop.style.width = "162px";
  }

  if ((gameManager.QUIZ_OPTION[6] && gameManager.QUIZ_OPTION[6].type === "image") || (gameManager.quizText.length === 3 && gameManager.QUIZ_OPTION[5] && gameManager.QUIZ_OPTION[5].type === "image")) {
    var imageObject = gameManager.QUIZ_OPTION[gameManager.quizText.length === 3 ? 5 : 6];
    var imageSource = imageObject.source;
    var imagePosition = imageObject.position;
    var imageElement = document.createElement("img");
    var width = imageObject.width;
    var height = imageObject.height;
    var padding = 40;
    imageElement.src = imageSource;
    imageElement.style.width = "auto";
    imageElement.style.height = "calc(100%)";
    // imageElement.style.margin = margin + "px 10px " + margin + "px " + margin + "px";
    imageElement.style.float = imagePosition;
    // question.style.lineHeight = "1.2";
    if (width) {
      content.style.width = width + "px";
      question.style.width = "calc(" + width + "px - " + padding * 2 + "px)";
    } else {
      question.style.width = "calc(100% - " + padding * 2 + "px)";
    }

    if (height) {
      content.style.height = height + "px";
      question.style.height = "calc(" + height + "px - " + padding * 2 + "px)";

      if (height >= 380) {
        content.style.marginTop = "55px";
      }
    } else {
      question.style.height = "calc(100% - " + padding * 2 + "px)";
    }

    question.style.padding = padding + "px";
    drop.style.height = "113px";
    question.insertBefore(imageElement, question.firstChild);

    // if (imageSource === "./images/41-5-03.svg") {
    //   question.innerHTML = "<div style='display: inline'><span style='display: inline-block; width: 1px; height: 1px; margin-top: 100px;'></span>" + question.innerHTML + "</div>";
    // }
  }
          
  fixDropAreaRect();

  // setTimeout(function () {
  //   dropArea.setAttribute("style", "top:" + drop.offsetTop + "px;" + "left:" + drop.offsetLeft + "px; width : " + drop.clientWidth + "px; height : " + drop.clientHeight + "px;");
  // }, 100);
}

function appendQuiz(buttonType, quizText, randomCount) {
  var quizObjContainer = document.createElement("div");
  var choiceLeft = 0;
  var choiceLeftDiff = 0;
  var choiceTop = 530;

  if (isUpperFourLength) {
    if (gameManager.quizText.length === 3) {
      choiceLeft = 180;
      choiceLeftDiff = 320;
    } else {
      choiceLeft = 60;
      choiceLeftDiff = 282;
    }
  } else {
    if (gameManager.quizText.length === 3) {
      choiceLeft = 240;
      choiceLeftDiff = 310;
    } else {
      choiceLeft = 200;
      choiceLeftDiff = 220;
    }
  }

  quizObjContainer.setAttribute("id", "quizObjContainer");
  bgCanvas.appendChild(quizObjContainer);

  for (var i = 0; i < quizText.length; i++) {
    createElement("div", quizObjContainer, "choiceQuizText_" + i);
    var choiceQuizText = document.querySelector(".choiceQuizText_" + i);

    console.log(isUpperFourLength); /*else {*/
    choiceQuizText.setAttribute("style", 'background:url("images/sentenceComplete_textBox_s_' + randomCount + '.png") no-repeat;' + "top :" + choiceTop + "px; left:" + choiceLeft + "px;");
    choiceQuizText.setAttribute("answerValue", gameManager.quizText[i]);
    choiceQuizText.innerHTML = gameManager.quizText[i];

    gameManager.quizPosition.push([choiceTop, choiceLeft]);
    choiceLeft += choiceLeftDiff;

    if (isUpperFourLength) {
      // choiceQuizText.setAttribute("style", 'background:url("images/centenceComplete_textBox_' + randomCount + '.png") no-repeat;' + "top :" + choiceTop + "px; left:" + choiceLeft + "px;");
      choiceQuizText.style.width = "262px";
      choiceQuizText.style.backgroundImage = "url(images/centenceComplete_textBox_" + randomCount + ".png";
      // choiceQuizText.setAttribute("answerValue", gameManager.quizText[i]);
      // choiceQuizText.innerHTML = gameManager.quizText[i];

      // gameManager.quizPosition.push([choiceTop, choiceLeft]);
      // choiceLeft += choiceLeftDiff;
    }

    if (buttonType === "drag") {
      new Dragdrop(choiceQuizText);
    }
  }
}

function gameOver(dragObj) {
  var quizObjContainer = document.querySelector("#quizObjContainer").childNodes;

  for (var i = 0; i < quizObjContainer.length; i++) {
    quizObjContainer[i].style.pointerEvents = "none";
  }

  document.querySelector(".drop").style.visibility = "hidden";

  // logCounter.tryCounter();
  // logCounter.endTime();
  clearInterval(countTimer);

  setTimeout(function () {
    streamSound.setSound("../include/media/correct.mp3");
    gameOverAnimation();
  }, 500);

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

function fixDropAreaRect(_drop, _dropArea, _additionalRef) {
  console.log('>> fixDropAreaRect', arguments);

  var drop = _drop || document.querySelector('.drop');
  var dropArea = _dropArea || document.querySelector('.dropArea');
  var additionalRef = _additionalRef || null;
  var interval = 100;
  var repeatance = 20;
  var intervalId;
  var cnt = 0;

  intervalId = setInterval(intervalFnc, interval);

  function intervalFnc() {

    console.log('>> fixDropAreaRect.intervalFnc', cnt);

    cnt++;

    if (cnt >= repeatance) {
      clearInterval(intervalId);
    }

    if (!(drop && dropArea)) {
      return;
    }

    var refLeft = drop.offsetLeft;
    var refTop = drop.offsetTop;
    var refWidth = drop.clientWidth;
    var refHeight = drop.clientHeight;

    var left = dropArea.offsetLeft;
    var top = dropArea.offsetTop;
    var width = dropArea.clientWidth;
    var height = dropArea.clientHeight;

    if (additionalRef) {
      refLeft += additionalRef.offsetLeft;
      refTop += additionalRef.offsetTop;
    }

    if (refLeft !== left) {
      dropArea.style.left = refLeft + 'px';
      cnt = 0;
    }

    if (refTop !== top) {
      dropArea.style.top = refTop + 'px';
      cnt = 0;
    }

    if (refWidth !== width) {
      dropArea.style.width = refWidth + 'px';
      cnt = 0;
    }

    if (refHeight !== height) {
      dropArea.style.height = refHeight + 'px';
      cnt = 0;
    }
  }
}
