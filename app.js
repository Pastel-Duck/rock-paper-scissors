function getComputerChoice(){
    return Math.floor(Math.random() * 3);
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

