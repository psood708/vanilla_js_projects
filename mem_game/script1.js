const cardArray = [
    {
        name:'goku',
        img:'Images/goku.jfif'
    },
    {
        name:'naruto',
        img:'Images/naruto.jfif'
    },
    {
        name:'gojo',
        img:'Images/gojo.jfif'
    },
    {
        name:'ippo',
        img:'Images/ippo.jfif'
    },
    {
        name:'onizuka',
        img:'Images/onizuka.jfif'
    },
    {
        name:'kuroko',
        img:'Images/kuroko.jfif'
    },
    {
        name:'goku',
        img:'Images/goku.jfif'
    },
    {
        name:'naruto',
        img:'Images/naruto.jfif'
    },
    {
        name:'gojo',
        img:'Images/gojo.jfif'
    },
    {
        name:'ippo',
        img:'Images/ippo.jfif'
    },
    {
        name:'onizuka',
        img:'Images/onizuka.jfif'
    },
    {
        name:'kuroko',
        img:'Images/kuroko.jfif'
    }
]
//this is used to sort the array and it will give random values to different object in arrays.
cardArray.sort(()=>0.5-Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
let cardsChosen =[];
const resultDisplay = document.querySelector('#result');
let cardsChosenId=[];
let cardsWon=[];
//this below is to create the board and we create an img class here
function createBoard(){
    for(let i =0;i<12;i++){
        const card = document.createElement('img');
        card.setAttribute('src','Images/cover.jfif');
        card.addEventListener('click',flipCard);
        card.setAttribute('data-id',i);
        gridDisplay.appendChild(card);
        // console.log(card,i);
    }
}
createBoard();
function checkMatch(){
    const cards  =document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(optionOneId===optionTwoId){
        alert('You Have clicked the same image!!');
    }
    // console.log("Check for A Match!!");
    if(cardsChosen[0]==cardsChosen[1]){
        alert("You Found a Match!!");
        cards[cardsChosenId[0]].setAttribute('src','Images/Solid_white_bordered.png');
        cards[cardsChosenId[1]].setAttribute('src','Images/Solid_white_bordered.png');
        cards[cardsChosenId[0]].removeEventListener('click',flipCard);
        cards[cardsChosenId[1]].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute('src','Images/cover.jfif');
        cards[optionTwoId].setAttribute('src','Images/cover.jfif');
        alert("Sorry Try Again!!");

    }
    resultDisplay.textContent=cardsWon.length;
    cardsChosen=[];
    cardsChosenId=[];

    if(cardsWon.length == cardArray.length/2){

        resultDisplay.textContent="CONGRATULATIONSS!!!! You have got them all"
    }
}

function flipCard(e){
    console.log(cardArray)
    let cardId= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log('Clicked',cardId);
    console.log(cardsChosen);
    console.log(cardsChosenId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500);
    }
    
}