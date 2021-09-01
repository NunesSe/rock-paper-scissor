function computerPlay() {
    let possibleChoices = ["rock", "paper", "scissor"]
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}

function capitalize(word) {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return("draw");
    }
    // player victory checker 
    else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper") {
        return("player");   
    }
    // computer victory checker 
    else if (computerChoice === "rock" && playerChoice === "scissor" || computerChoice === "paper" && playerChoice === "rock" || computerChoice === "scissor" && playerChoice === "paper") {
        return("computer");   
    }
}

function score(draws, playerScore, computerScore, winner) {
    
    if (winner == "draw") {
        draws.innerText++;
    }
    else if (winner == "player") {
        playerScore.innerText++;
    }
    else if (winner == "computer") {
        computerScore.innerText++;
    }
}

function showPopUp(playerScore, computerScore, result) {
    if (playerScore.innerText == '1' || computerScore.innerText == '1') {
        document.querySelector(".black-bg").style.visibility = "visible";
        if (playerScore.innerText == "1") {
            result.innerText = "YOU WON!";
            result.classList.add("won");
        }
        else {
            result.innerText = "YOU LOST!";
            result.classList.add("lost");
        }
    }
}
function click(event) {
    let computer = computerPlay();
    let winner = playRound(event.target.value, computer);
    const computerScore = document.querySelector(".computer-score");
    const playerScore = document.querySelector(".player-score");
    const draws = document.querySelector(".draws");
    const result = document.getElementById("result");
    score(draws, playerScore, computerScore, winner);
    showPopUp(playerScore, computerScore, result);
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", click);
}) 


