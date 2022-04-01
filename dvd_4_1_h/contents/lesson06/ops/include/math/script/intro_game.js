
(function() {
  // doms
  var container = document.querySelector('.intro');
  var currentLesson = document.body.className;

  // functions
  function getRandom(max, min) {
    return Math.random() * (max - min) + min;
  }
  function createEl(classname, parent) {
    var el = document.createElement('div');
    el.classList.add(classname);
    parent.appendChild(el);
    return el;
  }
  function createCanvas(classname, parent, size) {
    var el = document.createElement('canvas');
    el.classList.add(classname);
    el.setAttribute('width', size.width);
    el.setAttribute('height', size.height);
    parent.appendChild(el);
    return el;
  }
  function createStars(parent, type) {
    function create() {
      var star = document.createElement('div');
      var scale = getRandom(1, 0.3);

      star.classList.add('star');
      if (type === 'white') star.classList.add('white');

      star.style.left = getRandom(1250, 300) + 'px';
      if (type === 'white') star.style.top = getRandom(720, 500) + 'px';
      else star.style.top = getRandom(400, 30) + 'px';
      star.style.transform = 'scale('+ scale +')';
      
      parent.appendChild(star);
      setTimeout(function() {
        parent.removeChild(star);
      }, 2000);
    }
    
    var length = getRandom(6, 2);
    for (var i = 0; i < length; i++) {
      setTimeout(create, (Math.random() + i) * 1000);
    }
  }
  function hideIntro() {
    container.classList.add('hide');
    var gameFrame = document.querySelector('iframe');
    var src = gameFrame.src;

    gameFrame.src = '';
    gameFrame.src = src;
  }
  function addhover() {
    this.classList.add('hover');
  }
  function removehover() {
    this.classList.remove('hover');
  }

  function createChar(parent) {
    var char = createCanvas('char', parent, {width: 1280, height: 720});

    var getPageInfo = setInterval(function() {
      if (window.PAGEINFO) {
        clearInterval(getPageInfo);

        var charAni = new Sprite({
          canvas: char,
          src: '../include/'+ window.PAGEINFO.subjectCode +'/images/game/',
          name: 'game_intro_' + currentLesson,
          fileType: 'png',
          mode: 'sheet',
          length: 30,
          duration: 1.2,
          width: 1280,
          height: 720,
          index: 1,
          autoPlay: true,
          loop: true,
          callback: function(Sprite) {}
        });
      }
    }, 10);



    
  }

  window.addEventListener('load', function() {
    createChar(container);

    // create bg
    var bgContainer = createEl('bg', container);
    var plant = createEl('plant', bgContainer);

    createStars(bgContainer, 'yellow');
    createStars(bgContainer, 'white');
    setInterval(function() { createStars(bgContainer, 'yellow'); }, 3000);
    setInterval(function() { createStars(bgContainer, 'white'); }, 3000);

    // create title
    var titleContainer = createEl('title', container);
    var funny = createEl('funny', titleContainer);
    var text = createEl('text', titleContainer);

    // console.log('$efSound', $efSound.add);
    $efSound.add('startSound', '../include/libs/media/start.mp3');


    // create startbutton
    var startButton = createEl('startButton', container);
    startButton.addEventListener('click', hideIntro);
    startButton.addEventListener('click', $efSound.startSound);
    startButton.addEventListener('mouseover', addhover);
    startButton.addEventListener('mouseout', removehover);
  });

})();