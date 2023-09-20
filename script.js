let playerPoints = 0;
let computerPoints = 0;
// computer chooses rock paper or scissors
let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    return choice[(Math.floor(Math.random() * 3))];
} 
getComputerChoice();
// single round that compares choices and prints winner
function singleRound(playerSelection, computerSelection) {
    console.log("player " + playerSelection + " computer " + computerSelection);
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log("Draw!");
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints++;
        console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints++;
        console.log("You Lose! Scissors beats Paper");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints++;
        console.log("You Lose! Rock beats Scissors");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints++;
        console.log("You Win! Scissors beats Paper");
    }
    else {
        console.log("Something went wrong :3");
    }
}



//console.log(singleRound(playerSelection, computerSelection));


function game() {
    while (playerPoints < 3 && computerPoints < 3) {
        let playerSelection = prompt("Please enter Rock, Paper, or Scissors", "Choice");
        let computerSelection = getComputerChoice();
        singleRound(playerSelection, computerSelection);
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);

        if (playerPoints === 3) {
            console.log("You Won!");
        }
        else if (computerPoints === 3) {
            console.log("You Lose, Better luck next time.");
        }
    }
}


game();
// play a match 
// let player select option with prompt()
// use singleRound() to compare
// if someone wins give them a point 
// if its a draw replay 
// when someone reaches 3 they win 
// print that player lost or won 