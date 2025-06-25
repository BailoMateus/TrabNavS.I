console.log("Script carregado");

import { salvarEtapa1 } from './despesas.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-proximo");

  if (btn) {
    btn.addEventListener("click", () => {
      const nome = document.getElementById("nome").value;
      const categoria = document.getElementById("categoria").value;
      const valor = parseFloat(document.getElementById("valor").value);
      const data = document.getElementById("data").value;

      if (!nome || !categoria || !valor || !data) {
        alert("Preencha todos os campos.");
        return;
      }

      salvarEtapa1({ nome, categoria, valor, data });
      window.location.href = "class_custos.html";
    });
  }
});
