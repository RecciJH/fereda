const elemento = document.querySelector('.elemento');

const opciones = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Define el porcentaje de visibilidad requerido para activar o desactivar la animación
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    } else {
      entry.target.classList.remove('aparecer');
      entry.target.classList.add('desaparecer');
    }
  });
}, opciones);

observer.observe(elemento);
