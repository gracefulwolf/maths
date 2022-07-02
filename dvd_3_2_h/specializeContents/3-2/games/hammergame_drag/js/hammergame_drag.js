function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);
  log(gameManager.TOTAL_ANSWER_ARRAY);

  // log('excute initClockTimer!');
  // parent.window.initClockTimer();
  appendCircleElement("answerText", "answerText", bgCanvas);
  appendCircleElement("doganswerText", "doganswerText", answerText);
  appendCircleElement("hammerAni", "hammerAni", document.getElementById("bgCanvas"));
  doganswerText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[gameManager.TOTAL_ANSWER_ARRAY.length - 1];
  doganswerText.setAttribute("style", "width:386px; position:absolute; top:108px; color:#fff; font-size:40px;");

  appendImageElement("machineHammer", "images/hammergame_machine.png", document.querySelector("#store"));
  appendImageElement("hammerLight", "images/hammergame_machine_light_0.png", document.querySelector("#store"));
  appendImageElement("hammerScore", "images/hammergame_point.png", document.querySelector("#store"));

  appendCircleElement("questText1", "txt", document.querySelector("#store"));

  appendCircleElement("answerObjectPosition", "answerObject", document.querySelector("#store"));
  appendCircleElement("answerObject", "answerObject", document.querySelector("#answerObjectPosition"));

  setRand(1, 1, 1);

  gameManager.choiceBgImgArray = ["images/hammergame_hammer.png", "images/hammergame_hammer.png", "images/hammergame_hammer.png"];
  appendSelectQuestion("drag", gameManager.choiceQuestion, gameManager.choiceBgImgArray);

  var store = document.querySelector("#store");

  store.setAttribute("style", "position:absolute; top:75px; left:250px;");
  hammerLight.setAttribute("style", "position:absolute; left:0;");

  answerObject.setAttribute("style", "position:absolute; width:200px; height:200px; top:360px; left:380px;");
  answerObjectPosition.setAttribute("style", "position:absolute; width:200px; height:200px; top:320px; left:200px;");

  hammerScore.setAttribute("style", "position:absolute; left:160px; top:424px;");
  questText1.setAttribute("style", "position:absolute; width:133px; left:126px; top:13px; height:136px;");

  var hammerImgObjText = document.createElement("div"),
    hammerFountainText = document.createElement("div"),
    hammerFountainLine = document.createElement("div"),
    hammerMixedFractionText = document.createElement("div"),
    hammerTotalScoreBox = document.createElement("div"),
    hammerTotalScore;

  // 대분수
  hammerMixedFractionText.setAttribute("id", "fountainText");
  hammerMixedFractionText.className = "mixedFraction";
  hammerMixedFractionText.setAttribute("style", "position:absolute;top: 30px; left: 16px;");

  hammerMixedFractionText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0][0];

  hammerImgObjText.setAttribute("id", "hammerImgObjText");
  hammerImgObjText.className = "Text";
  hammerImgObjText.setAttribute("style", "position:absolute; top: 0px; text-align:center; width:60px;");
  hammerImgObjText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0][1];

  hammerFountainText.setAttribute("id", "hammerFountainText");
  hammerFountainText.className = "fountain";
  hammerFountainText.setAttribute("style", "position:absolute; top: 60px; width:60px;");
  hammerFountainText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0][2];

  hammerFountainLine.setAttribute("id", "hammerFountainLine");
  hammerFountainLine.className = "fountainLine";
  hammerFountainLine.setAttribute("style", "position:absolute; top: 30px; letter-spacing:-8px");
  hammerFountainLine.innerHTML = "-----";

  hammerTotalScoreBox.setAttribute("id", "hammerTotalScoreBox");
  hammerTotalScoreBox.className = "fountainLine";
  hammerTotalScoreBox.setAttribute("style", "margin:0 auto; width:66px");

  questText1.appendChild(hammerTotalScoreBox);

  if (gameManager.TOTAL_ANSWER_ARRAY[0][0] === 0) {
    hammerTotalScoreBox.setAttribute("style", "margin:0 auto; width:66px");
  } else {
    hammerTotalScoreBox.setAttribute("style", "margin:0 auto; width:40px");
    hammerTotalScoreBox.appendChild(hammerMixedFractionText);
  }
  hammerTotalScoreBox.appendChild(hammerImgObjText);
  hammerTotalScoreBox.appendChild(hammerFountainText);
  hammerTotalScoreBox.appendChild(hammerFountainLine);
}

