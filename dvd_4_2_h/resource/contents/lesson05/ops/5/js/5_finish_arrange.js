(function() {
  
  // 정리는꼼꼼 공통 요소
  var ATTR_INDEX = 'data-index';
  var pageLength = $ts.getEl('.basicSlider_slides > li').length;
  var nextButton = document.querySelector('.js-nextButton');
  var SETPAGE = {};
  var TITLE = document.querySelector('h1');
  
  var graphContainer = document.querySelector('.js-graph');
  var lineGraphContainer = document.querySelector('.js-lineGraph');
  var chainButton = $ts.getEl('.js-chainButtons');

  // window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
  //   showNextButton();
  // }

  chainButton.forEach(function(btn) {
    btn.addEventListener('click', showNextButton);
    btn.addEventListener('click', $efSound.click);
  });

  function createDot(container, dotLength) {
    function createElement(container, i, j) {
      var dot = document.createElement('div');
      var light = document.createElement('div');
      light.classList.add('induceLight');
      dot.appendChild(light);

      dot.classList.add('js-dot');
      dot.classList.add('graphDot');
      dot.classList.add('horizon_' + (i+1));
      dot.classList.add('vertical_' + (j+1));
      dot.setAttribute('data-type', i);
      dot.setAttribute('data-index', j);
      container.appendChild(dot);
  
      return dot;
    }

    for (var i = 0; i < dotLength[0]; i++) {
      for (var j = 0; j < dotLength[1]; j++) {
        createElement(container, i, j);
      }
    }
  }

  createDot(lineGraphContainer, [6, 23]);
  
  var lineGraph =  new $LineGraph({
    container: lineGraphContainer,
    resetButton: lineGraphContainer.querySelector('.js-quizButton'),
    length: 6,
    lineWidth: 6,
    callback: {
      click: function(GRAPH, clickedDot) {
        var sameDotArray = GRAPH.dots.filter(function(dot) {
          return dot.type[0] === clickedDot.type[0];
        });

        sameDotArray.forEach(function(dot) {
          dot.dom.classList.add('lightOff');
        })
      },
      reset: function(GRAPH) {
        GRAPH.dots.forEach(function(dot) {
          dot.dom.classList.remove('lightOff');
        })
      },
    }
  });
    
  window.$callBack.sliderMove = function(SLIDER) {
    hideTitle(SLIDER.idx);
  }

  window.$callBack.quizChainAnswer = function(QUIZCHAIN) {
    showNextButton();
  }

  SETPAGE.page_1 = function() {
    graphContainer.classList.remove('pointerOff');
    $pm.array.quiz.inPage.forEach(function(quiz) { quiz.reset(); });
    lineGraph.reset();
  }
  SETPAGE.page_2 = function() {
    graphContainer.classList.add('pointerOff');
    graphContainer.classList.add('p2');
  }
  SETPAGE.page_3 = function() {
    graphContainer.classList.add('pointerOff');
  }
  SETPAGE.page_4 = function() {
    graphContainer.classList.add('pointerOff');
  }


  window.addEventListener('load', function() {
    // 다음 버튼 이벤트(공통)
    nextButton.addEventListener('click', goPage);
    nextButton.addEventListener('click', $efSound.click);
  });

  // 공통 함수
  function setPage(index) {
    SETPAGE['page_'+ (index+1)]();
    setNextButton(index);

    // hideTitle(index === 0 ? false : true);
  }
  
  function setNextButton(index) {
    if (index === pageLength-1) nextButton.classList.add('home');
    else if (index === 0) hideNextButton();
    else nextButton.classList.remove('home');
  }

  function goPage() {
    var index = nextButton.getAttribute(ATTR_INDEX)-0;

    $pm.array.mainSlider.reset({idx: index});
    setPage(index);
    
    nextButton.setAttribute(ATTR_INDEX, (index+1) % pageLength);
  }

  function showNextButton() {
    nextButton.classList.remove('hide');
  }

  function hideNextButton() {
    nextButton.classList.add('hide');
    nextButton.classList.remove('home');
  }

  function hideTitle(boolean) {
    if (boolean) TITLE.style.display = 'none';
    else TITLE.style.display = '';
  }
})();