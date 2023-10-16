document.addEventListener('DOMContentLoaded', function() {
    var botonRevelar = document.getElementById('boton-revelar');
    var numeroACopiar = document.getElementById('copiar-cbu');

    botonRevelar.addEventListener('click', function() {
      numeroACopiar.style.display = 'block'; // Mostrar el campo de entrada de texto
      numeroACopiar.select(); // Seleccionar el contenido
      document.execCommand('copy'); // Copiar al portapapeles
      numeroACopiar.style.display = 'none'; // Ocultar nuevamente el campo de entrada de texto
      M.toast({ html: 'CBU copiado al portapapeles'});
    });
  });