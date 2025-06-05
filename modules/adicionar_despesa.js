document.addEventListener('DOMContentLoaded', function() {
  const proximoButton = document.getElementById('proximoAdicionarDespesa');

  if (proximoButton) {
    proximoButton.addEventListener('click', function() {
      const nome = document.getElementById('nome').value;
      const categoria = document.getElementById('categoria').value;
      const valor = document.getElementById('valor').value;
      const data = document.getElementById('data').value;

      if (nome && categoria && valor && data) {
        const despesaParcial = {
          nome: nome,
          categoria: categoria,
          valor: parseFloat(valor).toFixed(2),
          data: data
        };
        // Salva os dados parciais no sessionStorage para serem usados na próxima página
        sessionStorage.setItem('despesaParcial', JSON.stringify(despesaParcial));
        window.location.href='class_custos.html';
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }
});