let playerScore = 0;
let computerScore = 0;
let roundwinner = '';
let overallWinner = '';

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

let humanSelection;
let computerSelection;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');

function playRound(humanSelection, computerSelection){
    if(humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "paper" && computerSelection == "rock" ||
        humanSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        roundwinner = 'You win!';
    };
    if(humanSelection == "scissors" && computerSelection == "rock" ||
        humanSelection == "rock" && computerSelection == "paper" ||
        humanSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        roundwinner = 'You lose!';
    };
    if(computerSelection == humanSelection){
        roundwinner = 'none';
    };
    if(playerScore == 5){
        overallWinner = 'Player!';
        score.appendChild(p4).innerHTML = 'Overall Winner: ' + overallWinner;
    };
    if(computerScore == 5){
        overallWinner = 'Computer!';
        score.appendChild(p4).innerHTML = 'Overall Winner: ' + overallWinner;
    };
    if(playerScore == 5 || computerScore == 5){
        p1.style.display = 'none';
        p2.style.display = 'none';
        p3.style.display = 'none';

        document.getElementsByClassName('rock').disable = true;
        document.getElementsByClassName('paper').disable = true;
        document.getElementsByClassName('scissors').disable = true;

        score.appendChild(p5).innerHTML = 'Reload the page to restart the game';
    };
};

function game(){
    playRound(humanSelection, computerSelection);
        score.appendChild(p1).innerHTML = 'Player Score: ' + playerScore;
        score.appendChild(p2).innerHTML = 'Computer Score: ' + computerScore;
        score.appendChild(p3).innerHTML = 'Round Winner: ' + roundwinner;
    };

    rock.addEventListener('click', e =>{
        computerSelection = getComputerChoice();
        humanSelection = 'rock';
        game();
    });
    paper.addEventListener('click', e =>{
        computerSelection = getComputerChoice();
        humanSelection = 'paper';
        game();
    });
    scissors.addEventListener('click', e =>{
        computerSelection = getComputerChoice();
        humanSelection = 'scissors';
        game();
    });
