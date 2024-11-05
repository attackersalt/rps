// functions

function getComputerChoice() {
    const random = Math.random();
    return (random < (1 / 3)) ? "rock" :
        (random < (2 / 3)) ? "paper" :
        "scissors";
}

function getHumanChoice(re = false) {
    let choice = (re) 
    ? prompt("Please enter rock, paper or scissors ONLY")
    : prompt("Rock Paper or Scissors?");
    choice = choice.toLowerCase(); // make choice case-insensitive
    if (!(choice === "rock" || choice === "paper" || choice == "scissors")) {
        return getHumanChoice(true);
    }
    return choice;
}


function playRound(humanChoice, computerChoice) {
    function endGame() {
        gameOverBox.textContent = getResult(humanScore, computerScore) + "\n"; 
        gameOverBox.textContent += "GAME OVER! You may restart the game by clicking any button.\n"

        computerScore = humanScore = 0;
    }
    
    
    roundNumber++;
    
    
    // if endGame has been called, round number will now exceed 5
    roundNumber = roundNumber > 5 ? 1 : roundNumber;


    const gameOverBox = document.querySelector("#game-over");
    const messageBox = document.querySelector("#message");
    if (
        (humanChoice === "rock" && computerChoice === "paper")
        ||
        (humanChoice === "paper" && computerChoice === "scissors")
        ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        messageBox.textContent = `Round ${roundNumber}:\n` +
        (`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (
        (humanChoice === computerChoice)
    ) {
        messageBox.textContent = `Round ${roundNumber}:\n` +
        (`Tie! Computer chose ${computerChoice}, same as you!`);

    } else {
        messageBox.textContent = `Round ${roundNumber}:\n` +
        (`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    gameOverBox.textContent = "ONGOING GAME: YOU VS COMPUTER";
    updateScores(humanScore, computerScore);

    if (roundNumber === 5) endGame();
}
function getResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `You win! ${humanScore}-${computerScore}`;
    } else if (humanScore < computerScore) {
        return `You lose! ${humanScore}-${computerScore}`;
    } else {
        return `It's a tie! ${humanScore}-${computerScore}`;
    }
}

function updateScores(humanScore, computerScore) {
    const humanScoreElement = document.querySelector("#player-score");
    const computerScoreElement = document.querySelector("#computer-score")
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

// function playGame() {
    

//     for (let i = 0; i < 5; i++) {
//         playRound(getComputerChoice(), getHumanChoice());
//     }

//     console.log(getResult(humanScore, computerScore));
// }

// variables and stuff

let humanScore = 0,
    computerScore = 0,
    roundNumber = 0;
const humanChoiceButtonsContainer = document
.querySelector('#choice-button-container');

humanChoiceButtonsContainer.addEventListener('click', e => {
    switch (e.target.id) {
        case 'rock':
            case 'paper':
                case 'scissors':
                    playRound(e.target.id, getComputerChoice());
                    break;
    }
})