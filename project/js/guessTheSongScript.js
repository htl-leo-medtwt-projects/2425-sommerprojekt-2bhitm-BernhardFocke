let coverBox = document.getElementById('coverBox');
let guessButtons = document.getElementsByClassName('guessButtons');
let musicDisk = document.querySelector('#disk');
let counter = 0;
let rndNum = 0;

let songArr = [
    ["../songs/Avicii - Levels.mp3"],
    ["../songs/Avicii - Waiting For Love.mp3"],
    ["../songs/Marshmello, venbee - No Mans Land.mp3"],
    ["../songs/Kygo - Stole The Show feat. Parson James.mp3"]
];

let nameArr = [
    ["Avicii - Levels"],
    ["Avicii - Waiting For Love"],
    ["Marshmello, venbee - No Mans Land"],
    ["Kygo - Stole The Show feat. Parson James"]
];



//Game
let userAnswer = "";
let winBoxNum;

function startGame() {

}

function getRndNum() {
    return Math.ceil(Math.random() * songArr.length - 1);
}

//gameLoop();

function gameLoop() {
    let rightSongNum = getRndNum();
    let rndNameNum = getRndNum();
    let currentSong = new Audio(songArr[rightSongNum]);

    while (rightSongNum == rndNameNum) {
        rndNameNum = getRndNum();
    }
    
    musicDisk.classList.remove('diskAnimation');
    musicDisk.offsetHeight;
    musicDisk.classList.add('diskAnimation');

    guessButtons[0].innerHTML = nameArr[rightSongNum];
    guessButtons[1].innerHTML = nameArr[rndNameNum];

    //currentSong.play();
}

function clickButton1() {
    userAnswer = guessButtons[0].innerHTML;
    winBoxNum = 0;
    guessButtons[1].style = "pointer-events: none;";
}

function clickButton2() {
    userAnswer = guessButtons[1].innerHTML;
    winBoxNum = 1;
    guessButtons[0].style = "pointer-events: none;";
}

function checkWin(rightAnswer) {
    if(userAnswer == rightAnswer) {
        guessButtons[winBoxNum].style = 'background-color: #5cb85c;';
    } else {
        guessButtons[winBoxNum].style = 'background-color: #FF2C2C;';
    }
}

function resetGame() {
    guessButtons[0].style = "pointer-events: all;";
    guessButtons[1].style = "pointer-events: all;";

    
}