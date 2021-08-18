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


const buttons = document.querySelectorAll("button");
const results = document.querySelector(".player-score")
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let player = e.target.value;
        let computer = computerPlay();
        let result = playRound(player, computer);
        
    })
})