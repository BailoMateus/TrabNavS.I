//funções globais testando uma parada aqui

export function salvarDespesa(despesa){
const despesas = JSON.parse(localStorage.getItem("despesas"))  || [];
despesas.push(despesa);
localStorage.setItem("despesas", JSON.stringify(dados));
}

export function salvarEtapa1(dados){
    localStorage.setItem("despesa_parcial", JSON.stringify(dados));
}

export function recuperarEtapa1(){
    return JSON.parse(localStorage.getItem("despesa_parcial")) || null;
}

export function LimparEtapa1(){
    localStorage.removeItem("despesa_parcial");
}

export function LimparDespesas(){
    return JSON.parse(localStorage.getItem("despesas")) || [];
}

export function preencherTabela(tabelaid){
    const despesas = listarDespesas();
    const tbody = document.getElementById(tabelaid);
    tbody = innerHTML = "";

    despesas.forEach(d =>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${d.nome}</td>
            <td>${d.categoria}</td>
            <td>R$ ${Number(d.valor).toFixed(2)}</td>
            <td>${d.data}</td>
            <td>${d.pagamento}</td>
            <td>${d.parcelas}</td>
  `;
  tbody.appendChild(row);
    });
}