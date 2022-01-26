function initScene() {
  log("initScene...");
  log(gameManager.CURRENT_ANSWER);
  log("excute initClockTimer!");
  // parent.window.initClockTimer();

  appendCircleElement("questionTxt", "questionTxt", bgCanvas);
  CheckButton();
}

function initCoin() {
  log("initCoin...");

  var totalCoinContainer = document.createElement("div"),
    checkBtn = document.getElementById("checkBtn"),
    coinMachine = [],
    coinText;

  checkBtn.style.display = "block";

  var questionTxt = document.querySelector("#questionTxt");
  questionTxt.innerHTML = gameManager.TOTAL_ANSWER_ARRAY[0];

  for (var i = 0; i < gameManager.CURRENT_ANSWER.length; i++) {
    coinMachine[i] = document.createElement("div");
    coinMachine[i].setAttribute("id", "coinMachine_" + i);

    if (!(gameManager.CURRENT_ANSWER[i] === 0)) {
      totalCoinContainer.appendChild(coinMachine[i]);
      createCoinMachine(i, coinMachine[i]);
    } else {
      coinText = document.createElement("div");
      coinText.setAttribute("id", "coinText_" + i);
      coinText.setAttribute("style", "display:none");
      coinText.innerHTML = 0;
      totalCoinContainer.appendChild(coinText);
    }
  }

  totalCoinContainer.setAttribute("id", "totalCoinContainer");

  document.querySelector("#bgCanvas").appendChild(totalCoinContainer);
}

function gameOver() {
  var coinNum10000 = parseInt(document.querySelector("#coinText_0").innerHTML);
  var coinNum1000 = parseInt(document.querySelector("#coinText_1").innerHTML);
  var coinNum100 = parseInt(document.querySelector("#coinText_2").innerHTML);
  var coinNum10 = parseInt(document.querySelector("#coinText_3").innerHTML);
  var coinNum1 = parseInt(document.querySelector("#coinText_4").innerHTML);
  var checkBtn = document.querySelector("#checkBtn");
  var machineLine = document.querySelectorAll(".machineLine");
  var btnMachineUp = document.querySelectorAll(".btnMachineUp");
  var btnMachineDown = document.querySelectorAll(".btnMachineDown");
  var succeslineArray = ["images/complete2_succesline_1.png", "images/complete2_succesline.png", "images/complete2_succesline_1.png", "images/complete2_succesline.png", "images/complete2_succesline_1.png", "images/complete2_succesline.png"];
  var isAnswered = coinNum10000 === gameManager.CURRENT_ANSWER[0] && coinNum1000 === gameManager.CURRENT_ANSWER[1] && coinNum100 === gameManager.CURRENT_ANSWER[2] && coinNum10 === gameManager.CURRENT_ANSWER[3] && coinNum1 === gameManager.CURRENT_ANSWER[4];

  if (isAnswered) {
    checkBtn.style.pointerEvents = "none";

    for (var i = 0; i < btnMachineUp.length; i++) {
      btnMachineUp[i].style.pointerEvents = "none";
      btnMachineDown[i].style.pointerEvents = "none";
      machineLine[i].style.display = "block";
      spriteAnimationCustom(succeslineArray, machineLine[i]);
    }

    streamSound.setSound("media/complete2_correct.mp3");
    // logCounter.tryCounter();
    // logCounter.endTime();
    // clearInterval(countTimer);
    gameOverAnimation();

    // setTimeout(function() {
    // 	log('excute stampStarIcon!');
    // 	parent.window.stampStarIcon();
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

    // setTimeout(function() {
    // 			gameManager.coinArray100 = [];
    // 			gameManager.coinArray10 = [];
    // 			gameManager.coinArray1 = [];
    // 			gameManager.coinArray = [gameManager.coinArray100, gameManager.coinArray10, gameManager.coinArray1];
    // 			document.querySelector('#bgCanvas').innerHTML = "<div id='questionTxt'></div><img src='images/keypad_confirm.png' id = 'checkBtn'/> ";

    // 			initCoin();
    // 			CheckButton();
    // 		}, 400);
  }
}

function createCoinMachine(index, coinMachine) {
  var coinMachineCase = document.createElement("img"),
    btnMachineUp = document.createElement("img"),
    btnMachineDown = document.createElement("img"),
    machineLine = document.createElement("img"),
    coinText = document.createElement("div");

  machineLine.src = "images/complete2_succesline.png";
  coinMachineCase.src = "images/complete2_case_top.png";
  btnMachineUp.src = "images/complete2_upbtn_0.png";
  btnMachineDown.src = "images/complete2_dwbtn_0.png";

  machineLine.className = "machineLine";
  coinText.className = "coinText";
  coinMachineCase.className = "machineCase";
  btnMachineUp.className = "btnMachineUp";
  btnMachineDown.className = "btnMachineDown";

  coinText.setAttribute("id", "coinText_" + index);

  coinText.innerHTML = 0;

  coinMachine.appendChild(machineLine);
  coinMachine.appendChild(coinText);
  coinMachine.appendChild(coinMachineCase);
  coinMachine.appendChild(btnMachineUp);
  coinMachine.appendChild(btnMachineDown);

  var btnClickDown = function (e) {
    e.preventDefault();

    if (gameManager.coinArray[index].length > 0) {
      streamSound.setSound("media/click.mp3");
      removeCoin(index, coinMachine);
      btnMachineDown.src = "images/complete2_dwbtn_1.png";
    }

    setTimeout(function () {
      btnMachineDown.src = "images/complete2_dwbtn_0.png";
    }, 100);
  };
  var btnClickUp = function (e) {
    e.preventDefault();

    if (gameManager.coinArray[index].length < 9) {
      streamSound.setSound("media/click.mp3");
      btnMachineUp.src = "images/complete2_upbtn_1.png";
      appendCoin(index, coinMachine);
    }

    setTimeout(function () {
      btnMachineUp.src = "images/complete2_upbtn_0.png";
    }, 100);
  };

  btnMachineUp.addEventListener('mousedown', btnClickUp, false);
  // btnMachineUp.addEventListener('touchstart', btnClickUp, false);
  btnMachineDown.addEventListener('mousedown', btnClickDown, false);
  // btnMachineDown.addEventListener('touchstart', btnClickDown, false);
}

