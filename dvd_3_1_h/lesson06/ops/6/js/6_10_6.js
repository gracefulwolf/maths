
(function() {
  var induceLights = $ts.getEl('.induceLight');
  var drawLines = [];
  var answers = [
    [{
      end: {x: 133, y: 13},
      start: {x: -2, y: 13}
    }],
    [{
      end: {x: 113, y: 13},
      start: {x: -2, y: 13}
    }]
  ];

  function lightOff(light) {
    light.classList.add('hide');
  }
  function lightOn(light) {
    light.classList.remove('hide');
  }
  function resetAnswer(drawLine) {
    drawLine.reset();
  }

  function setDrawLine(container, index) {
    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-chainButtons'),
      answer: answers[index],
      lineColor: '#c07aac',
      lineWidth: 12,
      callback: {
        start: function(DrawLine) {
          // console.log(DrawLine, index, document.querySelector('.induceLight.light_'+(index+1)));
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        correct: function(DrawLine) {
          container.classList.add('pointOff');
          console.log('correct', DrawLine.startPointer, DrawLine.endPointer);
        },
        showAnswer: function(DrawLine) {
          lightOff(document.querySelector('.induceLight.light_'+(index+1)));
        },
        reset: function(DrawLine) {
          container.classList.remove('pointOff');
          lightOn(document.querySelector('.induceLight.light_'+(index+1)));
        }
      },
    }));
  }
  


  function pageReset() {
    drawLines.forEach(resetAnswer);
  }

  window.addEventListener('load', function() {
    $ts.getEl('.js-drawLine').forEach(setDrawLine);

    window.$callBack.sliderMove = function(Slider) {
      pageReset();
    }

    setTimeout(function() { drawLines.forEach(resetAnswer); }, 100);
  });

  window.$callBack.oxIncorrect = function(OX) {
    var removeOn = function() {
      OX.curTarget.forEach(function(target) {
        target.classList.remove('on');
      });
    }
    setTimeout(removeOn, 600);
  }

  var pageFunction = {
    page_1: function() {
      var clickObjs = $ts.getEl('.js-click');
      var pops = $ts.getEl('.js-pop');
      var oxObjs = $ts.getEl('[data-ox-obj]');
      var answerButton = document.querySelector('.quizButtons');
      var oxTargets = $ts.getEl('[data-ox-target]');

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
        });
        setTimeout(function() {
          answerButton.classList.remove('reset');

        }, 100)
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
    }
  }
  // window.$callBack.sliderMove = function(Slider) {
  //   // console.log(Slider.idx);
  //   console.log('page_'+Slider.idx)
  //   pageFunction['page_'+Slider.idx]();
  // }

  window.addEventListener('load', function() {
    // $pm.array.mainSlider.reset({idx: 2});
    
    pageFunction['page_1']();
  });
})();