let computerScore = 0;
let humanScore = 0;

const content = document.querySelector("body");
content.style.backgroundColor = "lightBlue";
const heading = document.createElement("h1");
heading.textContent = "Rock, paper, scissors, shoot!"
heading.style.textAlign = "center";
content.appendChild(heading);

const winCondition = document.createElement("h3");
winCondition.textContent = "First to Score 5 Points Wins!"
winCondition.style.textAlign = "center";
content.appendChild(winCondition);

const scoreTracker = document.createElement("div");
scoreTracker.style.display = "flex";
scoreTracker.style.justifyContent = "center";
scoreTracker.style.gap = "240px";
scoreTracker.style.padding = "16px";
content.appendChild(scoreTracker);
const trackHumanScore = document.createElement("h3");
trackHumanScore.textContent = `You: ${humanScore}`;
const trackComputerScore = document.createElement("h3");
trackComputerScore.textContent = `CPU: ${computerScore}`;
scoreTracker.appendChild(trackHumanScore);
scoreTracker.appendChild(trackComputerScore);

const buttons = document.createElement("div");
buttons.style.display = "flex";
buttons.style.justifyContent = "space-around";
content.appendChild(buttons);

const rockBtn = document.createElement("button");
rockBtn.style.font = "inherit";
rockBtn.style.fontWeight = "bold";
rockBtn.style.border = "none";
rockBtn.style.borderRadius = "5px";
rockBtn.style.backgroundColor = "beige";
rockBtn.style.width = "120px";
rockBtn.style.padding = "16px";
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.style.font = "inherit";
paperBtn.style.fontWeight = "bold";
paperBtn.style.border = "none";
paperBtn.style.borderRadius = "5px";
paperBtn.style.backgroundColor = "beige";
paperBtn.style.width = "120px";
paperBtn.style.padding = "16px";
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.style.font = "inherit";
scissorsBtn.style.fontWeight = "bold";
scissorsBtn.style.border = "none";
scissorsBtn.style.borderRadius = "5px";
scissorsBtn.style.backgroundColor = "beige";
scissorsBtn.style.width = "120px";
scissorsBtn.style.padding = "16px"
scissorsBtn.textContent = "Scissors";

buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

const resetButton = document.createElement("div");
resetButton.style.padding = "32px";
resetButton.style.display = "flex";
resetButton.style.justifyContent = "center";
content.appendChild(resetButton);
const resetBtn = document.createElement("button");
resetBtn.style.font = "inherit";
resetBtn.style.border = "none";
resetBtn.style.borderRadius = "5px";
resetBtn.style.backgroundColor = "lightBlue";
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
    (computerScore === 5 || humanScore === 5) ? declareWinner() : playRound(computerSelection, humanSelection);
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
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if (humanScore === 5) {
        heading.textContent = "You're the winner!"
        winCondition.textContent = "Thanks for playing!";
    } else {
        heading.textContent = "You lost!"
        winCondition.textContent = "Better luck next time!";
    }
}

resetButton.addEventListener("click", () => {
    resetGame();
});

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    heading.textContent = "Rock, paper, scissors, shoot!"
    winCondition.textContent = "First to Score 5 Points Wins!"
    trackHumanScore.textContent = `You: ${humanScore}`;
    trackComputerScore.textContent = `CPU: ${computerScore}`;
    document.querySelectorAll("button").forEach(button => {
    button.disabled = false;
  });
}