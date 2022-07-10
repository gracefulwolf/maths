window.addEventListener('load', function() {
  var rotateArray = [];
  var rotateContainer = $ts.getEl('.js-rotate');

  rotateContainer.forEach(function(obj, index) {
    rotateArray.push(new $Rotate({
      obj: obj,
      target: obj.querySelector('.js-rotateTarget'),
      degree: 1,
      rightButton: obj.querySelector('.js-rotateButton.right'),
      leftButton: obj.querySelector('.js-rotateButton.left'),
      resetButton: $ts.getEl('.page1 .quizButtons')[0],
      copy: true,
      callback: {
        move: function(Rotate) {},
        end: function(Rotate) {
          console.log('c')
        },
        reset: function(Rotate) {
        }
      }
    }));
  });

  window.$callBack.sliderMove = function(SLIDER) {
    rotateArray.forEach(function(rotate) {
      rotate.reset();
    });

  }

  window.$callBack.sliderMove = function(SLIDER) {
    if(SLIDER.idx === 0){
      rotateArray.forEach(function(rotate) {
        rotate.reset();
      });
      $ts.getEl('.min.slideleft')[0].innerHTML = '';
    }else{
      var pencilBox = $ts.getEl('.page1 .flexContainer')[0].cloneNode(true);
        $ts.getEl('.min.slideleft')[0].appendChild(pencilBox);
    }
  }
});