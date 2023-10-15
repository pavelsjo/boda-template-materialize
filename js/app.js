// Función para calcular los días, horas, minutos y segundos restantes entre dos fechas
function calcularTiempoRestante(fechaObjetivo) {
  const fechaActual = new Date();
  const diferenciaTiempo = fechaObjetivo - fechaActual;

  const segundos = Math.floor((diferenciaTiempo / 1000) % 60);
  const minutos = Math.floor((diferenciaTiempo / 1000 / 60) % 60);
  const horas = Math.floor((diferenciaTiempo / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

// Función para mostrar el tiempo restante en los elementos HTML
function mostrarTiempoRestante() {
  const fechaObjetivo = new Date("2023-12-16T16:00:00"); // Fecha objetivo
  const tiempoRestante = calcularTiempoRestante(fechaObjetivo);

  document.getElementById("dias-restantes").textContent = tiempoRestante.dias;
  document.getElementById("horas-restantes").textContent = tiempoRestante.horas;
  document.getElementById("minutos-restantes").textContent = tiempoRestante.minutos;
  document.getElementById("segundos-restantes").textContent = tiempoRestante.segundos;
}

// Llama a la función para mostrar el tiempo restante al cargar la página
mostrarTiempoRestante();

// Actualiza el tiempo restante cada segundo
setInterval(mostrarTiempoRestante, 1000);
  
// Llama a la función para mostrar los días restantes al cargar la página
mostrarDiasRestantes();