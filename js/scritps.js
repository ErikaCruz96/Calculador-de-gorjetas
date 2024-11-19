//Selecionar elementos

const valor = document.querySelector(".valor");
const qualidade = document.querySelector("#quald");
const calcBtn = document.querySelector(".calc-btn");
const gorjeta = document.querySelector(".result-valor");
const valorTotal = document.querySelector(".result-total");


//Eventos

calcBtn.addEventListener("click", calcularGorjeta)

//Funções


function calcularGorjeta(e){
    e.preventDefault();
    const valorValue = parseFloat(valor.value); 
    const qualidadeValue = qualidade.value;

    if(isNaN(valorValue) || valorValue <= 0){
        alert("Por favor preencha os dados!");
        return;
    }

    let resultTotal;
    switch(qualidadeValue){
        case "exe":
            resultTotal = (10 * valorValue)/100;
            break;
        case "otimo":
            resultTotal = (8 * valorValue)/100;
            break;
        case "bom":
            resultTotal = (5 * valorValue)/100;
            break;
        case "ruim":
            resultTotal = (2 * valorValue)/100;
            break;
    }

    gorjeta.value = resultTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    valorTotal.value = (resultTotal + valorValue).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


