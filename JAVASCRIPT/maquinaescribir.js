var palabras = ["Diferentes", "Innovadores", "Competitivos", "Inigualables"]; // Lista de palabras para mostrar
var elementos = document.getElementsByClassName("maquina-escribir");
var indice = 0; // Índice inicial

function cambiarTexto(event) {
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var palabra = palabras[indice]; // Obtener la palabra correspondiente al índice actual
    elemento.textContent = palabra; // Actualizar el texto del elemento con la palabra seleccionada
  }
  
  indice++; // Incrementar el índice
  
  if (indice >= palabras.length) {
    indice = 0; // Reiniciar el índice si se ha alcanzado el final de la lista de palabras
  }
}

// Agregar evento a la animación
document.addEventListener("animationiteration", cambiarTexto);
