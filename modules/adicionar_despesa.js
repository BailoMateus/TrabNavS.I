document.addEventListener('DOMContentLoaded', function() {
  const proximoButton = document.getElementById('proximoAdicionarDespesa');

  if (proximoButton) {
    proximoButton.addEventListener('click', function() {
      const nomeInput = document.getElementById('nome');
      const categoriaInput = document.getElementById('categoria');
      const valorInput = document.getElementById('valor');
      const dataInput = document.getElementById('data');

      // Verifica se todos os elementos de input existem
      if (!nomeInput || !categoriaInput || !valorInput || !dataInput) {
        console.error('Um ou mais campos do formulário não foram encontrados no HTML.');
        alert('Erro interno: campos do formulário não encontrados. Verifique o HTML.');
        return;
      }

      const nome = nomeInput.value;
      const categoria = categoriaInput.value;
      const valor = valorInput.value;
      const data = dataInput.value;

      console.log('Adicionar Despesa - Próximo Clicado:', { nome, categoria, valor, data });

      if (nome && categoria && valor && data) {
        const despesaParcial = {
          nome: nome,
          categoria: categoria,
          valor: parseFloat(valor).toFixed(2),
          data: data // Formato YYYY-MM-DD
        };
        try {
          sessionStorage.setItem('despesaParcial', JSON.stringify(despesaParcial));
          console.log('Despesa parcial salva no sessionStorage:', despesaParcial);
          window.location.href='class_custos.html';
        } catch (e) {
          console.error('Erro ao salvar despesa parcial no sessionStorage:', e);
          alert('Ocorreu um erro ao tentar salvar os dados. Verifique se o sessionStorage está habilitado e não está cheio.');
        }
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  } else {
    console.warn('Botão "proximoAdicionarDespesa" não encontrado na página adicionar_despesa.html.');
  }
});