function hammerAnimation(dragObj) {
  var hammerAniBox = document.querySelector("#hammerAni"),
    choiceBg = document.querySelector("#choiceBg"),
    angle = 90,
    choiceQuestionAllBox = dragObj.childNodes[1];

  log(choiceQuestionAllBox);

  // log(currentObj);
  // log(currentObj.childNodes[0]);

  hammerAniBox.setAttribute("style", "position:absolute; left:375px; top:360px; width:800px;");
  choiceQuestionAllBox.setAttribute("style", "position:absolute; left:20px; top:0px; width:800px;");

  // hammerThor.setAttribute('style','position:absolute; left:19px; top:-32px;');
  // choiceBg.setAttribute('style','position:absolute; left:19px; top:-32px;');

  hammerAniBox.className = "rect";

  setTimeout(function () {
    hammerAniBox.appendChild(dragObj.childNodes[0]);
    hammerAniBox.appendChild(choiceQuestionAllBox);
  }, 50);

  setTimeout(function () {
    appendImageElement("hammerHit", "images/molegame1_hit.png", document.querySelector("#hammerAni"));
    hammerHit.setAttribute("style", "position:absolute; left:20px; top:150px;");
    hammerScoreAni();

    // hammerAni.childNodes[0].style.top = '-40px';
  }, 400);

  animate({
    delay: 5,
    duration: 1000,
    delta: makeEaseOut(quad),
    step: function (delta) {
      hammerAniBox.style.WebkitTransform = "rotate(" + angle + "deg)";
      hammerAniBox.style.msTransform = "rotate(" + angle + "deg)";
      hammerAniBox.style.transform = "rotate(" + angle + "deg)";

      if (angle > 0) angle--;
    },
  });
}

function hammerScoreAni() {
  appendCircleElement("hammerScoreBox", "hammerScoreBox", document.getElementById("store"));

  var hammerScore = document.querySelector("#hammerScore"),
    hammerHit = document.querySelector("#hammerHit"),
    hammerScoreTop = -280;

  hammerScore.setAttribute("style", "position:absolute; left:160px; top:0px;");
  hammerScoreBox.setAttribute("style", "position:absolute; left:0px; top:444px; height:10px;");

  hammerScoreBox.appendChild(hammerScore);

  setTimeout(function () {
    hammerHit.style.display = "none";
  }, 200);

  setTimeout(function () {
    hammerLightAni();
  }, 1200);

  animate({
    delay: 100,
    duration: 700,
    delta: makeEaseOut(quad),
    step: function (delta) {
      hammerScore.style.top = hammerScoreTop * delta + "px";
    },
  });
}

