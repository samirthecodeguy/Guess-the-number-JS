// Your JavaScript goes here
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult: HTMLElement = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit: HTMLButtonElement = document.querySelector(".guessSubmit");
const guessField: HTMLInputElement = document.querySelector(".guessField");

let guessCount = 1;
let resetButton: HTMLButtonElement;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses";
    }
    guesses.textContent += ` ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congs";
        lastResult.style.background = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount == 10) {
        lastResult.textContent = "!!GAME OVER!!";
        lowOrHi.textContent = ""
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low"
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high"
        }

    }
    guessCount++;
    guessField.focus();
    guessField.value = "";
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game"
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame)
}


// add last number to lowOrHi