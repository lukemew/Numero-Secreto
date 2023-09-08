
function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if (numeroForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'; 
    return
}

if (numeroForMaiorOuMenor(numero)){
    elementoChute.innerHTML += `<div>Valor Inválido: o número precisa estar entre ${menorValor} & ${maiorValor}</div>`; 
    return
}

if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>Você acertou!</h1>
    <h3>O número secreto era ${numeroSecreto}</h3>`
}

if (numero > numeroSecreto){
    elementoChute.innerHTML += `Quase lá, o número secreto é menor`
}

if (numero < numeroSecreto){
    elementoChute.innerHTML += `O número secreto é maior`
}

}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

