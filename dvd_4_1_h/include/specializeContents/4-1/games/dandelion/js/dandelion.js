function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  appendCircleElement("answerObject", "circle", document.getElementById("bgCanvas"));
  appendCircleElement("questionBox", "txt", document.getElementById("bgCanvas"));
  appendCircleElement("question1", "question1", document.getElementById("questionBox"));

  var circleAnswer = document.querySelector("#answerObject");

  appendChoiceQuestion("click", gameManager.choiceQuestion);
}

function initBus() {
  log("initBus...");

  var Num1 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[0][0]),
    Num2 = parseInt(gameManager.TOTAL_ANSWER_ARRAY[1][0]),
    Question1 = document.querySelector("#question1"),
    back1 = document.querySelector("#back1"),
    questionBox = document.querySelector("#questionBox"),
    busHi = document.querySelector("#busHi"),
    child = document.createElement("img"),
    catB = document.createElement("img");
  // positiondande = document.querySelector('#choiceQuestion_1');

  child.setAttribute("id", "child");
  catB.setAttribute("id", "catB");

  // back1.setAttribute('style', 'position: absolute; top: 20px; left: 300px;');
  child.setAttribute("style", "position: absolute; left: 120px; top: 20px; z-index: 0;");
  catB.setAttribute("style", "position: absolute; left: 120px; top: 40px; z-index: 0;");

  // var randomChild = Math.floor((Math.random() * 2) + 1);
  // child.src = 'images/weighing_cat1_0.png';
  // catB.src = 'images/weighing_cat2_0.png';

  choiceQuestion_0.appendChild(child);
  choiceQuestion_1.appendChild(catB);
  Question1.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[3];
  appendImageElement("dandelionTxT", "images/dandelion_textbox.png", document.querySelector("#question1"), "dandelionTxTBox");

  // positiondande.style.top = '350px';
}

function childClick() {
  var child = document.querySelector("#child"),
    // childSrc = child.src,
    // childObj = childSrc.split('_');
    // childObj = childObj.slice('-1');

    btnDown = function (e) {
      e.preventDefault();
    };
  btnUp = function (e) {
    e.preventDefault();
    childClickMotion();
    child.style.pointerEvents = "none";
    streamSound.setSound("media/bus_char_3.wav");

    setTimeout(function () {
      child.src = "images/busstop_char_" + childObj;
      child.style.pointerEvents = "auto";
    }, 1000);
  };
}

function catCorrectAnswerAnimation(dragObj) {
  var backAnser = dragObj.childNodes[1],
    backAnserSrc = backAnser.src,
    sadcatB = backAnserSrc.replace(".png", "");

  catBArray = [sadcatB + "_success_1.png", sadcatB + "_success_1.png", sadcatB + "_success_2.png", sadcatB + "_success_3.png"];

  setTimeout(function () {
    var bb = parseInt(catBArray.length) * 40;
    var index = 0;
    animate({
      delay: 70,
      duration: bb,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        backAnser.src = catBArray[index];
        index++;
      },
    });
    spriteAnimation(catBArray, backAnser);
  }, 10);

  setTimeout(function () {
    backAnser.setAttribute("src", backAnserSrc.replace(".png", "_success_3.png"));
  }, 1000);
  streamSound.setSound("media/click.mp3");
}

function childClickMotion(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer");

  choiceQuestionContainer.style.pointerEvents = "none";

  (backAnser = dragObj.childNodes[1]), (backAnserSrc = backAnser.src), (sadcatB = backAnserSrc.replace(".png", ""));

  catBArray = [sadcatB + "_fail_1.png", sadcatB + "_fail_1.png", sadcatB + "_fail_2.png", sadcatB + "_fail_3.png"];

  setTimeout(function () {
    var bb = parseInt(catBArray.length) * 80;
    var index = 0;
    animate({
      delay: 80,
      duration: bb,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        backAnser.src = catBArray[index];
        index++;
      },
    });
    spriteAnimation(catBArray, backAnser);
  }, 10);

  setTimeout(function () {
    backAnser.setAttribute("src", backAnserSrc.replace("_fail_3.png", ".png"));
  }, 1100);
  setTimeout(function () {
    choiceQuestionContainer.style.pointerEvents = "auto";
  }, 1100);
  // streamSound.setSound('media/click.mp3');
}

