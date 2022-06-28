function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);
  log(gameManager.TOTAL_ANSWER_ARRAY);

  // log('excute initClockTimer!');
  // parent.window.initClockTimer();

  gameManager.choiceBgImgArray = ["images/target_board.png", "images/target_board.png", "images/target_board.png"];
  appendSelectQuestion("click", gameManager.choiceQuestion, gameManager.choiceBgImgArray);

  queTxt();
}

function queTxt() {
  appendCircleElement("queTxt_wrap", "queTxt_wrap", bgCanvas);
  appendCircleElement("queTxt", "queText", document.querySelector("#queTxt_wrap"));
  appendCircleElement("queText1", "queText", document.querySelector("#queTxt"));
  appendCircleElement("calculation1", "calculation", document.querySelector("#queTxt"));
  appendCircleElement("queText2", "queText", document.querySelector("#queTxt"));
  appendCircleElement("calculation2", "calculation", document.querySelector("#queTxt"));
  appendCircleElement("queText3", "queText", document.querySelector("#queTxt"));

  if (/\[/g.test(gameManager.TOTAL_ANSWER_ARRAY[0])) {
    makeBunsu(gameManager.TOTAL_ANSWER_ARRAY[0], queText1);
    queText1.style.margin = "0 0.2em";
    queText1.style.fontSize = "46px";
    queText1.querySelector(".bunsuDiv").style.marginTop = "-10px";
  } else {
    queText1.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0] + "&nbsp";
  }

  if (/\[/g.test(gameManager.TOTAL_ANSWER_ARRAY[1])) {
    makeBunsu(gameManager.TOTAL_ANSWER_ARRAY[1], queText2);
    queText2.style.margin = "0 0.2em";
    queText2.style.fontSize = "46px";
    queText2.querySelector(".bunsuDiv").style.marginTop = "-10px";
  } else {
    queText2.innerHTML = "&nbsp" + gameManager.TOTAL_ANSWER_ARRAY[1] + "&nbsp";
  }

  if (/\[/g.test(gameManager.TOTAL_ANSWER_ARRAY[2])) {
    makeBunsu(gameManager.TOTAL_ANSWER_ARRAY[2], queText3);
    queText3.style.margin = "0 0.2em";
    queText3.style.fontSize = "46px";
    queText3.querySelector(".bunsuDiv").style.marginTop = "-10px";
  } else {
    queText3.innerHTML = "&nbsp" + gameManager.TOTAL_ANSWER_ARRAY[2];
  }

  switch (gameManager.TOTAL_ANSWER_ARRAY[6]) {
    case "+":
      calulation = "plus";
      break;
    case "-":
      calulation = "minus";
      break;
    case "/":
      calulation = "division";
      break;
    case "*":
      calulation = "multiplication";
      break;
  }
  switch (gameManager.TOTAL_ANSWER_ARRAY[7]) {
    case "+":
      calulation2 = "plus";
      break;
    case "-":
      calulation2 = "minus";
      break;
    case "/":
      calulation2 = "division";
      break;
    case "*":
      calulation2 = "multiplication";
      break;
  }

  appendImageElement("cal_img", "images/" + calulation + ".png", calculation1);
  appendImageElement("cal_img", "images/" + calulation2 + ".png", calculation2);

  if (gameManager.TOTAL_ANSWER_ARRAY[2] === "") {
    queText3.style.display = "none";
    calculation2.style.display = "none";
  }
}

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceTop = 290;
  choiceLeft = -170;

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
      appendImageElement("choiceBg", imgSrcArray[i], choiceQuestionGroup);
      choiceQuestionGroup = document.querySelector("#choiceQuestionGroup_" + i);
      choiceQuestionGroup.className = "rect";

      choiceLeft = choiceLeft + 350;

      choiceQuestionGroup.setAttribute("style", "top:" + choiceTop + "px;left: " + choiceLeft + "px;");

      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 0px;");
      if (/\[/g.test(gameManager.choiceQuestionText[i])) {
        makeBunsu(gameManager.choiceQuestionText[i], imgObjText);
        imgObjText.style.transform = "translate(-5px, -5px)";
      } else {
        imgObjText.innerHTML = gameManager.choiceQuestionText[i];
      }
      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      appendCircleElement("choiceQuestionGroup_" + i, buttonType === "drag" ? "circle" : "rect", choiceQuestionContainer);
    }

    choiceQuestionGroup.setAttribute("answerValue", gameManager.choiceQuestion[i]);

    appendImageElement("hand", "images/blank.png", choiceQuestionGroup);

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
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer");

  choiceQuestionContainer.style.pointerEvents = "none";

  streamSound.setSound("media/target_success.mp3");

  setTimeout(function () {
    gameOverAnimation();
    // logCounter.tryCounter();
    // clearInterval(countTimer);
    // logCounter.endTime();
  }, 450);

  // setTimeout(function () {
  // 	log('excute stampStarIcon!');
  //     parent.window.stampStarIcon();
  // }, 500);
  // // save log data
  setTimeout(function () {
    parent.$SpecializeContents.clearGame();
  }, 2200);
}

function correctMotion(dragObj) {
  var dragId = dragObj.id;
  objNum = parseInt(dragId.slice(-1)) + 1;

  successArray = [
    "images/vic_target_success_" + objNum + "_1.png",
    "images/vic_target_success_" + objNum + "_2.png",
    "images/vic_target_success_" + objNum + "_3.png",
    "images/vic_target_success_" + objNum + "_4.png",
  ];
  spriteAnimation(successArray, dragObj.childNodes[2]);
}

function spriteAnimation(spriteArray, spriteObj) {
  var index = 0;
  animate({
    delay: 100,
    duration: 400,
    delta: makeEaseOut(linear),
    step: function (delta) {
      log("@ sprite!");
      spriteObj.src = spriteArray[index];
      index++;
    },
  });
}

function compareAnswer(dragObj) {
  var dragObjAnswer = dragObj.getAttribute("answerValue");

  if (gameManager.CURRENT_ANSWER[0] === dragObjAnswer) {
    log("@ correct!!");
    gameOver(dragObj);
    correctMotion(dragObj);
  } else {
    log("@ incorrect!!");
    incorrectAnimation(dragObj);
    streamSound.setSound("../include/media/incorrect.mp3");
    // logCounter.tryCounter();
  }
}

// 분수 만드는 함수
function makeBunsu(text, targetElement) {
  var bunsuArray = [],
    bunsuTxt = [],
    beforeTxt = "",
    afterTxt = "";

  if (text.indexOf("[") > -1) {
    while (text.indexOf("[") > -1) {
      if (spitBunsuText(text).length === 3) {
        beforeTxt = spitBunsuText(text)[2];
        var bText = createElement("span", targetElement);
        bText.innerHTML = beforeTxt;
      }
      bunsuTxt = spitBunsuText(text)[0];
      afterTxt = spitBunsuText(text)[1];
      bunsuArray = bunsuTxt.split(",");

      drawBunsu(bunsuArray, targetElement);
      text = afterTxt; // console.log(text);
    }
  } else {
    bunsuArray = text.split(",");
    drawBunsu(bunsuArray, targetElement);
    text = afterTxt;
  }

  var aText = createElement("span", targetElement);
  aText.innerHTML = afterTxt;
}

// 분수 그릴 때 필요한 array 만드는 함수
function spitBunsuText(src) {
  if (src.indexOf("[") === 0) {
    var startIdx = src.indexOf("["),
      endIdx = src.indexOf("]"),
      bunsuTxt = src.slice(startIdx + 1, endIdx),
      afterTxt = src.slice(endIdx + 1),
      resultArray = [bunsuTxt, afterTxt];
  } else {
    var startIdx = src.indexOf("["),
      endIdx = src.indexOf("]"),
      beforeTxt = src.slice(0, startIdx),
      bunsuTxt = src.slice(startIdx + 1, endIdx),
      afterTxt = src.slice(endIdx + 1),
      resultArray = [bunsuTxt, afterTxt, beforeTxt]; // console.log('resultArray: ',resultArray);
  }
  return resultArray;
}

// 분수 그리는 함수
function drawBunsu(bunsuArray, parentElement) {
  var bunsuDiv = createElement("div", parentElement, "bunsuDiv"),
    int = createElement("div", bunsuDiv, "int"),
    prop = createElement("div", bunsuDiv, "prop"),
    bunja = createElement("div", prop, "bunja"),
    bunmo = createElement("div", prop, "bunmo"),
    midLine = createElement("div", prop, "midLine");

  if (bunsuArray[0] != 0) int.innerHTML = bunsuArray[0];

  bunja.innerHTML = bunsuArray[1];
  bunmo.innerHTML = bunsuArray[2];

  bunsuDiv.style.cssText = "display: inline-block; vertical-align: middle";
  int.style.cssText = "display: inline-block; margin-right: 5px; vertical-align: middle";
  prop.style.cssText = "position: relative; display: inline-block; line-height: 1.25em; vertical-align: middle";
  bunja.style.cssText = "display: block; vertical-align: middle";
  bunmo.style.cssText = "display: block; vertical-align: middle";
  midLine.style.cssText = "position: absolute; top: 50%; left: 0; width: 100%; height: 0; margin-top: -0.05em; border-top: 0.1em solid";
}
