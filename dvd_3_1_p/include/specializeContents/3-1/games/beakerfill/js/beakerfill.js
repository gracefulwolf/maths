function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  appendCircleElement("beakerLabelBg", "beakerLabelBg", document.getElementById("bgCanvas"));
  appendCircleElement("beakerWaterBox", "beakerWaterBox", document.getElementById("bgCanvas"));
  appendCircleElement("beakerPointerBox", "beakerPointerBox", document.getElementById("beakerWaterBox"));
  appendCircleElement("beakerNumbertxt", "beakerNumbertxt", document.getElementById("beakerPointerBox"));

  for (i = 0; i < BEAKER_LABEL_LENGTH - 1; i++) {
    appendCircleElement("beakerPointer" + i, "beakerPointer", document.getElementById("beakerPointerBox"));
  }

  appendImageElement("beakerLabel", "images/beakerfill_textbox.png", document.querySelector("#beakerLabelBg"));
  appendImageElement("beakerLine", "images/beakerfill_beaker_line.png", document.querySelector("#beakerWaterBox"));
  appendImageElement("beakerWater", "images/beakerfill_beaker_water.png", document.querySelector("#beakerWaterBox"));

  var ballImg = parseInt(gameManager.TOTAL_ANSWER_ARRAY[0]);

  CheckButton();
}

function initPosition() {
  var beakerLabeltxt = document.createElement("div"),
    beakerLabelBg = document.querySelector("#beakerLabelBg"),
    beakerWaterBox = document.querySelector("#beakerWaterBox"),
    beakerWater = document.querySelector("#beakerWater"),
    beakerPointerBox = document.querySelector("#beakerPointerBox"),
    beakerPointerBoxTop,
    beakWaterForstTop,
    beakWaterTop = 10;

    if (BEAKER_LABEL_LENGTH === 10) {
      BEAKER_WATER_INITIAL_TOP -= 2;
    }

  // log(gameManager.CURRENT_ANSWER[0][2] + '뭐임');

  switch (BEAKER_LABEL_LENGTH) {
    case 2:
      beakerPointerBoxTop = -120;
      beakWaterForstTop = 150;
      break;

    case 3:
      beakerPointerBoxTop = -66;
      beakWaterForstTop = 102;
      break;

    case 4:
      beakerPointerBoxTop = -36;
      beakWaterForstTop = 74;
      break;

    case 5:
      beakerPointerBoxTop = -10;
      beakWaterForstTop = 69;
      break;

    case 6:
      beakerPointerBoxTop = -20;
      beakWaterForstTop = 52;
      break;

    case 7:
      beakerPointerBoxTop = -7;
      beakWaterForstTop = 49;
      break;

    case 8:
      beakerPointerBoxTop = 8;
      beakWaterForstTop = 36.5;
      break;

    case 9:
      beakerPointerBoxTop = 2;
      beakWaterForstTop = 33;
      break;

    case 10:
      beakerPointerBoxTop = -7;
      beakWaterForstTop = 34;
      break;

    case 11:
      beakerPointerBoxTop = -4;
      beakWaterForstTop = 28;
      break;

    case 12:
      beakerPointerBoxTop = -6;
      beakWaterForstTop = 26;
      break;

    case 13:
      beakerPointerBoxTop = -3;
      beakWaterForstTop = 24;
      break;

    case 14:
      beakerPointerBoxTop = 4;
      beakWaterForstTop = 22;
      break;

    case 15:
      beakerPointerBoxTop = 13;
      beakWaterForstTop = 20;
      break;
  }

  for (i = 0; i < BEAKER_LABEL_LENGTH - 1; i++) {
    var beakerPointer = document.querySelector("#beakerPointer" + i);

    // log(beakerPointer);

    beakWaterTop = beakWaterTop + beakWaterForstTop;

    beakerPointer.setAttribute("style", "top:" + beakWaterTop + "px;");
  }

  for (var i = 0; i < 15; i++) {
    var parentObjtxt = (parentObjImg = document.querySelector("#parentObj_" + i));

    // log(parentObjImg);
  }

  beakerPointerBox.setAttribute("style", "top:" + beakerPointerBoxTop + "px;");

  beakerLabeltxt.setAttribute("id", "beakerLabeltxt");
  beakerLabeltxt.innerHTML = "만큼 채우세요.";
  beakerLabeltxt.setAttribute("style", "position:absolute; top:35px; left:160px; width:416px; height:100px; text-align:center;");

  beakerLabelBg.setAttribute("style", "position:absolute; top:30px; left:175px;");

  beakerWaterBox.setAttribute("style", "position:absolute; top:300px; left:330px; overflow: hidden; height:345.3px");
  beakerWater.setAttribute("style", "position:absolute; left:0; z-index:-1; top:" + BEAKER_WATER_INITIAL_TOP + "px;");
  // beakerPointer.setAttribute('style','width:30px; height:5px; background:#fff; position:absolute; top:20px; left:18px;');
  
  beakerLabelBg.appendChild(beakerLabeltxt);

  // appendCircleElement('questText1','txt', document.querySelector('#beakerLabeltxt'));

  var hammerImgObjText = document.createElement("div"),
    hammerFountainText = document.createElement("div"),
    hammerFountainLine = document.createElement("div"),
    hammerMixedFractionText = document.createElement("div"),
    hammerTotalScoreBox = document.createElement("div"),
    hammerTotalScore;

  // 대분수
  hammerMixedFractionText.setAttribute("id", "fountainText");
  hammerMixedFractionText.className = "mixedFraction";
  hammerMixedFractionText.setAttribute("style", "position:absolute;top: 30px; left: -26px;");

  hammerMixedFractionText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0][0];

  hammerImgObjText.setAttribute("id", "hammerImgObjText");
  hammerImgObjText.className = "Text";
  hammerImgObjText.setAttribute("style", "position:absolute; top: 0px; text-align:center; width:43px; letter-spacing:-9px");
  hammerImgObjText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0][1];

  hammerFountainText.setAttribute("id", "hammerFountainText");
  hammerFountainText.className = "fountain";
  hammerFountainText.setAttribute("style", "position:absolute; top: 60px; width:45px; letter-spacing:-9px");
  hammerFountainText.innerHTML = BEAKER_LABEL_LENGTH;

  hammerFountainLine.setAttribute("id", "hammerFountainLine");
  hammerFountainLine.className = "fountainLine";
  hammerFountainLine.setAttribute("style", "position:absolute; top: 30px; letter-spacing:-9px");
  hammerFountainLine.innerHTML = "-----";

  hammerTotalScoreBox.setAttribute("id", "hammerTotalScoreBox");
  hammerTotalScoreBox.className = "fountainLine";
  // hammerTotalScoreBox.setAttribute('style','margin:0 auto; width:66px');

  beakerLabeltxt.appendChild(hammerTotalScoreBox);

  if (gameManager.TOTAL_ANSWER_ARRAY[0][0] === 0) {
    hammerTotalScoreBox.setAttribute("style", "position:absolute; top:-30px; margin:0 auto; width:66px");
  } else {
    hammerTotalScoreBox.setAttribute("style", "position:absolute; top:-30px; margin:0 auto; width:40px");
    hammerTotalScoreBox.appendChild(hammerMixedFractionText);
  }
  hammerTotalScoreBox.appendChild(hammerImgObjText);
  hammerTotalScoreBox.appendChild(hammerFountainText);
  hammerTotalScoreBox.appendChild(hammerFountainLine);
}

