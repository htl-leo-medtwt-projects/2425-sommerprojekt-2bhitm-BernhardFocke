let coverBox = document.getElementById('coverBox');
let guessButtons = document.getElementsByClassName('guessButtons');
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

function startGame() {
}

function getRndNum() {
    rndNum = Math.ceil(Math.random() * songArr.length);
}

function gameLoop() {
    
}