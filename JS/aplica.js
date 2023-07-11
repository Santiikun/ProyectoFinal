// Obtener el elemento del enlace de descarga del sílabo
var downloadLink = document.querySelector('.download-syllabus a');

// Agregar un evento de clic al enlace de descarga
downloadLink.addEventListener('click', function(event) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();

  // Obtener el nombre del archivo de descarga
  var fileName = downloadLink.getAttribute('href');
  fileName = fileName.substring(fileName.lastIndexOf('/') + 1);

  // Simular una acción de descarga
  console.log('Descargando archivo: ' + fileName);
  // Aquí puedes agregar la lógica real de descarga, como usar una biblioteca o API para descargar el archivo.
});
