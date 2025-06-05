document.addEventListener('DOMContentLoaded', function() {
  // Preencher data de início com a data da despesa, se disponível
  const despesaParcialRecuperada = JSON.parse(sessionStorage.getItem('despesaParcial'));
  const dataInicioInput = document.getElementById('dataInicio');

  if (dataInicioInput && despesaParcialRecuperada && despesaParcialRecuperada.data) {
    dataInicioInput.value = despesaParcialRecuperada.data;
  }

  const salvarButton = document.getElementById('salvarClassCustos');
  if (salvarButton) {
    salvarButton.addEventListener('click', function() {
      const formaPagamento = document.getElementById('formaPagamento').value;
      const parcelada = document.getElementById('parcelada').checked;
      const parcelasInput = document.getElementById('parcelas');
      const parcelas = parcelasInput ? parcelasInput.value : 'N/A'; // Garante que parcelasInput exista
      const dataInicioValue = dataInicioInput ? dataInicioInput.value : null; // Garante que dataInicioInput exista
      const dataFinalInput = document.getElementById('dataFinal');
      const dataFinal = dataFinalInput ? dataFinalInput.value : null; // Garante que dataFinalInput exista


      if (formaPagamento && dataInicioValue) { // Campos mínimos obrigatórios
        let despesaCompleta = {};
        if (despesaParcialRecuperada) {
          despesaCompleta = { ...despesaParcialRecuperada }; // Pega os dados da página anterior
        }

        despesaCompleta.formaPagamento = formaPagamento;
        despesaCompleta.parcelada = parcelada;
        despesaCompleta.parcelas = parcelada ? parcelas : 'N/A';
        // A data da despesa principal já está em despesaCompleta.data (vindo da pag anterior)
        // dataInicio e dataFinal aqui podem ser para controle de recorrência/parcelamento
        despesaCompleta.dataRecorrenciaInicio = dataInicioValue;
        despesaCompleta.dataRecorrenciaFinal = dataFinal || 'N/A'; // Define 'N/A' se dataFinal não for preenchida

        // Salva a despesa completa para a página lista_despesas
        sessionStorage.setItem('ultimaDespesaAdicionada', JSON.stringify(despesaCompleta));
        window.location.href='lista_despesas.html';

      } else {
        alert('Por favor, preencha a Forma de Pagamento e a Data de Início.');
      }
    });
  }
});