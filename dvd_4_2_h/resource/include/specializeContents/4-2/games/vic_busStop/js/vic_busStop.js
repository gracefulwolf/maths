// override compareAnswer
function compareAnswer(dragObj) {
  log(dragObj.getAttribute("answerValue"));

  if (gameManager.CURRENT_ANSWER[0] === dragObj.getAttribute("answerValue")) {
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

function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  appendCircleElement("answerObject", "circle", document.getElementById("bgCanvas"));

  var circleAnswer = document.querySelector("#answerObject");
  appendChoiceQuestion("click", gameManager.choiceQuestion);
  queTxt();
}

function queTxt() {
  var value1 = gameManager.TOTAL_ANSWER_ARRAY[0];
  var value2 = gameManager.TOTAL_ANSWER_ARRAY[1];
  var value3 = gameManager.TOTAL_ANSWER_ARRAY[2];
  var cal_1 = gameManager.TOTAL_ANSWER_ARRAY[6];
  var cal_2 = gameManager.TOTAL_ANSWER_ARRAY[7];

  appendCircleElement("queTxt_wrap", "queTxt_wrap", bgCanvas);
  appendCircleElement("queTxt", "queText", document.querySelector("#queTxt_wrap"));
  appendCircleElement("queText1", "queText", document.querySelector("#queTxt"));
  appendCircleElement("calculation1", "calculation", document.querySelector("#queTxt"));
  appendCircleElement("queText2", "queText", document.querySelector("#queTxt"));
  appendCircleElement("calculation2", "calculation", document.querySelector("#queTxt"));
  appendCircleElement("queText3", "queText", document.querySelector("#queTxt"));

  if (validateIsValueBunsu(value1)) {
    makeBunsu(value1, queText1);
    queText1.style.margin = "0 0.2em";
  } else {
    queText1.innerHTML = value1;
  }

  if (validateIsValueBunsu(value2)) {
    makeBunsu(value2, queText2);
    queText2.style.margin = "0 0.2em";
  } else {
    queText2.innerHTML = value2;
  }

  queText3.innerHTML = value3;

  switch (cal_1) {
    case "+":
      appendImageElement("cal_img", "images/plus.png", calculation1);
      break;
    case "-":
      appendImageElement("cal_img", "images/minus.png", calculation1);
      break;
    case "/":
      appendImageElement("cal_img", "images/division.png", calculation1);
      break;
    case "*":
      appendImageElement("cal_img", "images/multiplication.png", calculation1);
      break;
  }
  switch (cal_2) {
    case "+":
      appendImageElement("cal_img", "images/plus.png", calculation2);
      break;
    case "-":
      appendImageElement("cal_img", "images/minus.png", calculation2);
      break;
    case "/":
      appendImageElement("cal_img", "images/division.png", calculation2);
      break;
    case "*":
      appendImageElement("cal_img", "images/multiplication.png", calculation2);
      break;
  }

  if (value3 === "") {
    document.querySelector("#queText3").style.display = "none";
    document.querySelector("#calculation2").style.display = "none";
  }

  if (validateIsValueBunsu(value1) || validateIsValueBunsu(value2)) {
    document.querySelector("#queTxt").style.transform = "scale(0.48) translateY(-84px)";
  }
}

function initBus() {
  log("initBus...");

  var Num1 = gameManager.TOTAL_ANSWER_ARRAY[0],
    Num2 = gameManager.TOTAL_ANSWER_ARRAY[1],
    back1 = document.querySelector("#back1"),
    busHi = document.querySelector("#busHi");

  (child = document.createElement("img")), child.setAttribute("id", "child");

  back1.setAttribute("style", "position: absolute; top: 20px; left: 300px;");
  child.setAttribute("style", "position: absolute; left: 247px; top: 275px; z-index: 0;");

  var randomChild = Math.floor(Math.random() * 2 + 1);
  child.src = "images/busstop_char_" + randomChild + ".png";

  bgCanvas.appendChild(child);
}

function busMotioncorrect() {
  var busMotion = document.createElement("img"),
    bus = document.querySelector("#bus"),
    busHi = document.querySelector("#busHi"),
    correctTxt = document.createElement("div"),
    bus = document.createElement("img");

  spriteArray = ["images/busstop_bus_tire_1.png", "images/busstop_bus_tire_2.png", "images/busstop_bus_tire_1.png", "images/busstop_bus_tire_2.png", "images/busstop_bus_tire_1.png", "images/busstop_bus_tire_2.png", "images/busstop_bus_tire_1.png", "images/busstop_bus_tire_2.png"];

  busMotion.setAttribute("id", "busMotion");
  correctTxt.setAttribute("id", "correctTxt");
  bus.setAttribute("id", "bus");

  var randomBus = Math.floor(Math.random() * 4 + 1);
  bus.src = "images/busstop_bus_" + randomBus + ".png";

  busMotion.setAttribute("style", "position: absolute; top: 77%; left: 200px; z-index: 2;");
  busHi.setAttribute("style", "left: 1300px;");

  var busHiLeft = parseInt(busHi.style.left),
    left = -1070;

  streamSound.setSound("media/bus.mp3");
  setTimeout(function () {
    busHi.appendChild(busMotion);
    busHi.appendChild(bus);
    busHi.appendChild(correctTxt);

    var answerText = gameManager.CURRENT_ANSWER[0];

    if (validateIsValueBunsu(answerText)) {
      makeBunsu(answerText, correctTxt);
      correctTxt.querySelector(".bunsuDiv").style.transform = "scale(0.68) translateY(-100px)";
    } else {
      correctTxt.innerHTML = gameManager.CURRENT_ANSWER[0];
    }
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
        index++;
      },
    });
    spriteAnimation(spriteArray, busMotion);
  }, 100);
}

