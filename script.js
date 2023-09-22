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
        
        content.textContent = 'Draw!';
        roundResult.appendChild(content);
        game();
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        
        content.textContent = 'You Lose! Paper beats Rock';
        roundResult.appendChild(content);
        game();
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints++;
        
        content.textContent = 'You Win! Rock beats Scissors';
        roundResult.appendChild(content);
        game();
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        
        content.textContent = 'You Win! Paper beats Rock';
        roundResult.appendChild(content);
        game();
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints++;
        
        content.textContent = 'You Lose! Scissors beats Paper';
        roundResult.appendChild(content);
        game();
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints++;
        
        content.textContent = 'You Lose! Rock beats Scissors';
        roundResult.appendChild(content);
        game();
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints++;
        
        content.textContent = 'You Win! Scissors beats Paper';
        roundResult.appendChild(content);
        game();
    }
    else {
        content.textContent = 'Something went wrong :3 Please enter valid choice';
        roundResult.appendChild(content);
        game();
    }
}

const roundResult = document.querySelector('#roundResult');
const content = document.createElement('p');
content.classList.add('content');

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', () => {
    if(playerPoints < 3 && computerPoints < 3) {
        singleRound("rock", getComputerChoice());
    }
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', () => {
    if(playerPoints < 3 && computerPoints < 3) {
        singleRound("paper", getComputerChoice());
    }
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    if(playerPoints < 3 && computerPoints < 3) {
        singleRound("scissors", getComputerChoice());
    }
});

/*
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
*/
const playerScore = document.createElement('p');
playerScore.classList.add('playerScore');
const computerScore = document.createElement('p');
computerScore.classList.add('computerScore');
const score = document.createElement('p');
score.classList.add('score');

function game() {
    if (playerPoints < 3 && computerPoints < 3) {
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);
        playerScore.textContent = "Player: " + playerPoints;
        roundResult.appendChild(playerScore);
        computerScore.textContent = "Computer: " + computerPoints;
        roundResult.appendChild(computerScore);
    }
    else if (playerPoints === 3) {
        console.log("You Won!");
        playerScore.textContent = "Player: " + playerPoints;
        roundResult.appendChild(playerScore);
        computerScore.textContent = "Computer: " + computerPoints;
        roundResult.appendChild(computerScore);
        score.textContent = "You Won!";
        roundResult.appendChild(score);
        }
    else if (computerPoints === 3) {
        console.log("You Lose, Better luck next time.");
        playerScore.textContent = "Player: " + playerPoints;
        roundResult.appendChild(playerScore);
        computerScore.textContent = "Computer: " + computerPoints;
        roundResult.appendChild(computerScore);
        score.textContent = "You Lose, Better luck next time.";
        roundResult.appendChild(score);
    }
}



