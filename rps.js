
// This function is returning R P or S as the Computer's choice
function computerPlay () {
    let randomNum = Math.floor(Math.random() * (2 + 1));
    if (randomNum === 0) {
        return 'Rock'
    }
    else if (randomNum === 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

// Write a function below that will play one round of RPS