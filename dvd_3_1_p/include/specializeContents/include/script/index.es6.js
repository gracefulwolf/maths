(() => {
  function createEl(opts) {
    const el = document.createElement(opts.tag ? opts.tag : "div");
    if (opts.classname) el.classList.add(opts.classname);
    if (opts.html) el.innerHTML = opts.html;

    opts.parent.appendChild(el);

    if (opts.callback) opts.callback(el);

    return el;
  }
  function addHover(dom) {
    dom.addEventListener("mouseover", (e) => {
      dom.classList.add("hover");
    });
    dom.addEventListener("mouseout", (e) => {
      dom.classList.remove("hover");
    });
  }
  
  const TEXT_COMPLETE = "complete";
  const TEXT_ON = "on";

  class Game {
    constructor({ data, container, gameFrame, lessonIndex = 0 }) {
      this.binding();

      this.DATA = data;
      this.starArray = [];
      this.container = container;
      this.gameFrame = createEl({ tag: "iframe", parent: this.container });
      this.header = container.querySelector("header");

      this.currentLessonIndex = null;
      this.currentGameIndex = 0;

      this.setHeader(this.header);
    }

    set currentLessonIndex(index) {
      this._currentLessonIndex = index;
    }
    get currentLessonIndex() {
      return this._currentLessonIndex;
    }

    get lessonData() {
      return this.currentLessonIndex ? this.DATA[this.currentLessonIndex - 1] : null;
    }

    get currentGame() {
      return this.lessonData.games[this.currentGameIndex];
    }
    get gameLength() {
      return this.lessonData.games.length;
    }
    get gameName() {
      return this.currentGame.name;
    }
    get question() {
      return this.currentGame.question;
    }
    get answer() {
      return this.currentGame.answer;
    }
    get stars() {
      return this.starArray;
    }
    get completedLength() {
      // star에 추가된 complete class 여부로 완료된 게임 수량 파악
      return this.stars.filter(star => star.classList.contains(TEXT_COMPLETE));
    }

    setHeader(header) {
      this.title = createEl({ tag: "h2", parent: header });
      this.quizLengthContainer = createEl({
        classname: "quizLengthContainer",
        parent: header,
        callback: (el) => {
          createEl({ tag: "span", parent: el, html: "문항" });
          this.EL_completeLength = createEl({ tag: "span", parent: el });
          createEl({ tag: "span", parent: el, html: "/" });
          this.EL_totalGameLength = createEl({ tag: "span", classname: "totalLength", parent: el });
        },
      });
      this.starContainer = createEl({ classname: "starContainer", parent: header });
      this.closeButton = createEl({
        classname: "closeButton",
        parent: header,
        callback: (el) => {
          addHover(el);
          el.addEventListener("click", this.close);
          el.addEventListener("click", window.$efSound.click);
        },
      });
    }

    setGame(lessonIndex) {
      this.currentLessonIndex = lessonIndex;

      this.setTitle(this.lessonData.title);
      this.setQuizLength();
      this.setStars(this.gameLength);
    }

    setQuizLength() {
      // 문항 숫자 -> 완료된 게임 수로 수정(1차 권고 수정)
      // this.EL_completeLength.innerHTML = this.currentGameIndex + 1;
      this.EL_completeLength.innerHTML = this.completedLength.length;
      this.EL_totalGameLength.innerHTML = this.gameLength;
    }

    setTitle(text) {
      this.title.innerHTML = `${this.currentLessonIndex}. ${text}`;
    }

    setStars(length) {
      for (let i = 0; i < length; i++) {
        createEl({ classname: "star", parent: this.starContainer, callback: (el) => {
            this.starArray.push(el);

            // 상단의 별 클릭해서 게임 이동하는 기능 추가(1차 권고 수정)
            addHover(el);
            el.addEventListener("click", window.$efSound.hover);
            el.addEventListener("click", () => {
              this.selectedGame(i);
            });
          } 
        });
      }
    }

    filledStar(index) {
      this.stars[index].classList.add(TEXT_COMPLETE);
    }

    offStar() {
      this.stars.forEach(star => { star.classList.remove(TEXT_ON); });
    }

    // 상단의 별 클릭해서 게임 이동하는 기능 추가(1차 권고 수정)
    selectedGame(index) {
      this.offStar();

      this.currentGameIndex = index;
      this.startGame();
    }

    // 게임 시작
    startGame() {
      window.$ANSWER = this.answer;
      window.$QUESTION = this.question;

      const url = `./games/${this.gameName}/${this.gameName}.html`;
      
      // 게임 시작할 때 star에 complete 삭제(다시하기일 경우 )
      // this.stars[this.currentGameIndex].classList.remove(TEXT_COMPLETE);
      this.stars[this.currentGameIndex].classList.add(TEXT_ON);
      
      this.setQuizLength();

      this.gameFrame.src = url;
    }

    // 게임 완료(각 게임의 js에서 실행)
    clearGame() {
      this.filledStar(this.currentGameIndex);
      this.offStar();
      
      if (this.stars[this.currentGameIndex + 1] && this.stars[this.currentGameIndex + 1].classList.contains(TEXT_COMPLETE)) return;

      if (this.currentGameIndex === this.gameLength - 1) this.endGame();
      else {
        this.currentGameIndex += 1;
        this.startGame();
      }
    }

    // 전체 게임 초기화
    resetGame() {
      this.offStar();
      this.title.innerHTML = "";
      this.starContainer.innerHTML = "";
      this.currentGameIndex = 0;
      this.starArray = [];
    }

    // 전체 게임 완료
    endGame() {
      // console.log('게임 종료');
      this.setQuizLength();

      setTimeout(() => {
        // 자동 종료 기능 삭제(1차 권고 수정)
        // this.close();
      }, 1000);
    }

    open(lessonIndex) {
      this.setGame(lessonIndex);
      this.container.classList.add(TEXT_ON);

      this.startGame();
    }

    close() {
      this.container.classList.remove(TEXT_ON);

      this.resetGame();
    }

    binding() {
      this.setGame = this.setGame.bind(this);
      this.startGame = this.startGame.bind(this);
      this.resetGame = this.resetGame.bind(this);
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }
  }

  class SpecializeContents {
    constructor(opts) {
      this.binding();

      this.DATA = $SPECIALIZECONTENTS.lesson;
      this.header = opts.header;
      this.main = opts.main;
      this.GAME = new Game({
        data: this.DATA,
        container: opts.gameContaier,
        gameFrame: opts.gameFrame,
      });

      this.selectedLessonIndex = null;

      this.createObjInHeader(this.header);
      this.createTitle(this.main);
    }

    createObjInHeader(header) {
      createEl({ classname: "title", html: $SPECIALIZECONTENTS.title, parent: header });
      createEl({ classname: "grade", html: $SPECIALIZECONTENTS.grade, parent: header });
      createEl({ classname: "subject", html: $SPECIALIZECONTENTS.subject, parent: header });
    }

    createTitle(main) {
      this.DATA.forEach((data, index) => {
        const section = createEl({ tag: "section", classname: `lesson_${index + 1}`, html: `<h1>${data.title}</h1><h5>${data.subTitle}</h5>`, parent: main });

        createEl({ classname: "cloud", parent: section });

        for (let i = 0; i < 5; i++) {
          const starCircle = createEl({ classname: "starCircle", parent: section });
          starCircle.classList.add(`star_${i + 1}`);
        }

        for (let i = 0; i < 7; i++) {
          const shootingStar = createEl({ classname: "shootingStar", parent: section });
          shootingStar.classList.add(`star_${i + 1}`);
        }

        createEl({ classname: "sectionChar", parent: section });

        // section.addEventListener('click', window.$efSound.click);
        section.addEventListener("click", this.openGame.bind(this, index));
        // section.addEventListener("mouseover", window.$efSound.hover);
        addHover(section);
      });
    }

    openGame(index) {
      this.selectedLessonIndex = index;

      setTimeout(() => {
        window.$efSound.open();
        this.GAME.open(this.selectedLessonIndex + 1);
      }, 100);
    }

    closeGame() {
      this.selectedLessonIndex = null;
      this.GAME.close();
    }

    clearGame() {
      this.GAME.clearGame();
    }

    binding() {
      this.openGame = this.openGame.bind(this);
      this.closeGame = this.closeGame.bind(this);
    }
  }

  window.$efSound = {};

  let efArray = {
    click: $ts.createAudio.set("../include/media/click2.mp3"),
    open: $ts.createAudio.set("../include/media/open2.mp3"),
    hover: $ts.createAudio.set("../include/media/hover.mp3"),
  };

  for (let name in efArray) appendEfAudio(name, efArray[name]);

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
    for (let name in efArray) {
      efArray[name].pause();
      if (efArray[name].currentTime) efArray[name].currentTime = 0;
    }
  }

  window.$efSound.stop = stopEfSound;
  window.$efSound.muted = function (boolean) {
    for (let name in efArray) {
      efArray[name].muted = boolean;
    }
  };

  window.addEventListener("load", function () {
    const DOM_WRAP = document.querySelector("#wrap");
    const DOM_HEADER = document.querySelector("#wrap > header");
    const DOM_MAIN = document.querySelector("main");
    const DOM_GAME = document.querySelector("section.game");

    new window.$cale({ target: DOM_WRAP });
    window.$SpecializeContents = new SpecializeContents({
      header: DOM_HEADER,
      main: DOM_MAIN,
      gameContaier: DOM_GAME,
    });
  });
})();
