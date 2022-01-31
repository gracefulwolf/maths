(function() {
  window.$callBack.oxIncorrect = function(OX) {
    var removeOn = function() {
      OX.curTarget.forEach(function(target) {
        // target.classList.remove('on');
      });
    }
    setTimeout(removeOn, 600);
  }

  var pageFunction = {
    // page_0: function() {console.log('page_0');
    //   window.$callBack.oxCorrect = function(OX) {
    //     var removeOn = function() {
    //       OX.curTarget.forEach(function(target) {
    //         if (!target.classList.contains('rightAngle')) target.classList.remove('on');
    //       });
    //     }
    //     setTimeout(removeOn, 600);
    //   }
    //   window.$callBack.oxAnswer = function(OX) {
    //     var removeOn = function() {
    //       OX.target.forEach(function(target) {
    //         if (!target.classList.contains('rightAngle')) target.classList.remove('on');
    //       });
    //     }
    //     setTimeout(removeOn, 600);
    //   }
    // },
    // page_0: function() {console.log('page_1');
    //   var clickObjs = $ts.getEl('.page_2 .js-click');
    //   var pops = $ts.getEl('.page_2 .js-pop');
    //   var oxObjs = $ts.getEl('.page_2 [data-ox-obj]');

    //   window.$callBack.oxCorrect = function(OX) {
    //     var currentOXIndex = OX.curObj.getAttribute('data-ox-obj').split('-')[0];
    //     var currentClickObj = getCurrentClickObj(currentOXIndex);

    //     if (currentClickObj) currentClickObj.classList.add('complete');
    //   };
    //   window.$callBack.oxAnswer = function(OX) {
    //     closePop();
    //     clickObjs.forEach(function(obj) {
    //       obj.classList.add('complete');
    //     });
    //   };
    //   window.$callBack.oxReset = function(OX) {
    //     closePop();
    //     clickObjs.forEach(function(obj) {
    //       obj.classList.remove('complete');
    //     });
    //   };
      
    //   function getCurrentClickObj(index) {
    //     var newObj = clickObjs.filter(function(obj) { return obj.getAttribute('data-index') == index; });
    //     return newObj.length > 0 ? newObj[0] : null;
    //   }
    //   function openPop() {
    //     var clickObj = this;
    //     pops.forEach(function(target, index) {
    //       if (index !== clickObj.getAttribute('data-index')-1) target.classList.remove('on');
    //       else target.classList.add('on');
    //     });
    //   }
    //   function closePop() {
    //     pops.forEach(function(target, index) {
    //       target.classList.remove('on');
    //     });
    //   }

    //   oxObjs.forEach(function(obj) {
    //     obj.addEventListener('click', closePop.bind(obj));
    //   });
    //   clickObjs.forEach(function(obj) {
    //     obj.addEventListener('click', openPop.bind(obj));
    //   });
    // },
    page_0: function() {
      console.log('page_1');
      var clickObjs = $ts.getEl('.js-click');
      var pops = $ts.getEl('.js-pop');
      var oxObjs = $ts.getEl('[data-ox-obj]');
      var oxTargets = $ts.getEl('[data-ox-target]');

      function hidePopup() {
        pops.forEach(function(popup) {
          popup.classList.remove('on');
        });
      }
      function hideTargets(index) {
        oxTargets.forEach(function(target) {
          if (target.getAttribute('data-ox-target').split('-')[0] == index) target.classList.remove('on');
        });
      }

      function showPopup() {
        var index = this.getAttribute('data-index');
        
        hidePopup();
        pops.forEach(function(popup) {
          if (popup.getAttribute('data-index') == index) popup.classList.add('on');
        });
      }

      clickObjs.forEach(function(obj) {
        obj.addEventListener('click', $efSound.click);
        obj.addEventListener('click', showPopup);
      });

      oxObjs.forEach(function(obj) {
        var index = obj.getAttribute('data-ox-obj').split('-')[0];

        obj.addEventListener('click', function() {
          hidePopup();
          hideTargets(index);
        });
      });

      
      window.$callBack.quizChainAnswer = function() {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(number) {
          hideTargets(number);
        });
        $pm.array.quiz.inPage[0].quiz.showAnswer();
      };
    },
    page_1: function() {console.log('page_2');
      window.$callBack.oxCorrect = null;
      window.$callBack.oxAnswer = null;},
    page_2: function() {console.log('page_3');
      window.$callBack.oxCorrect = null;
      window.$callBack.oxAnswer = null;},
  }
  window.$callBack.sliderMove = function(Slider) {
    // console.log(Slider.idx);
    pageFunction['page_'+Slider.idx]();
  }

  window.addEventListener('load', function() {
    // $pm.array.mainSlider.reset({idx: 2});
    
    pageFunction['page_0']();
  });

})();