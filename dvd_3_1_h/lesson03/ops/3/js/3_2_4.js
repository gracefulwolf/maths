
(function() {
  window.addEventListener('load', function() {
    var dragLineAnswerButton = document.querySelector('.page3 .js-buttons');
    var dragContainer = document.querySelector('.page3');
    dragLineAnswerButton.addEventListener('click', function() {
      var inputQuiz = $pm.array.quiz.inPage.filter(function(quiz) {
        return quiz.container.classList.contains('page3_input');
      })[0];

      var isReset = this.className.indexOf('reset') === -1;

      if (isReset) {
        inputQuiz.reset();
        dragContainer.classList.remove('complete');
      }
      else {
        inputQuiz.showAnswer();
        dragContainer.classList.add('complete');
      }
    });
  });
})();