const form = document.getElementById('register-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const user = document.getElementById('user').value;
  const cedula = document.getElementById('cedula').value;
  const date = document.getElementById('nacimiento').value;

  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;

  const data = {
    nombre: nombre,
    user: user,
    cedula: cedula,
    nacimiento: date,
    email: email,
    contraseña: contraseña
  };
  console.log(data);
  location.href = "inicio.html";
});