function initWeight() {
  log("initWeight...");

  var left = 15,
    weightOriginal,
    checkBtn = document.getElementById("checkBtn"),
    answerObject1 = document.getElementById("answerObject1");

  checkBtn.style.display = "block";
  weightOriginal = "images/beakerfill_cup.png";

  for (var i = 0; i < 15; i++) {
    var top = 90,
      eventCallback = function () {
        arguments[0].preventDefault();
      };

    createObject(i, top, left, eventCallback, weightOriginal);
  }
}

function gameOver() {
  var answerObj1 = document.querySelector("#answerObject1"),
    weight_answer = document.querySelector(".weight_answer"),
    answerChildNode1 = parseInt(answerObj1.childNodes.length),
    beakerWater = document.querySelector("#beakerWater"),
    weight_answer1 = parseInt(weight_answer.childNodes.length);

  // log(answerChildNode1 + '뭔데');

  if (gameManager.CURRENT_ANSWER[0][1] === answerChildNode1) {
    var weightCounter = document.querySelector("#weightCounter").childNodes,
      checkBtn = document.querySelector("#checkBtn");

    for (var i = 0; i < weightCounter.length; i++) {
      weightCounter[i].style.pointerEvents = "none";
      checkBtn.style.pointerEvents = "none";
    }

    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");

    var balance2 = document.querySelector("#balance2"),
      balance4 = document.querySelector("#balance4"),
      weightBall = document.querySelector("#weightBall"),
      answerObject1 = document.querySelector("#answerObject1");

    // logCounter.tryCounter();
    // logCounter.endTime();
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
  } else {
    streamSound.setSound("../include/media/incorrect.mp3");
    // logCounter.tryCounter();

    setTimeout(function () {
      gameManager.selectedQuestion = [];
      document.querySelector("#bgCanvas").innerHTML =
        "<div id='weightCounter'></div><div id='answerObject1'></div><div id='weightBall'></div><img src='images/boxfill_checkbtn.png' id = 'checkBtn'/>";
      appendCircleElement("beakerLabelBg", "beakerLabelBg", document.getElementById("bgCanvas"));
      appendCircleElement("beakerWaterBox", "beakerWaterBox", document.getElementById("bgCanvas"));
      appendCircleElement("beakerPointerBox", "beakerPointerBox", document.getElementById("beakerWaterBox"));
      appendCircleElement("beakerNumbertxt", "beakerNumbertxt", document.getElementById("beakerPointerBox"));

      for (i = 0; i < BEAKER_LABEL_LENGTH; i++) {
        appendCircleElement("beakerPointer" + i, "beakerPointer", document.getElementById("beakerPointerBox"));
      }

      appendImageElement("beakerLabel", "images/beakerfill_textbox.png", document.querySelector("#beakerLabelBg"));
      appendImageElement("beakerLine", "images/beakerfill_beaker_line.png", document.querySelector("#beakerWaterBox"));
      appendImageElement("beakerWater", "images/beakerfill_beaker_water.png", document.querySelector("#beakerWaterBox"));

      initPosition();

      initWeight();
      CheckButton();

      answerTxtWater();
      // initScene();
      // appendImageElement('beakerWater', 'images/beakerfill_beaker_water.png', document.querySelector('#beakerWaterBox'));
      // beakerWater.setAttribute('style','position:absolute; left:0; z-index:-1; top:328px;');
    }, 400);
  }
}

