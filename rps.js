
// This function is returning R P or S as the Computer's choice
function computerPlay () {
    let randomNum = Math.floor(Math.random() * (2 + 1));
    if (randomNum === 0) {
        return 'rock'
    }
    else if (randomNum === 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}
// Write a function below that will play one round of RPS

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        return 'tie'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose, Computer wins! Paper beats rock.'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win, Computer loses! Rock beats scissors.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, Computer loses! Paper beats rock.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, Computer wins! Scissors beats paper.'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose, Computer wins! Rock beats scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win, Computer loses! Scissors beats paper.'
    }
    else {
        return 'Sorry I didnt understand'
    }
}


// Write a function called "game" which calls the playRound function and plays a 5 round game
function game(playerSelection,computerSelection) {
    playerSelection = window.prompt('Enter your selection')
    for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection,computerSelection))
        }
    }




