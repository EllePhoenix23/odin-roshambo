let computerScore = 0;
let humanScore = 0;

// Computer choice
let computerSelection = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(computerSelection) {
    if (computerSelection === 1) {
        return "rock";
    } else if (computerSelection === 2) {
        return "paper";
    } else if (computerSelection === 3) {
        return "scissors";
    }
}

const computerChoice = getComputerChoice(computerSelection);

// User choice
const humanResponse = prompt("Rock, paper, scissors, shoot!");
const humanSelection = humanResponse.toLowerCase();

function getHumanChoice(humanSelection) {
    if (humanSelection === "rock") {
        return "rock";
    } else if (humanSelection === "paper") {
        return "paper";
    } else if (humanSelection === "scissors") {
        return "scissors";
    }
}

const humanChoice = getHumanChoice(humanSelection);

// Round

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper covers rock!");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors cuts paper!");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock smashes scissors!");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock smashes scissors!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper covers rock!");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors cuts paper!");
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("It's a draw! We both chose rock!");
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("It's a draw! We both chose paper!");
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("It's a draw! We both chose scissors!");
    } else {
        console.log("Oh no! I don't understand what you mean, please try again!");
    }
}

console.log(playRound(computerChoice, humanChoice));