var mensagem = document.querySelector('#mensagem')

function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if (numeroForInvalido(numero)){
    
    mensagem.innerHTML = "numero invalido"
}

if (numeroForMaiorOuMenor(numero)){
    
    mensagem.innerHTML = "numero invalido"
}

}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

