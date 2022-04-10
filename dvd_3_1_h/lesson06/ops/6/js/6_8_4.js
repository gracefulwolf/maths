(function() {
  var drawLines = [];
        
  function lightOff(light) {
    light.classList.add('hide');
  }
  function lightOn(light) {
    light.classList.remove('hide');
  }

  function setDrawLine(container, index) {
    var answers = [
      [{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      }],
      [{
        start: {x: -10, y: -10},
        end: {x: -10, y: -10}
      }]
    ];

    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-buttons'),
      lineWidth: 12,
      answer: answers[index],
      callback: {
        start: function(DrawLine) {
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

  function setResetButtons(btn, index) {
    btn.addEventListener('click', function() {
      lightOn(document.querySelector('.induceLight.light_'+(index+1)));
    });
  }

  
  window.$callBack.sliderMove = function(SLIDER) {
    drawLines.forEach(function(drawLine) { drawLine.reset(); });
  }

  window.addEventListener('load', function() {
    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    $ts.getEl('.js-resetButton').forEach(setResetButtons);

    setTimeout(function() { drawLines.forEach(function(drawLine) { drawLine.reset(); }); }, 100);


    // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //
    window.$efSound.muted(true);
    window.$efSound.incorrect(); // 오답 사운드

    function setSound() {
      if (isMuted) {
        window.$efSound.muted(false);
        isMuted = false;
      }
    }
    var isMuted = true;
    document.body.addEventListener('mousedown', setSound);
    document.body.addEventListener('touchstart', setSound);
    // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //

    window.dragDropCallbacks = {
      "drag-obj": dragCallback,
    };

    function dragCallback(dragDrop) {
      var dropArea, dropAreaElement, children;
      dropArea = dragDrop.droppedArea;
      if (!dropArea) {
        window.$efSound.incorrect();
        return console.log('dropArea 없음.');
      }

      dropAreaElement = dragDrop.droppedArea.element;
      children = dropAreaElement.children;

      if (children.length > 1) {
        dropAreaElement.removeChild(children[0]);
      }
    }

    var isAnswered = false;
    window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
      var dropArea = document.querySelector('.js-dropArea');
      if(QUIZCHAIN.quizArray[0].container.classList.contains('page5')) {
        dropArea.innerHTML = '<div class="js-dragObj dragObj figure">추천 경로 ②</div>';
        dropArea.classList.add('blue');
      }
    }
    window.$callBack.quizChainReset = function(QUIZCHAIN) {
      var dropArea = document.querySelector('.js-dropArea');
      if(QUIZCHAIN.quizArray[0].container.classList.contains('page5')) {
        dropArea.innerHTML = '';
        dropArea.classList.remove('blue');
      }

    }

  });
})();