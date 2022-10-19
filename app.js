const roundDisplay = document.createElement('h1');
const playerDisplay = document.createElement('h1');
const playerScoreDisplay = document.createElement('h1');
const computerDisplay = document.createElement('h1');
const computerScoreDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const battleGrid = document.querySelector('.battle');
const startAgainButton = document.createElement('button');
battleGrid.append(roundDisplay,playerDisplay,playerScoreDisplay,computerDisplay,computerScoreDisplay,resultDisplay);

let round = 1;
let playerScore = 0;
let computerScore = 0;
roundDisplay.innerHTML = 'Round '+round;
playerDisplay.innerHTML = 'Player: ';
playerScoreDisplay.innerHTML = 'Player Score: '+ playerScore;
computerDisplay.innerHTML = 'Computer: ';
computerScoreDisplay.innerHTML = 'Computer Score: '+ computerScore;
resultDisplay.innerHTML = 'Result: ';
startAgainButton.innerHTML = 'Start Again';
resultDisplay.after(startAgainButton);

const choices = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]


choices.forEach(choice => {
    const playerSelection = choice.name;
    const button = document.createElement('button');
    button.innerHTML = playerSelection;
    roundDisplay.after(button);
    button.addEventListener('click', e=>{
        if(round<=5){
            roundDisplay.innerHTML = 'Round '+round;
            round++;

            playerDisplay.innerHTML = 'Player: '+playerSelection;
            let computerSelection = getComputerChoice();
            displayComputerChoice(computerSelection);

            if(playerWins(playerSelection,computerSelection)){
                playerScore++;
                playerScoreDisplay.innerHTML = 'Player Score: '+ playerScore;
            }

            if(computerWins(playerSelection,computerSelection)){
                computerScore++;
                computerScoreDisplay.innerHTML = 'Computer Score: '+ computerScore;
            }

        }else{
            disableButton();
            result();
            setAllTextGray();
            startAgain();
        }
    })
});

function setAllTextGray(){
    const allTexts = document.querySelectorAll('h1');
    allTexts.forEach(text =>{
        text.style.opacity = '0.3';
    })
}

function startAgain(){
    startAgainButton.addEventListener('click', ()=>{
        round = 1;
        playerScore = 0;
        computerScore = 0;
        roundDisplay.innerHTML = 'Round '+round;
        playerDisplay.innerHTML = 'Player: ';
        playerScoreDisplay.innerHTML = 'Player Score: '+ playerScore;
        computerDisplay.innerHTML = 'Computer: ';
        computerScoreDisplay.innerHTML = 'Computer Score: '+ computerScore;
        resultDisplay.innerHTML = 'Result: ';
        activateButton();
        activateTexts();
    })
    
}

function activateButton(){
    const allButtons = document.querySelectorAll('button');
    for (let i = 0; i< 3; i++){
        allButtons[i].disabled =false;
    }
}

function activateTexts(){
    const allTexts = document.querySelectorAll('h1');
    allTexts.forEach(text =>{
        text.style.opacity = '1';
    })
}

function disableButton(){
    const allButtons = document.querySelectorAll('button');
    for (let i = 0; i< 3; i++){
        allButtons[i].disabled =true;
    }
}

function result(){
    if(playerScore>computerScore){
        resultDisplay.innerHTML = 'Result: Player WINS !';
    }
    if(playerScore<computerScore){
        resultDisplay.innerHTML = 'Result: Computer WINS !';
    }
    if(playerScore === computerScore){
        resultDisplay.innerHTML = 'Result: Tied.';
    }
}

function getComputerChoice(){
    let computerChocie = choices[Math.floor(Math.random()*choices.length)].name;
    return computerChocie;
}

function displayComputerChoice(computerSelection){
    computerDisplay.innerHTML = 'Computer: '+ computerSelection;
}

function playerWins(player, opponent){
    const found = choices.find(choice => choice.name === player);
    return found.beats === opponent;
}

function computerWins(player, opponent){
    const found = choices.find(choice => choice.name === opponent);
    return found.beats === player;
}


