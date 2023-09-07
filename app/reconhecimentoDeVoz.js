window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang= 'pt-br';
reconhecimento.start();

reconhecimento.addEventListener('results', onSpeak)

var caixa = document.querySelector('.box');

function onSpeak(e){
    caixa.innerHTML = e.results[0][0].transcript
}