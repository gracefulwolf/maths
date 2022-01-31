(function() {

  document.addEventListener('DOMContentLoaded', function() {
    // for (var i = 0; i < 96; i++){
    //   var div = document.createElement('div');
    //   $ts.getEl('.js-clickArea')[0].appendChild(div);
    // }


    var colorArray = [];
    //
    // var clickBox = $ts.getEl('.js-clickBox');
    // clickBox.forEach(function (box) {
    //   return new CLICKINIT({container: box});
    // })
    // function CLICKINIT(opts) {
    //   this.container = opts.container;
    //   this.area = $ts.getEl('.js-clickArea', this.container)[0];
    //   this.btns = $ts.getEl('.js-btn', this.container);
    //   this.resetBtn = $ts.getEl('.js-clickReset', this.container)[0];
    //   this.elements = $ts.getEl('div', this.area);
    //
    //   this.length = this.area.getAttribute('data-length');
    //
    //   var self = this;
    //
    //   this.init = function () {
    //
    //     this.elements.forEach(function (elem) {
    //       elem.addEventListener('click', self.clickEvent);
    //       elem.addEventListener('click', $efSound.click);
    //     })
    //
    //     this.btns.forEach(function (btn, index) {
    //       if(index === 0) {
    //         btn.classList.add('on');
    //
    //         console.log(colorArray)
    //         colorArray.splice(0, 1, btn.getAttribute('data-color'));
    //       }
    //       btn.addEventListener('click', self.colorSelectEvent);
    //       btn.addEventListener('click', $efSound.click);
    //     })
    //
    //     this.resetBtn.addEventListener('click', this.reset.bind(this));
    //     this.resetBtn.addEventListener('click', $efSound.click);
    //   }
    //
    //   this.clickEvent = function () {
    //     if(this.classList.contains(colorArray[0])){
    //       this.setAttribute('class', '');
    //     }else{
    //       this.setAttribute('class', 'on ' + colorArray[0]);
    //     }
    //
    //     if(window.$callBack && window.$callBack.clickBox) {
    //       window.$callBack.clickBox(self, this);
    //     }
    //   }
    //
    //   this.colorSelectEvent = function () {
    //     self.btns.forEach(function (btn) {
    //       btn.classList.remove('on');
    //     })
    //     this.classList.add('on');
    //
    //     colorArray.splice(0, 1, this.getAttribute('data-color'));
    //   }
    //
    //   this.reset = function () {
    //     this.btns.forEach(function (btn, index) {
    //       btn.classList.remove('on');
    //       if(index === 0) {
    //         btn.classList.add('on');
    //         colorArray.splice(0, 1, btn.getAttribute('data-color'));
    //       }
    //     })
    //     this.elements.forEach(function (elem) {
    //       elem.setAttribute('class', '');
    //     })
    //   }
    //   this.init();
    // }
    window.$callBack.sliderMove = function(Slider) {
      canvasReset();
      
    }
    window.$callBack.quizChainReset = function(QUIZCHAIN) {
      canvasReset();
    }
  });
  window.$callBack = window.$callBack || {};
  
  function canvasReset() {
    var canvas = $ts.getEl('.canvas_1');
    for(var i = 0; i < canvas.length; i++){
      closeDraw();
      if(drawClear) {
        drawClear(i);
      }
    }
  }
  var resetBtn = $ts.getEl('.page3 .dragResetButton')[0];
  resetBtn.addEventListener('click', function() {
    canvasReset();
  })
})();


document.addEventListener('DOMContentLoaded', function() {
  
});