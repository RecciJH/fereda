$(document).ready(function() {
  var carousel = document.querySelector('.carousel-inner');
  var carouselWidth = carousel.scrollWidth;
  var cardWidth = $('.carousel-item').width();
  var scrollPosition = 0;
  var isDragging = false;
  var startX;
  var scrollLeft;
  
  carousel.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  
  carousel.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    var x = e.pageX - carousel.offsetLeft;
    var walk = (x - startX) * 1.5; // Ajusta la velocidad de desplazamiento

    carousel.scrollLeft = scrollLeft - walk;
  });
  
  carousel.addEventListener('mouseup', function() {
    isDragging = false;
  });
  
  carousel.addEventListener('mouseleave', function() {
    isDragging = false;
  });

  $('.carousel-control-next').on('click', function() {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
      console.log('next');
      scrollPosition = scrollPosition + cardWidth;
      $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
      setTimeout(function() {
        isDragging = false;
      }, 100); // Desactivar el desplazamiento arrastrando después de un breve retraso
    }
  });

  $('.carousel-control-prev').on('click', function() {
    if (scrollPosition > 0) {
      console.log('prev');
      scrollPosition = scrollPosition - cardWidth;
      $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
      setTimeout(function() {
        isDragging = false;
      }, 100); // Desactivar el desplazamiento arrastrando después de un breve retraso
    }
  });
});
