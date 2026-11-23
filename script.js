let computerScore = 0;
let humanScore = 0;
let winScore = 5;


const content = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = "Rock, paper, scissors, shoot!"
content.appendChild(heading);

const scoreTracker = document.createElement("div");
content.appendChild(scoreTracker);
const trackHumanScore = document.createElement("h3");
trackHumanScore.textContent = `You: ${humanScore}`;
const trackComputerScore = document.createElement("h3");
trackComputerScore.textContent = `CPU: ${computerScore}`;
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

buttons.addEventListener("click", (e) => {
    let computerSelection;
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
        default:
            console.log("ERROR: could not retrieve computer selection")
    }
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
    if (computerScore === 5 || humanScore === 5) {
        declareWinner(computerScore, humanScore);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else {
        playRound(computerSelection, humanSelection);
    }
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
        console.log("ERROR: undefined sele");
    }
    trackHumanScore.textContent = `You: ${humanScore}`;
    trackComputerScore.textContent = `CPU: ${computerScore}`;
}

function declareWinner(computerScore, humanScore) {
    if (computerScore < humanScore) {
        heading.textContent = "You're the winner! Thanks for playing!";
    } else {
        heading.textContent = "You lost! Better luck next time!";
    }
}