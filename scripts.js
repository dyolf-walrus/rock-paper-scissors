

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `You both chose ${playerSelection}! It's a tie!`
    } if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return `The computer chose paper! You lose!`
        } else if (computerSelection == 'scissors') {
            return `The computer chose scissors! You win!`
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'The computer chose rock! You win!'
        } else if (computerSelection == 'scissors') {
            return 'The computer chose scissors! You lose!'
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'The computer chose rock! You lose!'
        } else if (computerSelection == 'paper') {
            return 'The computer chose paper! You win!'
        }
    } else return 'Please choose rock, paper, or scissors to play!'
}

function game() {
    let playerWins;
    let computerWins;
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
game()