function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER[0]);

  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  var trainBlank = gameManager.CURRENT_ANSWER.toString().length,
    blockRandom = parseInt(Math.random() * 2),
    trainContainer = document.getElementById("trainContainer"),
    block1 = gameManager.TOTAL_ANSWER_ARRAY[0].toString().length,
    block2 = gameManager.TOTAL_ANSWER_ARRAY[1].toString().length,
    calculation = document.createElement("img"),
    block_Wrap = document.querySelector("#block_Wrap"),
    bgObject = document.querySelector("#bgObject"),
    blockBig;

  blockRandomChoice = parseInt(Math.random() * 5);

  calculation.setAttribute("id", "calculation");

  // trainContainer.style.width = '2'

  setRand(0, 4, 4);

  log(blockBig + "aaassaa");

  if (block1 > block2) {
    appendImageElement("answerObject", "images/blockAnswer_" + (block1 + 1) + ".png", trainContainer, "trainAnswer"); //답
  } else {
    appendImageElement("answerObject", "images/blockAnswer_" + (block2 + 1) + ".png", trainContainer, "trainAnswer"); //답
  }

  // appendImageElement('trainRoad', 'images/block_bar.png', document.querySelector('#bgObject')); //길..
  // appendImageElement('answerObject', 'images/blockAnswer_' + (trainBlank + 1) + '.png', trainContainer, 'trainAnswer'); //답
  appendImageElement("trainHead", "images/block_1block_" + randResult[2] + ".png", trainContainer); //트래인

  for (var i = 0; i < gameManager.trainTextArray.length; i++) {
    var trainRandom = parseInt(Math.random() * 7);
    blockMax = Math.max.apply(null, gameManager.trainTextArray).toString().length;

    // log(trainBlank+'aaaaaaaaaaaaaaaasd');

    if (block1 > block2) {
      appendImageElement("block_" + i, "images/block_" + block1 + "block_" + randResult[i] + ".png", trainContainer, "trainAnswer");
      document.querySelector("#block_" + i).setAttribute("style", "top:" + gameManager.trainPosition[i][0] + "px; right:" + gameManager.trainPosition[i][1] + "px; left:initial");

      // log(gameManager.trainPosition[i][0] + 'aaaaaaaaa');
    } else {
      appendImageElement("block_" + i, "images/block_" + block2 + "block_" + randResult[i] + ".png", trainContainer, "trainAnswer");
      document.querySelector("#block_" + i).setAttribute("style", "top:" + gameManager.trainPosition[i][0] + "px; right:" + gameManager.trainPosition[i][1] + "px; left:initial;");
    }

    var contentBox = document.createElement("div"),
      trainText = document.createElement("div"),
      blockAnswerText = document.createElement("div");

    trainText.innerHTML = gameManager.trainTextArray[i];
    // blockAnswerText.innerHTML = gameManager.trainTextArray[i];

    contentBox.setAttribute("id", "contentBox_" + i);

    trainText.className = "trainText";
    trainText.setAttribute("id", "trainText_" + i);

    blockIdNum = document.querySelector("#block_" + i);

    // log(blockMax + 'aaaaa');

    trainText.setAttribute("style", "top:" + (gameManager.trainPosition[i][0] + 33) + "px; right:" + (gameManager.trainPosition[i][1] - 10) + "px;");
    contentBox.appendChild(trainText);
    contentBox.appendChild(blockIdNum);
    trainContainer.appendChild(contentBox);

    // trainContainer.appendChild(blockAnswerText);
  }

  var circleAnswer = document.querySelector("#answerObject"),
    additionWrap = document.createElement("div");

  additionWrap.setAttribute("id", "additionWrap");
  trainContainer.appendChild(additionWrap);

  circleAnswer.setAttribute("style", "top: 324px; right:408px;");

  switch (gameManager.calculation) {
    case "+":
      calculation.src = "images/plus.png";
      trainContainer.appendChild(calculation);
      break;
    case "-":
      calculation.src = "images/minus.png";
      trainContainer.appendChild(calculation);
      break;
    case "*":
      calculation.src = "images/multiplication.png";
      trainContainer.appendChild(calculation);
      break;
    case "/":
      calculation.src = "images/division.png";
      trainContainer.appendChild(calculation);
      break;
  }

  var calculationNull = document.querySelector("#calculation"),
    trainHeadNull = document.querySelector("#trainHead"),
    trainHeadBox = additionWrap.appendChild(trainHeadNull),
    calculationBox = additionWrap.appendChild(calculation),
    additionWrapLeft = document.querySelector("#additionWrap");

  if (blockMax === 1) {
    gameManager.trainImgArraySouce = "images/block_2block_" + randResult[3] + ".png";
    calculationNull.setAttribute("style", "left:600px");
    trainHeadNull.setAttribute("style", "left:600px");
    block_Wrap.style.left = "10px";
    bgObject.style.width = "118px";
  } else if (blockMax === 2) {
    gameManager.trainImgArraySouce = "images/block_3block_" + randResult[3] + ".png";
    calculationNull.setAttribute("style", "left:545px");
    trainHeadNull.setAttribute("style", "left:545px");
    block_Wrap.style.left = "37px";
    bgObject.style.width = "174px";
  } else if (blockMax === 3) {
    gameManager.trainImgArraySouce = "images/block_4block_" + randResult[3] + ".png";
    calculationNull.setAttribute("style", "left:490px");
    trainHeadNull.setAttribute("style", "left:490px");
    block_Wrap.style.left = "69px";
    bgObject.style.width = "228px";
  } else {
    gameManager.trainImgArraySouce = "images/block_5block_" + randResult[3] + ".png";
    calculationNull.setAttribute("style", "left:431px");
    bgObject.style.width = "288px";
    // trainHeadNull.setAttribute('style', 'left:55px');
  }

  // log(additionWrapLeft+'12345697465');

  additionWrapLeft.style.left = "-19px";

  appendChoiceQuestion("drag", gameManager.choiceQuestion, gameManager.trainImgArraySouce);
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