function busBye() {
  var busHi = document.querySelector("#busHi"),
    child = document.querySelector("#child");

  var busHiLeft = parseInt(busHi.style.left),
    childLeft = parseInt(child.style.left),
    left = -1070;

  setTimeout(function () {
    var aa = parseInt(spriteArray.length) * 100;
    var index = 0;
    animate({
      delay: 100,
      duration: aa,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        // log('@ sprite!');
        busMotion.src = spriteArray[index];
        busHi.style.left = left * delta + busHiLeft + "px";
        child.style.left = left * delta + childLeft + "px";
        index++;
      },
    });
    spriteAnimation(spriteArray, busMotion);
  }, 10);
}

function gameOver(currentObj, dragObj, x, y) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  var child = document.querySelector("#child"),
    childSrc = child.src;

  setTimeout(function () {
    // child.style.display ='none';
  }, 1200);
  setTimeout(function () {
    child.style.pointerEvents = "none";
  }, 1700);
  // busMotioncorrect();

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);

  setTimeout(function () {
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
  }, 800);

  // setTimeout(function() {
  // 	log('excute stampStarIcon!');
  // }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    // parent.$SpcecializeContents.clearGame();
    parent.$SpecializeContents.clearGame();
  }, 2200);
}

function appendChoiceQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceLeft = 0,
    choiceTop = 300;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceLeft = 240;
      break;
    case 2:
      choiceLeft = -430;
      break;
    case 3:
      choiceLeft = -200;
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
    var scaleWeightingMachine, currentQuestion, positiondande;

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

    choiceLeft = choiceLeft + 400;

    if (i === 1) {
      choiceTop = 350;
    } else {
      choiceTop = 300;
    }
    currentQuestion.setAttribute("style", "top:" + choiceTop + "px;left:" + choiceLeft + "px; color:#000;");

    log(positiondande);

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = gameManager.choiceQuestion[i];
      choiceQuestionGroup.appendChild(imgObjText);
    } else if (typeof gameManager.choiceQuestion[i] === "string") {
      console.log(gameManager.choiceQuestion[i]);
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      // imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.style.position = "absolute";
      imgObjText.style.left = "-10px";
      imgObjText.style.top = "-20px";
      imgObjText.style.width = "100%";
      imgObjText.style.textAlign = "center";
      imgObjText.innerHTML = gameManager.choiceQuestion[i];
      currentQuestion.appendChild(imgObjText);
      appendImageElement("scaleWeightingMachine", "images/dandelion_flower.png", document.querySelector("#choiceQuestion_" + i));
    } else {
      // imgObjText = document.createElement('div');
      // imgObjText.setAttribute('id', 'choiceQuestionText_' + i);
      // // imgObjText.className = className + 'Text';
      // imgObjText.setAttribute('style', 'top: 20px; left: 30px;');
      // imgObjText.innerHTML = gameManager.choiceQuestion[i],
      // className;
      // choiceQuestionGroup.appendChild(imgObjText);

      var textContainer = document.createElement("div"),
        fractionBox = document.createElement("div"),
        imgObjText = document.createElement("div"),
        fountainText = document.createElement("div"),
        mixedFractionText = document.createElement("div"),
        fountainLine = document.createElement("div");

      textContainer.style.position = "absolute";
      textContainer.style.top = "-58px";
      if (gameManager.choiceQuestion[i][0] !== 0) textContainer.style.left = "-52px";
      else textContainer.style.left = "-40px";
      textContainer.style.width = "200px";
      textContainer.style.textAlign = "center";

      fractionBox.style.display = "inline-block";
      fractionBox.style.verticalAlign = "middle";

      // ?????????
      mixedFractionText.setAttribute("id", "fountainText_" + i);
      mixedFractionText.className = "mixedFraction";
      mixedFractionText.style.marginRight = "5px";
      mixedFractionText.style.display = "inline-block";
      mixedFractionText.innerHTML = gameManager.choiceQuestion[i][0];

      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = "Text";
      imgObjText.innerHTML = gameManager.choiceQuestion[i][1];

      fountainText.setAttribute("id", "fountainText_" + i);
      fountainText.className = "fountain";
      fountainText.innerHTML = gameManager.choiceQuestion[i][2];

      fountainLine.setAttribute("id", "fountainLine");
      fountainLine.className = "fountainLine";
      if (gameManager.choiceQuestion[i][1].toString().length == 2 || gameManager.choiceQuestion[i][2].toString().length == 2) fountainLine.style.width = "70px";
      else fountainLine.style.width = "50px";
      fountainLine.style.height = "6px";
      fountainLine.style.backgroundColor = "#000";
      fountainLine.style.marginTop = "-7px";
      fountainLine.style.marginBottom = "-7px";

      currentQuestion.appendChild(textContainer);
      if (gameManager.choiceQuestion[i][0] !== 0) textContainer.appendChild(mixedFractionText);
      textContainer.appendChild(fractionBox);
      fractionBox.appendChild(imgObjText);
      fractionBox.appendChild(fountainLine);
      fractionBox.appendChild(fountainText);

      appendImageElement("scaleWeightingMachine", "images/dandelion_flower.png", document.querySelector("#choiceQuestion_" + i));
    }

    currentQuestion.setAttribute("answerValue", gameManager.choiceQuestion[i]);
    gameManager.choiceQuestionPosition.push([choiceTop, choiceLeft]);

    if (buttonType === "drag") {
      new Dragdrop(currentQuestion);
    } else {
      currentQuestion.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          log("click");
          console.log(this);
          compareAnswer(this);
        },
        false
      );
    }
  }
}

