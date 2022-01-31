(function() {
  var isShowAnswer = false;
  

  (function() {
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
      
      var answerButton = document.querySelectorAll('.quizButtons');
      var oxTargets = $ts.getEl('[data-ox-target]');
      
      answerButton.forEach(function(btn) {
        btn.addEventListener('click', function () {
          console.log(this);
          // var isReset = this.className.indexOf('reset') === -1;
          if (isShowAnswer) {
            oxTargets.forEach(function (obj) {
              obj.classList.remove('on');
              obj.classList.remove('blue');
            })
          }else{
            closePop();
            showAnswer();
          }
        })

      })
      
      function showAnswer() {
        console.log('adf')
        oxTargets.forEach(function (obj) {
          obj.classList.remove('on');
        })
        oxObjs.forEach(function (obj) {
          if(obj.hasAttribute('data-answer')){
            console.log(obj)
            var idx = obj.getAttribute('data-ox-obj');
            $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('on');
            $ts.getEl('[data-ox-target="'+idx+'"]')[0].classList.add('blue');
          }
        })
      }

  })();

  var clickObj = $ts.getEl('[data-click-target]');

    function hideAnswer(obj) {
      obj.classList.remove('on');
      obj.classList.remove('blue');
    }

    function toggleAnswer() {
      if ($ts.getEl('.page1 .quizButtons.answer.reset')) isShowAnswer = true;
      else isShowAnswer = false;
      
      if (!isShowAnswer) {
        clickObj.forEach(function(obj) {
          hideAnswer(obj);
          if (obj.hasAttribute('data-answer')) {
            obj.classList.add('on');
            obj.classList.add('blue');
          }
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
    window.$callBack.sliderMove = function(SLIDER) {
      isShowAnswer = false;
      clickObj.forEach(hideAnswer);

      $ts.getEl('.blue').forEach(function(blue) {
        blue.classList.remove('blue');
      })
    }
  
  // window.$callBack.sliderMove = function(Slider) {
  //   isShowAnswer = false;
  // }
  window.addEventListener('load', function() {});

})();