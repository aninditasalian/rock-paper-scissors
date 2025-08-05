function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const reset = document.querySelector(".resetButton");
reset.addEventListener("click", resetGame);

const humanScoreText = document.querySelector(".humanScore");
const compScoreText = document.querySelector(".compScore");

const compChoiceText = document.querySelector(".compChoice");
const humanChoiceText = document.querySelector(".humanChoice");
const winnerText = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {

    compChoiceText.textContent = `My choice: ${computerChoice}`;     
    humanChoiceText.textContent = `Your choice: ${humanChoice}`;

    if (computerChoice == "rock") {
        if (humanChoice == "rock") {
            console.log("Tie");
            winnerText.textContent = "Tie";
        } else if (humanChoice == "paper") {
            console.log("You win! Paper beats rock");
            winnerText.textContent = "You win! Paper beats rock";
            humanScore ++;
            humanScoreText.textContent = `You: ${humanScore}`;
        } else {
            console.log("You lose. Rock beats scissors");
            winnerText.textContent = "You lose. Rock beats scissors";
            computerScore ++;
            compScoreText.textContent = `Me: ${computerScore}`;
        }
    }
    if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("You lose. Paper beats rock");
            winnerText.textContent = "You lose. Paper beats rock";
            computerScore ++;
            compScoreText.textContent = `Me: ${computerScore}`;
        } else if (humanChoice == "paper") {
            console.log("Tie");
            winnerText.textContent = "Tie";
        } else {
            console.log("You win! Scissors beats paper");
            winnerText.textContent = "You win! Scissors beats paper";
            humanScore ++;
            humanScoreText.textContent = `You: ${humanScore}`;
        }
    }
    if (computerChoice == "scissors") {
        if (humanChoice == "rock") {
            console.log("You win! Rock beats scissors");
            winnerText.textContent = "You win! Rock beats scissors";
            humanScore ++;
            humanScoreText.textContent = `You: ${humanScore}`;
        } else if (humanChoice == "paper") {
            console.log("You lose. Scissors beats paper");
            winnerText.textContent = "You lose. Scissors beats paper";
            computerScore ++;
            compScoreText.textContent = `Me: ${computerScore}`;
        } else {
            console.log("Tie");
            winnerText.textContent = "Tie";
        }
    }
    console.log("human: ", humanScore, "computer: ", computerScore);

    if (humanScore === 3) {
        winnerText.textContent = "You win the game!";
        disableButtons();
    }
    if (computerScore === 3) {
        winnerText.textContent = "Computer wins the game";
        disableButtons();
}
}



rock.addEventListener("click", (e) => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
})

paper.addEventListener("click", (e) => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
})

scissors.addEventListener("click", (e) => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
})


function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = `You: ${humanScore}`;
    compScoreText.textContent = `Me: ${computerScore}`;
    winnerText.textContent = "Choose your weapon!"
    compChoiceText.textContent = `My choice:`;     
    humanChoiceText.textContent = `Your choice:`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}