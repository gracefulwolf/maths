(function() {
  var isShowAnswer = false;
  var clickObj = $ts.getEl('[data-click-obj]');
  
  function hideAnswer(obj) {
    obj.classList.remove('complete');
    obj.classList.remove('pointerOff')
  }
  
  function toggleAnswer() {
    
    if (!isShowAnswer) {
      clickObj.forEach(function(obj) {
        hideAnswer(obj);
        if (obj.hasAttribute('data-answer')) {
          obj.classList.add('complete');
        }
        obj.classList.add('pointerOff')
      });
      isShowAnswer = true;
    } else {
      clickObj.forEach(hideAnswer);
      isShowAnswer = false;
    }
  }
  
  var answerClickButton = $ts.getEl('.page1 .quizButtons.answer');
  answerClickButton.forEach(function(btn) {
    
    btn.addEventListener('click', toggleAnswer);
  });
  
  // 페이지 이동할 때 초기화 
  // window.$callBack.sliderMove = function(SLIDER) {
  //   isShowAnswer = false;
  //   clickObj.forEach(hideAnswer);
  // }
  
  // document.querySelector('[data-popup-btn="1"]').addEventListener('click', function() {
  //   this.classList.remove('reset');
  // })
  
  window.$callBack.oxIncorrect = function(OX) {
    // var removeOn = function() {
    //   OX.curTarget.forEach(function(target) {
    //     target.classList.remove('on');
    //   });
    // }
    // setTimeout(removeOn, 600);
  }
  
  var pageFunction = {
    page_3: function() {
      var clickObjs = $ts.getEl('.page3 .js-click');
      var pops = $ts.getEl('.page3 .js-pop');
      var oxObjs = $ts.getEl('.page3 [data-ox-obj]');
      
      oxObjs.forEach(function(obj) {
        obj.addEventListener('click', closePop.bind(obj));
      });
      clickObjs.forEach(function(obj) {
        obj.addEventListener('click', openPop.bind(obj));
      });
      
      window.$callBack.oxCorrect = function(OX) {
        var parent = OX.curTarget[0].parentNode;
        var oxObj = OX.curTarget[0].parentNode.querySelectorAll('symbol');
        oxObj.forEach(function (obj) {
          obj.classList.remove('on')
        })
        parent.querySelector('[data-ox-target="'+OX.curObj.getAttribute('data-ox-obj')+'"]').classList.add('on');
      };
      window.$callBack.oxIncorrect = function(OX) {
        var parent = OX.curTarget[0].parentNode;
        var oxObj = OX.curTarget[0].parentNode.querySelectorAll('symbol');
        oxObj.forEach(function (obj) {
          obj.classList.remove('on')
        })
        parent.querySelector('[data-ox-target="'+OX.curObj.getAttribute('data-ox-obj')+'"]').classList.add('on');
      };
      
      function openPop() {
        var clickObj = this;
        pops.forEach(function(target, index) {
          if (index !== clickObj.getAttribute('data-index')-1) target.classList.remove('on');
          else target.classList.add('on');
        });
      }
      function closePop() {
        pops.forEach(function(target, index) {
          target.classList.remove('on');
        });
      }
      
      var answerButton = document.querySelector('.page3 .quizButtons');
      var oxTargets = $ts.getEl('[data-ox-target]');
      
      answerButton.addEventListener('click', function () {
        var isReset = this.className.indexOf('reset') === -1;
        
        if (isReset) {
          oxTargets.forEach(function (obj) {
            obj.classList.remove('on');
            obj.classList.remove('blue');
          })
        }else{
          closePop();
          showAnswer();
        }
      })
      
      function showAnswer() {
        oxTargets.forEach(function (obj) {
          obj.classList.remove('on');
        })
        oxObjs.forEach(function (obj) {
          if(obj.hasAttribute('data-answer')){
            var idx = obj.getAttribute('data-ox-obj');
            $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('on');
            $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('blue');
          }
        })
      }
    },
    // page_2: function() {console.log('page_2');
    //   window.$callBack.oxCorrect = null;
    //   window.$callBack.oxAnswer = null;},
    // page_3: function() {console.log('page_3');
    //   window.$callBack.oxCorrect = null;
    //   window.$callBack.oxAnswer = null;},
  }
  window.$callBack.sliderMove = function(Slider) {
    // console.log(Slider.idx);
    if (Slider.idx === 2) {
      pageFunction['page_3']();
    }
    isShowAnswer = false;
    clickObj.forEach(hideAnswer);
  }
  
  window.addEventListener('load', function() {
    // $pm.array.mainSlider.reset({idx: 2});
    
    // pageFunction['page_3']();
  });
  
})();