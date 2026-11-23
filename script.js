let computerScore = 0;
let humanScore = 0;
let gamesPlayed = 0;
let choices = ["rock", "paper", "scissors"]


const content = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = "Rock, paper, scissors, shoot!";
content.appendChild(heading);
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
        return choices[0];
    } else if (computerChoice === 2) {
        return choices[1];
    } else if (computerChoice === 3) {
        return choices[2];
    }
}

const computerSelection = getComputerChoice(computerChoice);

buttons.addEventListener("click", (e) => {
    let humanSelection;
    switch (e.target) {
        case rockBtn:
            humanSelection = choices[0];
            break;
        case paperBtn:
            humanSelection = choices[1];
            break;
        case scissorsBtn:
            humanSelection = choices[2];
            break;
        default:
            return;
    }
    playRound(computerSelection, humanSelection)
})

// Round

function playRound(computerSelection, humanSelection) {
    if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper covers rock!");
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors cuts paper!");
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You win! Rock smashes scissors!");
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose! Rock smashes scissors!");
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose! Paper covers rock!");
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose! Scissors cuts paper!");
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === humanSelection) {
        console.log(`It's a draw! We both chose ${humanSelection}!`);
        gamesPlayed++;
    } else {
        console.log("ERROR");
    }
}

function checkScore(gamesPlayed) {
    if (gamesPlayed < 1) {
        // Intentionally blank
    } else if (gamesPlayed === 1) {
            console.log("Let's check the score! You've won " + humanScore + " out of " + gamesPlayed + " game. I've won " + computerScore + " out of " + gamesPlayed + " game. Let's keep going!");
    } else if (gamesPlayed > 1 && gamesPlayed < 5) {
            console.log("Let's check the score! You've won " + humanScore + " out of " + gamesPlayed + " games. I've won " + computerScore + " out of " + gamesPlayed + " games. Let's keep going!");
    } else {
        // Intentionally blank
    }
}
console.log(checkScore(gamesPlayed));

function declareWinner(computerScore, humanScore) {
    if (computerScore < humanScore) {
        console.log("You're the winner! You won " + humanScore + " out of " + gamesPlayed + " games! I won " + computerScore + " out of " + gamesPlayed + " games. Thanks for playing!");
    } else if (computerScore > humanScore) {
        console.log("You lost! You won " + humanScore + " out of " + gamesPlayed + " games! I won " + computerScore + " out of " + gamesPlayed + " games. Better luck next time!");
    } else {
        console.log("Wow! We both won " + humanScore + " out of " + gamesPlayed + " games!")
    }
}
console.log(declareWinner(computerScore, humanScore));
console.log("Refresh the page to play again!");