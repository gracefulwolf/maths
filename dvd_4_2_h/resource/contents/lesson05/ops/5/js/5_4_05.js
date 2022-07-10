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

  var quizButtons = $ts.getEl('.quizButtons.reset');
  quizButtons.forEach(function (btn) {
    btn.addEventListener('click', resetAllCount);
  })

  function resetAllCount() {
    resetCount();
    if(this.classList.contains('js-allReset')){
      var squareFill = $ts.getEl('.square .target');
      squareFill.forEach(function (obj) {
        obj.classList.remove('fill');
        obj.classList.remove('last');

      })
    }
  }
  function resetCount() {
    countTarget.forEach(function (obj) {
      obj.classList.remove('on');
    })
  }

  $ts.getEl('.js-fillContainer').forEach(function(container) {
    new FillTarget({
      container: container,
      answerButton: document.querySelector('.page2 .js-chainButtons')
    });
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

  window.$callBack.sliderMove = function () {
    resetCount();
  }
});