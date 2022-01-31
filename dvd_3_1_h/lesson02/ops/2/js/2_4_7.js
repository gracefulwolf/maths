
(function() {

  window.$callBack = window.$callBack || {};

  var tangramContainer = document.querySelector('.tangramContainer');
  var tangramElements = $ts.getEl('.js-tangram');
  var rotateButton = $ts.getEl('.js-rotateButton');

  function getEventData(event) {
    var IsTouched = event.type.indexOf('touch') > -1;
    var newEvent = IsTouched ? event.changedTouches[0] : event;
    
    return {
      x: newEvent.clientX,
      y: newEvent.clientY,
    }
  }
  function getTarget(event) {
    return document.elementFromPoint(getEventData(event).x, getEventData(event).y)
  }
  function pointerOff() {
    var off = function(el) {
      el.classList.add('pointerOff');
    }
    tangramElements.forEach(off);
  }
  function pointerOn() {
    var on = function(el) {
      el.classList.remove('pointerOff');
    }
    tangramElements.forEach(on);
  }
  function resetPosition(target) {
    target.style.top = '';
    target.style.left = '';
    target.querySelector('.js-tangram').style.webkitTransform = 'rotate(0deg)';
    target.querySelector('.js-tangram').style.mozTransform = 'rotate(0deg)';
    target.querySelector('.js-tangram').style.msTransform = 'rotate(0deg)';
    target.querySelector('.js-tangram').style.transform = 'rotate(0deg)';
  }

  window.$callBack.drag = {
    move: function(Drag, event) {
			Drag.dragObj.classList.add('isDrag');
      // Drag.dragObj.classList.remove('showRotate');
    },
    end: function(Drag, event) {
      pointerOff();
      Drag.dragObj.classList.remove('isDrag');
      Drag.dragObj.classList.add('showRotate');

      if (getTarget(event) == tangramContainer) {
        resetPosition(Drag.dragObj);
        Drag.dragObj.classList.remove('showRotate');
      }
      pointerOn();
    }
  }

  function Rotate(opts) {
    var self = this;

    this.btn = opts.btn;
    this.target = opts.target;
    this.rotateValue = 0;

    function rotate(e) {
      e.stopPropagation();
      e.preventDefault();

      self.rotateValue += 45;
      var newRotateValue = 'rotate('+self.rotateValue+'deg)';

      self.target.style.webkitTransform = newRotateValue;
      self.target.style.mozTransform = newRotateValue;
      self.target.style.msTransform = newRotateValue;
      self.target.style.transform = newRotateValue;
    }

    this.btn.addEventListener('click', rotate);
  }

  window.addEventListener('load', function() {


    rotateButton.forEach(function(btn, index) {
      new Rotate({
        btn: btn,
        target: document.querySelector('.js-tangram.tangram_'+(index+1))
      });
    });

    var quizButton = $ts.getEl('.page2 .quizButtons')[0];
    var imgs = $ts.getEl('.page2 .colorBox > img');

    quizButton.addEventListener('click', toggleAnswer);

    function toggleAnswer(){
      if(this.className.indexOf('reset') === -1) resetAnswer();
      else showAnswer();
    }
    function showAnswer() {
      allResetPosition();
      imgs.forEach(function (img) {
        img.classList.add('on');
      })
    }
    function resetAnswer(){
      imgs.forEach(function (img) {
        img.classList.remove('on');
      })
    }
    function allResetPosition() {
      var drags = $ts.getEl('[data-drag]');
      drags.forEach(function (drag) {
        drag.style.top = '';
        drag.style.left = '';
        drag.classList.remove('showRotate');
        drag.querySelector('.js-tangram').style.webkitTransform = 'rotate(0deg)';
        drag.querySelector('.js-tangram').style.mozTransform = 'rotate(0deg)';
        drag.querySelector('.js-tangram').style.msTransform = 'rotate(0deg)';
        drag.querySelector('.js-tangram').style.transform = 'rotate(0deg)';
      })
    }
    window.$callBack.sliderMove = function(Slider) {
      allResetPosition();
      resetAnswer();
    }
  });

})();