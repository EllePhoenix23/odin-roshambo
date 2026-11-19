let computerScore = 0;
let humanScore = 0;

// Computer choice
let computerChoice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    }
}

const computerSelection = getComputerChoice(computerChoice);

// User choice
const humanResponse = prompt("Rock, paper, scissors, shoot!");
const humanChoice = humanResponse.toLowerCase();

function getHumanChoice(humanChoice) {
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}

const humanSelection = getHumanChoice(humanChoice);

// Round

function playRound(computerSelection, humanSelection) {
    if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper covers rock!");
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors cuts paper!");
        humanScore++;
    } else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You win! Rock smashes scissors!");
        humanScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose! Rock smashes scissors!");
        computerScore++;
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose! Paper covers rock!");
        computerScore++;
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose! Scissors cuts paper!");
        computerScore++;
    } else if (computerSelection === "rock" && humanSelection === "rock") {
        console.log("It's a draw! We both chose rock!");
    } else if (computerSelection === "paper" && humanSelection === "paper") {
        console.log("It's a draw! We both chose paper!");
    } else if (computerSelection === "scissors" && humanSelection === "scissors") {
        console.log("It's a draw! We both chose scissors!");
    } else {
        console.log("Oh no! I don't understand what you mean, please try again!");
    }
}

console.log(playRound(computerChoice, humanSelection));