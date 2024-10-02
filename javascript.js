const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const resultElement = document.querySelector(".result");
const resetButton = document.querySelector(".reset");
const choiceButtons = document.querySelectorAll(".choice");

// Constants
const CHOICES = ["Rock", "Paper", "Scissors"];

// Game state variables
let playerScore = 0;
let computerScore = 0;

// Function to get computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

// Function to determine the winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    }

    const winConditions = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper",
    };

    return winConditions[playerChoice] === computerChoice ? "Player wins" : "Computer wins";
}

// Function to display the results
function displayResult(winner, playerChoice, computerChoice) {
    resultElement.textContent = `${winner}! Player chose: ${playerChoice} and Computer chose ${computerChoice}.`
}

// Function to update the scores
function updateScores(winner) {
    if (winner === "Player wins") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === "Computer wins") {
        computerScore++;
        computerScoreElement.textContent = computerScore++;
    }
}

// Main game function
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);
    updateScores(winner);
}

// Event listeners for choice buttons
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

// Event listener for reset button
resetButton.addEventListener("click", resetGame);

// Function to reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = ""
}