function createObject(index, top, left, eventCallback, parentObjSrc) {
  var choiceTop = 0,
    choiceLeft = 0,
    parentObj = document.createElement("img"),
    parentObjBox = document.createElement("div"),
    parentObjtxt = document.createElement("div"),
    beakerWater = document.querySelector("#beakerWater");

  parentObj.src = parentObjSrc;

  // beakerWater.style.top = '-'+ index + 'px';
  parentObjBox.setAttribute("id", "parentObjBox_" + index);
  parentObjtxt.setAttribute("id", "parentObjtxt_" + index);

  // parentObjtxt.innerHTML = waterTotalScoreBox;

  parentObj.setAttribute("id", "parentObj_" + index);
  parentObj.className = "weight_answer";
  parentObjBox.className = "parentObjBox";
  parentObjtxt.className = "parentObjtxt";

  parentObj.setAttribute("style", "top: " + choiceTop + "px;");
  gameManager.choiceQuestionPosition.push([choiceTop, 0]);

  document.getElementById("weightCounter").appendChild(parentObjBox);

  parentObjBox.appendChild(parentObjtxt);
  parentObjBox.appendChild(parentObj);

  new Dragdrop(parentObjBox);
}

function boundingCircle(dragObj, x, y) {
  switch (gameManager.CURRENT_TYPE) {
    case "weight":
      var answerObj1 = document.querySelector("#answerObject1"),
        answerChildNode1 = parseInt(answerObj1.childNodes.length),
        waterNumber;

      switch (BEAKER_LABEL_LENGTH) {
        case 2:
          waterNumber = 2;
          waterBubble = 154;
          break;

        case 3:
          waterNumber = 3;
          waterBubble = 100;
          break;

        case 4:
          waterNumber = 4;
          waterBubble = 74.5;
          break;

        case 5:
          waterNumber = 5;
          waterBubble = 69;
          break;

        case 6:
          waterNumber = 6;
          waterBubble = 50;
          break;

        case 7:
          waterNumber = 7;
          waterBubble = 49;
          break;

        case 8:
          waterNumber = 8;
          waterBubble = 37.5;
          break;

        case 9:
          waterNumber = 9;
          waterBubble = 34;
          break;

        case 10:
          waterNumber = 10;
          waterBubble = 34;
          break;

        case 11:
          waterNumber = 11;
          waterBubble = 28.5;
          break;

        case 12:
          waterNumber = 12;
          waterBubble = 26;
          break;

        case 13:
          waterNumber = 13;
          waterBubble = 24.5;
          break;

        case 14:
          waterNumber = 14;
          waterBubble = 22;
          break;

        case 15:
          waterNumber = 15;
          waterBubble = 20.5;
          break;
      }

      if (
        x > answerObj1.offsetLeft * gameManager.zoomRate &&
        x < answerObj1.offsetLeft * gameManager.zoomRate + (answerObj1.clientWidth + waterNumber) * gameManager.zoomRate &&
        y > answerObj1.offsetTop * gameManager.zoomRate &&
        y < answerObj1.offsetTop * gameManager.zoomRate + (answerObj1.clientHeight + waterNumber) * gameManager.zoomRate &&
        answerChildNode1 < waterNumber
      ) {
        log("bounding!");

        streamSound.setSound("media/beakerfill_success.mp3");
        var objsrc = dragObj.src;
        (beakerWater = document.querySelector("#beakerWater")), (beakerWaterTop = beakerWater.offsetTop);
        (answerObj1 = document.querySelector("#answerObject1")), (beakerNumbertxt = document.querySelector("#beakerNumbertxt"));
        answerChildNode1 = parseInt(answerObj1.childNodes.length);

        // log(beakerWaterTop + '뭐나옴?');
        beakerWater.style.top = beakerWaterTop - waterBubble + "px";

        // dragObj.setAttribute('src',objsrc.replace('.png','_' + answerChildNode1 + '.png'))
        // dragObj.style.display = 'none'

        dragObj.setAttribute("style", "top: 25px; display:none;");

        answerObj1.appendChild(dragObj);

        // log(' 이리오심?');

        beakerNumbertxt.innerHTML = answerChildNode1 + 1;
        beakerNumbertxt.setAttribute("style", "position:absolute; top:155px; left:130px;");

        setTimeout(function () {
          beakerNumbertxt.style.display = "none";
        }, 500);

        log(beakerNumbertxt);
      } else {
        streamSound.setSound("../include/media/incorrect.mp3");
        log("not bounding!");
        // logCounter.tryCounter();
        incorrectAnimation(dragObj);
      }
      break;

    default:
  }
}

