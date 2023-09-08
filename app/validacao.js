
function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if(fimDeJogo(numero)){
    document.body.innerHTML = '<h1>Its Over!</h1>'
    reconhecimento.end()
} else if (numeroForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'; 
    return
} else if (numeroForMaiorOuMenor(numero)){
    elementoChute.innerHTML += `<div>Valor Inválido: o número precisa estar entre ${menorValor} & ${maiorValor}</div>`; 
    return
}

if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>Você acertou!</h1>
    <h3>O número secreto era ${numeroSecreto}</h3>
    
    <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`
}

if (numero > numeroSecreto){
    elementoChute.innerHTML += `<div>Quase lá, o número secreto é menor</div>`
}

if (numero < numeroSecreto){
    elementoChute.innerHTML += `<div>O número secreto é maior</div>`
}



}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

function fimDeJogo(numero){
    return numero == 'game over' || numero == 'final'
}