function catAnswer(dragObj) {
  // log(dragObj.getAttribute('answerValue').split(','));

  var dragObjAnswerValue = dragObj.getAttribute("answerValue").split(",");

  if (
    gameManager.CURRENT_ANSWER[0][0] === parseInt(dragObjAnswerValue[0]) &&
    gameManager.CURRENT_ANSWER[0][1] === parseInt(dragObjAnswerValue[1]) &&
    gameManager.CURRENT_ANSWER[0][2] === parseInt(dragObjAnswerValue[2])
  ) {
    log(gameManager.CURRENT_ANSWER);
    log(dragObj);
    //getAttribute = ????????? ????????? ????????? ?????? ?????????
    //parseInt = ???????????? ?????? ???????????? ????????? ???????????????.
    catCorrectAnswerAnimation(dragObj);

    log("@ correct!!");
    gameOver(dragObj);
  } else {
    log("@ incorrect!!");
    incorrectAnimation(dragObj);
    // streamSound.setSound('../include/media/incorrect.mp3');
    streamSound.setSound("../include/media/incorrect.mp3");
    // log(dragObj.getAttribute('answerValue'));
    // log(gameManager.CURRENT_ANSWER +'?????????');
    childClickMotion(dragObj);

    // logCounter.tryCounter();
  }
}

function compareAnswer(dragObj) {
  log(dragObj.getAttribute("answerValue"));

  if (gameManager.CURRENT_ANSWER[0] === dragObj.getAttribute("answerValue")) {
    //getAttribute = ????????? ????????? ????????? ?????? ?????????
    //parseInt = ???????????? ?????? ???????????? ????????? ???????????????.

    log("@ correct!!");
    catCorrectAnswerAnimation(dragObj);
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
    incorrectAnimation(dragObj);
    // streamSound.setSound('../include/media/incorrect.mp3');
    streamSound.setSound("../include/media/incorrect.mp3");
    // log(dragObj.getAttribute('answerValue'));
    // log(gameManager.CURRENT_ANSWER +'?????????');
    childClickMotion(dragObj);
  }
}
