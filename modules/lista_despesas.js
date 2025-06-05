document.addEventListener('DOMContentLoaded', function() {
  const corpoTabela = document.getElementById('corpoTabelaDespesas');
  const despesaSalva = JSON.parse(sessionStorage.getItem('ultimaDespesaAdicionada'));

  // Mapeamento de categorias para ícones Font Awesome
  const iconesCategoria = {
    'Lazer': 'fas fa-film',
    'Estudos': 'fas fa-graduation-cap',
    'Alimentação': 'fas fa-utensils',
    'Moradia': 'fas fa-home',
    'Transporte': 'fas fa-car',
    'Viagens': 'fas fa-plane',
    'Saúde': 'fas fa-heartbeat',
    'Padrão': 'fas fa-dollar-sign' // Ícone padrão se a categoria não for mapeada
  };

  if (corpoTabela && despesaSalva) {
    const novaLinha = corpoTabela.insertRow(0); // Insere no início da tabela

    const celulaNome = novaLinha.insertCell();
    const iconeClasse = iconesCategoria[despesaSalva.categoria] || iconesCategoria['Padrão'];
    celulaNome.innerHTML = `<i class="${iconeClasse} icone-despesa"></i> ${despesaSalva.nome}`;

    const celulaData = novaLinha.insertCell();
    // Formatar data de yyyy-MM-DD para DD/MM/YYYY
    if (despesaSalva.data) {
      const partesData = despesaSalva.data.split('-');
      if (partesData.length === 3) {
        celulaData.textContent = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
      } else {
        celulaData.textContent = despesaSalva.data; // Mantém o original se não estiver no formato esperado
      }
    } else {
      celulaData.textContent = 'N/A';
    }


    const celulaCategoria = novaLinha.insertCell();
    celulaCategoria.textContent = despesaSalva.categoria;

    const celulaCusto = novaLinha.insertCell();
    celulaCusto.textContent = `R$ ${despesaSalva.valor}`;

    const celulaAcoes = novaLinha.insertCell();
    celulaAcoes.classList.add('acoes-cell');
    celulaAcoes.innerHTML = `
      <button class="btn-acao editar"><i class="fas fa-edit"></i></button>
      <button class="btn-acao deletar"><i class="fas fa-trash"></i></button>
    `;
    
    // Opcional: Limpar o item do sessionStorage para não adicionar de novo ao recarregar
    // sessionStorage.removeItem('ultimaDespesaAdicionada'); 
    // Por enquanto, vamos deixar comentado para ver o efeito a cada vez que a página é carregada após o fluxo.
  }

  // Adicionar listeners para botões de editar/deletar (funcionalidade futura)
  if (corpoTabela) {
    corpoTabela.addEventListener('click', function(event) {
      const target = event.target;
      if (target.closest('.editar')) {
        // Lógica para editar (ainda não implementada)
        alert('Função Editar ainda não implementada.');
      }
      if (target.closest('.deletar')) {
        // Lógica para deletar (ainda não implementada)
        // Exemplo: target.closest('tr').remove();
        alert('Função Deletar ainda não implementada. Para teste, esta linha NÃO será removida.');
      }
    });
  }
});