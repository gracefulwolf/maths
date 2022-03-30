(function () {
  window.addEventListener("load", function () {
    var index = 1;
    function insertObjs(dropArea) {
      dropArea.innerHTML = '<div class="char"></div>';
      for (var i = 0; i < 5; i++) {
        dropArea.innerHTML += '<div class="card card_' + index + '"></div>';
        index++;
      }
    }
    function removeObjs(dropArea) {
      dropArea.innerHTML = '<div class="char"></div>';
    }
    function setCompleted(dragObj) {
      dragObj.classList.add("dragObjComplete");
    }
    function resetCompleted(dragObj) {
      dragObj.classList.remove("dragObjComplete");
    }

    function toggleDragAnswer() {
      var dragObjs = $ts.getEl(".page2 .js-dragObj");
      var dropAreas = $ts.getEl(".page2 .js-dropArea");

      function dragReset() {
        dropAreas.forEach(removeObjs);
        dragObjs.forEach(resetCompleted);
        index = 1;
      }
      function dragAnswer() {
        dropAreas.forEach(insertObjs);
        dragObjs.forEach(setCompleted);
      }

      var isReset = this.className.indexOf("reset") === -1;
      dragReset();
      // if (isReset) dragReset();
      //else dragAnswer();
    }

    window.dragDropCallbacks = {
      "drag-obj": function (DRAGDROP) {
        if (DRAGDROP.droppedArea) {
          window.$efSound.correct();

          if (DRAGDROP.droppedArea.element.children.length === 6) {
            DRAGDROP.droppedArea.DISABLED = true;
          }
        } else {
          window.$efSound.incorrect();        }

        if ($ts.getEl(".page2 .dragBox .dragObjComplete").length === 15) {
          dragAnswerButton.classList.add("reset");
        }
      },
    };

    var dragAnswerButton = document.querySelector(".page2 .js-buttons");
    dragAnswerButton.addEventListener("click", toggleDragAnswer);

    var toggleTargets = $ts.getEl(".page2 [data-toggle-target]");
    toggleTargets.forEach(function (target) {
      target.addEventListener("click", function () {
        var index = this.getAttribute("data-toggle-target");
        var currentToggleButton = document.querySelector(
          '.page2 [data-toggle-obj="' + index + '"'
        );

        $efSound.click();
        this.classList.remove("on");
        currentToggleButton.classList.remove("complete");
      });
    });

    // window.dragDropCallbacks = {
    //   dragLine: dragLineCallback,
    // };

    function dragLineCallback(dragdrop) {
      if (dragdrop.movingObj.DISABLED) window.$efSound.correct();
      else window.$efSound.incorrect();
    }

    var dragLineAnswerButton = document.querySelector(".page4 .js-buttons");
    var dragContainer = document.querySelector(".page4");
    dragLineAnswerButton.addEventListener("click", function () {
      var inputQuiz = $pm.array.quiz.inPage.filter(function (quiz) {
        return quiz.container.classList.contains("page4_input");
      })[0];

      var isReset = this.className.indexOf("reset") === -1;

      if (isReset) {
        inputQuiz.reset();
        dragContainer.classList.remove("complete");
      } else {
        inputQuiz.showAnswer();
        
        dragContainer.classList.add("complete");
      }
    });

    // $pm.array.mainSlider.reset({idx: 3});
  });
})();
