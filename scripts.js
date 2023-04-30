

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
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
game()