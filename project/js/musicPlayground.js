//Funktion wurde zuerst "erfunden", ausführlich durchgedacht und probiert. Danach wurde Chat GPT als Hilfe um den Code zu verwirklichen genommen.

const container = document.getElementById("piano");

const whiteKeysPerSide = 14;
const blackKeysPerSide = 10;
const gapPercent = 1;

const sideWidth = (100 - gapPercent) / 2; // je Seite 49.5%
const whiteKeyWidth = sideWidth / whiteKeysPerSide;
const blackKeyWidth = whiteKeyWidth * 0.6;

const blackKeyPattern = [1, 3, 6, 8, 10]; // Positionen innerhalb der Oktave (0-basiert)
const whiteNotesInOctave = 7;

// Funktion zum Zeichnen weißer Tasten
function drawWhiteKeys(startPercent, side) {
    for (let i = 0; i < whiteKeysPerSide; i++) {
        const key = document.createElement("div");
        key.classList.add("key-overlay", "white");
        key.style.left = `${(startPercent + i * whiteKeyWidth).toFixed(3)}%`;
        key.style.width = `${whiteKeyWidth.toFixed(3)}%`;
        container.appendChild(key);
    }
}

// Funktion zum Zeichnen schwarzer Tasten
function drawBlackKeysPrecise(startPercent) {
  const blackKeyOffsets = [0, 1, 3, 4, 5]; // Positionen mit schwarzen Tasten innerhalb 7er-Oktave
  const numWhite = 14;
  const totalBlack = 10;
  let blackCount = 0;

  for (let i = 0; i < numWhite; i++) {
    const octavePos = i % 7;
    if (blackKeyOffsets.includes(octavePos) && blackCount < totalBlack) {
      const key = document.createElement("div");
      key.classList.add("key-overlay", "black");

      const left = startPercent + (i + 0.6) * whiteKeyWidth; // Feintuning auf 0.6
      key.style.left = `${left.toFixed(3)}%`;
      key.style.width = `${blackKeyWidth.toFixed(3)}%`;
      container.appendChild(key);

      blackCount++;
    }
  }
}

// Linke Hälfte
drawWhiteKeys(0, 'left');
drawBlackKeysPrecise(0); // links

// Rechte Hälfte (mit Schlitzversatz)
const rightStart = sideWidth + gapPercent;
drawWhiteKeys(rightStart, 'right');
drawBlackKeysPrecise(rightStart); // rechts