let computerScore = 0;
let humanScore = 0;


const content = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = "Rock, paper, scissors, shoot!"
content.appendChild(heading);

const scoreTracker = document.createElement("div");
content.appendChild(scoreTracker);
const trackHumanScore = document.createElement("h3");
trackHumanScore.textContent = humanScore;
const trackComputerScore = document.createElement("h3");
trackComputerScore.textContent = computerScore;
scoreTracker.appendChild(trackHumanScore);
scoreTracker.appendChild(trackComputerScore);

const buttons = document.createElement("div");
content.appendChild(buttons);
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

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

buttons.addEventListener("click", (e) => {
    let humanSelection;
    switch (e.target) {
        case rockBtn:
            humanSelection = "rock";
            break;
        case paperBtn:
            humanSelection = "paper";
            break;
        case scissorsBtn:
            humanSelection = "scissors";
            break;
        default:
            return;
    }
    playRound(computerSelection, humanSelection)
})

function playRound(computerSelection, humanSelection) {
    if (computerSelection === "rock" && humanSelection === "paper") {
        heading.textContent = "You win! Paper covers rock!";
        humanScore++;
    } else if (computerSelection === "paper" && humanSelection === "scissors") {
        heading.textContent = "You win! Scissors cuts paper!";
        humanScore++;
    } else if (computerSelection === "scissors" && humanSelection === "rock") {
        heading.textContent = "You win! Rock smashes scissors!";
        humanScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
        heading.textContent = "You lose! Rock smashes scissors!";
        computerScore++;
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        heading.textContent = "You lose! Paper covers rock!";
        computerScore++;
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        heading.textContent = "You lose! Scissors cuts paper!";
        computerScore++;
    } else if (computerSelection === humanSelection) {
        heading.textContent = `It's a draw! We both chose ${humanSelection}!`;
    } else {
        console.log("ERROR");
    }
    
    trackHumanScore.textContent = humanScore;
    trackComputerScore.textContent = computerScore;
}

function declareWinner(computerScore, humanScore) {
    if (computerScore < humanScore) {
        console.log("You're the winner! Thanks for playing!");
    } else {
        console.log("You lost! Better luck next time!");
    }
}
console.log(declareWinner(computerScore, humanScore));
console.log("Refresh the page to play again!");