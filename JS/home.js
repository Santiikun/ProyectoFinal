function cargarSilabo(materia) {
	// obtener el div que contiene el contenido de la página
	let contenido = document.getElementById('contenido');
	
	// cargar el silabo de la materia seleccionada
	if (materia === 'Aplicaciones Web I') {
		contenido.innerHTML = '<h1>Silabo de Aplicaciones Web I</h1><p>Aquí va el contenido del silabo de Aplicaciones Web I.</p>';
	} else if (materia === 'Gestión de Base de Datos') {
		contenido.innerHTML = '<h1>Silabo de Gestión de Base de Datos</h1><p>Aquí va el contenido del silabo de Gestión de Base de Datos.</p>';
	} else if (materia === 'Programación Orientada a Objetos') {
		contenido.innerHTML = '<h1>Silabo de Programación Orientada a Objetos</h1><p>Aquí va el contenido del silabo de Programación Orientada a Objetos.</p>';
	}

    const cerrarSesionBtn = document.querySelector("nav ul li:last-child a");
cerrarSesionBtn.addEventListener("click", () => {
  // Aquí iría el código para cerrar la sesión del usuario
  console.log("Sesión cerrada");
});

}


function logout(){
	location.href = "inicio.html";
}

window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.image');
    var currentIndex = 0;
    var duration = 2000; // Duración de cada imagen en milisegundos
  
    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
        setTimeout(showNextImage, duration);
    }

    images[currentIndex].style.opacity = 1; // Mostrar la primera imagen
    setTimeout(showNextImage, duration);
});



