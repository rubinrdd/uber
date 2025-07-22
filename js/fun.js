document.addEventListener('DOMContentLoaded', () => {
  const inputFecha = document.getElementById('Fecha');
  const spanFecha = document.getElementById('fecha-texto');

  const inputHora = document.getElementById('Hora');
  const spanHora = document.getElementById('hora-texto');

  inputFecha.addEventListener('change', () => {
    if (inputFecha.value) {
      const fecha = new Date(inputFecha.value);
      const opciones = { day: '2-digit', month: 'short', year: 'numeric' };
      spanFecha.textContent = fecha.toLocaleDateString('es-ES', opciones);
    } else {
      spanFecha.textContent = 'Hoy';
    }
  });

  inputHora.addEventListener('change', () => {
    if (inputHora.value) {
      spanHora.textContent = inputHora.value;
    } else {
      spanHora.textContent = 'Ahora';
    }
  });


  spanFecha.addEventListener('click', () => {
    inputFecha.showPicker?.() || inputFecha.click();
  });

  spanHora.addEventListener('click', () => {
    inputHora.showPicker?.() || inputHora.click();
  });


  const hoy = new Date().toISOString().split('T')[0];
  inputFecha.value = hoy;
  spanFecha.textContent = 'Hoy';

  const ahora = new Date().toTimeString().slice(0,5);
  inputHora.value = ahora;
  spanHora.textContent = 'Ahora';
});

