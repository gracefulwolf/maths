function initScene() {
  // log('initScene...');
  // log(gameManager.CURRENT_ANSWER);
  // log(gameManager.TOTAL_ANSWER_ARRAY);

  // log('excute initClockTimer!');
  // parent.window.initClockTimer();

  appendCircleElement("answerObject_1", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("answerObject_2", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("question1", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("question2", "circle", document.getElementById("bgCanvas"));

  appendCircleElement("division", "circle", document.getElementById("bgCanvas"));

  appendImageElement("cloud", "images/butterfly_cloud.png", division, "cloud");

  appendImageElement("butterfly_textbox", "images/butterfly_textbox.png", question1, "butterfly_textbox");
  appendImageElement("butterfly_textbox", "images/butterfly_textbox.png", question2, "butterfly_textbox");

  appendCircleElement("questiontxt1", "circle", question1);
  appendCircleElement("questiontxt2", "circle", question2);

  var circleAnswer = document.querySelector("#answerObject_1");
  triangleAnswer = document.querySelector("#answerObject_2");

  var answerPosition,
    answer0 = gameManager.CURRENT_ANSWER[0],
    answer1 = gameManager.CURRENT_ANSWER[1];

  appendSelectQuestion("drag", gameManager.choiceQuestion, gameManager.hangerImgArray);

  circleAnswer.setAttribute("candleValue", gameManager.CURRENT_ANSWER[0]);
  triangleAnswer.setAttribute("candleValue", gameManager.CURRENT_ANSWER[1]);
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

function minority() {
  appendCircleElement("startNum", "Num", division);
  appendCircleElement("endNum", "Num", division);
  appendCircleElement("divisiontxt", "divisiontxt", division);

  startNum.setAttribute("style", "left: 350px;top: 130px;");
  endNum.setAttribute("style", "left: 480px;top: 130px;");
  divisiontxt.setAttribute("style", "position:absolute; left: 430px;top: 130px; font-size:60px;");

  startNum.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];
  endNum.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[1];
  divisiontxt.innerHTML = "??";

  // ?????? ??????
  startNum.style.left = "305px";
  startNum.style.width = "120px";
  startNum.style.textAlign = "right";
  divisiontxt.style.left = "435px";
  endNum.style.left = "485px";
}

function inithangerBar() {
  log("initpuzzle...");
  var Num1 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[0]),
    Num2 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[1]),
    // cloud = document.createElement('img'),
    circleAnswer = document.querySelector("#answerObject_1"),
    triangleAnswer = document.querySelector("#answerObject_2");

  appendImageElement("butterflyFlowerPink", "images/butterfly_flower_pink.png", circleAnswer, "butterflyFlowerPink");
  appendImageElement("butterflyFlowerBlue", "images/butterfly_flower_blue.png", triangleAnswer, "butterflyFlowerBlue");

  circleAnswer.setAttribute("style", "position:absolute; top:320px; left:180px; width:200px; height:230px;");
  triangleAnswer.setAttribute("style", "position:absolute; top:320px; left:500px; width:200px; height:230px;");

  question1.setAttribute("style", "position:absolute; top:550px; left:180px; width:202px;");
  question2.setAttribute("style", "position:absolute; top:550px; left:500px; width:202px;");

  questiontxt1.setAttribute("style", "position:absolute; top:-8px; left:0px; width:202px;");
  questiontxt2.setAttribute("style", "position:absolute; top:-8px; left:0px; width:202px;");

  questiontxt1.innerHTML = "???";
  questiontxt2.innerHTML = "?????????";

  // question1.innerHTML = '???';
}

function returnCurrentObj(dragObj) {
  var answerValue = dragObj.getAttribute("answervalue");
  for (var i = 1; i <= gameManager.CURRENT_ANSWER.length; i++) {
    if (answerValue === document.querySelector("#answerObject_" + i).getAttribute("candleValue")) {
      return document.querySelector("#answerObject_" + i);
    }
  }
}

function gameOver(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
    var choiceBgBye = choiceQuestionContainer[i].childNodes[1];
  }

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);
  gameOverAnimation();

  // setTimeout(function() {
  streamSound.setSound("../include/media/correct.mp3");
  // },300);

  setTimeout(function () {
    log("excute stampStarIcon!");
    // parent.window.stampStarIcon();
  }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2300);
}

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    line = document.createElement("div"),
    choiceTop = 400,
    choiceLeft = 980;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceTop = 240;
      break;
    case 2:
      choiceTop = 112;
      break;
    case 3:
      choiceTop = -70;
      break;
    case 4:
      choiceTop = -50;
      break;
    case 5:
      choiceTop = -150;
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

      var imgIndex = parseInt(Math.random() * 3);

      log(imgIndex);
      appendImageElement("choiceQuestion_" + i, imgSrcArray[i], choiceQuestionGroup);
      currentQuestion = document.querySelector("#choiceQuestionGroup_" + i);
      currentQuestion.className = className[0];
      //
    } else {
      appendCircleElement("choiceQuestion_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
      // log(i);
      currentQuestion = document.querySelector("#choiceQuestion_" + i);
      //????????? ?????????...
    }

    // log(i + '???????');
    if (i === 1 || i === 3) {
      choiceLeft = 1150;
    } else {
      choiceLeft = 980;
    }

    choiceLeft -= 50;

    choiceTop = choiceTop + 160;

    currentQuestion.setAttribute("style", "left: " + choiceLeft + "px; Top: " + choiceTop + "px;");

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = gameManager.choiceQuestionText[i];

      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      // currentQuestion.innerHTML = gameManager.choiceQuestion[i];
      appendCircleElement("choiceQuestionTxT_" + i, "choiceQuestionTxT", currentQuestion);
      var choiceQuestionTxT = document.querySelector("#choiceQuestionTxT_" + i);
      choiceQuestionTxT.innerHTML = gameManager.choiceQuestion[i];
      //????????? ?????????...

      appendImageElement("butterfly", "images/butterfly_butterfly.png", document.querySelector("#choiceQuestion_" + i));

      var choiceQuestion = document.querySelector("#choiceQuestion_" + i);

      // log('?????????????');
    }

    currentQuestion.setAttribute("answerValue", gameManager.choiceQuestion[i]);

    gameManager.choiceQuestionPosition.push([choiceTop, choiceLeft]);

    if (buttonType === "drag") {
      new Dragdrop(currentQuestion);
      //????????? ?????????...
    } else {
      currentQuestion.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          log("click");
          contrastAnswer(this);
        },
        false
      );
    }
  }
}

