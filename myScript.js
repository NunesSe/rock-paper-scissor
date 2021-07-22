function computerPlay() {
    let possibleChoices = ["Rock", "Paper", "Scissor"]
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}

function capitalize(word) {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function playRound(playerChoice, computerChoice) {
    playerChoiceLowerCase = playerChoice.toLowerCase();
    computerChoiceLowerCase = computerChoice.toLowerCase();
    if (playerChoiceLowerCase === computerChoiceLowerCase) {
        return("draw");
    }
    /* player victory checker */
    else if (playerChoiceLowerCase === "rock" && computerChoiceLowerCase === "scissor" || playerChoiceLowerCase === "paper" && computerChoiceLowerCase === "rock" || playerChoiceLowerCase === "scissor" && computerChoiceLowerCase === "paper") {
        return("player");   
    }
    /* computer victory checker */
    else if (computerChoiceLowerCase === "rock" && playerChoiceLowerCase === "scissor" || computerChoiceLowerCase === "paper" && playerChoiceLowerCase === "rock" || computerChoiceLowerCase === "scissor" && playerChoiceLowerCase === "paper") {
        return("computer");   
    }
    else {
        return("error");
    }
}


function game(times) {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let invalidInput = 0;
    let i = 0;
    while (i < times) {
        let player = prompt("Rock, paper or scissor: ");
        let computer = computerPlay();
        let result = playRound(player, computer);
        if (result === "draw") {
            console.log(`It's a draw! ${capitalize(player)} is equal to ${capitalize(computer)}`);
            draws++;
        }
        else if (result === "player") {
            playerWins++;
            console.log(`You won! ${capitalize(player)} beats ${capitalize(computer)}`);
        }
        else if (result === "computer") {
            computerWins++;
            console.log(`You lost! ${capitalize(computer)} beats ${capitalize(player)}`);
        }
        else if (result === "error") {
            invalidInput++;
            console.log("That is a invalid input!");
        }
        i++;
    }
    if (invalidInput >= 1) {
        return `You won ${playerWins} times!\nYou lost ${computerWins} times!\nYou drew ${draws} times!\nAnd you had ${invalidInput} invalids inputs`
    }
    else {
        return `You won ${playerWins} times!\nYou lost ${computerWins} times!\nYou drew ${draws} times!`
    }
}
console.log(game(5));