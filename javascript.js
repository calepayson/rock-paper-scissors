const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const item = Math.floor(Math.random() * choices.length);
    return choices[item];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie"
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
               (playerChoice === "Paper" && computerChoice === "Rock") ||
               (playerChoice === "Scissors" && computerChoice === "Paper")) {
        return "Player wins"
    } else {
        return "Computer wins"
    }
}

function printResult(winner, playerChoice, computerChoice) {
    result.textContent = `${winner}! Player chose: ${playerChoice} and Computer chose ${computerChoice}.`
}

function updateScores(winner) {
    if (winner === "Player wins") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (winner === "Computer wins") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    printResult(winner, playerChoice, computerChoice);
    updateScores(winner);
}

function choseRock() {
    play("Rock");
}

function chosePaper() {
    play("Paper");
}

function choseScissors() {
    play("Scissors");
}

function resetScore() {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    result.textContent = "";
}

rock.addEventListener("click", choseRock);
paper.addEventListener("click", chosePaper);
scissors.addEventListener("click", choseScissors);
reset.addEventListener("click", resetScore);
