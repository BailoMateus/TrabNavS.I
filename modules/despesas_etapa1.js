import { salvarEtapa1 } from "./despesas";

document.addEventListener("DOMContentLoaded", () =>{
    const btn = document.getElementById("btn-proximo");

    if(btn){
        btn.addEventListener("click", () =>{
            const nome = document.getElementById("nome").value;
            const categoria = document.getElementById("categoria").value;
            const valor = parseFloat(document.getElementById("valor")).value;
            const data = document.getElementById("data").value;

        if (!nome || !categoria || !valor || !data){
            alert("Preencha todos os campos!!")
            return;
        }
        })
    }
})