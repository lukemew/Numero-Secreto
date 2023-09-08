function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if (numeroForInvalido(numero)){
    window.alert('Número Inválido');
}
}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

if (numeroForMaiorOuMenor(numero)){
    window.alert(`O número precisa estar entre ${menorValor} e ${maiorValor}`)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

