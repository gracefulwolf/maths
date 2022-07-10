(function() {
  window.addEventListener('load', function() {

    function createElement(container, i, j) {
      var dot = document.createElement('div');

      dot.classList.add('js-dragObj');
      dot.classList.add('dragObj');
      dot.classList.add('horizon_' + (i+1));
      dot.classList.add('vertical_' + (j+1));
      dot.setAttribute('data-type', 'drag');
      dot.setAttribute('data-index', '1');

      container.appendChild(dot);

      return dot;
    }

    function createDot(container, dotLength) {
      for (var i = 0; i < dotLength[0]; i++) {
        for (var j = 0; j < dotLength[1]; j++) {
          createElement(container, i, j);
        }
      }
    }
    createDot($ts.getEl('.js-drawLine')[0], [17, 7]);
    // createDot($ts.getEl('.js-drawLine')[0], [17, 7]);
    var drawLines =  new DrawLine({
      container: $ts.getEl('.js-drawLine')[0],
      resetButton: document.querySelector('.js-resetButton'),
      answerButton: document.querySelector('.js-button'),
      answer:  [
        {start: {x: 192, y: 111}, end: {x: 244, y: 111}},
        {start: {x: 192, y: 111}, end: {x: 136, y: 165}},
        {start: {x: 136, y: 165}, end: {x: 136, y: 218}},
        {start: {x: 136, y: 218}, end: {x: 192, y: 272}},
        {start: {x: 192, y: 272}, end: {x: 244, y: 272}},
        {start: {x: 244, y: 111}, end: {x: 358, y: 165}},
        {start: {x: 358, y: 165}, end: {x: 248, y: 272}},

        {start: {x: 471, y: 165}, end: {x: 471, y: 218}},
        {start: {x: 471, y: 218}, end: {x: 580, y: 272}},
        {start: {x: 580, y: 272}, end: {x: 750, y: 272}},
        {start: {x: 750, y: 272}, end: {x: 864, y: 218}},
        {start: {x: 864, y: 218}, end: {x: 864, y: 165}},
        {start: {x: 864, y: 165}, end: {x: 750, y: 111}},
        {start: {x: 748, y: 111}, end: {x: 580, y: 111}},
        {start: {x: 580, y: 111}, end: {x: 471, y: 165}},
        
      ],
      lineWidth: 6,
     
    })

   
  });

})();