function childClick() {
  var child = document.querySelector("#child");
  (childSrc = child.src), (childObj = childSrc.split("_"));
  childObj = childObj.slice("-1");

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

  child.addEventListener('mousedown', btnDown, false);
  // child.addEventListener('touchstart', btnDown, false);
  child.addEventListener('mouseup', btnUp, false);
  // child.addEventListener('touchend', btnUp, false);
}

function childClickMotion() {
  var child = document.querySelector("#child");
  childSrc = child.src;

  sadChild = childSrc.replace(".png", "");

  childArray = [sadChild + "_1.png", sadChild + "_1.png", sadChild + "_2.png", sadChild + "_2.png"];
  setTimeout(function () {
    var aa = parseInt(childArray.length) * 220;
    var index = 0;
    animate({
      delay: 220,
      duration: aa,
      delta: makeEaseInOut(linear),
      step: function (delta) {
        child.src = childArray[index];
        index++;
      },
    });
    spriteAnimation(childArray, child);
  }, 10);
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
  }, 100);
}

function gameOver(currentObj, dragObj, x, y) {
  document.querySelector("#answerMark").setAttribute("style", "display:block; top:" + (currentObj.offsetTop + 0) + "px; left:" + (currentObj.offsetLeft + 27) + "px; z-index: 1;");
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  var child = document.querySelector("#child"),
    childSrc = child.src;

  setTimeout(function () {
    child.style.display = "none";
  }, 1200);
  // setTimeout(function () {
  //   child.setAttribute("style", "position: absolute; left: 450px; top : 335px; z-index: 10;");
  //   child.setAttribute("src", childSrc.replace(".png", "_face.png"));
  //   child.style.pointerEvents = "none";
  // }, 1700);
  busMotioncorrect();

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);

  setTimeout(function () {
    busBye();
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
  }, 2000);

  // setTimeout(function() {
  // 	log('excute stampStarIcon!');
  // }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 3500);
}

function appendChoiceQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    choiceQuestionContainer = document.createElement("div"),
    choiceLeft = 0,
    choiceTop = 90;

  switch (gameManager.choiceQuestion.length) {
    case 1:
      choiceLeft = 240;
      break;
    case 2:
      choiceLeft = 150;
      break;
    case 3:
      // choiceLeft = 1041;
      choiceLeft = 1005;
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

    choiceTop = choiceTop + 90;

    currentQuestion.setAttribute("style", "top:" + choiceTop + "px;left:" + choiceLeft + "px;");

    var innerText = gameManager.choiceQuestion[i];

    if (imgSrcArray) {
      var imgObjText = document.createElement("div");
      imgObjText.setAttribute("id", "choiceQuestionText_" + i);
      imgObjText.className = className[0] + "Text";
      imgObjText.setAttribute("style", "top: 20px; left: 30px;");
      imgObjText.innerHTML = innerText;
      choiceQuestionGroup.appendChild(imgObjText);
    } else {
      if (validateIsValueBunsu(innerText)) {
        makeBunsu(innerText, currentQuestion);
        currentQuestion.querySelector(".bunsuDiv").style.transform = "scale(0.68) translate(-10px, -38px)";
      } else {
        currentQuestion.innerHTML = innerText;

        if (innerText.toString().length >= 5) {
          currentQuestion.style.fontSize = "48px";
          currentQuestion.style.letterSpacing = "-0.05em";
        }
      }
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
          compareAnswer(this);
        },
        false
      );
    }
  }
}

// value가 분수인지 판단
function validateIsValueBunsu(value) {
  return /\[/g.test(value);
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
