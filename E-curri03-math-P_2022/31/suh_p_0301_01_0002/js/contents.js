var CONTENTS = CONTENTS || {};
CONTENTS = (function () {
  var contents = {
    start: function () {
      setTimeout(function(){
        if($ts.getEl('[data-open-gate]')) {
          $ts.loadScriptFile('../common/contents/js/cmn_openGate.js', function(){
            openGateInit();
          });
        }
        if($ts.getEl('[data-addLine-container]')) {
          $ts.loadScriptFile('../common/contents/js/quiz/quiz_addLine.js', function(){
            addLineInit();
          });
        }
        if($ts.getEl('[data-puzzle-container]')) {
          $ts.loadScriptFile('../common/contents/js/quiz/quiz_math_word.js', function(){
            puzzleQuizInit();
          });
        }
        if($ts.getEl('[data-calc-container]')) {
          $ts.loadScriptFile('../common/contents/js/quiz/quiz_math_calc.js', function(){
            mathCalculationInit();
          });
        }
        if($ts.getEl('[data-video-link]')) {
          $ts.loadScriptFile('http://e.tsherpa.co.kr/include/js/tsherpa.js', function(){
            tSherpaVideoInit();
          });
        }if($ts.getEl('[data-video-link2]')) {
            tSherpaVideoInit2();
        }
        if($ts.getEl('.wordQuizContent').length) {
          $ts.loadScriptFile('../common/contents/js/quiz/quiz_life_wordQuiz.js', function(){
            wordQuizHint();
          });
        }
        if($ts.getEl('.fishing').length) {
          $ts.loadScriptFile('../common/contents/js/quiz/quiz_life_fishingGame.js', function(){
            fishingGame();
          });
        }
      }, 50);

    },
    reset: function () {
      if($ts.getEl('[data-addLine-container]')) {
        $ts.loadScriptFile('../common/contents/js/quiz/quiz_addLine.js', function(){
          resetAddLine();
        });
      }
      if($ts.getEl('.charSpriteAni').length > 0) $prite.allresetSprite();
    }
  };
  return contents;
})();

// 티셀파 비디오 링크\
function tSherpaVideoInit() {
  var tVideo = $ts.getEl('[data-video-link]');
  tVideo.forEach(function (video) {
    video.addEventListener('click', tSherpaGoLink);
    video.addEventListener('click', $efSound.click);
  });
  function tSherpaGoLink() {
    viewChunjaeMedia(this.getAttribute('data-video-link'));
  }
}

function tSherpaVideoInit2() {
  var tVideo = $ts.getEl('[data-video-link2]');
  tVideo.forEach(function (video) {
    video.addEventListener('click', tSherpaGoLink_n);
    video.addEventListener('click', $efSound.click);
  });
  function tSherpaGoLink_n() {
    viewChunjaeMedia_n(this.getAttribute('data-video-link2'));
  }
}

function viewChunjaeMedia_n(mID) {
  var strURL, strFeature;
  var width, height;
  var x, y;

  width = 855;
  height = 560;
  x = (screen.width - width) / 2;
  y = (screen.height - height) / 2;

  if (mID.toLowerCase().indexOf("_800k.mp4") > -1 || mID.toLowerCase().indexOf("_300k.mp4") > -1) {
      strURL = "http://e.tsherpa.co.kr/media/mediaframe3.aspx?mid=" + mID;
  }
  else {
      strURL = "http://e.tsherpa.co.kr/media/mediaframe1.aspx?fname=" + (mID.toLowerCase().indexOf("http://chunjae.gscdn.com") > -1 ? mID.replace("http://", "") : mID);
  }
  strFeature = "left=" + x + ", top=" + y + ", width=" + width + ", height=" + height + ", menubar=no, status=no, location=no, toolbar=no, resizable=no, scrollbars=no";
  var win = window.open(strURL, "win_ChunjaeMedia", strFeature);

  win.focus();
  return;
}




// 자음모음 퀴즈_힌트 보기
function wordQuizHint() {
  var hintBtn =document.querySelector('.wordQuizContent [data-hint]');

  window.$callBack.viewAnswer = function(obj) {
    hintBtn.classList.add('off');
  }
  window.$callBack.hideAnswer = function(obj) {
    hintBtn.classList.remove('off');
  }
  hintBtn.addEventListener('click', function() {
    var hintDrag = document.querySelectorAll('[data-hint-obj]');
    var hintDrop = document.querySelectorAll('[data-hint-area]');

    hintDrag.forEach(function(dragObj) {
      hintDrop.forEach(function(dropArea) {
        var dragIdx = dragObj.getAttribute('data-hint-obj');
        var dropIdx = dropArea.getAttribute('data-hint-area');

        var copiedElement = dragObj.cloneNode(true);
        copiedElement.classList.add('dragObjComplete');
        dropArea.appendChild(copiedElement);
      });
      dragObj.classList.add('dragObjComplete')
    });
    hintBtn.classList.add('off')
  });
  
}