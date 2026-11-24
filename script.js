let computerScore = 0;
let humanScore = 0;




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

const resetButton = document.createElement("div");
content.appendChild(resetButton);
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Game";
resetButton.appendChild(resetBtn);

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
            (computerScore === 5 || humanScore === 5) ? declareWinner() : playRound(computerSelection, humanSelection);
            break;
        case paperBtn:
            humanSelection = "paper";
            (computerScore === 5 || humanScore === 5) ? declareWinner() : playRound(computerSelection, humanSelection);
            break;
        case scissorsBtn:
            humanSelection = "scissors";
            (computerScore === 5 || humanScore === 5) ? declareWinner() : playRound(computerSelection, humanSelection);
            break;
        default:
            return;
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
    } else {
        heading.textContent = `It's a draw! We both chose ${humanSelection}!`;
    }
    trackHumanScore.textContent = `You: ${humanScore}`;
    trackComputerScore.textContent = `CPU: ${computerScore}`;
}

function declareWinner() {
    if (humanScore === 5) {
        heading.textContent = "You're the winner! Thanks for playing!";
    } else {
        heading.textContent = "You lost! Better luck next time!";
    }
}

resetButton.addEventListener("click", () => {
    resetGame();
});

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    heading.textContent = "Rock, paper, scissors, shoot!"
    trackHumanScore.textContent = `You: ${humanScore}`;
    trackComputerScore.textContent = `CPU: ${computerScore}`;
    document.querySelectorAll("button").forEach(button => {
    button.disabled = false;
  });
}