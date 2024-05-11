let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function getHumanChoice(){
    let choice = prompt("Type your choice (Rock, Paper or Scissors)").toLocaleLowerCase();

    if(choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
    }
    else{
        return alert("Please input a valid choice!");
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection){
    if(humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "paper" && computerSelection == "rock" || humanSelection == "scissors" && computerSelection == "paper"){
        return `You win! ${humanSelection} beats ${computerSelection}`;
    }
    else if(humanSelection == "scissors" && computerSelection == "rock" || humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissors"){
        return `You lose! ${computerSelection} beats ${humanSelection}`;
    }
    else if(computerSelection == humanSelection){
        return "Draw!";
    }
    else{
        return "Please select a valid input!";
    }
}

playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));