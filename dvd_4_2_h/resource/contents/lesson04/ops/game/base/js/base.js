// https://developer.mozilla.org/ko/docs/Web/API/NodeList/forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

window.playFunny = window.playFunny || new PlayFunny();
window.spriteAniStopCallbacks = {};
window.spriteAniTimeoutId = {};

function PlayFunny() {
  var self = this;

  // constants
  this.CLASSNAME_DISABLE_POINTERS = "pointerDisabled";
  this.CLASSNAME_SELECT_PLAY = "selectPlay";
  this.CLASSNAME_SELECT_PLAY_SELECTED = this.CLASSNAME_SELECT_PLAY + "--selected";
  this.CLASSNAME_SELECT_PLAY_COMPLETED = this.CLASSNAME_SELECT_PLAY + "--completed";
  this.CLASSNAME_PLAY_PAGE = "playPage";
  this.CLASSNAME_PLAY_PAGE_ON = this.CLASSNAME_PLAY_PAGE + "--on";
  this.CLASSNAME_PLAY_PAGE_COMPLETED = this.CLASSNAME_PLAY_PAGE + "--completed";

  this.SOUNDS = {
    click: "../base/audio/click.mp3",
    correct: "../base/audio/correct.mp3",
    incorrect: "../base/audio/incorrect.mp3",
    ending: "../base/audio/ending.mp3",
  };

  // variables
  this.isPlaying = false;
  this.TOTAL_PLAY = 5;
  this.playingIndex = 0;
  this.playedCount = 0;
  this.resetCallback = undefined;

  // variables related to spriteAni
  this.defaultSpriteOpts = {
    src: "./src/image/spritesheet/",
    fileType: "png",
    mode: "sheet",
    index: 1,
    autoPlay: false,
    loop: false,
  };
  this.spriteAnis = [];

  // elements
  this.pageElements = document.querySelectorAll(".page");
  this.startButtonElement = document.querySelector(".js-startButton");
  this.selectPlayElements = document.querySelectorAll(".js-" + this.CLASSNAME_SELECT_PLAY);
  this.playPageElements = document.querySelectorAll(".js-" + this.CLASSNAME_PLAY_PAGE);
  this.nextStepButtonElement = document.querySelector(".js-nextStepButton");
  this.endPageBackgroundElement = document.querySelector(".endPage__background");
  this.regameButtonElement = document.querySelector(".js-regameButton");
  this.spriteAniElements = document.querySelectorAll(".js-spriteAni");

  // methods get elements
  this.getSelectedSelectPlayElement = function () {
    return document.querySelector("." + this.CLASSNAME_SELECT_PLAY_SELECTED);
  };
  this.getPlayPageElementTurnedOn = function () {
    return document.querySelector("." + this.CLASSNAME_PLAY_PAGE_ON);
  };
  this.getParentSelectPlayElement = function (element) {
    var selectPlayElement = element.parentElement;

    while (!selectPlayElement.classList.contains(this.CLASSNAME_SELECT_PLAY)) {
      selectPlayElement = selectPlayElement.parentElement;
    }

    return selectPlayElement;
  };

  // methods changing attributs
  this.setTotalPlay = function (totalplay) {
    this.TOTAL_PLAY = totalplay;
  };
  this.increasePlayedCount = function () {
    this.playedCount += 1;
  };
  this.resetPlayedCount = function () {
    this.playedCount = 0;
  };
  this.setPlayingIndex = function (playingIndex) {
    this.playingIndex = playingIndex;
  };
  this.resetPlayingIndex = function () {
    this.playingIndex = 0;
  };
  this.setIsPlaying = function () {
    this.isPlaying = true;
    document.body.setAttribute("is-playing", "");
  };
  this.resetIsPlaying = function () {
    this.isPlaying = false;
    document.body.removeAttribute("is-playing");
  };

  // methods get/set attributs from dom
  this.getPlayIndexFromElement = function (element) {
    return parseInt(element.dataset.playIndex);
  };
  this.getPlayPageIndexFromElement = function (element) {
    return parseInt(element.dataset.playPage);
  };

  // methods changing dom
  this.changePage = function (pageName) {
    this.pageElements.forEach(function (pageElement) {
      var IS_TARGET_PAGE = pageElement.className.includes(pageName);

      if (IS_TARGET_PAGE) {
        pageElement.classList.add("page--on");
      } else {
        pageElement.classList.remove("page--on");
      }
    });

    document.body.dataset.page = pageName;
  };
  this.updateSelectPlayElements = function () {
    this.selectPlayElements.forEach(function (selectPlayElement) {
      var playIndex = this.getPlayIndexFromElement(selectPlayElement);
      if (playIndex === this.playingIndex) {
        selectPlayElement.classList.add(this.CLASSNAME_SELECT_PLAY_SELECTED);
        this.playSpriteAni(selectPlayElement);
      } else {
        selectPlayElement.classList.remove(this.CLASSNAME_SELECT_PLAY_SELECTED);
        this.stopSpriteAni(selectPlayElement);
      }
    }, this);
  };
  this.completeSelectPlayElement = function (element) {
    var targetSelectPlayElement = element || this.getSelectedSelectPlayElement();

    targetSelectPlayElement.classList.add(this.CLASSNAME_SELECT_PLAY_COMPLETED);
  };
  this.resetSelectPlayElements = function () {
    this.selectPlayElements.forEach(function (selectPlayElement) {
      selectPlayElement.classList.remove(this.CLASSNAME_SELECT_PLAY_SELECTED);
      selectPlayElement.classList.remove(this.CLASSNAME_SELECT_PLAY_COMPLETED);
    }, this);
  };
  this.completePlayPageElement = function (element) {
    element.classList.add(this.CLASSNAME_PLAY_PAGE_COMPLETED);
  };
  this.decompletePlayPageElement = function (element) {
    element.classList.remove(this.CLASSNAME_PLAY_PAGE_COMPLETED);
  };
  this.updatePlayPageElements = function () {
    this.playPageElements.forEach(function (playPageElement) {
      var playPageIndex = this.getPlayPageIndexFromElement(playPageElement);
      if (playPageIndex === this.playingIndex) {
        playPageElement.classList.add(this.CLASSNAME_PLAY_PAGE_ON);
      } else {
        playPageElement.classList.remove(this.CLASSNAME_PLAY_PAGE_ON);
        this.decompletePlayPageElement(playPageElement);
      }
    }, this);
  };
  this.completePlayPageElementTurnedOn = function () {
    const playPageElementTurnedOn = this.getPlayPageElementTurnedOn();
    if (playPageElementTurnedOn) {
      this.completePlayPageElement(playPageElementTurnedOn);
    }
  };
  this.showNextStepButton = function () {
    this.nextStepButtonElement.classList.add("nextStepButton--show");
    this.nextStepButtonElement.focus();
  };
  this.hideNextStepButton = function () {
    this.nextStepButtonElement.classList.remove("nextStepButton--show");
  };
  this.hideElement = function (element) {
    element.style.opacity = "0";
    element.style.visibility = "hidden";
  };
  this.showElement = function (element) {
    element.style.opacity = "1";
    element.style.visibility = "visible";
  };
  this.disableAllPointers = function () {
    document.body.classList.add(this.CLASSNAME_DISABLE_POINTERS);
  };
  this.ableAllPointers = function () {
    document.body.classList.remove(this.CLASSNAME_DISABLE_POINTERS);
  };

  // methods related to efSound
  this.addEfSound = function (soundName, soundSource) {
    this.SOUNDS[soundName] = soundSource;
  };
  this.addEfSounds = function (soundDatas) {
    soundDatas.forEach(function (soundData) {
      this.addEfSound(soundData.soundName, soundData.soundSource);
    }, this);
  };
  this.efSound = function (soundName) {
    console.log("efSound()", soundName);
    var audio = new Audio();
    audio.preload = false;

    audio.onloadeddata = function () {
      this.play();
    };

    audio.src = this.SOUNDS[soundName];
    audio.load();
  };
  this.createEfSoundAudio = function (soundName, soundSource) {
    var audio = document.createElement("audio");
    audio.preload = false;
    audio.src = soundSource;
    audio.dataset.efSoundName = soundName;
    document.body.appendChild(audio);
  };
  this.playEfSoundAduio = function (soundName) {
    var audio = document.querySelector('[data-ef-sound-name="' + soundName + '"]');
    if (audio.readyState === 4) {
      audio.play();
    } else {
      audio.onloadeddata = function () {
        this.play();
      };

      audio.load();
    }
  };

  // methods related to spriteAni
  this.createSpriteAniName = function (playIndex, name) {
    return playIndex + "_" + name;
  };
  this.getSpriteAniByName = function (name) {
    var filtered = this.spriteAnis.filter(function (spriteAni) {
      return spriteAni.name === name;
    });

    if (filtered.length) {
      return filtered[0];
    } else {
      return null;
    }
  };
  this.getSpriteAniFromSelectPlay = function (selectPlayElement, _type) {
    var playIndex = this.getPlayIndexFromElement(selectPlayElement);
    var type = _type || "basic";
    var spriteAniName = this.createSpriteAniName(playIndex, type);
    var spriteAni = this.getSpriteAniByName(spriteAniName);

    return spriteAni;
  };
  this.playSpriteAni = function (selectPlayElement, type) {
    var spriteAni = this.getSpriteAniFromSelectPlay(selectPlayElement, type);

    if (!spriteAni) {
      return console.log("해당하는 spriteAni가 없습니다.");
    }

    var image = selectPlayElement.querySelector(".selectPlay__image");
    var loop = spriteAni.loop;
    var duration = spriteAni.duration;

    if (window.spriteAniTimeoutId[spriteAni.name]) {
      clearTimeout(window.spriteAniTimeoutId[spriteAni.name]);
    }
    spriteAni.stop();
    // spriteAni.reset();

    // 같은 캐릭터의 incorrect 애니 setTimeout이 있을 경우, clear하기.
    if (/correct/g.test(spriteAni.name) && !/incorrect/g.test(spriteAni.name)) {
      var incorrectSpriteAni = spriteAni.name.replace(/correct/g, 'incorrect');

      if (window.spriteAniTimeoutId[incorrectSpriteAni]) {
        clearTimeout(window.spriteAniTimeoutId[incorrectSpriteAni]);
      }
    }

    if (!loop) {
      window.spriteAniTimeoutId[spriteAni.name] = setTimeout(
        function () {
          if (image) {
            this.showElement(image);
          }

          // this.ableAllPointers();
          this.hideElement(spriteAni.canvas);
        }.bind(this),
        duration
      );
    }

    if (image) {
      this.hideElement(image);
    }

    // this.disableAllPointers();
    this.showElement(spriteAni.canvas);
    spriteAni.spriteAni();
  };
  this.stopSpriteAni = function (selectPlayElement, type) {
    var spriteAni = this.getSpriteAniFromSelectPlay(selectPlayElement, type);

    if (!spriteAni) {
      return console.log("해당하는 spriteAni가 없습니다.");
    }

    var image = selectPlayElement.querySelector(".selectPlay__image");

    spriteAni.stop();

    if (image) {
      this.showElement(image);
    }

    this.hideElement(spriteAni.canvas);
  };
  this.resetPlayPageSpriteAnis = function () {
    var playPage = this.getPlayPageElementTurnedOn();

    if (!playPage) {
      return console.log("활동 중인 playPage가 없습니다.");
    }

    var selectPlayElement = playPage.querySelector("." + this.CLASSNAME_SELECT_PLAY);

    if (!selectPlayElement) {
      return console.log("playPage에 selectPlay가 없습니다.");
    }

    this.stopSpriteAni(selectPlayElement, "correct");
    this.stopSpriteAni(selectPlayElement, "incorrect");
  };

  // complex methods
  this.startPlay = function () {
    this.updatePlayPageElements();
    this.hideNextStepButton();
    this.setIsPlaying();
  };
  this.endPlay = function () {
    this.increasePlayedCount();
    this.completeSelectPlayElement();
    this.resetPlayingIndex();
    this.resetPlayPageSpriteAnis();
    this.updateSelectPlayElements();
    this.updatePlayPageElements();
    this.hideNextStepButton();
    this.resetIsPlaying();
  };
  this.invokeResetCallback = function () {
    if (this.resetCallback) {
      this.resetCallback();
    }
  };
  this.shake = function (_target, _direction, _duration, _repeatance) {
    var target = _target;
    var direction = _direction || "horizontal";
    var duration = _duration || 200;
    var repeatance = _repeatance || 3;

    setTimeout(function () {
      target.style.animation = "";
    }, duration * repeatance);

    var animationName = direction === "horizontal" ? "shake-horizontal" : "shake-vertical";
    var animationDuration = duration + "ms";
    var animationTimingFunction = "ease-in-out";
    var animationDelay = "0s";
    var animationIterationCount = repeatance;
    var animation = animationName.concat(" ").concat(animationDuration).concat(" ").concat(animationTimingFunction).concat(" ").concat(animationDelay).concat(" ").concat(animationIterationCount);

    console.log("shake()", {
      target: target,
      direction: direction,
      duration: duration,
      repeatance: repeatance,
      animation: animation,
    });

    target.style.animation = animation;
  };

  // event handlers
  this.onStartButtonClick = function () {
    this.changePage("game");
    this.efSound("click");
  };
  this.onSelectPlayClick = function (event) {
    var selectPlayElement = event.target;
    var playIndex = this.getPlayIndexFromElement(selectPlayElement);

    if (selectPlayElement.classList.contains(this.CLASSNAME_SELECT_PLAY_SELECTED)) {
      this.resetPlayingIndex();
      this.hideNextStepButton();
    } else {
      this.setPlayingIndex(playIndex);
      this.showNextStepButton();
    }

    this.updateSelectPlayElements();
    this.efSound("click");
  };
  this.onNextStepButtonClick = function () {
    if (this.isPlaying) {
      this.endPlay();

      if (this.playedCount === this.TOTAL_PLAY) {
        this.changePage("end");
        this.efSound("ending");
      }
    } else {
      this.startPlay();
    }

    this.efSound("click");
  };
  this.onRegameButtonClick = function () {
    this.resetPlayedCount();
    this.resetSelectPlayElements();
    this.changePage("game");
    this.efSound("click");

    this.invokeResetCallback();
  };

  // initiate
  this.addEvents = function () {
    this.startButtonElement.onclick = this.onStartButtonClick.bind(this);
    this.selectPlayElements.forEach(function (selectPlayElement) {
      selectPlayElement.onclick = self.onSelectPlayClick.bind(self);
    });
    this.nextStepButtonElement.onclick = this.onNextStepButtonClick.bind(this);
    this.regameButtonElement.onclick = this.onRegameButtonClick.bind(this);
  };
  this.initiateSpriteAnis = function () {
    console.log("initiateSpriteAnis()");

    // var self = this;
    var defaultOpts = this.defaultSpriteOpts;

    this.spriteAniElements.forEach(function (spriteAniElement) {
      var selectPlay = this.getParentSelectPlayElement(spriteAniElement);
      var playIndex = this.getPlayIndexFromElement(selectPlay);
      var src = spriteAniElement.dataset.spriteImagePath || defaultOpts.src;
      var name = this.createSpriteAniName(playIndex, spriteAniElement.dataset.spriteName);
      var fileType = spriteAniElement.dataset.spriteFileType || defaultOpts.fileType;
      var length = parseInt(spriteAniElement.dataset.spriteFrame);
      var durationAttr = spriteAniElement.dataset.spriteDuration;
      var duration = durationAttr && parseFloat(durationAttr);
      var width = parseInt(spriteAniElement.width);
      var height = parseInt(spriteAniElement.height);
      var loopAttr = spriteAniElement.dataset.spriteLoop;
      var loop = (loopAttr && loopAttr.toLowerCase() === "y") || defaultOpts.loop;
      var autoPlayAttr = spriteAniElement.dataset.autoPlay;
      var autoPlay = autoPlayAttr && autoPlayAttr.toLowerCase() === "y" ? true : defaultOpts.autoPlay;
      var spriteAni = new Sprite({
        canvas: spriteAniElement,
        src: src,
        name: name,
        fileType: fileType,
        mode: defaultOpts.mode,
        length: length,
        duration: duration,
        width: width,
        height: height,
        index: defaultOpts.index,
        autoPlay: autoPlay,
        loop: loop,
        callback: function (Sprite) {
          if (this.totalPlayCount === Sprite.step) {
            if (spriteAniStopCallbacks[this.name]) {
              spriteAniStopCallbacks[this.name](this);

              delete spriteAniStopCallbacks[this.name];
            }
          }
        },
      });

      spriteAni.name = name;
      this.spriteAnis.push(spriteAni);
      this.hideElement(spriteAniElement);
    }, this);

    console.log(this.spriteAnis);
  };
  this.initiateTotalPlay = function () {
    this.setTotalPlay(this.selectPlayElements.length);
  };
  this.initiatePage = function () {
    if (window.location.search.includes("page")) {
      var parameters = window.location.search
        .slice(1)
        .split("&")
        .map(function (str) {
          return str.split("=");
        })
        .map(function (arr) {
          var tempObj = {};
          tempObj[arr[0]] = arr[1];
          return tempObj;
        });
      parameters = parameters[0];

      this.changePage(parameters.page);
    } else {
      this.changePage("game");
    }
  };
  this.initiageEfSounds = function () {
    for (var soundName in this.SOUNDS) {
      var soundSource = this.SOUNDS[soundName];

      this.createEfSoundAudio(soundName, soundSource);
    }
  };
  this.initiateEndPageBackground = function () {
    var X_RANGE = [280, 1000];
    var Y_RANGE = [120, 620];
    var WIDTH_RANGE = [1, 8];
    var DURATION_RANGE = [2, 6];
    var DELAY_RANGE = [0, 6];
    var RELATIVE_SHADOW_BLUR = 2;
    var RELATIVE_SHADOW_SPREAD = 2;
    var STAR_LENGTH = 40;
    var FORBIDDEN_RANGES = [
      [360, 920],
      [200, 590],
    ];
    var FORBIDDEN_XY = 10;
    var usedCoordinates = [];

    function getRandomInteger(_max, _min) {
      var max = _max;
      var min = _min || 0;

      return Math.floor(Math.random() * (max - min)) + min;
    }

    function createStar(parent, opts) {
      var starElement = document.createElement("div");
      starElement.className = "endPage__background__star";
      starElement.style.left = opts.x + "px";
      starElement.style.top = opts.y + "px";
      starElement.style.width = opts.w + "px";
      starElement.style.height = opts.h + "px";
      starElement.style.animationDuration = opts.duration + "s";
      starElement.style.animationDelay = opts.delay + "s";
      starElement.style.boxShadow = "0 0 " + opts.shadowBlur + "px " + opts.shadowSpread + "px #387fff";
      parent.appendChild(starElement);

      return starElement;
    }

    function isForbidden(x, y) {
      var isXForbidden = x >= FORBIDDEN_RANGES[0][0] && x <= FORBIDDEN_RANGES[0][1];
      var isYForbidden = y >= FORBIDDEN_RANGES[1][0] && y <= FORBIDDEN_RANGES[1][1];

      return isXForbidden && isYForbidden;
    }

    function isUsed(x, y) {
      return usedCoordinates.some(function (usedCoordinate) {
        var used_x = usedCoordinate[0];
        var used_y = usedCoordinate[1];
        var isXUsed = x > used_x - FORBIDDEN_XY && x < used_x + FORBIDDEN_XY;
        var isYUsed = y > used_y - FORBIDDEN_XY && y < used_y + FORBIDDEN_XY;

        return isXUsed && isYUsed;
      });
    }

    for (var i = 0, x, y, w, h, duration, delay, shadowBlur, shadowSpread, starElement; i < STAR_LENGTH; i++) {
      x = getRandomInteger(X_RANGE[1], X_RANGE[0]);
      y = getRandomInteger(Y_RANGE[1], Y_RANGE[0]);
      while (isForbidden(x, y) || isUsed(x, y)) {
        x = getRandomInteger(X_RANGE[1], X_RANGE[0]);
        y = getRandomInteger(Y_RANGE[1], Y_RANGE[0]);
      }
      w = getRandomInteger(WIDTH_RANGE[1], WIDTH_RANGE[0]);
      h = w;
      duration = getRandomInteger(DURATION_RANGE[1], DURATION_RANGE[0]);
      delay = getRandomInteger(DELAY_RANGE[1], DELAY_RANGE[0]);
      shadowBlur = getRandomInteger(w * RELATIVE_SHADOW_BLUR, w * RELATIVE_SHADOW_BLUR);
      shadowSpread = getRandomInteger(shadowBlur / RELATIVE_SHADOW_SPREAD, 0);

      usedCoordinates.push([x, y]);

      starElement = createStar(this.endPageBackgroundElement, {
        x: x,
        y: y,
        w: w,
        h: h,
        duration: duration,
        delay: delay,
        shadowBlur: shadowBlur,
        shadowSpread: shadowSpread,
      });
    }
  };

  this.bgm = function () {
    var audio = new Audio();
    var button = document.createElement("div");
    var isPlay = false;

    audio.preload = false;

    audio.onloadeddata = function () {
      // this.play();
    };

    audio.src = "../base/audio/bgm.mp3";
    audio.load();

    audio.addEventListener('ended', function() {
      if (isPlay) {
        audio.currentTime = 0;
        audio.play();
      }
    });

    button.classList.add("bgmToggleButton");
    document.querySelector(".wrapper").appendChild(button);

    button.addEventListener("click", function () {
      if (isPlay) {
        isPlay = false;
        audio.pause();
        button.classList.remove("isPlay");
      } else {
        isPlay = true;
        audio.play();
        button.classList.add("isPlay");
      }
    });
  };

  this.initiate = function () {
    this.addEvents();
    this.initiateSpriteAnis();
    this.initiateTotalPlay();
    this.initiatePage();
    this.initiageEfSounds();
    this.initiateEndPageBackground();
    this.bgm();
  };

  // processing
  this.initiate();

  // output
  window.completePlayPage = function (_delayTime) {
    var delayTime = isNaN(_delayTime) || _delayTime === null ? 1000 : _delayTime;

    this.completePlayPageElementTurnedOn();
    setTimeout(this.showNextStepButton.bind(this), delayTime);
  }.bind(this);
  window.showNextStepButton = function () {
    this.showNextStepButton();
  }.bind(this);
  window.efSound = function (soundName) {
    this.efSound(soundName);
  }.bind(this);
  window.addEfSound = function (soundName, soundSource) {
    this.addEfSound(soundName, soundSource);
  }.bind(this);
  window.addEfSounds = function (soundDatas) {
    this.addEfSounds(soundDatas);
  }.bind(this);
  window.shake = function (_target, _direction, _duration, _repeatance) {
    this.shake(_target, _direction, _duration, _repeatance);
  }.bind(this);
  window.setResetCallback = function (_function) {
    this.resetCallback = _function;
  }.bind(this);
  window.addHoverEvent = function (element) {
    function addClass() {
      this.classList.add("hovered");
    }

    function removeClass() {
      this.classList.remove("hovered");
    }

    element.addEventListener("mouseenter", addClass);
    element.addEventListener("touchstart", addClass);
    element.addEventListener("mouseleave", removeClass);
    element.addEventListener("touchend", removeClass);
  };
  window.getSpriteAnis = function () {
    return this.spriteAnis;
  }.bind(this);
  window.playSpriteAni = function (type) {
    var playPage = this.getPlayPageElementTurnedOn();

    if (!playPage) {
      return console.log("선택된 playPage가 없습니다.");
    }

    // var selectPlays = playPage.querySelector("." + this.CLASSNAME_SELECT_PLAY);
    var selectPlay = playPage.querySelector("." + this.CLASSNAME_SELECT_PLAY);

    // if (!selectPlays || !selectPlays.length) {
    if (!selectPlay) {
      return console.log("playPage 안에 selectPlay가 없습니다.");
    }

    this.playSpriteAni(selectPlay, type);
  }.bind(this);
  window.stopSpriteAni = function (type) {
    var playPage = this.getPlayPageElementTurnedOn();

    if (!playPage) {
      return console.log("선택된 playPage가 없습니다.");
    }

    var selectPlay = playPage.querySelector("." + this.CLASSNAME_SELECT_PLAY);

    if (!selectPlay) {
      return console.log("playPage 안에 selectPlay가 없습니다.");
    }

    this.stopSpriteAni(selectPlay, type);
  }.bind(this);
  window.playSpriteAniByName = function (name, callback) {
    var spriteAni = this.getSpriteAniByName(name);
    var canvas = spriteAni.canvas;
    var selectPlayElement = canvas.parentElement;
    var type = canvas.dataset.spriteName;

    this.playSpriteAni(selectPlayElement, type);

    if (callback) {
      window.spriteAniStopCallbacks[name] = callback;
    }
  }.bind(this);
  window.stopSpriteAniByName = function (name) {
    var spriteAni = this.getSpriteAniByName(name);
    var canvas = spriteAni.canvas;
    var selectPlayElement = canvas.parentElement;
    var type = canvas.dataset.spriteName;

    this.stopSpriteAni(selectPlayElement, type);
  }.bind(this);
}

console.log(window.playFunny);
