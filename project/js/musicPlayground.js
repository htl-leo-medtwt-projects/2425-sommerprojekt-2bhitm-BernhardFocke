//Funktion wurde zuerst "erfunden", ausführlich durchgedacht und probiert. Danach wurde Chat GPT als Hilfe um den Code zu verwirklichen genommen.

const container = document.getElementById("piano");

// Nur die mittleren Oktaven C3 bis B5
const whiteNotes = [
  "C3", "D3", "E3", "F3", "G3", "A3", "B3",
  "C4", "D4", "E4", "F4", "G4", "A4", "B4",
  "C5", "D5", "E5", "F5", "G5", "A5", "B5"
];

const blackNotes = [
  "Db3", "Eb3", "", "Gb3", "Ab3", "Bb3",
  "Db4", "Eb4", "", "Gb4", "Ab4", "Bb4",
  "Db5", "Eb5", "", "Gb5", "Ab5", "Bb5"
];

const whiteKeyCount = whiteNotes.length;
const blackKeyMap = {
  0: "Db3", 1: "Eb3", 3: "Gb3", 4: "Ab3", 5: "Bb3",
  7: "Db4", 8: "Eb4", 10: "Gb4", 11: "Ab4", 12: "Bb4",
  14: "Db5", 15: "Eb5", 17: "Gb5", 18: "Ab5", 19: "Bb5"
};

const keyWidth = 100 / whiteKeyCount;
const blackWidth = keyWidth * 0.6;

function createKey(note, isBlack, left, width) {
  const div = document.createElement("div");
  div.className = `key-overlay ${isBlack ? "black" : "white"}`;
  div.style.left = `${left.toFixed(2)}%`;
  div.style.width = `${width.toFixed(2)}%`;
  div.dataset.note = note;
  div.id = note;


  const label = document.createElement("span");
  label.innerText = note;
  div.appendChild(label);

  container.appendChild(div);
  div.onclick = () => playTone(div, note, isBlack);
}

// Weiße Tasten
for (let i = 0; i < whiteKeyCount; i++) {
  const note = whiteNotes[i];
  createKey(note, false, i * keyWidth, keyWidth);
}

// Schwarze Tasten (Lücken beachten)
for (let i = 0; i < whiteKeyCount; i++) {
  const note = blackKeyMap[i];
  if (note) {
    const left = (i + 0.7) * keyWidth;
    createKey(note, true, left, blackWidth);
  }
}

let tutBox = document.getElementById('beforePlay');
let backgroundBox = document.getElementById('backgroundBox');

function playTone(current, note, isBlack) {
  let tune = new Audio(`../sounds/piano-mp3/${note}.mp3`);
  tune.play();

  if (!isBlack) {
    current.classList.remove('keyAnimationWhite');
    current.offsetHeight;
    current.classList.add('keyAnimationWhite');
  } else {
    current.classList.remove('keyAnimationBlack');
    current.offsetHeight;
    current.classList.add('keyAnimationBlack');
  }
}

function removeTUT() {
  tutBox.classList.remove('fadeBox');
  tutBox.offsetHeight;
  tutBox.classList.add('fadeBox');

  setTimeout(removeBox, 1000);
}

function removeBox() {
  tutBox.style = 'display: none;';
  backgroundBox.style = 'display: none';
}