document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al formulario
  var formulario = document.getElementById("tuFormulario");

  // Agregar un evento de escucha para cuando se envíe el formulario
  formulario.addEventListener("submit", function(event) {
    // Mostrar la ventana emergente de éxito
    var exitoPopup = document.getElementById("exitoPopup");
    exitoPopup.style.display = "block";

    // Ocultar la ventana emergente después de 3 segundos
    setTimeout(function() {
      exitoPopup.style.display = "none";
    }, 3000);
  });
});
