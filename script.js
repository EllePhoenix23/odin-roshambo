const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
let computerScore = 0;
let humanScore = 0;

// Computer choice
let computerChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        return choice1;
    } else if (computerChoice === 2) {
        return choice2;
    } else if (computerChoice === 3) {
        return choice3;
    }
}

// User choice
const humanChoice = prompt("Rock, paper, scissors, shoot!");

function getHumanChoice(humanChoice) {
    if (humanChoice === "rock") {
        return choice1;
    } else if (humanChoice === "paper") {
        return choice2;
    } else if (humanChoice === "scissors") {
        return choice3;
    }
}

// Round

function playRound(computerChoice, humanChoice) {
    if (computerChoice === choice1 && humanChoice === choice2) {
        console.log("You win! I chose rock!");
    } else if (computerChoice === choice2 && humanChoice === choice3) {
        console.log("You win! I chose paper!");
    } else if (computerChoice === choice3 && humanChoice === choice1) {
        console.log("You win! I chose scissors!");
    } else if (computerChoice === choice1 && humanChoice === choice3) {
        console.log("You lose! I chose rock!");
    } else if (computerChoice === choice2 && humanChoice === choice1) {
        console.log("You lose! I chose paper!");
    } else if (computerChoice === choice3 && humanChoice === choice2) {
        console.log("You lose! I chose scissors!");
    } else 
        console.log("It's a draw!");
}

console.log(playRound());