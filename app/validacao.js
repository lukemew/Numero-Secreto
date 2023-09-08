
function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if (numeroForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'; 
    
}

if (numeroForMaiorOuMenor(numero)){
    elementoChute.innerHTML += '<div>Valor Inválido</div>'; 

}

}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

