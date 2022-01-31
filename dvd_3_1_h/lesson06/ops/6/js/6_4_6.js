(function() {
  window.$callBack.oxIncorrect = function(OX) {
    // var removeOn = function() {
    //   OX.curTarget.forEach(function(target) {
    //     target.classList.remove('on');
    //   });
    // }
    // setTimeout(removeOn, 600);
  }

  var pageFunction = {
    page_1: function() {
      var clickObjs = $ts.getEl('.js-click');
      var pops = $ts.getEl('.js-pop');
      var oxObjs = $ts.getEl('[data-ox-obj]');
      
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
      
      var answerButton = document.querySelector('.quizButtons');
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



      var isShowAnswer = false;
        (function() {
          var clickObj = $ts.getEl('[data-svg-obj]');

          clickObj.forEach(function (obj) {
            obj.addEventListener('click', clickEvent);
            obj.addEventListener('click', $efSound.click);
          })

          function clickEvent() {
            var idx = this.getAttribute('data-svg-obj');
            console.log(this.getAttribute('class'))
            if(this.getAttribute('class')){
              this.removeAttribute('class');
              $ts.getEl('[data-svg-target="'+idx+'"]')[0].removeAttribute('class');
            }else{
              this.setAttribute('class', 'complete');
              $ts.getEl('[data-svg-target="'+idx+'"]')[0].setAttribute('class', 'on');
            }
          }
          function hideAnswer(obj) {
            obj.removeAttribute('class');
          }

          function toggleAnswer() {
            if (!isShowAnswer) {
              clickObj.forEach(function(obj) {
                hideAnswer(obj);
                if (obj.hasAttribute('data-answer')) {
                  obj.setAttribute('class', 'on pointerOff');
                }else{
                  obj.setAttribute('class', 'pointerOff');
                }
              });
              isShowAnswer = true;
              $ts.getEl('.exam')[0].classList.add('on');
            } else {
              clickObj.forEach(hideAnswer);
              isShowAnswer = false;
              $ts.getEl('.exam')[0].classList.remove('on');
            }
          }

          var answerClickButton = $ts.getEl('.quizButtons.answer');
          answerClickButton.forEach(function(btn) {
            btn.addEventListener('click', toggleAnswer);
          });

          // 페이지 이동할 때 초기화 
          window.$callBack.sliderMove = function(SLIDER) {
            isShowAnswer = false;
            clickObj.forEach(hideAnswer);
          }
        })();
    },
    // page_2: function() {console.log('page_2');
    //   window.$callBack.oxCorrect = null;
    //   window.$callBack.oxAnswer = null;},
    // page_3: function() {console.log('page_3');
    //   window.$callBack.oxCorrect = null;
    //   window.$callBack.oxAnswer = null;},
  }

  window.addEventListener('load', function() {
    // $pm.array.mainSlider.reset({idx: 2});
    
    pageFunction['page_1']();
  });

})();