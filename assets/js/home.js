const button_start = document.querySelector('.button_start');
const button_play_audio = document.querySelector('.button_play_audio');
const button_pause_audio = document.querySelector('.button_pause_audio');

const soundHome = ()=>{
    const audio = document.querySelector('audio');
    audio.play();
    audio.volume = 0.1;
}
soundHome();

const playAudio = ()=>{
    audio.play();
}
button_play_audio.addEventListener('click', playAudio);
const pauseAudio = ()=>{
    audio.pause();
}

button_pause_audio.addEventListener('click', pauseAudio);

function start(){
    location.href = './assets/pages/game.html';
}
button_start.addEventListener('click',start);
