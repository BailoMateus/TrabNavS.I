document.addEventListener('DOMContentLoaded', function() {
  const corpoTabela = document.getElementById('corpoTabelaDespesas');
  let despesaSalva = null;

  // Log para verificar se o elemento da tabela foi encontrado
  if (!corpoTabela) {
    console.error('Elemento "corpoTabelaDespesas" (tbody) não encontrado no HTML de lista_despesas.html.');
    return; // Interrompe a execução se a tabela não for encontrada
  }

  try {
    const despesaSalvaJSON = sessionStorage.getItem('ultimaDespesaAdicionada');
    console.log('Conteúdo bruto de "ultimaDespesaAdicionada" do sessionStorage:', despesaSalvaJSON);

    if (despesaSalvaJSON) {
      despesaSalva = JSON.parse(despesaSalvaJSON);
      console.log('Despesa recuperada e parseada em lista_despesas:', despesaSalva);
    } else {
      console.warn('Nenhuma "ultimaDespesaAdicionada" encontrada no sessionStorage ao carregar lista_despesas.');
    }
  } catch (e) {
    console.error('Erro ao recuperar ou parsear "ultimaDespesaAdicionada" do sessionStorage:', e);
  }


  const iconesCategoria = {
    'Lazer': 'fas fa-film',
    'Estudos': 'fas fa-graduation-cap',
    'Alimentação': 'fas fa-utensils',
    'Moradia': 'fas fa-home',
    'Transporte': 'fas fa-car',
    'Viagens': 'fas fa-plane',
    'Saúde': 'fas fa-heartbeat',
    'Padrão': 'fas fa-dollar-sign'
  };

  if (despesaSalva) { // Verifica se despesaSalva não é null e tem as propriedades esperadas
    if (typeof despesaSalva.nome === 'undefined' || typeof despesaSalva.data === 'undefined' || 
        typeof despesaSalva.categoria === 'undefined' || typeof despesaSalva.valor === 'undefined') {
        console.error('Objeto despesaSalva não contém todas as propriedades esperadas (nome, data, categoria, valor):', despesaSalva);
        // alert('Os dados da despesa estão incompletos ou corrompidos.'); // Opcional: alertar usuário
        return; // Não tenta adicionar a linha se os dados estiverem ruins
    }

    console.log('Adicionando nova linha à tabela com dados:', despesaSalva);
    const novaLinha = corpoTabela.insertRow(0); // Insere no início da tabela

    const celulaNome = novaLinha.insertCell();
    const iconeClasse = iconesCategoria[despesaSalva.categoria] || iconesCategoria['Padrão'];
    celulaNome.innerHTML = `<i class="${iconeClasse} icone-despesa"></i> ${despesaSalva.nome}`;

    const celulaData = novaLinha.insertCell();
    if (despesaSalva.data && typeof despesaSalva.data === 'string' && despesaSalva.data.includes('-')) {
      const partesData = despesaSalva.data.split('-'); // Espera YYYY-MM-DD
      if (partesData.length === 3) {
        celulaData.textContent = `${partesData[2]}/${partesData[1]}/${partesData[0]}`; // Formato DD/MM/YYYY
      } else {
        celulaData.textContent = despesaSalva.data; // Mantém original se não for YYYY-MM-DD
        console.warn('Formato de data inesperado, usando valor original:', despesaSalva.data);
      }
    } else {
      celulaData.textContent = despesaSalva.data || 'N/A'; // Se data não existir ou não for string
      console.warn('Campo data ausente ou em formato inválido:', despesaSalva.data);
    }

    const celulaCategoria = novaLinha.insertCell();
    celulaCategoria.textContent = despesaSalva.categoria;

    const celulaCusto = novaLinha.insertCell();
    celulaCusto.textContent = `R$ ${parseFloat(despesaSalva.valor).toFixed(2)}`;

    const celulaAcoes = novaLinha.insertCell();
    celulaAcoes.classList.add('acoes-cell');
    celulaAcoes.innerHTML = `
      <button class="btn-acao editar"><i class="fas fa-edit"></i></button>
      <button class="btn-acao deletar"><i class="fas fa-trash"></i></button>
    `;
    
  } else {
    console.log('Nenhuma despesa para adicionar à tabela desta vez (despesaSalva está vazia ou nula).');
  }

  // Adicionar listeners para botões de editar/deletar (funcionalidade futura)
  corpoTabela.addEventListener('click', function(event) {
    const target = event.target;
    if (target.closest('.editar')) {
      alert('Função Editar ainda não implementada.');
    }
    if (target.closest('.deletar')) {
      alert('Função Deletar ainda não implementada.');
      // Para remover a linha (exemplo de como seria):
      // if (confirm('Tem certeza que deseja deletar esta despesa?')) {
      //   target.closest('tr').remove();
      // }
    }
  });
});