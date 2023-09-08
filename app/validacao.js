var mensagem = document.querySelector('#mensagem')

function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

if (numeroForInvalido(numero)){
    window.alert('Número Inválido');
    mensagem.innerHTML = "numero invalido"
}

if (numeroForMaiorOuMenor(numero)){
    window.alert(`O número precisa estar entre ${menorValor} e ${maiorValor}`)
    mensagem.innerHTML = "numero invalido"
}

}

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero < menorValor || numero > maiorValor;
}

