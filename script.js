const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const counter = document.querySelector(".counter");
const outcome = document.querySelector(".outcome");
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

document.getElementById("counter").innerHTML = `${playerScore} - ${computerScore}`;

function computerPlay (){
    let choice = Math.floor (Math.random() * 3);

    if (choice === 0) {
        return "scissors";
    } else if (choice === 1) {
        return "paper";
    } else return "rock";
}

function playRound (playerSelection, computerSelection){
    if (computerScore === 5 || playerScore === 5){
        computerScore = 0;
        playerScore = 0;
        document.getElementById("counter").innerHTML = `${playerScore} - ${computerScore}`;
    }
    computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        outcome.textContent = scoreCount("tie", computerSelection);
    }   else
        if (computerSelection === "scissors" && playerSelection === "paper"){
            outcome.textContent = scoreCount("computer", computerSelection);
        }   else
            if (computerSelection === "paper" && playerSelection === "rock"){
                outcome.textContent = scoreCount("computer", computerSelection);
            }   else
                if (computerSelection === "rock" && playerSelection === "scissors"){
                    outcome.textContent = scoreCount("computer", computerSelection);
                }   else {
                    outcome.textContent = scoreCount("player", computerSelection);
                    }
    document.getElementById("counter").innerHTML = `${playerScore} - ${computerScore}`;
}

function scoreCount(winner, choice){
    if (winner === "computer"){
        computerScore ++;
        if (computerScore === 5){
            return `You lost the game. Computer chose ${choice}.`; 
        }   else
            return `You lost this round. Computer chose ${choice}.`;
    }   else
        if (winner === "player"){
            playerScore ++;
            if (playerScore === 5){
                return `You won the game. Computer chose ${choice}.`
            }   else
                return `You won this round. Computer chose ${choice}.`;
        }   else
            if (winner === "tie"){
                return `You tied this round. Computer chose ${choice}.`;
            }

}

rockButton.addEventListener("click", function(){
    playRound("rock");
});
paperButton.addEventListener("click", function(){
    playRound("paper");
});
scissorsButton.addEventListener("click", function(){
    playRound("scissors");
});