const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice ;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1;
    console.log(randomNumber);
      if(randomNumber===1){
        computerChoice='rock';
      }
      else if(randomNumber===2){
        computerChoice='scissors';
      }
      else if(randomNumber===3){
        computerChoice='paper';
      }
    
    computerChoiceDisplay.innerHTML = computerChoice;
     
    
}

function getResult(){
    if(computerChoice===userChoice){
      result = "It's a draww!!";
    }
    else if(computerChoice==='rock' && userChoice==='paper'){
        result = 'You Win!!';
    }
    else if(computerChoice==='rock' && userChoice==='scissors'){
        result = 'You Lose!!';
    }
    else if(computerChoice==='paper' && userChoice==='scissors'){
        result = "You Win!!";
    }
    else if(computerChoice==='paper' && userChoice==='rock'){
        result='You Lose!!';
    }
    else if(computerChoice==='scissors' && userChoice==='rock'){
        result = 'You Win!!';
    }
    else if(computerChoice==='scissors' && userChoice==='paper'){
        result='You Lose!!';
    }

    resultDisplay.innerHTML = result;
}