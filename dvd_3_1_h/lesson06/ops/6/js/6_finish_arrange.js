(function () {
  
  var myType;
  var nowStep = 0;
  var drawLines = [];
  var answerLine = 0;
  
  var questionBtns = $ts.getEl('.questionChoice');
  var nextButton = document.querySelector('.nextButton');
  var prevButton = document.querySelector('.prevButton');
  var page2Btn = $ts.getEl('.page2 .quizButtons')[0];
  var viewButtons = $ts.getEl('.page4 [data-answer-btn="answer"]')[0];
  
  questionBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var index = this.getAttribute('data-value');
      
      questionBtns.forEach(function(select) {
        select.classList.remove('select_on');
      })
      this.classList.add('select_on');
      
      myType = parseInt(index);
      
      nextButton.classList.remove('hide');
      
      $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    });
  });

  var inputs = $ts.getEl('input');


  inputs.forEach(function (input) {
    input.addEventListener('input', onlyNumberInput);
    input.addEventListener('focusout', onlyNumberInput);
    input.addEventListener('keyup', onlyNumberInput);
  })
  function onlyNumberInput() {
    var regexp = /[^0-9]/gi;
    if (regexp.test(this.value)) {
      this.value = this.value.replace(regexp, '');
    }

   if(this.getAttribute('data-input-obj') === "3") {
      if(this.value !== ''){
        if(parseInt(this.value) === 0) this.value = '';
      }
    }
  }

  var page2Input = $ts.getEl(".page2 .inputQuizContainer [data-txt]");
  page2Btn.addEventListener('click', function () {
    var page2viewText = $ts.getEl('.page2 .viewTxt');
    if(isNaN(parseInt(page2Input[0].value)+parseInt(page2Input[1].value))) {return false;}
    else{
      if(parseInt(page2Input[1].value) === 0 || parseInt(page2Input[0].value) < parseInt(page2Input[1].value) || parseInt(page2Input[0].value) === parseInt(page2Input[1].value)) {
        window.$efSound.incorrect();
        for(var i = 0; i < page2Input.length; i++){
          page2Input[i].value = '';
          page2Input[i].classList.remove('offBg');
        }
      }else{
        if(this.classList.contains('reset')) {
          this.classList.remove('reset');
          for(var i = 0; i < page2Input.length; i++){
            page2Input[i].value = '';
            page2Input[i].setAttribute("data-answer", "");
            page2Input[i].classList.remove('answerMode');
            page2Input[i].classList.remove('offBg');
          }
          for(var i = 0; i < page2viewText.length; i++){
            page2viewText[i].value = '';
          }
        }else{
          this.classList.add('reset');
          for(var i = 0; i < page2Input.length; i++){
            page2Input[i].setAttribute("data-answer",page2Input[i].value);
            page2Input[i].classList.add('answerMode');
            document.querySelector('[data-input-obj="'+(i==0?2:1)+'_1"]').value= page2Input[i].value;
          }
        }
        window.$efSound.click();
      }
    }
  })
  $ts.getEl('.page3 .quizButtons')[0].addEventListener('click', function () {
    if (drawClear) drawClear(0);
  })
  viewButtons.addEventListener('click', function() {
    var input = document.querySelectorAll(".page4 input");
    for(var i = 0; i < input.length; i++){
      if(input[0].value === ''){
        return false;
      }else{
        input[1].setAttribute("data-answer", input[0].value);
        input[2].setAttribute("data-answer", '10');

        answerLine = parseInt(input[1].getAttribute('data-answer'));
      }


    }
  });

  nextButton.addEventListener('click', function() {
    console.log('nowStep', nowStep);
    if(nowStep == 0){
      $pm.array.mainSlider.reset({idx:myType});
      var input_left = document.querySelector('[data-input-obj="3"]');
      var buttons = document.querySelector('.page4 .js-buttons');
      var reset = document.querySelector('.page4 .js-buttons.reset');
      input_left.classList.remove('offBg');
      input_left.addEventListener('blur', function() {
        if (this.value !== '') buttons.classList.add('view');
        else buttons.classList.remove('view');
      });
      window.$callBack.inputReset = function(QUIZCHAIN) {
        buttons.classList.remove('view');
      }
      page2Btn.classList.remove('reset');
      nowStep = 1;
    }else if(nowStep == 1){
      $pm.array.mainSlider.reset({idx:myType+nowStep});
      nextButton.classList.remove('hide');
      nextButton.classList.add('home');
      prevButton.classList.remove('hide');
      nowStep = 2;
      drawLines.forEach(function(drawLine) { drawLine.reset(); });
    }else if(nowStep == 2){
      
      var txt = $ts.getEl('.inputQuizContainer input');
      var view = $ts.getEl('.viewTxt');
      
      txt.forEach(function(input, index) {
        input.value = "";
      });
      
      view.forEach(function(input, index) {
        input.innerHTML = "";
      });
      
      $pm.array.mainSlider.reset({idx:0});
      nextButton.classList.remove('home');
      nextButton.classList.add('hide');
      nowStep = 0;
      console.log(document.querySelector('.select_on'))
      document.querySelector('.select_on').classList.remove('select_on');
      
      if (drawClear) drawClear(0);
      document.querySelector('.page3 .canvas_1').classList.remove('pointerOff');
      prevButton.classList.add('hide');
    }
  });

  prevButton.addEventListener('click', function() {
    // console.log('nowStep', nowStep);
    if(nowStep == 0){
    }else if(nowStep == 1){
      console.log(myType, nowStep)
    }else if(nowStep == 2){
      $pm.array.quiz.inPage[1].reset();
      $pm.array.mainSlider.reset({idx:myType+nowStep-2});
      nowStep = 1;
      prevButton.classList.add('hide');

      // $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });

      if (drawClear) drawClear(0);
      document.querySelector('.page3 .canvas_1').classList.remove('pointerOff');

      nextButton.classList.remove('home');
    }
  });
  
  function lightOff(light) {
    light.classList.add('hide');
  }
  
  function lightOn(light) {
    light.classList.remove('hide');
  }
  
  function setDrawLine(container, index) {
    
    var answers = [
      [ {start: {x: -6, y: 0}, end: {x: -6, y: 0}}],
    ];
    
    drawLines.push(new DrawLine({
      container: container,
      resetButton: container.querySelector('.page5 .js-resetButton'),
      answerButton: document.querySelector('.page5 .js-buttons'),
      answer: answers[index],
      lineCap: 'butt',
      callback: {
        start: function (DrawLine) {
          lightOff(document.querySelector('.induceLight.light_' + (index + 1)));
        },
        correct: function (DrawLine) {
          console.log('correct', container);
          container.classList.add('pointOff');
          
        },
        showAnswer: function (DrawLine) {
          var canvas = $ts.getEl('.page5 canvas')[0];
          var canvasContext = canvas.getContext('2d');
          canvasContext.strokeStyle = '#0060E3';
          canvasContext.lineWidth = 12;
          canvasContext.lineCap = 'square';
          canvasContext.lineJoin = 'butt';
          canvasContext.save();
          canvasContext.beginPath();
          
          canvasContext.moveTo(0, 75);
          // canvasContext.lineTo(((943 / 10) * answerLine)-3, 75);
          switch(answerLine) {
            case 1:  // if (x === 'value1')
              canvasContext.lineTo(((943 / 10) * 1)-3, 75);
            break
            
            case 2:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 2)-3, 75);
            break
            
            case 3:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 3)-2, 75);
            break
            
            case 4:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 4)-2, 75);
            break
            
            case 5:  // if (x === 'value2')
              canvasContext.lineTo((943 / 10) * 5, 75);
            break
            
            case 6:  // if (x === 'value2')
              canvasContext.lineTo((943 / 10) * 6, 75);
            break
            
            case 7:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 7)+1, 75);
            break
            
            case 8:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 8)+2, 75);
            break
            
            case 9:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 9)+3, 75);
            break
            
            case 10:  // if (x === 'value2')
              canvasContext.lineTo(((943 / 10) * 10)+3, 75);
            break
            
            default:
            // ...
            // [break]
          }
          
          canvasContext.closePath();
          canvasContext.stroke();
          canvasContext.save();
          
          $ts.getEl('.induceLight').forEach(lightOff);
          
          console.log((954 / 10) * answerLine)
        },
        reset: function (DrawLine) {
          var canvas = $ts.getEl('.page5 canvas')[0];
          var canvasContext = canvas.getContext('2d');
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
          
          $ts.getEl('.induceLight').forEach(lightOn);
          container.classList.remove('pointOff');
        }
      },
      
    }));
  }


  function showAlert() {
    function closeAlert() {
      alert.classList.remove('on');
    }
    var alert = document.querySelector('.js-alert');
    alert.classList.add('on');
    setTimeout(closeAlert, 1500);
  }
  
  
  window.addEventListener('load', function () {

    $ts.getEl('.js-drawLine').forEach(setDrawLine);
    
    setTimeout(function () {
      drawLines.forEach(function (drawLine) {
        drawLine.reset();
      });
    }, 100);


    window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
      if (drawClear) drawClear(0);
      document.querySelector('.page3 .canvas_1').classList.add('pointerOff');
    }
    window.$callBack.quizChainReset = function(QUIZCHAIN) {
      document.querySelector('.page3 .canvas_1').classList.remove('pointerOff');
    }
  });

})();