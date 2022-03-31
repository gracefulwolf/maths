
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
  function createStars(parent) {
    function create() {
      var star = document.createElement('div');
      var scale = getRandom(1, 0.3);

      star.classList.add('star');
      star.style.left = getRandom(1250, 30) + 'px';
      star.style.top = getRandom(120, 30) + 'px';
      star.style.transform = 'scale('+ scale +')';
      
      parent.appendChild(star);
      setTimeout(function() {
        parent.removeChild(star);
      }, 2000);
    }
    
    var length = getRandom(4, 2);
    for (var i = 0; i < length; i++) {
      setTimeout(create, (Math.random() + i) * 1000);
    }
  }
  function createShootingStars(parent) {
    function create(type) {
      var star = document.createElement('div');
      star.classList.add(type ? 'shootingStar_small' : 'shootingStar_big');
      star.style.right = getRandom(1200, -50) + 'px';
      parent.insertBefore(star, parent.children[0]);
      
      setTimeout(function() {
        parent.removeChild(star);
      }, 2000);
    }
    
    create(true);
    setTimeout(function() { create(false); }, 2000);
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

  function createChar(parent) {
    var char_start = createCanvas('char_start', parent, {width: 600, height: 365});
    var char_repeat = createCanvas('char_repeat', parent, {width: 600, height: 365});
    var charAni_start = new Sprite({
      canvas: char_start,
      src: '../include/math/images/finish/character_'+ currentLesson +'/',
      name: 'finish_intro_char_start_sheet_' + currentLesson,
      fileType: 'png',
      mode: 'sheet',
      length: 56,
      duration: 2,
      width: 600,
      height: 365,
      index: 1,
      autoPlay: true,
      callback: function(sprite) {
        if (sprite.step === 50) charAni_repeat.canvas.classList.add('on');
        if (sprite.step === 54) charAni_repeat.play();
          
      }
    });

    var charAni_repeat = new Sprite({
      canvas: char_repeat,
      src: '../include/math/images/finish/character_'+ currentLesson +'/',
      name: 'finish_intro_char_end_sheet_' + currentLesson,
      fileType: 'png',
      mode: 'sheet',
      length: 40,
      delay: 2,
      duration: 2,
      width: 600,
      height: 365,
      index: 1,
      loop: true,
      autoPlay: false,
      callback: function(Sprite) {}
    });
  }

  window.addEventListener('load', function() {
    // create bg
    var bgContainer = createEl('bg', container);
    var plant = createEl('plant', bgContainer);

    createStars(bgContainer);
    setInterval(function() { createStars(bgContainer); }, 3000);
    setInterval(function() { createShootingStars(bgContainer); }, 5000);

    // create title
    var titleContainer = createEl('title', container);
    var title = createEl('title', titleContainer);
    var math = createEl('math', titleContainer);

    setTimeout(function() { createChar(titleContainer); }, 1000);

    // create startbutton
    var startButton = createEl('startButton', container);
    startButton.addEventListener('click', hideIntro);
    startButton.addEventListener('mouseover', addhover);
    startButton.addEventListener('mouseout', removehover);
  });

})();