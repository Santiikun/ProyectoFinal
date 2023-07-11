const form = document.querySelector('form');
const forgotPasswordBtn = document.querySelector('#forgot-password');
const registerBtn = document.querySelector('#register');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  // Aquí iría la lógica de verificación de usuario y contraseña

  if(username == "usuario" & password =="123") {
    location.href = "home.html";
  }else{
    alert("Los datos ingresados son incorrectos")
  }
});

forgotPasswordBtn.addEventListener('click', () => {
  // Aquí iría la lógica para recuperar contraseña
});

registerBtn.addEventListener('click', () => {
  // Aquí iría la lógica para registrar un nuevo usuario
});

