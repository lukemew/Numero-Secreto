const maiorValor = 1000;
const menorValor = 0;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-numero');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-numero');
elementoMaiorValor.innerHTML = maiorValor

console.log(numeroSecreto)