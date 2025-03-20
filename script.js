const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    alert('Login realizado com sucesso!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Email ou senha incorretos.');
  }
});