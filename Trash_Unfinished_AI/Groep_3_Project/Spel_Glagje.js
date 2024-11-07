const words = ["leren", "hond", "printer", "appel", "bloem", "fiets", "coderen"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill('_');
let attempts = 0;
let maxAttempts = 8;

function displayWord() {
    document.getElementById('word').textContent = guessedWord.join(' ');
}

function displayKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = "Raad een letter: ";
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        keyboard.innerHTML += `<button onclick="checkLetter('${letter}')" class="btn btn-primary">${letter}</button>`;
    }
}

function checkLetter(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        attempts++;
        updateHangman(attempts);
    }

    displayWord();

    if (guessedWord.join('') === selectedWord) {
        document.getElementById('message').textContent = "Gefeliciteerd, je hebt het woord geraden!";
        document.getElementById('message').style.color = "green";
        displayKeyboard();
    } else if (attempts >= maxAttempts) {
        document.getElementById('message').textContent = "Helaas, je hebt verloren. Het woord was: " + selectedWord;
        document.getElementById('message').style.color = "red";
        displayKeyboard();
        function displayKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = " ";
    for (let letter of '') {
        keyboard.innerHTML += `<button onclick="checkLetter('${letter}')" class="btn btn-primary">${letter}</button>`;
    }
}


        
    }
    }
        
    



function updateHangman(attempts) {
    const hangmanFill = document.getElementById('hangman-fill');
    const maxFillWidth = document.getElementById('hangman-bar').clientWidth;
    const fillWidth = (attempts / maxAttempts) * maxFillWidth;
    hangmanFill.style.width = fillWidth + "px";
}

displayWord();
displayKeyboard();