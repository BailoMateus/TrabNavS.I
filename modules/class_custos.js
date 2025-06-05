document.addEventListener('DOMContentLoaded', function() {
  const dataInicioInput = document.getElementById('dataInicio');
  let despesaParcialRecuperada = null;

  try {
    const despesaParcialJSON = sessionStorage.getItem('despesaParcial');
    if (despesaParcialJSON) {
      despesaParcialRecuperada = JSON.parse(despesaParcialJSON);
      console.log('Despesa parcial recuperada em class_custos:', despesaParcialRecuperada);
      if (dataInicioInput && despesaParcialRecuperada && despesaParcialRecuperada.data) {
        dataInicioInput.value = despesaParcialRecuperada.data; // Preenche a data de início
      }
    } else {
      console.warn('Nenhuma despesa parcial encontrada no sessionStorage ao carregar class_custos.');
    }
  } catch (e) {
    console.error('Erro ao recuperar despesa parcial do sessionStorage em class_custos:', e);
  }


  const salvarButton = document.getElementById('salvarClassCustos');
  if (salvarButton) {
    salvarButton.addEventListener('click', function() {
      const formaPagamentoInput = document.getElementById('formaPagamento');
      const parceladaInput = document.getElementById('parcelada');
      const parcelasInput = document.getElementById('parcelas');
      // dataInicioInput já definido acima
      const dataFinalInput = document.getElementById('dataFinal');

      // Validação da existência dos elementos
      if (!formaPagamentoInput || !parceladaInput || !parcelasInput || !dataInicioInput || !dataFinalInput) {
          console.error('Um ou mais campos do formulário não foram encontrados em class_custos.html.');
          alert('Erro interno: campos do formulário não encontrados. Verifique o HTML.');
          return;
      }

      const formaPagamento = formaPagamentoInput.value;
      const parcelada = parceladaInput.checked;
      const parcelas = parcelasInput.value;
      const dataInicioValue = dataInicioInput.value;
      const dataFinalValue = dataFinalInput.value;

      console.log('Classificar Custos - Salvar Clicado:', { formaPagamento, parcelada, parcelas, dataInicioValue, dataFinalValue });

      if (formaPagamento && dataInicioValue) {
        let despesaCompleta = {};
        if (despesaParcialRecuperada) {
          despesaCompleta = { ...despesaParcialRecuperada };
        } else {
          // Se não houver despesa parcial, talvez seja necessário pegar nome, categoria, valor, data de algum outro lugar
          // ou impedir o salvamento. Por ora, continuará, mas pode faltar dados essenciais.
          console.warn('Continuando sem dados da "despesaParcial". A despesa pode ficar incompleta.');
        }

        // Adiciona/sobrescreve os campos da despesa parcial com os da classificação, se necessário
        // No nosso caso, despesaParcial já tem nome, categoria, valor, data.
        // A data da despesa é despesaCompleta.data
        // dataInicioValue aqui é mais para a recorrência ou data de pagamento.
        
        despesaCompleta.formaPagamento = formaPagamento;
        despesaCompleta.parcelada = parcelada;
        despesaCompleta.parcelas = parcelada ? parcelas : 'N/A';
        despesaCompleta.dataEfetivaPagamento = dataInicioValue; // Renomeando para clareza, se for diferente da data da despesa
        despesaCompleta.dataFinalRecorrencia = dataFinalValue || 'N/A';


        try {
          sessionStorage.setItem('ultimaDespesaAdicionada', JSON.stringify(despesaCompleta));
          console.log('Despesa completa salva no sessionStorage:', despesaCompleta);
          window.location.href='lista_despesas.html';
        } catch (e) {
          console.error('Erro ao salvar despesa completa no sessionStorage:', e);
          alert('Ocorreu um erro ao tentar salvar os dados finais. Verifique se o sessionStorage está habilitado e não está cheio.');
        }

      } else {
        alert('Por favor, preencha a Forma de Pagamento e a Data de Início/Pagamento.');
      }
    });
  } else {
    console.warn('Botão "salvarClassCustos" não encontrado na página class_custos.html.');
  }
});