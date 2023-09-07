window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang= 'pt-br';
reconhecimento.start();

reconhecimento.addEventListener('result', onSpeak)

var caixa = document.querySelector('.box');

function onSpeak(e){
    window.alert(e.results[0][0].transcript)
}