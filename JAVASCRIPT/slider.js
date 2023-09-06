$(document).ready(function(){
    $('#carouselExampleControls')({
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000, // tiempo en milisegundos entre cambios
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false
  });
  });

  var sliderInterval;

function startSlider() {
  sliderInterval = setInterval(function() {
    // Código para cambiar el slide automáticamente
  }, 5000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "visible") {
    startSlider();
  } else {
    stopSlider();
  }
});

// Iniciar el slider al cargar la página
startSlider();

