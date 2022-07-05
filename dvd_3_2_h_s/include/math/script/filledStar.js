(function() {
  // page10(self)
  function setStars() {
    var ATTR_INDEX = 'index';
    var ATTR_LENGTH = 'data-length';
    var container = document.querySelector('.self');
    var starContainers = $ts.getEl('.js-starContainer', container);

    function setStar(container) {
      var length = container.getAttribute(ATTR_LENGTH);

      function clickedStar() {
        var index = this.getAttribute(ATTR_INDEX);

        if (this.classList.contains('fill')) {
          var isFirstStar = index == 0;
          var isLastFill = container.querySelectorAll('.fill').length === 1;
          if (isLastFill && isFirstStar) this.classList.remove('fill');
          for (var i = (index-0); i < length; i++) {
            var removeStar = container.querySelector('.star[index="'+(i+1)+'"]');
            removeStar && removeStar.classList.remove('fill');
          }
          
        } else {
          for (var i = 0; i <= index; i++) {
            container.querySelector('.star[index="'+i+'"]').classList.add('fill');
          }
        }
      }

      for (var i = 0; i < length; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.setAttribute(ATTR_INDEX, i);
        star.addEventListener('click', clickedStar);
        container.appendChild(star);
      }
    }

    function reset() {
      var filledStars = $ts.getEl('.fill', container);

      if (filledStars.length > 0) filledStars.forEach(function(star) {
        star.classList.remove('fill');
      })
    }
      
    starContainers.forEach(setStar);

    return {
      reset: reset
    }
  }

  window.addEventListener('load', function() {
    window.stars = setStars();
  });
})();