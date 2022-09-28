//a function that will randomly an option among 'Rock', 'Paper' and 'Scissors'
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let randNum = Math.floor(Math.random()*3);
    return arr[randNum];
}

function playRound(playerSelection, computerSelection){
    
    let userInput = prompt('1.Rock 2.Paper 3.Scissors. Enter number.');
    computerSelection = getComputerChoice();

    if(userInput === "1"){
        playerSelection = "Rock";
    }
    if(userInput === "2"){
        playerSelection = "Paper";
    }
    if(userInput === "3"){
        playerSelection = "Scissors";
    }

    if(playerSelection === computerSelection){
        return `Tied.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }

    if(playerSelection ==='Rock' && computerSelection === 'Paper'){
        computerScore+=1;
        return `You lose.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }
    if(playerSelection ==='Rock' && computerSelection === 'Scissors'){
        playerScore+=1;
        return `You win.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }

    if(playerSelection ==='Paper' && computerSelection === 'Scissors'){
        computerScore+=1;
        return `You lose.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }
    if(playerSelection ==='Paper' && computerSelection === 'Rock'){
        playerScore+=1;
        return `You win.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }

    if(playerSelection ==='Scissors' && computerSelection === 'Rock'){
        computerScore+=1;
        return `You lose.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }
    if(playerSelection ==='Scissors' && computerSelection === 'Paper'){
        playerScore+=1;
        return `You win.
        Player : Computer = ${playerSelection} : ${computerSelection} = ${playerScore}:${computerScore}`;
    }
}

function game(){
    for(let i=1;i<6;i++){
        console.log(playRound(playerSelection, computerSelection));
    }
    
}

game();
