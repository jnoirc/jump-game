const crash_img = document.querySelector('.crash_running');
const cacto = document.querySelector('.cacto');
const game_board = document.querySelector('.game_board');
const cloud = document.querySelectorAll('.cloud');
const audio = document.querySelectorAll('audio');
const button_home = document.querySelector('.button_home');
button_home.classList.add('button_home_none')
const button_reset = document.querySelector('.button_reset');
const button_jump = document.querySelector('.button_jump');
button_reset.classList.add('button_reset_none');
const crashJump = ()=>{
    crash_img.classList.add('crash_jump');
    audio[1].play();
    audio[1].volume = 0.05;
    setTimeout(()=>{
        crash_img.classList.remove('crash_jump');
    }, 500)
}
document.addEventListener('keydown', crashJump);
button_jump.addEventListener('click', crashJump);
const reset = ()=>{
    location.reload();
}
button_reset.addEventListener('click', reset);

const home = ()=>{
    location.href = '../../index.html';
}

button_home.addEventListener('click', home);
const gameOver = ()=>{
    const msg_game_over = document.querySelector('#game_over');
    const verification_game_over = setInterval(()=>{
    const cacto_position = cacto.offsetLeft;
    const crash_position = +window.getComputedStyle(crash_img).bottom.replace('px',''); 
    if(cacto_position <= 60 && cacto_position > 0 && crash_position <= 30){
        game_board.classList.add('game_over');
        game_board.classList.remove('game_board_level2');
        msg_game_over.innerText = 'Game Over!';
        button_home.classList.remove('button_home_none');
        button_reset.classList.remove('button_reset_none');
        crash_img.src = '../img/sad-cat.gif';
        crash_img.classList.add('crash_game_over');
        cacto.classList.add('cacto_none');
        cloud[0].classList.add('cloud_game_over');
        cloud[1].classList.add('cloud_game_over');
        cloud[2].classList.add('cloud_game_over');
        audio[0].pause();
        audio[2].play();
        audio[2].volume = 0.2;
        clearInterval(verification_game_over);
    }
},1)
}
gameOver();
const soundGame = ()=>{
    audio[0].play();
    audio[0].volume = 0.1;    
}
soundGame();

setTimeout(()=>{
    cacto.classList.add('cacto_level_hard');
    game_board.classList.add('game_board_level2');
},30000);

