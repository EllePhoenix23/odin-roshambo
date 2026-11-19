// Computer choice
let randomChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(randomChoice) {
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else if (randomChoice === 3) {
        return "scissors";
    }
}