function appendCoin(index, coinMachine) {
  var coinObj = document.createElement("img"),
    coinText = coinMachine.querySelector(".coinText"),
    top = 242;

  top = top - gameManager.coinArray[index].length * 18;

  console.log("index", index);
  console.log("gameManager.coinArray[index].length", gameManager.coinArray[index].length);
  console.log("top", top);

  coinObj.className = "coin_" + index;

  switch (index) {
    case 0:
      coinObj.src = "images/complete2_10000coin.png";
      // coinObj.setAttribute("style", "left : 74px; top:" + top + "px;");
      coinObj.style.left = 54 + "px";
      coinObj.style.top = top + "px";
      gameManager.coinArray10000.push(coinObj);

      coinText.innerHTML = gameManager.coinArray10000.length * 10000;

      coinMachine.appendChild(gameManager.coinArray[index][gameManager.coinArray10000.length - 1]);

      break;
    case 1:
      coinObj.src = "images/complete2_1000coin.png";
      // coinObj.setAttribute("style", "left : 74px; top:" + top + "px;");
      coinObj.style.left = 54 + "px";
      coinObj.style.top = top + "px";
      gameManager.coinArray1000.push(coinObj);

      coinText.innerHTML = gameManager.coinArray1000.length * 1000;

      coinMachine.appendChild(gameManager.coinArray[index][gameManager.coinArray1000.length - 1]);

      break;
    case 2:
      coinObj.src = "images/complete2_100coin.png";
      // coinObj.setAttribute("style", "left : 74px; top:" + top + "px;");
      coinObj.style.left = 54 + "px";
      coinObj.style.top = top + "px";
      gameManager.coinArray100.push(coinObj);

      coinText.innerHTML = gameManager.coinArray100.length * 100;

      coinMachine.appendChild(gameManager.coinArray[index][gameManager.coinArray100.length - 1]);

      break;
    case 3:
      coinObj.src = "images/complete2_10coin.png";
      // coinObj.setAttribute("style", "left : 80px;top:" + top + "px;");
      coinObj.style.left = 60 + "px";
      coinObj.style.top = top + "px";
      gameManager.coinArray10.push(coinObj);

      coinText.innerHTML = gameManager.coinArray10.length * 10;
      coinMachine.appendChild(gameManager.coinArray[index][gameManager.coinArray10.length - 1]);
      break;
    case 4:
      coinObj.src = "images/complete2_1coin.png";
      // coinObj.setAttribute("style", "left : 84px;top:" + top + "px;");
      coinObj.style.left = 64 + "px";
      coinObj.style.top = top + "px";
      // coinObj.style.left = 84 + 'px';
      gameManager.coinArray1.push(coinObj);

      coinText.innerHTML = gameManager.coinArray1.length;
      coinMachine.appendChild(gameManager.coinArray[index][gameManager.coinArray1.length - 1]);
      break;
  }
}

function spriteAnimationCustom(spriteArray, spriteObj) {
  var index = 0,
    durationAni = parseInt(spriteArray.length) * 100;

  animate({
    delay: 200,
    duration: 1200,
    delta: makeEaseOut(linear),
    step: function (delta) {
      log("@ sprite!");
      spriteObj.src = spriteArray[index];
      index++;
    },
  });
}

function removeCoin(index, coinMachine) {
  var coinText = coinMachine.querySelector(".coinText");

  switch (index) {
    case 0:
      coinMachine.removeChild(gameManager.coinArray10000.pop());
      coinText.innerHTML = gameManager.coinArray10000.length * 10000;
      break;
    case 1:
      coinMachine.removeChild(gameManager.coinArray1000.pop());
      coinText.innerHTML = gameManager.coinArray1000.length * 1000;
      break;
    case 2:
      coinMachine.removeChild(gameManager.coinArray100.pop());
      coinText.innerHTML = gameManager.coinArray100.length * 100;
      break;
    case 3:
      coinMachine.removeChild(gameManager.coinArray10.pop());
      coinText.innerHTML = gameManager.coinArray10.length * 10;
      break;
    case 4:
      coinMachine.removeChild(gameManager.coinArray1.pop());
      coinText.innerHTML = gameManager.coinArray1.length;
      break;
  }
}

function CheckButton() {
  var checkBtn = document.querySelector("#checkBtn");

  btnDown = function (e) {
    e.preventDefault();
    checkBtn.src = "images/keypad_confirm_push.png";
  };
  btnUp = function (e) {
    e.preventDefault();
    checkBtn.src = "images/keypad_confirm.png";
    gameOver();
  };

  checkBtn.addEventListener('mousedown', btnDown, false);
  // checkBtn.addEventListener('touchstart', btnDown, false);
  checkBtn.addEventListener('mouseup', btnUp, false);
  // checkBtn.addEventListener('touchend', btnUp, false);
}
