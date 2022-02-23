// NodeList.forEach poylfill for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var IMAGE_NAME;

function initScene() {
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  IMAGE_NAME = gameManager.QUIZ_OPTION[1][1];

  var bgCanvas = document.getElementById("bgCanvas");
  var noteBoard = createElement("div", bgCanvas, "noteBoard");
  circleImg = createElement("div", noteBoard, "circleImg");
  intX = Math.floor(Math.random() * 3 + 1);

  var bgImgUrl = "url(../include/images/common/" + gameManager.QUIZ_OPTION[1][0] + "/" + IMAGE_NAME;
  bgImgUrl += ".";
  bgImgUrl += ["k41-2-46", "k41-2-48", "k41-2-56", "k41-2-57", "k41-2-61"].indexOf(IMAGE_NAME) > -1 ? "svg" : "png";
  bgImgUrl += ")";

  noteBoard.style.background = "url(images/circleCount_note_" + intX + ".png) no-repeat";
  circleImg.style.background = bgImgUrl;

  var circleTextWrap = createElement("div", bgCanvas, "circleTextWrap"),
    circleText = createElement("div", circleTextWrap, "circleText");

  for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
    var dropArea = createElement("span", bgCanvas, "dropArea dropArea_" + i);
    var answerValue = gameManager.QUIZ_ANSWER[i];
    dropArea.setAttribute("answerValue", answerValue);
    gameManager.dropArea.push(dropArea);
  }

  circleImg.style.backgroundRepeat = "no-repeat";
  circleImg.style.backgroundPosition = "center";

  setTimeout(function () {
    switch (IMAGE_NAME) {
      case "41-4-17":
        circleImg.style.width = "846px";
        circleImg.style.height = "393px";
        circleImg.style.top = "240px";
        circleImg.style.left = "75px";
        break;
      case "41-4-54":
        circleImg.style.width = "651px";
        circleImg.style.height = "306px";
        circleImg.style.top = "270px";
        circleImg.style.left = "135px";
        break;
      case "4-1-4-1":
        circleImg.style.width = "828px";
        circleImg.style.height = "248px";
        circleImg.style.top = "320px";
        circleImg.style.left = "85px";
        break;
      case "4-1-4-2":
        circleImg.style.width = "696px";
        circleImg.style.height = "352px";
        circleImg.style.top = "270px";
        circleImg.style.left = "160px";
        break;
      case "4-1-4-3":
        circleImg.style.width = "624px";
        circleImg.style.height = "412px";
        circleImg.style.top = "230px";
        circleImg.style.left = "210px";
        circleImg.style.transform = "scale(0.9)";

        document.querySelectorAll(".dragObj").forEach(function (dragObj) {
          dragObj.style.fontSize = "40px";
        });
        break;
      case "4-1-4-4":
        circleImg.style.width = "708px";
        circleImg.style.height = "324px";
        circleImg.style.top = "280px";
        circleImg.style.left = "140px";

        document.querySelectorAll(".dragObj").forEach(function (dragObj) {
          dragObj.style.fontSize = "40px";
        });
        break;
      case "k41-2-61":
        circleImg.style.width = "504px";
        circleImg.style.height = "318px";
        circleImg.style.top = "285px";
        circleImg.style.left = "250px";
        break;
      case "k41-2-46":
        circleImg.style.width = "550px";
        circleImg.style.height = "432px";
        circleImg.style.top = "135px";
        circleImg.style.left = "220px";

        // dropArea.style.top = "450px";
        // dropArea.style.left = "585px";
        break;
      case "k41-2-48":
        circleImg.style.width = "600px";
        circleImg.style.height = "400px";
        circleImg.style.top = "140px";
        circleImg.style.left = "200px";

        document.querySelectorAll(".dragObj").forEach(function (dragObj) {
          dragObj.style.fontSize = "48px";
        });
        break;
      case "k41-2-56":
        circleImg.style.width = "500px";
        circleImg.style.height = "400px";
        circleImg.style.top = "160px";
        circleImg.style.left = "280px";

        // dropArea.style.top = "190px";
        // dropArea.style.left = "450px";

        document.querySelectorAll(".dragObj").forEach(function (dragObj) {
          dragObj.style.fontSize = "48px";
        });
        break;
      case "k41-2-57":
        circleImg.style.width = "600px";
        circleImg.style.height = "400px";
        circleImg.style.top = "160px";
        circleImg.style.left = "200px";

        // dropArea.style.top = "200px";
        // dropArea.style.left = "470px";

        document.querySelectorAll(".dragObj").forEach(function (dragObj) {
          dragObj.style.fontSize = "48px";
        });
        break;
      default:
        break;
    }
  }, 101);

  console.log(Array.isArray(gameManager.QUIZ_OPTION[0][0]));

  if (Array.isArray(gameManager.QUIZ_OPTION[0][0])) {
    circleText.innerHTML = "<div class='quizImg'></div>" + gameManager.QUIZ_OPTION[0][1] + "<div class='drop'></div>" + gameManager.QUIZ_OPTION[0][2];
    circleText.setAttribute("style", "top:70px; left:80px;");
    var quizImg = QS(".quizImg");
    quizImg.style.background = "url(../include/images/common/" + gameManager.QUIZ_OPTION[0][0][0] + "/" + gameManager.QUIZ_OPTION[0][0][1] + ".png)";
    quizImg.style.backgroundSize = "90px 90px";
  } else {
    circleText.innerHTML = gameManager.QUIZ_OPTION[0][0] + "<div class='drop'></div>" + gameManager.QUIZ_OPTION[0][1];
    circleText.setAttribute("style", "top:70px; left:70px;");
  }

  setTimeout(function () {
    var drop = QS(".drop");
    var dropAreaTop = drop.offsetTop + circleText.offsetTop,
      dropAreaLeft = drop.offsetLeft + circleText.offsetLeft;

    switch (IMAGE_NAME) {
      case "k41-2-46":
        dropAreaTop = 430;
        dropAreaLeft = 565;
        break;
      case "k41-2-48":
        dropAreaTop = 375;
        dropAreaLeft = 625;
        break;
      case "k41-2-56":
        dropAreaTop = 230;
        dropAreaLeft = 465;
        break;
      case "k41-2-57":
        dropAreaTop = 235;
        dropAreaLeft = 470;
        break;
      default:
        break;
    }
          console.log('dropAreaLeft', drop.offsetLeft)
    if (Array.isArray(gameManager.QUIZ_OPTION[0][0])) {
      fixDropAreaRect(drop, dropArea, circleText);
    } else {
      dropArea.setAttribute("style", "top:" + dropAreaTop + "px; left:" + dropAreaLeft + "px;");
    }
  }, 200);

  appendSelectQuestion("drag", gameManager.quizObj, intX);
}

