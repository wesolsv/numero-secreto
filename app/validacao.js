function verificaChute(chute){
    const numero =+ chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML+= '<div>Valor inválido</div>'
        return
    }
    if(numeroRange(numero)){
        elementoChute.innerHTML+=`<div>Número Inválido: Diga um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>  
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML+= `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroRange(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
