var dragObjElements = [];
var areaPositions = [];
var dragAndAreaScale = 0.8;

function initScene() {
  console.log("initScene()");
  console.log("gameManager.quizType ~>", gameManager.quizType);
  console.log("gameManager.quizObjs ~>", gameManager.quizObjs);
  console.log("gameManager.QUIZ_ANSWER ~>", gameManager.QUIZ_ANSWER);

  var bgCanvas = document.getElementById("bgCanvas");

  var quizObjsLength = gameManager.quizObjs.length;
  var choiceWidth = 0;
  var choiceHeight = 0;

  (function selectBackground() {
    var backgroundImageName = "";

    switch (gameManager.quizType) {
      case "spider_1_1":
        backgroundImageName = "bgImg_right.png";
        break;
      case "spider_1_2":
        backgroundImageName = "bgImg_right.png";
        break;
      case "spider_1_3":
        backgroundImageName = "bgImg_bottom.png";
        break;
      case "spider_1_4":
        backgroundImageName = "bgImg_bottom.png";
        break;
      default:
        break;
    }

    document.body.style.backgroundImage = "url(./images/" + backgroundImageName + ")";
  })();

  (function drawImages() {
    if (gameManager.quizType === "spider_1_1") {
      (function drawArrows() {
        var ARROW_SIZES = [140, 235];
        var ARROW_COORDS = [[280, 590], 100];

        ["4-1-red-arrow.svg", "4-1-blue-arrow.svg"].forEach(function (backgroundImage, idx) {
          var arrow = document.createElement("div");

          arrow.style.position = "absolute";
          arrow.style.left = ARROW_COORDS[0][idx] + "px";
          arrow.style.top = ARROW_COORDS[1] + "px";
          arrow.style.width = ARROW_SIZES[0] + "px";
          arrow.style.height = ARROW_SIZES[1] + "px";
          arrow.style.background = "url(./images/" + backgroundImage + ") center / contain no-repeat";
          arrow.style.pointerEvents = "none";

          bgCanvas.appendChild(arrow);
        });
      })();

      (function drawBoxes() {
        choiceWidth = 105;
        choiceHeight = 120;

        var BOX_INITIAL_LEFT = 450;
        var BOX_LEFT = BOX_INITIAL_LEFT;
        var BOX_LEFT_DIFF = 97;
        var BOX_LINE_LEFT_DIFF = 49;
        var BOX_LINE_LEFTS = [BOX_INITIAL_LEFT - BOX_LINE_LEFT_DIFF * 1, BOX_INITIAL_LEFT - BOX_LINE_LEFT_DIFF * 2, BOX_INITIAL_LEFT - BOX_LINE_LEFT_DIFF * 3, BOX_INITIAL_LEFT - BOX_LINE_LEFT_DIFF * 2, BOX_INITIAL_LEFT - BOX_LINE_LEFT_DIFF * 1, BOX_INITIAL_LEFT];
        var BOX_TOP = 80;
        var BOX_TOP_DIFF = 82;

        [1, 2, 4, 3, 5, 7, 4, 6, 8, 10, 7, 0, 11, 10, 12, 0].forEach(function (number, idx) {
          var box = document.createElement("div");

          box.style.position = "absolute";
          box.style.left = BOX_LEFT + "px";
          box.style.top = BOX_TOP + "px";
          box.style.width = choiceWidth + "px";
          box.style.height = choiceHeight + "px";
          box.style.background = "url(./images/4-1-hexagon.svg) center / contain no-repeat";
          box.style.lineHeight = choiceHeight + "px";
          box.style.textAlign = "center";
          box.style.pointerEvents = "none";

          if (number) {
            box.innerHTML = number;
          } else {
            areaPositions.push([BOX_LEFT, BOX_TOP]);
          }

          bgCanvas.appendChild(box);

          if ([0, 2, 5, 9, 12, 14].indexOf(idx) > -1) {
            BOX_TOP += BOX_TOP_DIFF;
            BOX_LEFT = BOX_LINE_LEFTS[[0, 2, 5, 9, 12, 14].indexOf(idx)];
          } else {
            BOX_LEFT += BOX_LEFT_DIFF;
          }
        });
      })();

      console.log("areaPositions ~>", areaPositions);
    } else if (gameManager.quizType === "spider_1_2") {
      (function drawBgImage() {
        var left = 190;
        var top = 55;

        var bgImage = document.createElement("img");

        bgImage.src = "./images/4-1-snail.svg";
        bgImage.style.position = "absolute";
        bgImage.style.left = left + "px";
        bgImage.style.top = top + "px";
        bgImage.style.pointerEvents = "none";

        bgCanvas.appendChild(bgImage);
      })();

      (function drawNumbers() {
        var INITIAL_COORDS_ARRAY = [
          [520, 340],
          [475, 405],
          [520, 437],
          [545, 405],
        ];
        var COORD_DIFFS = [63, 65, -65, -64];
        var NUMBERS_ARRAY = [
          [8, 16, 24, 32],
          [6, 14, 22, 0],
          [4, 12, 20, 0],
          [2, 10, 18, 26],
        ];

        var left;
        var top;
        var coordDiff;
        NUMBERS_ARRAY.forEach(function (numbers, numbersIdx) {
          var initialCoords = INITIAL_COORDS_ARRAY[numbersIdx];
          left = initialCoords[0];
          top = initialCoords[1];
          coordDiff = COORD_DIFFS[numbersIdx];

          numbers.forEach(function (number, numberIdx) {
            var numberElement = document.createElement("div");

            numberElement.style.position = "absolute";
            numberElement.style.left = left + "px";
            numberElement.style.top = top + "px";
            numberElement.style.fontSize = "44px";
            numberElement.style.transform = "translate(-50%, -50%)";

            if (number) {
              numberElement.innerHTML = number;
            } else {
              areaPositions.push([left, top]);
            }

            bgCanvas.appendChild(numberElement);

            if (numbersIdx % 2) {
              left -= coordDiff;
            } else {
              top -= coordDiff;
            }
          });
        });
      })();
    } else if (gameManager.quizType === "spider_1_3" || gameManager.quizType === "spider_1_4") {
      var TRIANGLE_COORDS = [55, 160];
      var TRIANGLE_SIZE = [250, 225];
      var TRIANGLE_LEFT_DIFF = 300;
      var NUMBERS_ARRAY =
        gameManager.quizType === "spider_1_4"
          ? [
              [1, 1, 1],
              [6, 2, 3],
              [36, 4, 9],
              [0, 8, 27],
            ]
          : [
              [3, 1, 2],
              [6, 2, 4],
              [9, 3, 6],
              [0, 4, 8],
            ];
      var NUMBER_COORDS = [
        [125, 50],
        [50, 175],
        [200, 175],
      ];
      var BG_IMG_TYPE = gameManager.quizType === "spider_1_4" ? "blue" : "orange";

      NUMBERS_ARRAY.forEach(function (numbers, numbersIdx) {
        var triangleElement = document.createElement("div");

        triangleElement.style.position = "absolute";
        triangleElement.style.left = TRIANGLE_COORDS[0] + "px";
        triangleElement.style.top = TRIANGLE_COORDS[1] + "px";
        triangleElement.style.width = TRIANGLE_SIZE[0] + "px";
        triangleElement.style.height = TRIANGLE_SIZE[1] + "px";
        triangleElement.style.background = "url(./images/4-1-" + BG_IMG_TYPE + "-triangle.png) center / contain no-repeat";
        triangleElement.style.pointerEvents = "none";

        numbers.forEach(function (number, numberIdx) {
          var coords = NUMBER_COORDS[numberIdx];
          var left = coords[0];
          var top = coords[1];
          var numberElement = document.createElement("div");

          numberElement.style.position = "absolute";
          numberElement.style.left = left + "px";
          numberElement.style.top = top + "px";
          numberElement.style.fontSize = "44px";
          numberElement.style.transform = "translate(-50%, -50%)";
          numberElement.style.pointerEvents = "none";

          if (number) {
            numberElement.innerHTML = number;
          } else {
            areaPositions.push([TRIANGLE_COORDS[0] + left, TRIANGLE_COORDS[1] + top]);
          }

          triangleElement.appendChild(numberElement);
        });

        bgCanvas.appendChild(triangleElement);

        TRIANGLE_COORDS[0] += TRIANGLE_LEFT_DIFF;
      });
    }
  })();

  (function drawDragObjElements() {
    var quizObj;
    var dragObjElement;

    var choiceLeft = 0;
    var choiceLeftDiff = 0;
    var choiceTop = 0;
    var choiceTopDiff = 0;

    switch (gameManager.quizType) {
      case "spider_1_1":
        choiceLeft = 1095;
        choiceTop = 100;
        choiceTopDiff = 150;
        choiceWidth = 105;
        choiceHeight = 120;
        break;
      case "spider_1_2":
        choiceLeft = 1095;
        choiceTop = 100;
        choiceTopDiff = 150;
        choiceWidth = 95;
        choiceHeight = 70;
        break;
      case "spider_1_3":
        choiceLeft = 260;
        choiceLeftDiff = 320;
        choiceTop = 560;
        choiceWidth = 155;
        choiceHeight = 120;
        break;
      case "spider_1_4":
        choiceLeft = 260;
        choiceLeftDiff = 320;
        choiceTop = 560;
        choiceWidth = 155;
        choiceHeight = 120;
        break;
      default:
        break;
    }

    for (var i = 0; i < quizObjsLength; i++) {
      quizObj = gameManager.quizObjs[i];

      console.log("quizObj ~>", quizObj, i);

      dragObjElement = document.createElement("div");

      dragObjElement.className = "dragObj dragObj_" + i;

      dragObjElement.style.position = "absolute";
      dragObjElement.style.left = choiceLeft + "px";
      dragObjElement.style.top = choiceTop + "px";
      dragObjElement.style.width = choiceWidth + "px";
      dragObjElement.style.height = choiceHeight + "px";
      dragObjElement.style.lineHeight = choiceHeight + "px";
      dragObjElement.style.cursor = "pointer";

      switch (gameManager.quizType) {
        case "spider_1_1":
          dragObjElement.style.background = "url(./images/4-1-hexagon.svg) center / contain no-repeat";
          break;
        case "spider_1_2":
          dragObjElement.style.background = "url(./images/4-1-snail-numbox.png) center / contain no-repeat";
          dragObjElement.style.transform = "scale(" + dragAndAreaScale + ")";
          break;
        case "spider_1_3":
          dragObjElement.style.background = "url(./images/4-1-triangle-numbox.png) center / contain no-repeat";
          break;
        case "spider_1_4":
          dragObjElement.style.background = "url(./images/4-1-triangle-numbox.png) center / contain no-repeat";
          break;
        default:
          break;
      }

      dragObjElement.innerHTML = quizObj;

      bgCanvas.appendChild(dragObjElement);

      dragObjElement.setAttribute("answerValue", quizObj);

      gameManager.quizPosition.push([choiceTop, choiceLeft]);

      dragObjElements.push(dragObjElement);

      new Dragdrop(dragObjElement);

      choiceLeft += choiceLeftDiff;
      choiceTop += choiceTopDiff;
    }

    console.log("gameManager.quizPosition ~>", gameManager.quizPosition);
  })();

  (function drawAreas() {
    var dropAreaElement;
    var answerValue;
    var areaLeft = 0;
    var areaTop = 0;

    for (var i = 0; i < gameManager.QUIZ_ANSWER.length; i++) {
      dropAreaElement = createElement("div", bgCanvas, "dropArea dropArea_" + i);
      answerValue = gameManager.QUIZ_ANSWER[i];

      dropAreaElement.style.position = "absolute";
      dropAreaElement.style.width = choiceWidth + "px";
      dropAreaElement.style.height = choiceHeight + "px";

      switch (gameManager.quizType) {
        case "spider_1_1":
          areaLeft = areaPositions[i][0];
          areaTop = areaPositions[i][1];
          dropAreaElement.style.background = "url(./images/4-1-hexagon.svg) center / contain no-repeat";
          break;
        case "spider_1_2":
          areaLeft = areaPositions[i][0] - choiceWidth / 2;
          areaTop = areaPositions[i][1] - choiceHeight / 2;
          dropAreaElement.style.background = "url(./images/4-1-snail-nullbox.png) center / contain no-repeat";
          dropAreaElement.style.transform = "scale(" + dragAndAreaScale + ")";
          break;
        case "spider_1_3":
          areaLeft = areaPositions[i][0] - choiceWidth / 2;
          areaTop = areaPositions[i][1] - choiceHeight / 2;
          dropAreaElement.style.background = "url(./images/4-1-triangle-nullbox.png) center / contain no-repeat";
          break;
        case "spider_1_4":
          areaLeft = areaPositions[i][0] - choiceWidth / 2;
          areaTop = areaPositions[i][1] - choiceHeight / 2;
          dropAreaElement.style.background = "url(./images/4-1-triangle-nullbox.png) center / contain no-repeat";
          break;
        default:
          break;
      }

      dropAreaElement.style.left = areaLeft + "px";
      dropAreaElement.style.top = areaTop + "px";

      dropAreaElement.setAttribute("answerValue", answerValue);

      gameManager.dropArea.push(dropAreaElement);
    }
  })();
}

