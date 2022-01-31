window.addEventListener('load', function () {
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
    console.log(isReset);
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
})