function CheckButton() {
  var checkBtn = document.querySelector("#checkBtn");

  btnDown = function (e) {
    e.preventDefault();
    checkBtn.src = "images/boxfill_checkbtn_push.png";
  };
  btnUp = function (e) {
    e.preventDefault();
    checkBtn.src = "images/boxfill_checkbtn.png";
    gameOver();
  };

  checkBtn.addEventListener("mousedown", btnDown, false);
  // checkBtn.addEventListener("touchstart", btnDown, false);
  checkBtn.addEventListener("mouseup", btnUp, false);
  // checkBtn.addEventListener("touchend", btnUp, false);
}

function answerTxtWater() {
  for (i = 0; i < 15; i++) {
    var waterImgObjText = document.createElement("div"),
      waterFountainText = document.createElement("div"),
      waterFountainLine = document.createElement("div"),
      waterMixedFractionText = document.createElement("div"),
      waterTotalScoreBox = document.createElement("div"),
      parentObjtxt = document.querySelector("#parentObjtxt_" + i),
      parentObj = document.querySelector("#parentObj_" + i),
      waterTotalScore;
    // parentObjtxt;

    // 대분수
    waterMixedFractionText.setAttribute("id", "waterMixedFractionText_" + i);
    waterMixedFractionText.className = "mixedFraction";
    waterMixedFractionText.setAttribute("style", "position:absolute;top: 30px; left: -26px;");

    waterMixedFractionText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[1][0];

    waterImgObjText.setAttribute("id", "waterImgObjText_" + i);
    waterImgObjText.className = "Text";
    waterImgObjText.setAttribute("style", "position:absolute; top: 0px; text-align:center; width:50px; letter-spacing:-9px");
    waterImgObjText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[1][1];

    waterFountainText.setAttribute("id", "waterFountainText_" + i);
    waterFountainText.className = "fountain";
    waterFountainText.setAttribute("style", "position:absolute; top: 55px; width:45px; letter-spacing:-9px; width:50px; text-align:center;");
    waterFountainText.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[1][2];

    waterFountainLine.setAttribute("id", "waterFountainLine_" + i);
    waterFountainLine.className = "fountainLine";
    waterFountainLine.setAttribute("style", "position:absolute; top: 30px; letter-spacing:-9px; width:60px;");
    waterFountainLine.innerHTML = "-----";

    waterTotalScoreBox.setAttribute("id", "waterTotalScoreBox_" + i);
    waterTotalScoreBox.className = "fountainLine";
    // hammerTotalScoreBox.setAttribute('style','margin:0 auto; width:66px');

    // beakerLabeltxt.appendChild(hammerTotalScoreBox);

    parentObjtxt.style.zIndex = "10";

    if (gameManager.TOTAL_ANSWER_ARRAY[1][0] === 0) {
      parentObjtxt.setAttribute("style", "position:absolute; top:-30px; margin:0 auto; width:66px; left:24px;");
    } else {
      parentObjtxt.setAttribute("style", "position:absolute; top:-30px; margin:0 auto; width:40px");
      parentObjtxt.appendChild(waterMixedFractionText);
    }
    parentObjtxt.appendChild(waterImgObjText);
    parentObjtxt.appendChild(waterFountainText);
    parentObjtxt.appendChild(waterFountainLine);

    // log(parentObjtxt);

    // parentObj.setAttribute('style','z-index:-10');

    // log(parentObjtxt);
  }
}
