"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  function createEl(opts) {
    var el = document.createElement(opts.tag ? opts.tag : "div");
    if (opts.classname) el.classList.add(opts.classname);
    if (opts.html) el.innerHTML = opts.html;
    opts.parent.appendChild(el);
    if (opts.callback) opts.callback(el);
    return el;
  }

  function addHover(dom) {
    dom.addEventListener("mouseover", function (e) {
      dom.classList.add("hover");
    });
    dom.addEventListener("mouseout", function (e) {
      dom.classList.remove("hover");
    });
  }

  var TEXT_COMPLETE = "complete";
  var TEXT_ON = "on";

  var Game = /*#__PURE__*/function () {
    function Game(_ref) {
      var data = _ref.data,
          container = _ref.container,
          gameFrame = _ref.gameFrame,
          _ref$lessonIndex = _ref.lessonIndex,
          lessonIndex = _ref$lessonIndex === void 0 ? 0 : _ref$lessonIndex;

      _classCallCheck(this, Game);

      this.binding();
      this.DATA = data;
      this.starArray = [];
      this.container = container;
      this.gameFrame = createEl({
        tag: "iframe",
        parent: this.container
      });
      this.header = container.querySelector("header");
      this.currentLessonIndex = null;
      this.currentGameIndex = 0;
      this.setHeader(this.header);
    }

    _createClass(Game, [{
      key: "currentLessonIndex",
      get: function get() {
        return this._currentLessonIndex;
      },
      set: function set(index) {
        this._currentLessonIndex = index;
      }
    }, {
      key: "lessonData",
      get: function get() {
        return this.currentLessonIndex ? this.DATA[this.currentLessonIndex - 1] : null;
      }
    }, {
      key: "currentGame",
      get: function get() {
        return this.lessonData.games[this.currentGameIndex];
      }
    }, {
      key: "gameLength",
      get: function get() {
        return this.lessonData.games.length;
      }
    }, {
      key: "gameName",
      get: function get() {
        return this.currentGame.name;
      }
    }, {
      key: "question",
      get: function get() {
        return this.currentGame.question;
      }
    }, {
      key: "answer",
      get: function get() {
        return this.currentGame.answer;
      }
    }, {
      key: "stars",
      get: function get() {
        return this.starArray;
      }
    }, {
      key: "completedLength",
      get: function get() {
        // star에 추가된 complete class 여부로 완료된 게임 수량 파악
        return this.stars.filter(function (star) {
          return star.classList.contains(TEXT_COMPLETE);
        });
      }
    }, {
      key: "setHeader",
      value: function setHeader(header) {
        var _this = this;

        this.title = createEl({
          tag: "h2",
          parent: header
        });
        this.quizLengthContainer = createEl({
          classname: "quizLengthContainer",
          parent: header,
          callback: function callback(el) {
            createEl({
              tag: "span",
              parent: el,
              html: "문항"
            });
            _this.EL_completeLength = createEl({
              tag: "span",
              parent: el
            });
            createEl({
              tag: "span",
              parent: el,
              html: "/"
            });
            _this.EL_totalGameLength = createEl({
              tag: "span",
              classname: "totalLength",
              parent: el
            });
          }
        });
        this.starContainer = createEl({
          classname: "starContainer",
          parent: header
        });
        this.closeButton = createEl({
          classname: "closeButton",
          parent: header,
          callback: function callback(el) {
            addHover(el);
            el.addEventListener("click", _this.close);
            el.addEventListener("click", window.$efSound.click);
          }
        });
      }
    }, {
      key: "setGame",
      value: function setGame(lessonIndex) {
        this.currentLessonIndex = lessonIndex;
        this.setTitle(this.lessonData.title);
        this.setQuizLength();
        this.setStars(this.gameLength);
      }
    }, {
      key: "setQuizLength",
      value: function setQuizLength() {
        // 문항 숫자 -> 완료된 게임 수로 수정(1차 권고 수정)
        // this.EL_completeLength.innerHTML = this.currentGameIndex + 1;
        this.EL_completeLength.innerHTML = this.completedLength.length;
        this.EL_totalGameLength.innerHTML = this.gameLength;
      }
    }, {
      key: "setTitle",
      value: function setTitle(text) {
        this.title.innerHTML = "".concat(this.currentLessonIndex, ". ").concat(text);
      }
    }, {
      key: "setStars",
      value: function setStars(length) {
        var _this2 = this;

        var _loop = function _loop(i) {
          createEl({
            classname: "star",
            parent: _this2.starContainer,
            callback: function callback(el) {
              _this2.starArray.push(el); // 상단의 별 클릭해서 게임 이동하는 기능 추가(1차 권고 수정)


              addHover(el);
              el.addEventListener("click", window.$efSound.hover);
              el.addEventListener("click", function () {
                _this2.selectedGame(i);
              });
            }
          });
        };

        for (var i = 0; i < length; i++) {
          _loop(i);
        }
      }
    }, {
      key: "filledStar",
      value: function filledStar(index) {
        this.stars[index].classList.add(TEXT_COMPLETE);
      }
    }, {
      key: "offStar",
      value: function offStar() {
        this.stars.forEach(function (star) {
          star.classList.remove(TEXT_ON);
        });
      } // 상단의 별 클릭해서 게임 이동하는 기능 추가(1차 권고 수정)

    }, {
      key: "selectedGame",
      value: function selectedGame(index) {
        this.offStar();
        this.currentGameIndex = index;
        this.startGame();
      } // 게임 시작

    }, {
      key: "startGame",
      value: function startGame() {
        window.$ANSWER = this.answer;
        window.$QUESTION = this.question;
        var url = "./games/".concat(this.gameName, "/").concat(this.gameName, ".html"); // 게임 시작할 때 star에 complete 삭제(다시하기일 경우 )
        // this.stars[this.currentGameIndex].classList.remove(TEXT_COMPLETE);

        this.stars[this.currentGameIndex].classList.add(TEXT_ON);
        this.setQuizLength();
        this.gameFrame.src = url;
      } // 게임 완료(각 게임의 js에서 실행)

    }, {
      key: "clearGame",
      value: function clearGame() {
        this.filledStar(this.currentGameIndex);
        this.offStar();
        if (this.stars[this.currentGameIndex + 1] && this.stars[this.currentGameIndex + 1].classList.contains(TEXT_COMPLETE)) return;
        if (this.currentGameIndex === this.gameLength - 1) this.endGame();else {
          this.currentGameIndex += 1;
          this.startGame();
        }
      } // 전체 게임 초기화

    }, {
      key: "resetGame",
      value: function resetGame() {
        this.offStar();
        this.title.innerHTML = "";
        this.starContainer.innerHTML = "";
        this.currentGameIndex = 0;
        this.starArray = [];
      } // 전체 게임 완료

    }, {
      key: "endGame",
      value: function endGame() {
        // console.log('게임 종료');
        this.setQuizLength();
        setTimeout(function () {// 자동 종료 기능 삭제(1차 권고 수정)
          // this.close();
        }, 1000);
      }
    }, {
      key: "open",
      value: function open(lessonIndex) {
        this.setGame(lessonIndex);
        this.container.classList.add(TEXT_ON);
        this.startGame();
      }
    }, {
      key: "close",
      value: function close() {
        this.container.classList.remove(TEXT_ON);
        this.resetGame();
      }
    }, {
      key: "binding",
      value: function binding() {
        this.setGame = this.setGame.bind(this);
        this.startGame = this.startGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }
    }]);

    return Game;
  }();

  var SpecializeContents = /*#__PURE__*/function () {
    function SpecializeContents(opts) {
      _classCallCheck(this, SpecializeContents);

      this.binding();
      this.DATA = $SPECIALIZECONTENTS.lesson;
      this.header = opts.header;
      this.main = opts.main;
      this.GAME = new Game({
        data: this.DATA,
        container: opts.gameContaier,
        gameFrame: opts.gameFrame
      });
      this.selectedLessonIndex = null;
      this.createObjInHeader(this.header);
      this.createTitle(this.main);
    }

    _createClass(SpecializeContents, [{
      key: "createObjInHeader",
      value: function createObjInHeader(header) {
        createEl({
          classname: "title",
          html: $SPECIALIZECONTENTS.title,
          parent: header
        });
        createEl({
          classname: "grade",
          html: $SPECIALIZECONTENTS.grade,
          parent: header
        });
        createEl({
          classname: "subject",
          html: $SPECIALIZECONTENTS.subject,
          parent: header
        });
      }
    }, {
      key: "createTitle",
      value: function createTitle(main) {
        var _this3 = this;

        this.DATA.forEach(function (data, index) {
          var section = createEl({
            tag: "section",
            classname: "lesson_".concat(index + 1),
            html: "<h1>".concat(data.title, "</h1><h5>").concat(data.subTitle, "</h5>"),
            parent: main
          });
          createEl({
            classname: "cloud",
            parent: section
          });

          for (var i = 0; i < 5; i++) {
            var starCircle = createEl({
              classname: "starCircle",
              parent: section
            });
            starCircle.classList.add("star_".concat(i + 1));
          }

          for (var _i = 0; _i < 7; _i++) {
            var shootingStar = createEl({
              classname: "shootingStar",
              parent: section
            });
            shootingStar.classList.add("star_".concat(_i + 1));
          }

          createEl({
            classname: "sectionChar",
            parent: section
          }); // section.addEventListener('click', window.$efSound.click);

          section.addEventListener("click", _this3.openGame.bind(_this3, index)); // section.addEventListener("mouseover", window.$efSound.hover);

          addHover(section);
        });
      }
    }, {
      key: "openGame",
      value: function openGame(index) {
        var _this4 = this;

        this.selectedLessonIndex = index;
        setTimeout(function () {
          window.$efSound.open();

          _this4.GAME.open(_this4.selectedLessonIndex + 1);
        }, 100);
      }
    }, {
      key: "closeGame",
      value: function closeGame() {
        this.selectedLessonIndex = null;
        this.GAME.close();
      }
    }, {
      key: "clearGame",
      value: function clearGame() {
        this.GAME.clearGame();
      }
    }, {
      key: "binding",
      value: function binding() {
        this.openGame = this.openGame.bind(this);
        this.closeGame = this.closeGame.bind(this);
      }
    }]);

    return SpecializeContents;
  }();

  window.$efSound = {};
  var efArray = {
    click: $ts.createAudio.set("../include/media/click2.mp3"),
    open: $ts.createAudio.set("../include/media/open2.mp3"),
    hover: $ts.createAudio.set("../include/media/hover.mp3")
  };

  for (var name in efArray) {
    appendEfAudio(name, efArray[name]);
  }

  function appendEfAudio(name, sound) {
    sound.load();

    window.$efSound[name] = function () {
      $ts.createAudio.interval(sound.duration, function () {
        stopEfSound();
        sound.play();
      });
      return sound;
    };
  }

  function stopEfSound(audio) {
    for (var _name in efArray) {
      efArray[_name].pause();

      if (efArray[_name].currentTime) efArray[_name].currentTime = 0;
    }
  }

  window.$efSound.stop = stopEfSound;

  window.$efSound.muted = function (boolean) {
    for (var _name2 in efArray) {
      efArray[_name2].muted = boolean;
    }
  };

  window.addEventListener("load", function () {
    var DOM_WRAP = document.querySelector("#wrap");
    var DOM_HEADER = document.querySelector("#wrap > header");
    var DOM_MAIN = document.querySelector("main");
    var DOM_GAME = document.querySelector("section.game");
    new window.$cale({
      target: DOM_WRAP
    });
    window.$SpecializeContents = new SpecializeContents({
      header: DOM_HEADER,
      main: DOM_MAIN,
      gameContaier: DOM_GAME
    });
  });
})();