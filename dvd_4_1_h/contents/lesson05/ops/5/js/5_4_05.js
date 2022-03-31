window.addEventListener('load', function() {
  var countObj = $ts.getEl('[data-count-obj]');
  var countTarget = $ts.getEl('[data-count-target');

  countObj.forEach(function (obj) {
    obj.addEventListener('input', updateValue);
  })

  function updateValue(e) {
    var index = e.target.getAttribute('data-count-obj'),
      target = $ts.getEl('[data-count-target="'+index+'"]'),
      value = parseInt(e.target.value);

    if(value > 10){
      showAlert();
      e.target.value = '';
    }else{
      for(var i = 0; i < target.length; i++){
        target[i].classList.remove('on');
      }
      for(var i = 1; i < value; i++){
        target[i].classList.add('on');
      }
    }
  }
  function showAlert() {
    function closeAlert() {
      alert.classList.remove('on');
    }
    var alert = document.querySelector('.js-alert');
    alert.classList.add('on');
    setTimeout(closeAlert, 1500);
  }

  var fillArray = [];
  $ts.getEl('.js-fillContainer').forEach(function(container) {
    fillArray.push(
      new FillTarget({
        container: container,
        answerButton: document.querySelector('.page2 .quizButtons')
      })
    );
  });
  window.$callBack.filledTarget = function (el) {
    var fillArray = el.container.querySelectorAll('.fill');
    fillArray.forEach(function (obj) {
      obj.classList.remove('last');
      if(!obj.nextElementSibling || !obj.nextElementSibling.classList.contains('fill')) { obj.classList.add('last'); }
    })
    // console.log(el.targets.querySelectorAll('.fill').lastChild)
  }
  window.$callBack.toggleTarget = function (el) {
    var fillArray = el.container.querySelectorAll('.fill');
    fillArray.forEach(function (obj) {
      obj.classList.remove('last');
      if(!obj.nextElementSibling || !obj.nextElementSibling.classList.contains('fill')) { obj.classList.add('last'); }
    })
  }

  var quizButtons = $ts.getEl('.quizButtons');
  quizButtons.forEach(function (btn) {

    btn.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1) resetAllCount();
      else { showAnswer(); }
    });
  })

  function showAnswer() {
    var target = $ts.getEl('[data-count-target="2"]');

    for(var i = 0; i < target.length; i++){
      target[i].classList.remove('on');
    }
    for(var i = 0; i < 3; i++){
      target[i].classList.add('on');
    }
    $ts.getEl('.page2 .resetButton')[0].classList.add('off');
    $ts.getEl('.page2 .resetButton')[0].classList.add('pointerOff');

  }

  function resetAllCount() {
    resetCount();
    // inputResize();
    var squareFill = $ts.getEl('.square .target');
    squareFill.forEach(function (obj) {
      obj.classList.remove('fill');
      obj.classList.remove('last');
    })

    $ts.getEl('.page2 .resetButton')[0].classList.remove('off');
    $ts.getEl('.page2 .resetButton')[0].classList.remove('pointerOff');
  }
  function resetCount() {
    countTarget.forEach(function (obj) {
      obj.classList.remove('on');
    })
  }


  var resetBtn = $ts.getEl('.page2 .resetButton')[0];
  resetBtn.addEventListener('click', resetFill);
  function resetFill(){
    fillArray.forEach(function (fill) {
      fill.fillReset();
    })
  }
  window.$callBack.sliderMove = function () {
    resetCount();
    // inputResize();

    fillArray.forEach(function (fill) {
      fill.fillReset();
    })
  }

});