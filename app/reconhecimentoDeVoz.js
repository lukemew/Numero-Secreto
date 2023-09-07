const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang= 'pt-br';
reconhecimento.start();

reconhecimento.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = (e.results[0][0].transcript);
    exibeNumeroDoChute(chute);
}

function exibeNumeroDoChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class= 'box'>${chute}</span>`
}