function getRand() {
  randNumber = Math.floor(Math.random() * randList.length);
  randResult.push(randList[randNumber]);
  randList.splice(randNumber, 1);
}

function gameOver(dragObj) {
  var choiceQuestionContainer = document.querySelector("#choiceQuestionContainer").childNodes;
  blockMax = Math.max.apply(null, gameManager.trainTextArray).toString().length;

  for (var i = 0; i < choiceQuestionContainer.length; i++) {
    choiceQuestionContainer[i].style.pointerEvents = "none";
  }

  // log(dragObj);

  gameOverAnimation();
  document.querySelector("#answerObject").style.display = "none";
  document.querySelector("#bgObject").style.display = "none";
  streamSound.setSound("media/block.mp3");

  var trainContainer = document.getElementById("trainContainer"),
    contentBox_0 = document.querySelector("#contentBox_0"),
    additionWrap = document.querySelector("#additionWrap"),
    answerObject = document.querySelector("#answerObject");

  trainContainer.style.left = "0px";

  var currentLeft = parseInt(trainContainer.style.left),
    currentTop = parseInt(answerObject.style.top),
    currentRight = parseInt(answerObject.style.right),
    dragObjCurrentLeft = parseInt(dragObj.style.left),
    // calculationLeft = parseInt(calculation.style.left),
    top = 28,
    answerTop = -42,
    left = 10;

  switch (blockMax) {
    case 1:
      left = 9;
      break;
    case 2:
      left = 9;
      break;
    case 3:
      left = 9;
      break;
    case 4:
      left = 10;
      break;
  }

  // log(calculationLeft+'aaaaaaaasdsdaaa');
  if (blockMax === 1) {
    dragObj.style.right = "304px";
    dragObj.style.left = "initial";
  } else if (blockMax === 2) {
    // dragObj.style.right = "277px";
    dragObj.style.right = "532px";
    dragObj.style.left = "initial";
  } else if (blockMax === 3) {
    // dragObj.style.right = "243px";
    dragObj.style.right = "500px";
    dragObj.style.left = "initial";
  } else {
    dragObj.style.right = "210px";
    dragObj.style.left = "initial";
  }

  // additionWrap.style.left = '356px';
  dragObj.style.top = currentTop - 16 + "px";

  setTimeout(function () {
    animate({
      delay: 20,
      duration: 800,
      delta: makeEaseInOut(quad),
      step: function (delta) {
        contentBox_0.style.top = top * delta + "px";
        dragObj.style.top = answerTop * delta + currentTop - 20 + "px";
        dragObj.style.zIndex = 1;

        switch (blockMax) {
          case 1:
            additionWrap.style.left = left * delta - 18 + "px";
            additionWrap.style.zIndex = 2;

            break;
          case 2:
            additionWrap.style.left = left * delta - 19 + "px";
            additionWrap.style.zIndex = 2;

            break;
          case 3:
            additionWrap.style.left = left * delta - 19 + "px";
            additionWrap.style.zIndex = 2;

            break;
          case 4:
            additionWrap.style.left = left * delta - 18 + "px";
            additionWrap.style.zIndex = 2;

            break;
        }

        // additionWrap.style.left = ((left * delta) - 18) +'px' ;
        // additionWrap.style.zIndex = 2;
      },
    });
  }, 500);

  // logCounter.tryCounter();
  // logCounter.endTime();

  // setTimeout(function () {
  // 	log('excute stampStarIcon!');
  //     parent.window.stampStarIcon();
  // }, 500);
  // save log data
  setTimeout(function () {
    // log('excute insDrillHis!');
    // parent.window.insDrillHis(logCounter.submitReport());
    parent.$SpecializeContents.clearGame();
  }, 2200);
}
