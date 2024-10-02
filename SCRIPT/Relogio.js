const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  const dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  // Format hours, minutes, and seconds with leading zeros
  hr = hr.toString().padStart(2, '0');
  min = min.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');

  // Update the HTML elements with the formatted time
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
}, 1000); // Update every second