function appendSelectQuestion(buttonType, choiceQuestionArray, imgSrcArray) {
  var bgCanvas = document.getElementById("bgCanvas"),
    quizObjContainer = document.createElement("div"),
    line = document.createElement("div"),
    dragContainer = createElement("div", bgCanvas, "dragContainer"),
    choiceTop = 550;

  if (gameManager.quizObj[0].length < 4) choiceLeft = -150;
  else choiceLeft = -80;

  quizObjContainer.setAttribute("class", "quizObjContainer");
  bgCanvas.appendChild(quizObjContainer);
  for (var i = 0; i < gameManager.blankCount.length; i++) {
    var selectObj,
      dragObj = createElement("div", dragContainer, "dragObj_" + i),
      X = dragObj.className.split("_")[1];

    if (gameManager.quizObj[0].length < 4) choiceLeft = choiceLeft + 350;
    else choiceLeft = choiceLeft + 250;

    selectObj = document.querySelector(".dragObj_" + i);
    selectObj.setAttribute("style", "left: " + choiceLeft + "px; Top:" + choiceTop + "px;");
    selectObj.style.background = "url(images/spider_waterBox.png) no-repeat";
    selectObj.setAttribute("answerValue", gameManager.QUIZ_OPTION[gameManager.QUIZ_OPTION.length - 1][i]);
    selectObj.innerHTML = gameManager.QUIZ_OPTION[gameManager.QUIZ_OPTION.length - 1][i];

    gameManager.quizPosition.push([choiceTop, choiceLeft]);

    new Dragdrop(selectObj);
  }
}

function gameOver(currentObj) {
  (function disableDragObjElements() {
    dragObjElements.forEach(function (dragObjElement) {
      dragObjElement.style.pointerEvents = "none";
    });
  })();

  setTimeout(function () {
    gameOverAnimation();
    streamSound.setSound("../include/media/correct.mp3");
  }, 500);

  // save log data
  setTimeout(function () {
    log("excute insDrillHis!");
    parent.$SpecializeContents.clearGame();
  }, 2300);
}
