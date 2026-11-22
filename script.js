// 1 = rock; 2 = paper; 3 = scissors

let computerScore = 0;
let humanScore = 0;
let gamesPlayed = 0;

const content = document.querySelector("body");
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const result = document.createElement("div");


const computerSelection = Math.floor(Math.random() * 3) + 1;
const humanSelection = document.querySelector("button");
humanSelection.addEventListener("click", () => {
    
    if (rockBtn) {
        return 1;
    }
    if (paperBtn) {
        return 2;
    }
    if (scissorsBtn) {
        return 3;
    }

    playRound();
});

function playRound(computerSelection, humanSelection) {
    if (computerSelection === 1 && humanSelection === 2) {
        result.textContent = "You win! Paper covers rock!";
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === 2 && humanSelection === 3) {
        result.textContent = "You win! Scissors cuts paper!";
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === 3 && humanSelection === 1) {
        result.textContent = "You win! Rock smashes scissors!";
        humanScore++;
        gamesPlayed++;
    } else if (computerSelection === 1 && humanSelection === 3) {
        result.textContent = "You lose! Rock smashes scissors!";
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === 2 && humanSelection === 1) {
        result.textContent = "You lose! Paper covers rock!";
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === 3 && humanSelection === 2) {
        result.textContent = "You lose! Scissors cuts paper!";
        computerScore++;
        gamesPlayed++;
    } else if (computerSelection === 1 && humanSelection === 1) {
        result.textContent = "It's a draw! We both chose rock!"
        gamesPlayed++;
    } else if (computerSelection === 2 && humanSelection === 2) {
        result.textContent = "It's a draw! We both chose paper!";
        gamesPlayed++;
    } else if (computerSelection === 3 && humanSelection === 3) {
        result.textContent = "It's a draw! We both chose scissors!";
        gamesPlayed++;
    } else {
        result.textContent = "ERROR";
    }
}

console.log(playRound(computerSelection, humanSelection));

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