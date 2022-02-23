function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  appendCircleElement("answerObject", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("question1", "circle", document.getElementById("back1"));

  var circleAnswer = document.querySelector("#answerObject");
  circleAnswer.setAttribute("style", "top:165px; left: 743px;");
  appendChoiceQuestion("drag", gameManager.choiceQuestion);
}

function initBead(frogBg) {
  log("initBead...");

  var Num1 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[0]),
    Num2 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[1]),
    Question1 = document.querySelector("#question1"),
    back1 = document.querySelector("#back1");

  (frogBg = document.createElement("img")), (calculation = document.createElement("div")), calculation.setAttribute("id", "calculation");
  frogBg.setAttribute("id", "frogBg");
  frogBg.src = "images/frogjump1_0.png";
  back1.setAttribute("style", "top:165px; left: 387px;");
  frogBg.setAttribute("style", "top: 4.5%; left: 44%; z-index: 2;");

  bgCanvas.appendChild(frogBg);
  bgCanvas.appendChild(calculation);
  Question1.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];
  calculation.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[4];
}

function gameOver(dragObj, x, y) {
  var calculation = (document.querySelector("#calculation").style.display = "none");
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  bgCanvas.removeChild(answerObject);
  bgCanvas.removeChild(frogBg);

  frogMotioncorrect();

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);
  streamSound.setSound("media/frog_end.mp3");

  var choiceQuestion = document.getElementById("choiceQuestionContainer"),
    choiceQuestionTop = parseInt(choiceQuestion.style.top),
    dragObjchoiceQuestionTop = parseInt(dragObj.style.top),
    top = 7;

  setTimeout(function () {
    animate({
      duration: 600,
      delta: makeEaseOut(elastic),
      step: function (delta) {
        choiceQuestion.style.top = top * delta + choiceQuestionTop + "px";
        dragObj.style.top = top * delta + dragObjchoiceQuestionTop + "px";
      },
    });
  }, 500);

  setTimeout(function () {
    streamSound.setSound("../include/media/correct.mp3");
    gameOverAnimation();
  }, 800);

  setTimeout(function () {
    log("excute stampStarIcon!");
  }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2200);
}

function appendChoiceQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceLeft = 0;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceLeft = 240;
      break;
    case 2:
      choiceLeft = 150;
      break;
    case 3:
      choiceLeft = -50;
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

      log(imgIndex);
      appendImageElement("choiceQuestion_" + i, imgSrcArray[0], choiceQuestionGroup);
      currentQuestion = document.querySelector("#choiceQuestionGroup_" + i);
      currentQuestion.className = className[0];
    } else {
      appendCircleElement("choiceQuestion_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
      currentQuestion = document.querySelector("#choiceQuestion_" + i);
    }

    choiceLeft = choiceLeft + 300;

    currentQuestion.setAttribute("style", "top: 520px; left:" + choiceLeft + "px;");

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = gameManager.choiceQuestion[i];
      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      currentQuestion.innerHTML = gameManager.choiceQuestion[i];

      console.log(gameManager.CURRENT_ANSWER);

      if (gameManager.CURRENT_ANSWER[0] === "삼만 구천<br>사백오십칠") {
        currentQuestion.style.display = "flex";
        currentQuestion.style.alignItems = "center";
        currentQuestion.style.justifyContent = "center";
        currentQuestion.style.fontSize = "36px";
        currentQuestion.style.lineHeight = "1.25";
        currentQuestion.innerHTML = "<div>" + gameManager.choiceQuestion[i] + "</div>";
      }
    }
    currentQuestion.setAttribute("answerValue", gameManager.choiceQuestion[i]);
    gameManager.choiceQuestionPosition.push([520, choiceLeft]);
    if (buttonType === "drag") {
      new Dragdrop(currentQuestion);
    } else {
      currentQuestion.addEventListener(
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

function frogMotioncorrect() {
  var frogMotion = document.querySelector("#frogMotion");

  var frogMotion = document.createElement("img"),
    spriteArray = ["images/frogjump1_1.png", "images/frogjump1_2.png", "images/frogjump1_3.png", "images/frogjump1_4.png"];
  frogMotion.setAttribute("id", "frogMotion");

  frogMotion.setAttribute("style", "top: 4.5%; left: 44%; z-index: 2;");

  setTimeout(function () {
    bgCanvas.appendChild(frogMotion);
    var aa = parseInt(spriteArray.length) * 110;
    var index = 0;
    animate({
      delay: 110,
      duration: aa,
      delta: makeEaseOut(linear),
      step: function (delta) {
        // log('@ sprite!');
        frogMotion.src = spriteArray[index];
        index++;
      },
    });
    spriteAnimation(spriteArray, frogMotion);
  }, 0);

  setTimeout(function () {
    var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

    for (var i = 0; i < choiceQuestionContainer.length; i++) {
      choiceQuestionContainer[0].style.pointerEvents = "auto";
    }
  }, 1300);

  frogMotion.style.left = "450px";
  frogMotion.style.top = "20px";
}

function frogClick() {
  var frogBg = document.querySelector("#frogBg");

  btnDown = function (e) {
    e.preventDefault();
  };
  btnUp = function (e) {
    e.preventDefault();
    frogMotionIncorrect();
  };

  frogBg.addEventListener('mousedown', btnDown, false);
  // frogBg.addEventListener('touchstart', btnDown, false);
  frogBg.addEventListener('mouseup', btnUp, false);
  // frogBg.addEventListener('touchend', btnUp, false);

  frogBg.style.left = "450px";
  frogBg.style.top = "20px";
  // frogBg.style.transform = "scale(0.9)";
}

function frogMotionIncorrect() {
  var incorrectMotion = document.querySelector("#incorrectMotion"),
    frogBg = document.querySelector("#frogBg");

  var incorrectMotion = document.createElement("img"),
    incorrectArray = ["images/frogjump2_frog2_fail_1.png", "images/frogjump2_frog2_fail_2.png", "images/frogjump2_frog2_fail_3.png", "images/frogjump2_frog2_fail_4.png"];
  incorrectMotion.setAttribute("id", "incorrectMotion");

  // frogBg.setAttribute('style','position: absolute; top: 5.5%; left: 44.1%; z-index: 2;');

  // setTimeout(function(){
  // 	frogBg.style.display = 'none';
  // },150)

  setTimeout(function () {
    bgCanvas.appendChild(incorrectMotion);
    var aa = parseInt(incorrectArray.length) * 110;
    var index = 0;
    animate({
      delay: 110,
      duration: aa,
      delta: makeEaseOut(linear),
      step: function (delta) {
        // log('@ sprite!');
        frogBg.src = incorrectArray[index];
        index++;
      },
    });
    spriteAnimation(incorrectArray, frogBg);
  }, 0);

  setTimeout(function () {
    // frogBg.style.display = 'block';
    frogBg.src = "images/frogjump1_0.png";
    // frogBg.setAttribute('style','position: absolute; top: 6.5%; left: 44.1%; z-index: 2;');
    bgCanvas.removeChild(incorrectMotion);
  }, 800);

  streamSound.setSound("media/frog_cry.mp3");
}

function compareAnswer(dragObj) {
  log(dragObj.getAttribute("answerValue"));

  if (gameManager.CURRENT_ANSWER[0] == dragObj.getAttribute("answerValue")) {
    //getAttribute = 요소의 클래스 속성의 값을 가져옴
    //parseInt = 문자열을 구문 분석하고 정수를 반환합니다.

    log("@ correct!!");
    gameOver(dragObj);
    // switch (gameManager.CURRENT_TYPE) {
    // case 'colorpencilRibbon':
    // 	if(!gameManager.flag){
    // 		Pensilposi();
    // 	}
    // 	gameOver(dragObj);
    // 	break;
    // }
  } else {
    log("@ incorrect!!");
    incorrectAnimation(dragObj);
    streamSound.setSound("../include/media/incorrect.mp3");

    switch (gameManager.CURRENT_TYPE) {
      case "frog":
        log("@ frog!");
        streamSound.setSound("../include/media/incorrect.mp3");
        break;
    }

    // logCounter.tryCounter();
  }
}
