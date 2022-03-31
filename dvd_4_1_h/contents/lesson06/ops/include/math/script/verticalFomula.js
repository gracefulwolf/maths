
(function() {
  window.addEventListener('load', function() {
    var fomula = document.querySelector('.js-formula');
    var lastFormula = document.querySelector('.js-lastFormula');
    var isRun = false;

    function showLastFomular() {
      setTimeout(function() {
        isRun && lastFormula.classList.add('active');
      }, 2000);
      setTimeout(function() {
        // isRun && lastFormula.classList.remove('active');
        isRun && lastFormula.classList.add('on');
      }, 6000);
    }

    function offGrayBoxAni(grayBox) {
      grayBox.classList.add('aniOff');
    }
    function onGrayBoxAni(grayBox) {
      grayBox.classList.remove('aniOff');
    }

    window.$callBack.toggleClick = function(TOGGLE) {
      var index = TOGGLE.curObj.getAttribute('data-toggle-obj');
      var preGrayBox = $ts.getEl('[data-toggle-target="'+(index-1)+'"] .grayBox');

      if (preGrayBox && preGrayBox.length > 0) preGrayBox.forEach(offGrayBoxAni);

      fomula.setAttribute('data-step', index);

      if (TOGGLE.quiz.completeCount === TOGGLE.quiz.totalCompleteCount) {
        isRun = true;
        showLastFomular();
      }
    }
    window.$callBack.toggleAnswer = function(TOGGLE) {
      isRun = true;
      showLastFomular();
      fomula.setAttribute('data-step', TOGGLE.obj.length);
    }
    window.$callBack.toggleReset = function(TOGGLE) {
      isRun = false;

      lastFormula.classList.remove('active');
      lastFormula.classList.remove('on');

      fomula.removeAttribute('data-step');

      $ts.getEl('.grayBox').forEach(onGrayBoxAni);
    }
  });
})();