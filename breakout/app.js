const grid = document.querySelector('.grid');
const blockWidth = 100;
const scoreDisplay = document.querySelector("#score");
const blockHeight = 25;
const userStart = [280,20];
let currentPosition = userStart;
const ballDiameter = 30;
const boardWidth = 800;
const boardHeight = 500;
let timerID;
let dir_t = Math.random();
let xDirection = -2;
let yDirection = 2;
let score = 0;
const game_over = document.querySelector('#game_over');
const block_hit = document.querySelector('#block_hit');
const ballStart = [365,65];
let ballCurerntPosition = ballStart;
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis];
        this.bottomRight = [xAxis+blockWidth,yAxis];
        this.topLeft = [xAxis,yAxis+blockHeight];
        this.topRight = [xAxis+blockWidth,yAxis+blockHeight];
    }
}

const blocks= [new Block(10,450),new Block(120,450),new Block(230,450),new Block(340,450),new Block(450,450),new Block(560,450),new Block(670,450),new Block(10,410),new Block(120,410),new Block(230,410),new Block(340,410),new Block(450,410),new Block(560,410),new Block(670,410),new Block(10,370),new Block(120,370),new Block(230,370),new Block(340,370),new Block(450,370),new Block(560,370),new Block(670,370),
     ];
console.log(blocks[0]);
//draw my blocks
function addBlocks(){
// 
for(let i =0;i<blocks.length;i++){
    const block =document.createElement('div');
    block.classList.add('block');
    block.style.left=blocks[i].bottomLeft[0] + 'px';
    block.style.bottom=blocks[i].bottomLeft[1]+'px';
    grid.appendChild(block);
    // console.log(blocks[i].bottomLeft)
  }

}
addBlocks();

//add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);
function drawUser(){
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1]+'px';
}

//draw the ball
function drawBall(){
    ball.style.left = ballCurerntPosition[0]+'px';
    ball.style.bottom = ballCurerntPosition[1]+'px';
    // console.log(ballCurerntPosition[0],ballCurerntPosition[1]);
}

//move user
function moveUser(e){

    switch(e.key){
        case'ArrowLeft':
        if(currentPosition[0]>10){
        currentPosition[0] -= 15;
        drawUser()
        }
        break;
        case'ArrowRight':
        if(currentPosition[0]<boardWidth-blockWidth-110){
        currentPosition[0] += 15;
        drawUser()
        }
        break;
    }
}
document.addEventListener('keydown',moveUser);

//creating a ball

const ball = document.createElement('div');
ball.classList.add('ball');
// drawBall();
grid.appendChild(ball);


//move the ball
function moveBall(){
      ballCurerntPosition[0]+=xDirection;
      ballCurerntPosition[1]+=yDirection;
      drawBall();
      checkForCollisions();
}
timerID = setInterval(moveBall,10);

function checkForCollisions(){
    //cgheck for block collisionsz
    for(let i =0;i<blocks.length;i++){
        if(ballCurerntPosition[0]>blocks[i].bottomLeft[0] && ballCurerntPosition[0]< blocks[i].bottomRight[0] && (ballCurerntPosition[1] + ballDiameter)> blocks[i].bottomLeft[1] && ballCurerntPosition[1]<blocks[i].topLeft[1]){
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            blocks.splice(i,1);
            changeDirection();
            block_hit.play();
            score++;
            if(blocks.length===0){
                scoreDisplay.innerHTML="Game Over You won!!"
            }

            scoreDisplay.innerHTML = score;
        }
    }

    //check for wall collisions
    if(ballCurerntPosition[0]>=(boardWidth - ballDiameter) || ballCurerntPosition[1]>=(boardHeight-65)  || ballCurerntPosition[0]<= 20 ){
        changeDirection();
    }

    //check for user collisonsz

    if((ballCurerntPosition[0]>currentPosition[0] && ballCurerntPosition[0]<(currentPosition[0]+(2*blockWidth))) && (ballCurerntPosition[1]>currentPosition[1]) && ballCurerntPosition[1]<(currentPosition[1]+blockHeight+10)){
        changeDirection();
    }


    if(ballCurerntPosition[1]<=0){
        clearInterval(timerID);
        game_over.play();
        scoreDisplay.textContent ="Game Over!! Your Score: "+score;
        
        document.removeEventListener('keydown',moveUser)

    }
}
function changeDirection(){
  if(xDirection===2 && yDirection ===2){
      yDirection = -2;
      return
  }
  if(xDirection===2 && yDirection ===-2){
    xDirection = -2;
    return
    }
  if(xDirection===-2 && yDirection ===-2){
        yDirection = 2;
        return
    }
    if(xDirection===-2 && yDirection ===2){
        xDirection = 2;
        return
    }
}