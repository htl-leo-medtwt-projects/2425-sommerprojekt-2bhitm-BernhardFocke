let guessButtons = document.getElementsByClassName('guessButtons');
let game = document.getElementById('game');
let musicDisk = document.querySelector('#disk');
let ruleBox = document.getElementById('rules');
let countBox = document.getElementsByClassName('countBox');
let coverGuessButtons = document.getElementsByClassName('coverGuessButtons');
let nameButtonBox = document.getElementById('nameButtonBox');
let coverButtonBox = document.getElementById('coverButtonBox');
let counter = 0;
let rndNum = 0;
let version;

let songArr = [
    "../songs/Avicii - Levels.mp3",
    "../songs/Avicii - Waiting For Love.mp3",
    "../songs/Marshmello, venbee - No Mans Land.mp3",
    "../songs/Kygo - Stole The Show feat. Parson James.mp3",
    "../songs/Owl City - Verge ft. Aloe Blacc.mp3",
    "../songs/Avicii - Dear Boy.mp3"
];

let nameArr = [
    "Avicii - Levels",
    "Avicii - Waiting For Love",
    "Marshmello, venbee - No Mans Land",
    "Kygo - Stole The Show feat. Parson James",
    "Owl City - Verge ft. Aloe Blacc",
    "Avicii - Dear Boy"
];

let coverArr = [
    "../img/guessTheSong/covers/levels.jpg",
    "../img/guessTheSong/covers/stories.jpg",
    "../img/guessTheSong/covers/noMansLand.jpg",
    "../img/guessTheSong/covers/cloudNine.jpg",
    "../img/guessTheSong/covers/mobileOrchestra.jpg",
    "../img/guessTheSong/covers/true.jpeg"
];


//Game
let userAnswer = "";
let boxNum;
let rightAnswer = "";
let currentSong;


function startNameGame() {
    version = 1.0;
    nameButtonBox.style = 'display: flex;';
    coverButtonBox.style = 'display: none;';
    switchToGame();
    gameLoop();
}

function startCoverGame() {
    version = 2.0;
    nameButtonBox.style = 'display: none';
    coverButtonBox.style = 'display: flex;';
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
    ruleBox.style = 'display: none;';
    game.style = 'display: block;';
}

function switchToRules() {
    ruleBox.style = 'display: block';
    game.style = 'display: none';
}

function getRndNum() {
    return Math.ceil(Math.random() * songArr.length - 1);
}

function getRndPlace() {
    return Math.ceil((Math.random() * 2) - 1);
}

let rndPlace = getRndPlace();
let secondRndPlace = getRndPlace();

function gameLoop() {
    let rightSongNum = getRndNum();
    let rndNum = getRndNum();
    currentSong = new Audio(songArr[rightSongNum]);

    while (rightSongNum == rndNum) {
        rndNum = getRndNum();
    }

    musicDisk.classList.remove('diskAnimation');
    musicDisk.offsetHeight;
    musicDisk.classList.add('diskAnimation');

    rndPlace = getRndPlace();
    secondRndPlace = getRndPlace();

    while (rndPlace == secondRndPlace) {
        secondRndPlace = getRndPlace();
    }

    guessButtons[rndPlace].innerHTML = nameArr[rightSongNum];
    guessButtons[secondRndPlace].innerHTML = nameArr[rndNum];

    coverGuessButtons[rndPlace].style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverArr[rightSongNum]});`;
    coverGuessButtons[secondRndPlace].style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverArr[rndNum]});`;

    rightAnswer = nameArr[rightSongNum];

    currentSong.play();
    currentSong.volume = 0.10;
}

function clickButton0() {
    userAnswer = guessButtons[0].innerHTML;
    boxNum = 0;
    guessButtons[1].style += "pointer-events: none;";
    checkWin();
}

function clickButton1() {
    userAnswer = guessButtons[1].innerHTML;
    boxNum = 1;
    guessButtons[0].style += "pointer-events: none;";
    checkWin();
}

function checkWin() {
    if (userAnswer == rightAnswer) {
        counter++;
        if (version == 1.0) {
            guessButtons[boxNum].style = 'background-color: #5cb85c;';

            if (boxNum == 1) {
                guessButtons[--boxNum].style = 'background-color: #FF2C2C;';
            } else {
                guessButtons[++boxNum].style = 'background-color: #FF2C2C;';
            }

            countBox[0].innerHTML = `${counter} Point(s)!`;
        } else {
            coverGuessButtons[boxNum].style.cssText += 'border: 5px solid #5cb85c;';

            if (boxNum == 1) {
                coverGuessButtons[--boxNum].style.cssText += 'border: 5px solid #FF2C2C;';
            } else {
                coverGuessButtons[++boxNum].style.cssText += 'border: 5px solid #FF2C2C;';
            }

            countBox[1].innerHTML = `${counter} Point(s)!`;
        }
        
    } else {
        if (version == 1.0) {
            guessButtons[boxNum].style = 'background-color: #FF2C2C;';

            if (boxNum == 1) {
                guessButtons[--boxNum].style = 'background-color: #5cb85c;';
            } else {
                guessButtons[++boxNum].style = 'background-color: #5cb85c;';
            }

            countBox[0].innerHTML = `${counter} Point(s)!`;
        } else {
            coverGuessButtons[boxNum].style.cssText += 'border: 5px solid #FF2C2C;';

            if (boxNum == 1) {
                coverGuessButtons[--boxNum].style.cssText += 'border: 5px solid #5cb85c';
            } else {
                coverGuessButtons[++boxNum].style.cssText += 'border: 5px solid #5cb85c';
            }

            countBox[1].innerHTML = `${counter} Point(s)!`;
        }
    }

    setTimeout(resetGame, 3000);
}

function resetGame() {
    guessButtons[0].style = "pointer-events: all;";
    guessButtons[1].style = "pointer-events: all;";
    currentSong.pause();
    currentSong.currentTime = 0;

    gameLoop();
}