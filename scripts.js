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
const body = document.querySelector('body')
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        result.textContent = `You both chose ${playerSelection}! It's a tie!`
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result.textContent = `The computer chose paper! You lose!`
            computerWins++;
        } else if (computerSelection == 'scissors') {
            result.textContent = `The computer chose scissors! You win!`
            playerWins++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result.textContent = 'The computer chose rock! You win!'
            playerWins++;
        } else if (computerSelection == 'scissors') {
            result.textContent = 'The computer chose scissors! You lose!'
            computerWins++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result.textContent = 'The computer chose rock! You lose!'
            computerWins++;
        } else if (computerSelection == 'paper') {
            result.textContent = 'The computer chose paper! You win!'
            playerWins++;
        }
    }
    if (playerWins == 5) {
        body.textContent = 'You have won the game! :)'
    }
    if (computerWins == 5) {
        body.textContent = 'You have lost the game! :('
    }
    console.log(playerWins)
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