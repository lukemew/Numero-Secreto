window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang= 'pt-br';
reconhecimento.start();

reconhecimento.addEventListener('result', onSpeak)

function onSpeak(e){
    console.log(e)
}