function hammerLightAni() {
  var hammerLight = document.querySelector("#hammerLight"),
    backAnserSrc = hammerLight.src,
    sadcatB = backAnserSrc.replace("_0.png", "");
  // sadcatB = sadcatB.slice('-1');

  catBArray = [sadcatB + "_1.png", sadcatB + "_2.png", sadcatB + "_1.png", sadcatB + "_2.png", sadcatB + "_1.png"];

  setTimeout(function () {
    var bb = parseInt(catBArray.length) * 120;
    var index = 0;
    animate({
      delay: 120,
      duration: bb,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        hammerLight.src = catBArray[index];
        index++;
      },
    });
    spriteAnimation(catBArray, hammerLight);
  }, 10);

  setTimeout(function () {
    hammerLight.setAttribute("src", backAnserSrc.replace("_1.png", "_0.png"));

    log(hammerLight.src);
  }, 800);
  // setTimeout(function(){

  // },400);
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

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceTop = -220;
  choiceLeft = 900;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceLeft = 240;
      break;
    case 2:
      choiceLeft = 1060;
      break;
    case 3:
      choiceLeft = 960;
      break;
    case 4:
      choiceLeft = -50;
      break;
    case 5:
      choiceLeft = -150;
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
      // choiceQuestionGroup.innerHTML = gameManager.choiceQuestionText[i];

      var imgIndex = parseInt(Math.random() * 3);
      appendImageElement("choiceBg", imgSrcArray[i], choiceQuestionGroup);
      choiceQuestionGroup = document.querySelector("#choiceQuestionGroup_" + i);
      choiceQuestionGroup.className = "rect";

      choiceTop = choiceTop + 240;

      choiceQuestionGroup.setAttribute("style", "top:" + choiceTop + "px;left: " + choiceLeft + "px;");
    } else {
      appendCircleElement("choiceQuestionGroup_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
    }

    if (imgSrcArray) {
      var imgObjText = document.createElement("div"),
        className;

      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = gameManager.choiceQuestion[i];

      var fountainText = document.createElement("div"),
        mixedFractionText = document.createElement("div"),
        fountainLine = document.createElement("div"),
        choiceQuestionAllBox = document.createElement("div");

      choiceQuestionAllBox.id = "choiceQuestionAllBox";

      // 대분수
      mixedFractionText.setAttribute("id", "fountainText_" + i);
      mixedFractionText.className = "mixedFraction";
      mixedFractionText.setAttribute("style", "position:absolute;top: -0px; left: 5px;");
      mixedFractionText.innerHTML = gameManager.choiceQuestion[i][0];

      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = "Text";
      imgObjText.setAttribute("style", "position:absolute; top: -25px; left: 30px; width:62px;");
      imgObjText.innerHTML = gameManager.choiceQuestion[i][1];

      fountainText.setAttribute("id", "fountainText_" + i);
      fountainText.className = "fountain";
      fountainText.setAttribute("style", "position:absolute; top: 25px; left: 30px; width:62px;");
      fountainText.innerHTML = gameManager.choiceQuestion[i][2];

      fountainLine.setAttribute("id", "fountainLine");
      fountainLine.className = "fountainLine";
      // fountainLine.setAttribute('style','position:absolute; top: 0px; left: 30px; letter-spacing:-6px');
      fountainLine.innerHTML = "-----";

      if (gameManager.choiceQuestion[i][2].toString().length === 1) {
        fountainLine.setAttribute("style", "position:absolute; top: 0px; left: 35px; letter-spacing:-8px");
      } else {
        fountainLine.setAttribute("style", "position:absolute; top: 0px; left: 32px; letter-spacing:-6px");
      }

      // currentQuestion.appendChild(choiceQuestionAllBox);

      if (gameManager.choiceQuestion[i][0] === 0) {
        choiceQuestionAllBox.setAttribute("style", "position:absolute; top:0px; left:5px; width:120px; height:125px;");
      } else {
        choiceQuestionAllBox.appendChild(mixedFractionText); //대분수
        choiceQuestionAllBox.setAttribute("style", "position:absolute; top:0px; left:15px; width:120px; height:125px;");
      }

      choiceQuestionAllBox.appendChild(imgObjText);
      choiceQuestionAllBox.appendChild(fountainText);
      choiceQuestionAllBox.appendChild(fountainLine);

      choiceQuestionGroup.appendChild(choiceQuestionAllBox);
    } else {
      currentQuestion.innerHTML = gameManager.choiceQuestion[i];
      // log('이리오니?');

      appendImageElement("hammergame", "images/hammergame_hammer.png", document.querySelector("#choiceQuestionGroup" + i));
    }

    choiceQuestionGroup.setAttribute("answerValue", gameManager.choiceQuestion[i]);

    gameManager.choiceQuestionPosition.push([choiceTop, choiceLeft]);

    if (buttonType === "drag") {
      new Dragdrop(choiceQuestionGroup);
    } else {
      choiceQuestionGroup.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          log("click");
          compareAnswer(this);
        },
        false
      );
    }
  }
}

function gameOver(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer"),
    choiceQuestionContainerChildNodes = choiceQuestionContainer.childNodes,
    dragObjSortOut = dragObj.id,
    choiceQuestionGroup;

  log(choiceQuestionContainer);

  for (var i = 0; i < choiceQuestionContainerChildNodes.length; i++) {}

  dragObj.style.pointerEvents = "none";
  choiceQuestionContainer.style.pointerEvents = "none";

  // logCounter.tryCounter();
  // clearInterval(countTimer);
  // logCounter.endTime();

  setTimeout(function () {
    gameOverAnimation();
  }, 1500);

  // setTimeout(function () {
  // 	log('excute stampStarIcon!');
  //     parent.window.stampStarIcon();
  // }, 500);
  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2500);
}

function correctMotion() {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes,
    answerObject = document.querySelector("#answerObject"),
    ObjSrc = answerObject.src;

  var box = document.querySelector("#box");
}

function spriteAnimation(spriteArray, spriteObj) {
  var index = 0;
  animate({
    delay: 80,
    duration: 180,
    delta: makeEaseOut(linear),
    step: function (delta) {
      log("@ sprite!");
      spriteObj.src = spriteArray[index];
      index++;
    },
  });
}

function compareAnswer(dragObj) {
  var dragObjAnswerValue = dragObj.getAttribute("answerValue").split(",");

  if (
    gameManager.CURRENT_ANSWER[0][0] === parseInt(dragObjAnswerValue[0]) &&
    gameManager.CURRENT_ANSWER[0][1] === parseInt(dragObjAnswerValue[1]) &&
    gameManager.CURRENT_ANSWER[0][2] === parseInt(dragObjAnswerValue[2])
  ) {
    //getAttribute = 요소의 클래스 속성의 값을 가져옴
    //parseInt = 문자열을 구문 분석하고 정수를 반환합니다.
    streamSound.setSound("media/hammergame_success.mp3");

    log("@ correct!!");
    hammerAnimation(dragObj);
    gameOver(dragObj);
  } else {
    log("@ incorrect!!");
    incorrectAnimation(dragObj);
    streamSound.setSound("../include/media/incorrect.mp3");
    // logCounter.tryCounter();
  }
}
