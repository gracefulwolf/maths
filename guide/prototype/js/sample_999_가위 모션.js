

document.addEventListener('DOMContentLoaded', function () {
  saveCssData();
  clickImageInit();
  window.$callBack.sliderReset = function (slider) {
    resetCssData();
  };

  window.$callBack.viewAnswer = function (obj) {
    viewAnswerImages(obj.container)
  };
  window.$callBack.hideAnswer = function (obj) {
    hideAnswerImages(obj.container);
  };
  window.$callBack.toggleClick = function (obj) {
    viewAnswerImages(obj.quiz.container)
  };
  window.$callBack.toggleBack = function (obj) {
    hideAnswerImages(obj.quiz.container);
  };
});
function hideAnswerImages(container) {
  var img = $ts.getEl('[data-img]', container);
  for(var i = 0; i < img.length; i++){
    img[i].removeAttribute('style');
  }
}
function viewAnswerImages(container) {
  resetCssData();
  var img = $ts.getEl('[data-img]', container);
  for(var i = 0; i < img.length; i++){
    if(img[i].getAttribute('data-move-direction') === 'top-right'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) - 5;
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) + 5;
      img[i].style.top = moveTop + 'px';
      img[i].style.left = moveLeft + 'px';

    }else if(img[i].getAttribute('data-move-direction') === 'top-left') {
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) - 5;
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) - 5;
      img[i].style.top = moveTop + 'px';
      img[i].style.left = moveLeft + 'px';

    }else if(img[i].getAttribute('data-move-direction') === 'top-left2'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) - 10;
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) - 10;
      img[i].style.top = moveTop + 'px';
      img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'bottom-left'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) + 5;
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) - 5;
      img[i].style.top = moveTop + 'px';
      img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'bottom-right'){
      var moveTop = Number( img[i].getAttribute('data-top').replace('px','')) + 5;
      var moveLeft = Number( img[i].getAttribute('data-left').replace('px','')) + 5;
       img[i].style.top = moveTop + 'px';
       img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'bottom-right2'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) + 10;
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) + 10;
      img[i].style.top = moveTop + 'px';
      img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'left'){
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) - 5;
      img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'bottom'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) + 10;
      img[i].style.top = moveTop + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'right'){
      var moveLeft = Number(img[i].getAttribute('data-left').replace('px','')) + 5;
      img[i].style.left = moveLeft + 'px';
    }else if(img[i].getAttribute('data-move-direction') === 'top'){
      var moveTop = Number(img[i].getAttribute('data-top').replace('px','')) - 10;
      img[i].style.top = moveTop + 'px';
    }
  }
}

function saveCssData() {
  var img = $ts.getEl('[data-img]');
  var scissors = $ts.getEl('[data-scissor]');

  // 익스, 크롬 분기
  for( var i=0; i < img.length; i++ ) {
    if( img[i].currentStyle) {
      img[i].setAttribute('data-top', img[i].currentStyle.top);
      img[i].setAttribute('data-left', img[i].currentStyle.left);
    }
    else if( window.getComputedStyle ) {
      img[i].setAttribute('data-top', window.getComputedStyle(img[i], null).top);
      img[i].setAttribute('data-left', window.getComputedStyle(img[i], null).left);
    }
  }

  // 익스, 크롬 분기
  for( var i=0; i < scissors.length; i++ ) {
    if( scissors[i].currentStyle) {
      scissors[i].setAttribute('data-top', scissors[i].currentStyle.top);
      scissors[i].setAttribute('data-left', scissors[i].currentStyle.left);
      scissors[i].setAttribute('data-src', scissors[i].currentStyle.backgroundImage);
    }
    else if( window.getComputedStyle ) {
      scissors[i].setAttribute('data-top', window.getComputedStyle(scissors[i], null).top);
      scissors[i].setAttribute('data-left', window.getComputedStyle(scissors[i], null).left);
      scissors[i].setAttribute('data-src', window.getComputedStyle(scissors[i], null).backgroundImage);
    }
  }
}

function resetCssData() {
  var img = $ts.getEl('[data-img]'),
      scissors = $ts.getEl('[data-scissor]'),
      line = $ts.getEl('[data-line]');

  for( var i=0; i<img.length; i++ ) {

    // 도형 위치 초기화
    img[i].style.top = img[i].getAttribute('data-top');
    img[i].style.left = img[i].getAttribute('data-left');
    img[i].removeAttribute('style');
    // 클릭 초기화
    img[i].classList.remove('pointerOff');
  }

  for( var i=0; i<scissors.length; i++ ) {

    // 가위 위치 초기화
    scissors[i].style.top = scissors[i].getAttribute('data-top');
    scissors[i].style.left = scissors[i].getAttribute('data-left');
    scissors[i].setAttribute('style', '');

    removeLine(line[i], scissors[i]);
  }

  clearInterval(aniID);
  clearInterval(intervalID);
  clearInterval(intervalID2);
  clearInterval(intervalID3);
}
var intervalID, intervalID2, intervalID3;

function clickImageInit() {
  var clickImgObj = $ts.getEl('[data-img]');
  for(var i = 0; i < clickImgObj.length; i++){
    clickImgObj[i].addEventListener('click', clickImageEvent, false);
    clickImgObj[i].addEventListener('click', $efSound.click);
  }
}

