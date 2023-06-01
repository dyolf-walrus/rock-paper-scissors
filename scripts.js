function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3);
    let computerChoice;
    if (ran == 0) {
        computerChoice = 'rock';
    } else if (ran == 1) {
        computerChoice = 'paper';
    } else if (ran == 2) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

const result = document.querySelector('.result')
const playerTally = document.querySelector('.playerWins')
const computerTally = document.querySelector('.computerWins')
const game = document.querySelector('.game')
const restart = document.querySelector('.restart')
const endText = document.querySelector('.winLose')
const restartButton = document.querySelector('.playAgain')
const btns = document.querySelectorAll('button')
let playerWins = 0;
let computerWins = 0;

restartButton.addEventListener("click", function() {location.reload()})

function playRound(playerSelection) {
    for (btn of btns) {
        btn.classList.remove("red")
        btn.classList.remove("green")
    }
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        result.textContent = `You both chose ${playerSelection}! It's a tie!`
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result.textContent = `The computer chose paper! You lose!`
            computerWins++;
            rock.classList.add("red")
            rock.classList.remove("green")
        } else if (computerSelection == 'scissors') {
            result.textContent = `The computer chose scissors! You win!`
            playerWins++;
            rock.classList.add("green")
            rock.classList.remove("red")
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result.textContent = 'The computer chose rock! You win!'
            playerWins++;
            paper.classList.add("green")
            paper.classList.remove("red")
        } else if (computerSelection == 'scissors') {
            result.textContent = 'The computer chose scissors! You lose!'
            computerWins++;
            paper.classList.add("red")
            paper.classList.remove("green")
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result.textContent = 'The computer chose rock! You lose!'
            computerWins++;
            scissors.classList.add("red")
            scissors.classList.remove("green")
        } else if (computerSelection == 'paper') {
            result.textContent = 'The computer chose paper! You win!'
            playerWins++;
            scissors.classList.add("green")
            scissors.classList.remove("red")
        }
    }
    if (playerWins == 5) {
        endText.textContent = 'You have won the game! :)'
        game.style.visibility = 'hidden';
        game.style.height = '0px';
        restart.style.visibility = 'visible';
    }
    if (computerWins == 5) {
        endText.textContent = 'You have lost the game! :('
        game.style.visibility = 'hidden';
        game.style.height = '0px';
        restart.style.visibility = 'visible';
    }
    playerTally.textContent = playerWins;
    computerTally.textContent = computerWins;
}

/*function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt('Choose rock, paper, or scissors. You will be prompted 5 times for 5 rounds!')
        playRound(playerSelection, computerSelection)
        if (playRound(playerSelection, computerSelection).includes('win')) {
            playerWins++;
        } else if (playRound(playerSelection, computerSelection).includes('lose')) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        return `You won ${playerWins} rounds and the computer won ${computerWins}. You win the game!`;
    } else if (playerWins < computerWins) {
        return `You won ${playerWins} rounds and the computer won ${computerWins}. You lose the game!`;
    } else return `The game was a tie!`
}*/

const rock = document.querySelector('.chooseRock')
rock.addEventListener("click", function(){playRound('rock')})

const paper = document.querySelector('.choosePaper')
paper.addEventListener("click", function(){playRound('paper')})

const scissors = document.querySelector('.chooseScissors')
scissors.addEventListener("click", function(){playRound('scissors')})