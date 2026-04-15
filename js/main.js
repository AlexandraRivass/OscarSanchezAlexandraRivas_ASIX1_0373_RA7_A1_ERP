// Animación de entrada al hacer scroll
document.addEventListener('DOMContentLoaded', () => {

  // Observador para añadir clase 'visible' cuando un elemento entra en pantalla
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada, i) => {
      if (entrada.isIntersecting) {
        setTimeout(() => entrada.target.classList.add('visible'), i * 80);
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.aparece').forEach(el => observador.observe(el));

  // Marcar enlace activo en el nav según la página actual
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(enlace => {
    const href = enlace.getAttribute('href') || '';
    if (href === pagina || href.endsWith('/' + pagina) || href.endsWith(pagina)) {
      enlace.classList.add('activo');
    }
  });

});
