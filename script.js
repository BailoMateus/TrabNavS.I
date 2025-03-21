// Verifica se já existe uma lista de usuários no localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Função para salvar usuários no localStorage
function salvarUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Cadastro de usuário
if (document.getElementById('cadastroForm')) {
  document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    // Limpa mensagens de erro anteriores
    mensagemErro.textContent = '';

    // Validação de senha
    if (senha !== confirmarSenha) {
      mensagemErro.textContent = 'As senhas não coincidem.';
      return;
    }

    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
      mensagemErro.textContent = 'Email já cadastrado. Tente outro.';
      return;
    }

    // Adiciona o novo usuário
    usuarios.push({ email, senha });
    salvarUsuarios();
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
  });
}

// Login de usuário
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário existe e a senha está correta
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
      alert('Login realizado com sucesso!');
      window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    } else {
      alert('Email ou senha incorretos.');
    }
  });
}