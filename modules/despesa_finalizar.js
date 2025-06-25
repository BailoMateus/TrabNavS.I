import {
  recuperarEtapa1,
  salvarDespesa,
  limparEtapa1
} from './despesas.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-salvar");

  if (btn) {
    btn.addEventListener("click", () => {
      const etapa1 = recuperarEtapa1();

      if (!etapa1) {
        alert("Erro: dados da etapa anterior não encontrados.");
        return;
      }

      const pagamento = document.getElementById("formaPagamento").value;
      const parcelas = document.getElementById("parcelas").value || "1x";
      const data_inicio = document.getElementById("dataInicio").value;
      const data_final = document.getElementById("dataFinal").value;

      if (!pagamento || !data_inicio || !data_final) {
        alert("Preencha todos os campos.");
        return;
      }

      const despesa = {
        ...etapa1,
        pagamento,
        parcelas,
        data_inicio,
        data_final
      };

      salvarDespesa(despesa);
      limparEtapa1();
      window.location.href = "lista_despesas.html";
    });
  }
});

console.log("Despesa salva:", despesa);