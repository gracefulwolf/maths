
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
  function createStars() {
    function create() {
      var star = document.createElement('div');
      var scale = getRandom(1, 0.3);

      star.classList.add('star');
      star.style.left = getRandom(1250, 30) + 'px';
      star.style.top = getRandom(120, 30) + 'px';
      star.style.transform = 'scale('+ scale +')';
      
      container.querySelector('.bg').appendChild(star);
      setTimeout(function() {
        container.querySelector('.bg').removeChild(star);
      }, 2000);
    }
    
    var length = getRandom(4, 2);
    for (var i = 0; i < length; i++) {
      setTimeout(create, (Math.random() + i) * 1000);
    }
  }
  function hideIntro() {
    container.classList.add('hide');
  }
  function addhover() {
    this.classList.add('hover');
  }
  function removehover() {
    this.classList.remove('hover');
  }

  

  // var studyEl = document.querySelector('.study');
  // var studyAni = new Sprite({
  //   canvas: studyEl,
  //   src: '../include/math/images/powerup/intro/study/',
  //   name: 'powerup_study_' + currentLesson,
  //   fileType: 'svg',
  //   mode: 'change',
  //   length: 6,
  //   duration: 1,
  //   width: 400,
  //   height: 100,
  //   index: 0,
  //   playCount: 1,
  //   lastCount: 6,
  //   autoPlay: false,
  //   callback: function(Sprite) {}
  // });

  window.addEventListener('load', function() {
    setTimeout(function() {
      charAni.play();
    }, 1000);
    // setTimeout(function() {
    //   studyEl.classList.add('show');
    //   setTimeout(function() { studyAni.play(); }, 500)
    // }, 3000);

    createStars();
    setInterval(createStars, 3000);

    // create bg
    var bgContainer = createEl('bg', container);
    var buildings = createEl('buildings', bgContainer);
    var plant = createEl('plant', bgContainer);

    // create title
    var titleContainer = createEl('title', container);
    var math = createEl('math', titleContainer);
    var power = createEl('power', titleContainer);
    var study = createEl('study', titleContainer);
    var char = createCanvas('char', titleContainer, {width: 260, height: 340});

    // create startbutton
    var startButton = createEl('startButton', container);
    startButton.addEventListener('click', hideIntro);
    startButton.addEventListener('mouseover', addhover);
    startButton.addEventListener('mouseout', removehover);

    var charAni = new Sprite({
      canvas: char,
      src: '../include/math/images/powerup/intro/',
      name: 'powerup_intro_char_sheet',
      fileType: 'png',
      mode: 'sheet',
      length: 20,
      duration: 1,
      width: 260,
      height: 340,
      index: 1,
      autoPlay: false,
      loop: true,
      callback: function(Sprite) {}
    });
  });

})();