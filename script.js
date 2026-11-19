const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
let computerScore = 0;
let humanScore = 0;

// Computer choice
let randomChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(randomChoice) {
    if (randomChoice === 1) {
        return choice1;
    } else if (randomChoice === 2) {
        return choice2;
    } else if (randomChoice === 3) {
        return choice3;
    }
}

// User choice
const userChoice = prompt("Rock, paper, scissors, shoot!");

function getHumanChoice(userChoice) {
    return userChoice.toLowerCase();
}