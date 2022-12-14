function initScene() {
  console.log("oxArrowSceneElement...");
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  createElement("div", document.querySelector("#bgCanvas"), "content");

  for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
    var dropArea = createElement("div", document.querySelector("#bgCanvas"), "dropArea");
    var answerValue = gameManager.QUIZ_ANSWER[i];
    dropArea.setAttribute("answerValue", answerValue);
    gameManager.dropArea.push(dropArea);
  }
  console.log(gameManager.dropArea);
  createElement("div", document.querySelector(".content"), "question");
  appendQuiz("drag", gameManager.quizText);
}

function initObject(randomCount) {
  console.log("oxArrowSceneGetElement...");

  var content = document.querySelector(".content");
  var question = document.querySelector(".question");
  var dropArea = document.querySelector(".dropArea");
  var imageObject = gameManager.QUIZ_OPTION[3];

  content.setAttribute("style", 'background:url("images/oxArrow_note_' + randomCount + '.png") no-repeat;');
  dropArea.setAttribute("style", "top:250px; left:580px;");
  question.innerHTML = gameManager.quizConvertNumber[0];

  if (imageObject) {
    console.log(imageObject);

    var width = imageObject.width || 990;
    var height = imageObject.height || 310;
    var marginTop = 80;
    var marginBottom = 60;

    if (width) {
      content.style.width = width + "px";
      question.style.width = "auto";
    }

    if (height) {
      content.style.height = height + "px";
      question.style.height = "100%";
    }

    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.backgroundSize = "100% 100%";
    content.style.margin = "60px auto";

    question.style.margin = marginTop + "px 0 " + marginBottom + "px";
    question.style.width = "auto";
    question.style.height = "auto";

    var imageElement = document.createElement("img");
    imageElement.src = imageObject.source;
    imageElement.style.flexShrink = "0";
    imageElement.style.width = "auto";
    imageElement.style.height = "calc(100% - " + (marginTop + marginBottom) + "px)";
    imageElement.style.margin = marginTop + "px 20px " + marginBottom + "px";

    content.insertBefore(imageElement, question);

    if (height === 430) {
      content.style.marginTop = '30px';
    }
  }
}

function appendQuiz(buttonType, quizText) {
  var quizObjContainer = document.createElement("div"),
    choiceLeft = 330,
    choiceTop = 498;

  quizObjContainer.setAttribute("id", "quizObjContainer");

  var bgCanvas = document.querySelector("#bgCanvas");
  bgCanvas.appendChild(quizObjContainer);

  for (var i = 0; i < quizText.length; i++) {
    createElement("div", quizObjContainer, "choiceQuizImg_" + i);
    var choiceQuizImg = document.querySelector(".choiceQuizImg_" + i);
    choiceQuizImg.className = "choiceQuizImg_" + i;
    choiceQuizImg.setAttribute("style", 'background:url("' + gameManager.quizImgArray[i] + '") no-repeat;' + "top:" + choiceTop + "px; left:" + choiceLeft + "px;");
    choiceQuizImg.setAttribute("answerValue", gameManager.quizText[i]);

    gameManager.quizPosition.push([choiceTop, choiceLeft]);
    choiceLeft += 400;

    choiceQuizImg.addEventListener('mouseup', onChoiceQuizImgUp, false);
    // choiceQuizImg.addEventListener('touchend', onChoiceQuizImgUp, false);

    function onChoiceQuizImgUp() {
      clickCompareAnswer(this);
    }
  }
}

function gameOver(clickObj) {
  arrowAnimate(clickObj);
  var quizObjContainer = document.querySelector("#quizObjContainer").childNodes;

  for (var i = 0; i < quizObjContainer.length; i++) {
    quizObjContainer[i].style.pointerEvents = "none";
  }

  // logCounter.tryCounter();
  // logCounter.endTime();
  clearInterval(countTimer);

  setTimeout(function () {
    streamSound.setSound("../include/media/correct.mp3");
    gameOverAnimation();
  }, 800);

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

function arrowAnimate(clickObj) {
  var currentTop = parseInt(clickObj.style.top.replace("px", "")),
    currentLeft = parseInt(clickObj.style.left.replace("px", "")),
    dropArea = document.querySelector(".dropArea");

  if (clickObj.className == "choiceQuizImg_1") {
    animate({
      delay: 40,
      duration: 800,
      delta: makeEaseInOut(quint),
      step: function (delta) {
        var top, left, rotate;
        top = currentTop - 240 * delta;
        left = currentLeft - 150 * delta;
        rotate = -5;

        clickObj.style.left = left + "px";
        clickObj.style.top = top + "px";
        clickObj.style.transform = "rotate(" + rotate + "deg)";
      },
    });
  } else {
    animate({
      delay: 40,
      duration: 800,
      delta: makeEaseInOut(quint),
      step: function (delta) {
        var top, left, rotate;
        top = currentTop - 240 * delta;
        left = currentLeft + 150 * delta;
        rotate = 5;

        clickObj.style.left = left + "px";
        clickObj.style.top = top + "px";
        clickObj.style.transform = "rotate(" + rotate + "deg)";
      },
    });
  }
}
