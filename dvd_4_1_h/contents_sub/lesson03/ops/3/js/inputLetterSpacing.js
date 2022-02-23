window.addEventListener('load', function() {
  var inputs = $ts.getEl('main input');
  inputs.forEach(function (input) {
    input.addEventListener('blur', letterSpacing);
    input.addEventListener('input', setMaxLength);
  })

  function setMaxLength(e) {
    if(e.target.hasAttribute('data-max')){
      e.target.setAttribute('maxlength', parseInt(e.target.getAttribute('data-max')));
    }else{
      e.target.setAttribute('maxlength', e.target.getAttribute('data-answer').length);
    }
  }
  function letterSpacing(e) {
    if(e.target.hasAttribute('data-no-letter')){

    }else{
      e.target.setAttribute('class','offBg textLength_' + e.target.value.length);
    }
  }

  var quizButtons = $ts.getEl('.quizButtons.answer');
  quizButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if(this.className.indexOf('reset') === -1){
        inputs.forEach(function (input) {
          input.disabled = false;
        })
      }else{
        inputs.forEach(function (input) {
          input.disabled = true;
        })
      }
    })
  })

  window.$callBack.sliderMove = function(SLIDER) {
    inputs.forEach(function (input) {
      input.disabled = false;
    })
  }
});