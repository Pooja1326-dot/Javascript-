let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessfield")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".LastResult")
const lowOrhigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let preGuess = []
let numGuess = 1

let playGame = true;
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`)
    } else if (guess < 1) {
        alert(`please enter a more than one`)
    }
    else if (guess > 100) {
        alert(`please enter a number less than hundred`)
    }
    else {
        preGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMsg(`game over.random number was ${randomNumber}`)
            endGame(guess)
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg(`number is too low`)
    }
    else if (guess > randomNumber) {
        displayMsg(`number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}`
}

function displayMsg(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function () {
        randomNumber= parseInt(Math.random() * 100 + 1)
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML =''
        remaining.innerHTML = `${12 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}