function gameOver(currentObj) {
  var quizObjContainer = document.querySelector(".quizObjContainer").childNodes;

  for (var i = 0; i < quizObjContainer.length; i++) {
    quizObjContainer[i].style.pointerEvents = "none";
  }

  // logCounter.tryCounter();
  // logCounter.endTime();
  // clearInterval(countTimer);

  setTimeout(function () {
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
  }, 700);

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
  }, 2300);
}

function appendSelectQuestion(buttonType, choiceQuestionArray, intX) {
  var bgCanvas = document.getElementById("bgCanvas");
  var quizObjContainer = createElement("div", bgCanvas, "quizObjContainer");
  var line = document.createElement("div");
  var choiceTop = -85;
  var choiceTopDiff = 150;

  if (choiceQuestionArray.length === 5) {
    choiceTop = -90;
    choiceTopDiff = 130;
  }

  for (var i = 0; i < choiceQuestionArray.length; i++) {
    var dragObj = createElement("div", quizObjContainer, "dragObj dragObj_" + i);

    choiceTop = choiceTop + choiceTopDiff;

    dragObj.setAttribute("style", "left: 1050px; Top:" + choiceTop + "px;");
    dragObj.style.background = "url(images/circleCount_textBox_s_" + intX + ".png) no-repeat";

    dragObj.innerHTML = gameManager.quizObj[i];

    dragObj.setAttribute("answerValue", gameManager.quizObj[i]);

    gameManager.quizPosition.push([choiceTop, 1050]);

    // 2글자 이상일 경우 폰트 크기 조정
    if (gameManager.quizObj[i].toString().length === 2) {
      dragObj.style.fontSize = "44px";
    }

    if (buttonType === "drag") {
      new Dragdrop(dragObj);
    } else {
      dragObj.addEventListener(
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

// override dropCompare
function dropCompare(dragObj, x, y) {
  var dragObjValue = dragObj.getAttribute("answervalue");

  for (var i = 0; i < gameManager.dropArea.length; i++) {
    var dropValue = gameManager.dropArea[i].getAttribute("answervalue");
    dropValue = dropValue.split(",");

    if (
      x > gameManager.dropArea[i].offsetLeft * gameManager.zoomRate &&
      x < gameManager.dropArea[i].offsetLeft * gameManager.zoomRate + (gameManager.dropArea[i].clientWidth + 10) * gameManager.zoomRate &&
      y > gameManager.dropArea[i].offsetTop * gameManager.zoomRate &&
      y < gameManager.dropArea[i].offsetTop * gameManager.zoomRate + (gameManager.dropArea[i].clientHeight + 10) * gameManager.zoomRate
    ) {
      // exception
      var exception_1 = IMAGE_NAME === "4-1-4-1" && (dragObjValue === "왼" || dragObjValue === "오른");
      var exception_2 = IMAGE_NAME === "4-1-4-2" && (dragObjValue === "위" || dragObjValue === "아래");
      if (exception_1 || exception_2) {
        gameManager.dropIdx = 0;
        return true;
      }

      for (var j = 0; j < dropValue.length; j++) {
        if (dragObjValue == dropValue[j]) {
          gameManager.dropIdx = i;
          return true;
        }
      }
      return false;
    }
  }
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
