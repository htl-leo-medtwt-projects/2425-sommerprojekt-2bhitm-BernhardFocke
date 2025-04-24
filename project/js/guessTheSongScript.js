let coverBox = document.getElementById('coverBox');
let guessButtons = document.getElementsByClassName('guessButtons');
let gameBox = document.getElementById('game');
let musicDisk = document.querySelector('#disk');
let ruleBox = document.getElementById('rules');
let countBox = document.getElementById('countBox')
let counter = 0;
let rndNum = 0;

let songArr = [
    "../songs/Avicii - Levels.mp3",
    "../songs/Avicii - Waiting For Love.mp3",
    "../songs/Marshmello, venbee - No Mans Land.mp3",
    "../songs/Kygo - Stole The Show feat. Parson James.mp3",
    "../songs/Owl City - Verge ft. Aloe Blacc.mp3"
];

let nameArr = [
    "Avicii - Levels",
    "Avicii - Waiting For Love",
    "Marshmello, venbee - No Mans Land",
    "Kygo - Stole The Show feat. Parson James",
    "Owl City - Verge ft. Aloe Blacc"
];

//Game
let userAnswer = "";
let boxNum;
let rightAnswer = "";
let currentSong;

function startNameGame() {
    switchToGame();
    gameLoop();
}

function switchToGame() {
    ruleBox.classList.remove('switch');
    ruleBox.offsetHeight;
    ruleBox.classList.add('switch');

    setTimeout(removeRules, 2000);
}

function removeRules() {
    ruleBox.style = 'display: none';
    gameBox.style = 'display: block';
}

function getRndNum() {
    return Math.ceil(Math.random() * songArr.length - 1);
}

function getRndPlace() {
    return Math.ceil((Math.random() * 2) - 1);
}

function gameLoop() {
    let rightSongNum = getRndNum();
    let rndNameNum = getRndNum();
    currentSong = new Audio(songArr[rightSongNum]);

    while (rightSongNum == rndNameNum) {
        rndNameNum = getRndNum();
    }
    
    musicDisk.classList.remove('diskAnimation');
    musicDisk.offsetHeight;
    musicDisk.classList.add('diskAnimation');

    let rndPlace = getRndPlace();
    let secondRndPlace = getRndPlace();

    while (rndPlace == secondRndPlace) {
        secondRndPlace = getRndPlace();
    }

    guessButtons[rndPlace].innerHTML = nameArr[rightSongNum];
    guessButtons[secondRndPlace].innerHTML = nameArr[rndNameNum];

    rightAnswer = nameArr[rightSongNum];

    currentSong.play();
    currentSong.volume = 0.10;
}

function clickButton0() {
    userAnswer = guessButtons[0].innerHTML;
    boxNum = 0;
    guessButtons[1].style = "pointer-events: none;";
    checkWin();
}

function clickButton1() {
    userAnswer = guessButtons[1].innerHTML;
    boxNum = 1;
    guessButtons[0].style = "pointer-events: none;";
    checkWin();
}

function checkWin() {
    if(userAnswer == rightAnswer) {
        guessButtons[boxNum].style = 'background-color: #5cb85c;';

        if (boxNum == 1) {
            guessButtons[--boxNum].style = 'background-color: #FF2C2C;';
        } else {
            guessButtons[++boxNum].style = 'background-color: #FF2C2C;';
        }

        counter++;
    } else {
        guessButtons[boxNum].style = 'background-color: #FF2C2C;';

        if (boxNum == 1) {
            guessButtons[--boxNum].style = 'background-color: #5cb85c;';
        } else {
            guessButtons[++boxNum].style = 'background-color: #5cb85c;';
        }
    }

    countBox.innerHTML = `${counter} Point(s)!`;
    setTimeout(resetGame, 3000);
}

function resetGame() {
    guessButtons[0].style = "pointer-events: all;";
    guessButtons[1].style = "pointer-events: all;";
    currentSong.pause();
    currentSong.currentTime = 0;

    gameLoop();
}