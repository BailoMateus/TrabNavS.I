// Função para listar todas as despesas salvas
export function listarDespesas() {
  return JSON.parse(localStorage.getItem("despesas")) || [];
}

// Função para salvar uma despesa completa na lista
export function salvarDespesa(despesa) {
  const despesas = listarDespesas(); // Pega a lista existente
  despesas.push(despesa); // Adiciona a nova despesa
  // ABAIXO ESTAVA O ERRO CRÍTICO: salvando 'dados' em vez de 'despesas'
  localStorage.setItem("despesas", JSON.stringify(despesas)); // Salva a lista atualizada
}

// Salva os dados do primeiro formulário temporariamente
export function salvarEtapa1(dados) {
  sessionStorage.setItem("despesa_parcial", JSON.stringify(dados));
}

// Recupera os dados do primeiro formulário
export function recuperarEtapa1() {
  return JSON.parse(sessionStorage.getItem("despesa_parcial")) || null;
}

// Limpa os dados temporários após o uso
export function limparEtapa1() {
  sessionStorage.removeItem("despesa_parcial");
}

// Função que preenche a tabela na página lista_despesas.html
export function preencherTabela(tabelaId) {
  const despesas = listarDespesas();
  const tbody = document.getElementById(tabelaId);
  
  if (!tbody) {
    console.error(`Elemento com id '${tabelaId}' não encontrado.`);
    return;
  }
  
  tbody.innerHTML = ""; // Limpa a tabela antes de preencher

  // Mapeamento de categorias para ícones
  const icones = {
    moradia: "fa-home",
    alimentacao: "fa-utensils",
    lazer: "fa-film",
    estudos: "fa-graduation-cap",
    transporte: "fa-car",
    viagens: "fa-plane",
    saude: "fa-heartbeat",
    compras: "fa-shopping-cart"
  };

  despesas.forEach(d => {
    const row = document.createElement("tr");

    // Normaliza o nome da categoria para encontrar o ícone correto
    const categoriaKey = d.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const icone = icones[categoriaKey] || "fa-wallet"; // Ícone padrão

    row.innerHTML = `
      <td><i class="fas ${icone} icone-despesa"></i> ${d.nome}</td>
      <td>${d.categoria}</td>
      <td>R$ ${Number(d.valor).toFixed(2)}</td>
      <td>${formatarData(d.data)}</td>
      <td>${d.pagamento}</td>
      <td>${d.parcelas}</td>
      <td class="acoes-cell">
        <button class="btn-acao editar"><i class="fas fa-edit"></i></button>
        <button class="btn-acao deletar"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Função para formatar a data para o padrão brasileiro
function formatarData(dataISO) {
  // Adicionar 'T00:00:00' evita problemas de fuso horário que podem mudar o dia
  const data = new Date(dataISO + 'T00:00:00');
  return data.toLocaleDateString("pt-BR");
}