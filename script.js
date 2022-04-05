//Make a function that plays out a single round of RPS.
//It should take two parameters: playerSelection and computerSelection.
//It should return a string that tells the user if they won or lost.

//get computerPlay value.
//make function judge (computerSelection, playerSelection).
//judge compares computerSelection and playerSelection strings.
//if strings are the same return "It's a tie!"
//if 
//make function that ask user for RPS input, and runs judge.
//return the result.

/*
if (scissors = scissors || paper = paper || rock = rock)
    return tie
else if (scissors && paper)
        return win pc
    else if (paper && rock)
            return win pc
        else if (rock && scissors)
                return win pc
                else return win player
*/


let computerSelection;
let playerSelection;

function computerPlay (){
    let choice = Math.floor (Math.random() * 3);

    if (choice === 0) {
        return "scissors";
    } else if (choice === 1) {
        return "paper";
    } else return "rock";
}


function playRound (playerSelection, computerSelection){
    computerSelection = computerPlay();
    if (playerSelection === undefined){
        return "Please choose rock, paper or scissors."
    }else if (computerSelection === playerSelection) {
            return "It's a tie!"
        } else if (computerSelection === "scissors" && playerSelection === "paper"){
                return "Computer chose scissors, you lose."
            } else if (computerSelection === "paper" && playerSelection === "rock"){
                    return "Computer chose paper, you lose."
                } else if (computerSelection === "rock" && playerSelection === "scissors"){
                        return "Computer chose rock, you lose."
                    } else return ("Computer chose " + computerSelection + ", you win!")
}