const fechaInicio = new Date('2023-02-20');
const fechaImagen1 = new Date('2022-05-15'); // Reemplaza con la fecha correspondiente para la imagen 1
const fechaImagen2 = new Date('2023-02-04'); // Reemplaza con la fecha correspondiente para la imagen 2
const fechaImagen3 = new Date('2023-02-17'); // Reemplaza con la fecha correspondiente para la imagen 3

function calcularTiempoTranscurrido(desdeFecha) {
  const ahora = new Date();
  const tiempoPasado = ahora - desdeFecha;
  const dias = Math.floor(tiempoPasado / (1000 * 60 * 60 * 24));
  return dias;
}

function mostrarTiempo() {
  const tiempoDesdeInicio = calcularTiempoTranscurrido(fechaInicio);
  const tiempoDesdeImagen1 = calcularTiempoTranscurrido(fechaImagen1);
  const tiempoDesdeImagen2 = calcularTiempoTranscurrido(fechaImagen2);
  const tiempoDesdeImagen3 = calcularTiempoTranscurrido(fechaImagen3);

  const contadorElement = document.getElementById('contador');
  contadorElement.innerHTML = `
    <p>Desde el 20 de febrero hasta el 20 de noviembre han pasado:</p>
    <p>${tiempoDesdeInicio} días</p>
  `;

  const contadorImagen1 = document.getElementById('contadorImagen1');
  contadorImagen1.innerHTML = `
    <p>Días que han pasado desde nuestro primer hola: ${tiempoDesdeImagen1}</p>
  `;

  const contadorImagen2 = document.getElementById('contadorImagen2');
  contadorImagen2.innerHTML = `
    <p>Dias que han pasado desde nuestra primera salida : ${tiempoDesdeImagen2}</p>
  `;

  const contadorImagen3 = document.getElementById('contadorImagen3');
  contadorImagen3.innerHTML = `
    <p>Dias que han pasado desde nuestro primer beso : ${tiempoDesdeImagen3}</p>
  `;
}

// Actualizar los contadores cada segundo
setInterval(mostrarTiempo, 1000);

// Mostrar tiempo al cargar la página
mostrarTiempo();