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

function getResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `You win! ${humanScore}-${computerScore}`;
    } else if (humanScore < computerScore) {
        return `You lose! ${humanScore}-${computerScore}`;
    } else {
        return `It's a tie! ${humanScore}-${computerScore}`;
    }
}

function playGame() {
    let humanScore = 0,
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        if (
            (humanChoice === "rock" && computerChoice === "paper")
            ||
            (humanChoice === "paper" && computerChoice === "scissors")
            ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else if (
            (humanChoice === computerChoice)
        ) {
            console.log(`Tie! Computer chose ${computerChoice}, same as you!`);
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    console.log(getResult(humanScore, computerScore));
}

// variables and stuff

playGame(); // play the game as soon as page loads