function puzzleCompareAnswer(dragObj, arrayNum) {
  dragObj.className += " correct";

  for (i = 0; i < 1; i++) {
    appendImageElement("butterflySuccess_" + i, "images/butterfly_butterfly_success_1.png", dragObj, "butterflySuccess");

    var correct = document.querySelectorAll(".correct"),
      dragObjChild = dragObj.childNodes[1],
      dragObjChildSrc = dragObjChild.src,
      dragObjChildSrcSplit = dragObjChildSrc.split("_"),
      butterflySuccess = document.querySelector("#butterflySuccess_" + i),
      dragObjChild0 = dragObj.childNodes[0];
    // dragObjChild1 = dragObj.childNodes[1];
    dragObjChild.setAttribute("src", dragObjChildSrc.replace("butterfly.png", "dapbox.png"));

    dragObjChild.setAttribute("style", " top:0px; left:0px;");
    dragObj.style.top = "100px;";
    dragObj.style.pointerEvents = "none";

    // butterflySuccess.setAttribute('style','position:absolute; top:200px;');
    dragObjChild0.setAttribute("style", "position:absolute; top:45px; left:49px; width:100px;");

    correctAnimation(dragObj);
  }

  log(dragObjChild);

  // log(dragObjChildSrcSplit[0]);

  if (correct.length === gameManager.CURRENT_ANSWER.length) {
    setTimeout(function () {
      for (var i = 0; i < correct.length; i++) {
        // correct[i].style.display = "none";
      }

      gameOver();
    }, 100);
  }
}

function correctAnimation(dragObj) {
  var Top = -600,
    // Left0 =  150,
    Left1 = -300,
    dragObjTop = parseInt(dragObj.style.top),
    dragObjLeft = parseInt(dragObj.style.left),
    dragObjpaddingLeft = parseInt(dragObj.style.paddingLeft),
    // queText1 = document.querySelector('#queText1'),
    // queBottom = parseInt(queText1.style.bottom),
    butterflySuccess = dragObj.childNodes[2],
    angle0 = 22,
    angle1 = -22;

  // queLeft = parseInt(queText1.style.left);

  var correctArray = [
    "images/butterfly_butterfly_success_1.png",
    "images/butterfly_butterfly_success_2.png",
    "images/butterfly_butterfly_success_3.png",
    "images/butterfly_butterfly_success_4.png",
    "images/butterfly_butterfly_success_5.png",
    "images/butterfly_butterfly_success_4.png",
    "images/butterfly_butterfly_success_3.png",
    "images/butterfly_butterfly_success_2.png",
    "images/butterfly_butterfly_success_1.png",
    "images/butterfly_butterfly_success_2.png",
    "images/butterfly_butterfly_success_3.png",
    "images/butterfly_butterfly_success_4.png",
    "images/butterfly_butterfly_success_1.png",
    "images/butterfly_butterfly_success_1.png",
    "images/butterfly_butterfly_success_2.png",
    "images/butterfly_butterfly_success_3.png",
    "images/butterfly_butterfly_success_4.png",
    "images/butterfly_butterfly_success_5.png",
  ];
  setTimeout(function () {
    spriteAnimation(correctArray, butterflySuccess);
    var bb = 1800;
    var index = 0;
    animate({
      delay: 100,
      duration: bb,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        butterflySuccess.src = correctArray[index];
        index++;
      },
    });
  }, 10);

  animate({
    delay: 00,
    duration: 1000,
    delta: makeEaseInOut(linear),
    step: function (delta) {
      // butterflySuccess.setAttribute('style','margin-top :' + dragObjTop + 'px; margin-left:' + dragObjLeft + 'px; padding-left: ' + dragObjpaddingLeft+'px; position:absolute;');
      butterflySuccess.setAttribute("style", "position:absolute;");
      butterflySuccess.style.top = Top * delta + "px";
      butterflySuccess.style.left = Left1 * delta + "px";
      butterflySuccess.style.WebkitTransform = "rotate(" + angle1 + "deg)";
      butterflySuccess.style.msTransform = "rotate(" + angle1 + "deg)";
      butterflySuccess.style.transform = "rotate(" + angle1 + "deg)";
      butterflySuccess.style.pointerEvents = "none";
    },
  });
}
