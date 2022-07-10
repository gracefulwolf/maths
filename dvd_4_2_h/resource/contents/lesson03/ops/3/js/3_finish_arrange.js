       // 정리는꼼꼼 공통 요소
       var ATTR_INDEX = 'data-index';
       var pageLength = $ts.getEl('.basicSlider_slides > li').length;
       var nextButton = document.querySelector('.js-nextButton');
       var SETPAGE = {};
       var numCard = [];
       var myType;
       var questionBtns = $ts.getEl('.questionChoice');
       var dragLength = $ts.getEl('.page2 .dropBox').length;
       var correctButtons =  document.querySelectorAll('.js-chainButtons');
       var dragInputAnswer_1;
       var dragInputAnswer_2;
       var dragResetBtns = $ts.getEl('.dragReset');
       var answers = $ts.getEl('[data-answer]');
       var quizButtons = $ts.getEl('.page2 .quizButtons');
       
       
       
       // 공통 함수
       function setPage(index) {
        SETPAGE['page_'+ (index+1)]();
        setNextButton(index);
      }
      
      function setNextButton(index) {
        console.log(index)
        if (index === 2 || index === 4) nextButton.classList.add('home');
        else hideNextButton();
      }
      
      function goPage() {
        var index = nextButton.getAttribute(ATTR_INDEX)-0;
        console.log(index,pageLength,myType);
        if(index == 1 && myType == 3 ){
          index = 3;
        }else if(index == 2 && myType == 1){
          index = 0;
        }
        
        $pm.array.mainSlider.reset({idx: index});
        
        setPage(index);
        $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
        
        nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
      }
      
      
      function showNextButton() {
        nextButton.classList.remove('hide');
      }
      
      function hideNextButton() {
        if(document.querySelector('.select_on')) {
          document.querySelector('.select_on').classList.remove('select_on');
        }
        nextButton.classList.add('hide');
        nextButton.classList.remove('home');
      }
      
      function numOx(page){
        var tag = document.querySelectorAll(".page"+page+" .numBg");
        var ex = document.querySelectorAll(".page"+page+"  .js-pop div");
        var num = [];
        
        
        var i = 0;
        
        if(numCard.length === 8) {

        }
        while(i<tag.length){
          if(page == 3){
            num[i] = (i == 0?numCard[0]+"."+numCard[1]+numCard[2]:numCard[3]+"."+numCard[4]+numCard[5]);
          }else if(page == 5){
            num[i] = (i == 0?numCard[0]+"."+numCard[1]+numCard[2]+numCard[3]:numCard[4]+"."+numCard[5]+numCard[6]+numCard[7]);
          }
          
          tag[i].innerHTML = num[i];
          i++;
        }
        
        var i = 0;
        while(i<ex.length){
          ex[i].removeAttribute("data-answer");
          if((num[0]>num[1] && i == 0) || (num[0]==num[1] && i == 1) || (num[0]<num[1] && i == 2)){
            ex[i].setAttribute("data-answer","");
          }
          i++;
        }
      }

      // 개별 함수
      // 페이지가 줄어들거나 늘어나는 경우 함수 추가 혹은 삭제
      SETPAGE.page_1 = function() {
        numCard = [];
        answers.forEach(function (answer) {
          answer.setAttribute('data-answer', ' ');
        })
        $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
        // 1페이지 이동시 실행 동작
      }
      
      SETPAGE.page_2 = function() {
        btnToggle($ts.getEl('.page2 .input1 .quizButtons')[0], true);
        btnToggle($ts.getEl('.page2 .input2 .quizButtons')[0], true);
        var dropArea_1 = document.querySelectorAll('.dropWrap1 .dropArea');
        dropArea_1.forEach(function(area) {
          area.classList.remove('dropComplete_1');
          area.classList.remove('dropComplete_2');
        })

        // 2페이지 이동시 실행 동작
        numCard = [];

        if (document.querySelectorAll('.page2 .dropWrap1 .dropComplete').length > 0) {
          var dropArea_1 = document.querySelectorAll('.dropWrap1 .dropComplete');
          dropArea_1.forEach(function(area) {
            area.classList.remove('dropComplete_1');
            area.classList.remove('dropComplete_2');
          })
        }

        var numInput = $ts.getEl('.page2 .dragBox input');
        numInput.forEach(function(input) {
          input.addEventListener('keyup', onlyNumberInput);
          input.addEventListener('input',function(){
            var idx = parseInt(this.getAttribute('data-input-obj'));
            numCard[idx-1] = (this.value == "."?this.value:parseInt(this.value));

            console.log('numCard', numCard);

            this.classList.add('inputComplete');

            if (document.querySelectorAll('.page2 .dragBox input.inputComplete').length === 6) {
              document.querySelector('[data-quiz="dragDrop"]').classList.add('dragContainer');
              
              dragInputAnswer_1 = parseFloat(numCard[0]+'.'+numCard[1]+numCard[2]);
              dragInputAnswer_2 = parseFloat(numCard[3]+'.'+numCard[4]+numCard[5]);
              
              document.querySelector('.page2 .dragBox .js-dragObj.left').setAttribute('data-answer-value', dragInputAnswer_1);
              document.querySelector('.page2 .dragBox .js-dragObj.right').setAttribute('data-answer-value', dragInputAnswer_2);

              var plusAnswer = (dragInputAnswer_1 + dragInputAnswer_2).toFixed(2);
              var minusAnswer = (dragInputAnswer_1 > dragInputAnswer_2) ? ((dragInputAnswer_1 - dragInputAnswer_2).toFixed(2)) : ((dragInputAnswer_2 - dragInputAnswer_1).toFixed(2));
              
              document.querySelector('[data-input-obj="7"]').setAttribute("data-answer", plusAnswer);
              document.querySelector('[data-input-obj="8"]').setAttribute("data-answer", minusAnswer);

              showNextButton();
              nextButton.classList.add('home');
            }
          });
        });
        
        
        var dropArea = document.querySelectorAll('.page2 .dropArea');
        dropArea.forEach(function(drop) {
          drop.innerHTML = '';
        })
        document.querySelector('.page2 .dropArea').innerHTML = '';
        
        var dragReset =  document.querySelector('.page2 .reset');
        
        if(dragReset){
          dragReset.addEventListener('click',function(){
            dropArea.forEach(function(drop) {
              // console.log("리셋ㅅ");
              //drop.innerHTML = '';
            })
          
          });
        }


        dragResetBtns.forEach(function(btn) {
          btn.addEventListener('click',function(){
            var index = this.getAttribute("data-index");
            var inputs = document.querySelectorAll(".dragBox  .dragObj."+(index == 1?"left":"right")+ " input");
  
            inputs.forEach(function(input){
                input.value = "";
                input.classList.remove("answerMode");
            });
          });
        });
      }
      
      SETPAGE.page_3 = function() {
        numOx(3);
        
        setTimeout(function() { 
          nextButton.setAttribute(ATTR_INDEX,0);
          nextButton.classList.add('home'); 
        }, 100);
      }
      
      SETPAGE.page_4 = function() {
        
        numCard = [];
        var numInput = $ts.getEl('.page4 .selfInput');
        var numView = $ts.getEl('.page4 .viewInput');
        var page4Btn = $ts.getEl('.page4 .quizButtons.answer[data-quiz-chain]')[0];

        page4Btn.classList.add('off');
        numInput.forEach(function(input) {
          input.addEventListener('keyup', onlyNumberInput);
          input.addEventListener('input', function(){
            var idx = parseInt(this.getAttribute('data-input-obj'));

            numCard[idx-1] = parseInt(this.value);
            numView[idx-1].setAttribute('data-answer',numCard[idx-1]);

            if(numInput.every(inputValueCheck)) {
              clickBtnControl(page4Btn, true);
            }else{
              clickBtnControl(page4Btn, false);
            }
          });
        });

      }
      
      SETPAGE.page_5 = function() {
        numOx(5);
      }
      
      
      // mobile에서 선잇기/드래그 동작 후 사운드가 안나오는 현상이 있어서 임의로 실행시킴 //
      window.$efSound.muted(true);
      window.$efSound.incorrect(); // 오답 사운드s
      
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
      // 
      var plusArray = [];
      window.$callBack.dragCorrect = function(DRAG) {
        
        
        //var num = parseInt(DRAG.movingObj.element.value);
        var gr = parseInt(DRAG.droppedArea.element.getAttribute('data-gr'));
        var chk_box = document.querySelectorAll('.page2 [data-gr="'+gr+'"]');
        var movingObj = DRAG.movingObj.element;
        var dragValue = movingObj.getAttribute('drag-value');
        
        if (dragInputAnswer_1 >= dragInputAnswer_2) {
          document.querySelector('.dropWrap2 .drop1 .js-dropArea').setAttribute('data-answer-value', dragInputAnswer_1);
          document.querySelector('.dropWrap2 .drop2 .js-dropArea').setAttribute('data-answer-value', dragInputAnswer_2);
        } else {
          document.querySelector('.dropWrap2 .drop1 .js-dropArea').setAttribute('data-answer-value', dragInputAnswer_2);
          document.querySelector('.dropWrap2 .drop2 .js-dropArea').setAttribute('data-answer-value', dragInputAnswer_1);
        }
        // if (DRAG.droppedArea.element.children.length > 1) {
        //   console.log('DRAG.droppedArea.element.children.length', DRAG.droppedArea.element.children.length)
        //     DRAG.droppedArea.DISABLED = true;
        // }
        // if (DRAG.droppedArea.element.querySelectorAll('.js-dragObj').length > 2) {
        //   console.log(DRAG.droppedArea.element.querySelectorAll('.js-dragObj').length)
        //   DRAG.droppedArea.DISABLED = true
        // }
        
        if (gr == 1) {
          var notDragNum = (document.querySelector('.page2 .left.dragObjComplete')) ? 1:0;
          

          plusArray.push(movingObj);

          if (document.querySelector('.dropComplete_' + dragValue)) {
            DRAG.droppedArea.element.innerHTML = '';
            window.$efSound.incorrect();
            return;
          } else {
            DRAG.droppedArea.element.classList.add('dropComplete_' + dragValue);
          }

          if($ts.getEl('.dropWrap1 .dragObjComplete').length === 2) {
            btnToggle($ts.getEl('.page2 .input1 .quizButtons')[0], false);
          }
          return;
        } else if (gr == 2) {
          var dragValue = movingObj.getAttribute('data-answer-value');
          if (DRAG.droppedArea.element.getAttribute('data-answer-value') != dragValue) {
            DRAG.droppedArea.element.innerHTML = '';
            showAlert();
          } else {
            if($ts.getEl('.dropWrap2 .dragObjComplete').length === 2) {
              btnToggle($ts.getEl('.page2 .input2 .quizButtons')[0], false);
            }
          }

          return;
        } else {
          return;
        }
        console.log(plusArray)
      }
      
      window.$callBack.dragIncorrect = function(DRAG) {
        console.log('dragIncorrect:', DRAG);
        // window.$efSound.incorrect();
      }
      
      function showAlert(text) {
        function closeAlert() {
          alert.classList.remove('on');
        }
        var alert = document.querySelector('.js-alert');
        alert.classList.add('on');
        setTimeout(closeAlert, 1500);
      }

       function btnToggle(target, boolean) {
           if(boolean) target.classList.add('off');
           else target.classList.remove('off');
       }

       function inputValueCheck(inputs) {
         return inputs.value !== '';
       }
       function onlyNumberInput() {
         var regexp = /[^0-9]/gi;
         if(regexp.test(this.value)){
           this.value = this.value.replace(regexp, '');
         }
       }

       function clickBtnControl(btn, boolean) {
         var button = btn;
         if(boolean) {
           button.classList.remove('off');
         }else{
           button.classList.add('off');
         }
       }
      window.addEventListener('load', function() {
        // 다음 버튼 이벤트(공통)
        nextButton.addEventListener('click', goPage); 
       
        correctButtons.forEach(function(btn) {
          btn.addEventListener('click', function() {
            var index = nextButton.getAttribute(ATTR_INDEX)-0;
            if(index == 2){
               nextButton.classList.add("home");
           }
           showNextButton();
          });

        });
        
        
        questionBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            var index = this.getAttribute('data-value');
            
            questionBtns.forEach(function(select) {
              select.classList.remove('select_on');
            })
            this.classList.add('select_on');
            
            myType = parseInt(index);
            window.$efSound.click();
            showNextButton();
          });
        });

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


        var oxQuizBtn = $ts.getEl('.oxQuizBtn');

        oxQuizBtn.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var oxTargetsPage = this.getAttribute('data-quiz-chain') === 'toggle_1, ox_1' ? '.page3 ' : '.page5 ';
            var oxTargets = $ts.getEl(oxTargetsPage+'[data-ox-target]');
            var isReset = this.className.indexOf('reset') === -1;
            var oxObjs = $ts.getEl(oxTargetsPage+'[data-ox-obj]');

            if (isReset) {
              oxTargets.forEach(function (obj) {
                obj.classList.remove('on');
                obj.classList.remove('blue');
              })
            }else {
              closePop();

              oxTargets.forEach(function (obj) {
                obj.classList.remove('on');
              })
              oxObjs.forEach(function (obj) {
                if (obj.hasAttribute('data-answer')) {
                  var idx = obj.getAttribute('data-ox-obj');
                  $ts.getEl(oxTargetsPage+'[data-ox-target="' + idx + '"]')[0].classList.add('on');
                  $ts.getEl(oxTargetsPage+'[data-ox-target="' + idx + '"]')[0].classList.add('blue');

                }
              })
            }
          })
        })

        var answerButton = document.querySelectorAll('.js-buttons');
        answerButton.forEach(function (btn) {
          btn.addEventListener('click', closePop);
        })

        // var page2_answerButton = document.querySelectorAll('.page2 .js-buttons');
        // page2_answerButton.forEach(function (btn) {
        //   var input = document.querySelectorAll('.page2 input');
        //
        //   input.forEach(function(obj) {
        //     var answerText = obj.getAttribute('data-answer');
        //
        //     if (answerText) {
        //       obj.value = answerText;
        //       obj.classList.add('answerMode');
        //       obj.setAttribute('readonly', '');
        //     }
        //   })
        // })

      });


       // Array.every polyfill
       if (!Array.prototype.every) {
         Array.prototype.every = function (callbackfn, thisArg) {
           "use strict";
           var T, k;
           if (this == null) {
             throw new TypeError("this is null or not defined");
           }
           var O = Object(this);
           var len = O.length >>> 0;

           if (typeof callbackfn !== "function") {
             throw new TypeError();
           }
           if (arguments.length > 1) {
             T = thisArg;
           }
           k = 0;
           while (k < len) {
             var kValue;
             if (k in O) {
               kValue = O[k];
               var testResult = callbackfn.call(T, kValue, k, O);
               if (!testResult) {
                 return false;
               }
             }
             k++;
           }
           return true;
         };
       }