function clickImageEvent() {
  var idx = this.getAttribute('data-img'),
    imgObj = $ts.getEl('[data-img]'),
    moveImgObj = $ts.getEl('[data-img="'+idx+'"]'),
    lineObj = $ts.getEl('[data-line="'+idx+'"]'),
    scissorsObj = $ts.getEl('[data-scissor="'+idx+'"]');

  for(var i = 0; i < imgObj.length; i++){
    if(imgObj[i].getAttribute('data-img') === idx){
      imgObj[i].classList.add('pointerOff');
    }
  }

  if(lineObj.length === 1){
    intervalID = setInterval(function () {
    lineObj[0].classList.add('on');
      moveScissors(60, scissorsObj[0], 30, 2000, scissorsObj[0].getAttribute('data-step-height'));
      clearInterval(intervalID);
    },500);

    intervalID2 = setInterval(function () {
      removeLine(lineObj[0], scissorsObj[0]);
      for( var i=0; i<moveImgObj.length; i++) {
        moveImg(moveImgObj[i]);
      }
      clearInterval(intervalID2);
    },2700);

  }else if( lineObj.length === 2 ) {
    // 라인 그리기
    intervalID = setInterval(function () {
      lineObj[0].classList.add('on');
      moveScissors(60, scissorsObj[0], 30, 2000, scissorsObj[0].getAttribute('data-step-height'));
      clearInterval(intervalID);
    },500);

    intervalID2= setInterval(function () {
      lineObj[1].classList.add('on');
      moveScissors(60, scissorsObj[1], 30, 2000, scissorsObj[1].getAttribute('data-step-height'));
      clearInterval(intervalID2);
    },2400);

    intervalID3 = setInterval(function () {
      for( var i=0; i<lineObj.length; i++ ) {
        removeLine(lineObj[i], scissorsObj[i]);
      }
      for( var i=0; i<moveImgObj.length; i++) {
        moveImg(moveImgObj[i]);
      }
      clearInterval(intervalID3);
    },4500);
  }
}


// 도형 모션
function moveImg(target) {

  if( target.getAttribute('data-move-direction') == 'top-right' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) - 5;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) + 5;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'top-left' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) - 5;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) - 5;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'top-left2' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) - 10;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) - 10;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'bottom-left' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) + 5;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) - 5;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'bottom-right' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) + 5;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) + 5;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'bottom-right2' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) + 10;
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) + 10;
    target.style.top = moveTop + 'px';
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'left' ) {
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) - 5;
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'bottom' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) + 10;
    target.style.top = moveTop + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'right' ) {
    var moveLeft = Number(target.getAttribute('data-left').replace('px','')) + 5;
    target.style.left = moveLeft + 'px';
  }
  else if( target.getAttribute('data-move-direction') == 'top' ) {
    var moveTop = Number(target.getAttribute('data-top').replace('px','')) - 10;
    target.style.top = moveTop + 'px';
  }
}

// 라인, 가위 사라지기
function removeLine(target1, target2) {
//	console.log(target);
  target1.classList.remove('on');
  target2.style.display = 'none';
}
// 가위 모션
function moveScissors(spriteArray, spriteObj, delay, duration, h) {

  spriteObj.style.display = 'block';
  var index = 0;
  animate({
    delay : delay,
    duration : duration,
    delta : makeEaseOut(linear),
    step : function(delta) {

      if( (index % 10) < 5 ) {
        spriteObj.style.backgroundImage = spriteObj.getAttribute('data-src').split('.png')[0] + 'ov.png")';
      }
      else {
        spriteObj.style.backgroundImage = spriteObj.getAttribute('data-src');
      }

      if( spriteObj.getAttribute('data-move-direction') == 'to-top-left' ) {
        spriteObj.style.top = Number(spriteObj.getAttribute('data-top').replace('px','')) - (h*index) + 'px';
        spriteObj.style.left = Number(spriteObj.getAttribute('data-left').replace('px','')) - (h*index) + 'px';
      }
      else if( spriteObj.getAttribute('data-move-direction') == 'to-bottom-left' ) {
        spriteObj.style.top = Number(spriteObj.getAttribute('data-top').replace('px','')) + (h*index) + 'px';
        spriteObj.style.left = Number(spriteObj.getAttribute('data-left').replace('px','')) - (h*index) + 'px';
      }
      else if( spriteObj.getAttribute('data-move-direction') == 'to-bottom-top' ) {
        spriteObj.style.top = Number(spriteObj.getAttribute('data-top').replace('px','')) - (h*index) + 'px';
      }
      else if( spriteObj.getAttribute('data-move-direction') == 'to-right-left' ) {
        spriteObj.style.left = Number(spriteObj.getAttribute('data-left').replace('px','')) - (h*index) + 'px';
      }
      else if( spriteObj.getAttribute('data-move-direction') == 'to-top-right' ) {
        spriteObj.style.top = Number(spriteObj.getAttribute('data-top').replace('px','')) - (h*index) + 'px';
        spriteObj.style.left = Number(spriteObj.getAttribute('data-left').replace('px','')) + (h*index) + 'px';
      }
      if (index < spriteArray) {
        index++;
      }
    }
  });
}

var aniID;

function animate(opts) {
  var start = new Date;

  var id = setInterval(function() {
    var timePassed = new Date - start,
      progress = timePassed / opts.duration;

    if (progress > 1)
      progress = 1;

    var delta = opts.delta(progress);
    opts.step(delta);

    if (progress === 1) {
      clearInterval(id);
    }
  }, opts.delay);
  aniId = id;
}