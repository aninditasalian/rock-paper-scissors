function getComputerChoice() {
    let computerChoice;
    let number = Math.random();
    if (number <= 0.33) {
        computerChoice = "rock";
    } else if (number > 0.33 && number <= 0.66 ) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice","rock, paper or scissors");
    return humanChoice;
}


function playGame() {


    let humanScore = 0;
    let computerScore = 0;  


    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice == "rock") {
            if (humanChoice == "rock") {
                console.log("Tie");
            } else if (humanChoice == "paper") {
                console.log("You win! Paper beats rock");
                humanScore ++;
            } else {
                console.log("You lose. Rock beats scissors");
                computerScore ++;
            }
        }
        if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                console.log("You lose. Paper beats rock");
                computerScore ++;
            } else if (humanChoice == "paper") {
                console.log("Tie");
            } else {
                console.log("You win! Scissors beats paper");
                humanScore ++;
            }
        }
        if (computerChoice == "scissors") {
            if (humanChoice == "rock") {
                console.log("You win! Rock beats scissors");
                humanScore ++;
            } else if (humanChoice == "paper") {
                console.log("You lose. Scissors beats paper");
                computerScore ++;
            } else {
                console.log("Tie");
            }
        }
    }

    for (let round = 1; round <=5; round++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice);
        console.log("human: ", humanScore, "computer: ", computerScore);
        
        
    }


}


playGame()