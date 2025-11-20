// Para reloj y hora

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}

setInterval(updateClock, 1000);
updateClock();

function updateClock() {
  const now = new Date();

  // Día + fecha completa
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('es-ES', options);

  // Hora
  const time = now.toLocaleTimeString('es-ES');

  // Mostrar todo junto
  document.getElementById('clock').textContent = `${date} - ${time}`;
}

setInterval(updateClock, 1000);
updateClock();


    


