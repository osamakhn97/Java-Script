

const startGameBtn = document.getElementById("start-game-btn");
const paper = "PAPER";
const rock = "ROCK";
const scissors = "SCISSORS";
let gameRunning = false;
const defaultVal = "ROCK";
const Draw = "DRAW";
const getComputerChoice = function () {
  const val = Math.random();
  if (val < 0.34) {
    return rock;
  } else if (val < 0.64) {
    return paper;
  } else {
    return scissors;
  }
};
const battle = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
      gameRunning = false;
     Draw;
  } else if (
    (pChoice === paper && cChoice === rock) ||
    (pChoice === scissors && cChoice === paper) || 
    (pChoice === rock && cChoice === scissors) 
  ) {
      gameRunning = false;
      return "You Win";
  }
  else {
      gameRunning = false;
      return "You loose";
  }
};
function selection() {
  gameRunning = true;
  try {
    let tool = prompt("Choose paper,Rock or Scissors", "").toUpperCase();

    if (tool !== paper && tool !== rock && tool !== scissors) {
      console.log(defaultVal);
      return defaultVal;
    } else {
      return tool;
    }
  } catch (e) {
    
    return ;
  }
}
const start = () => {
  if (gameRunning) {
    return;
  } else {
    console.log("Starting......");
    let myTool = selection();
    let compTool = getComputerChoice();
    let result = battle(myTool,compTool);
    console.log(result);
  }
};

startGameBtn.addEventListener("click", start);

// function not related to game 

const sum = (...numbers)=>{
    let sum = 0;
for (const e of numbers){
    sum+=e;

}
console.log(sum);
    
}

sum(1,2,3,4,5,5);

const dummy = (defaultVal = 0)=>{

    console.log(defaultVal);
}
dummy();



let newSum = (resultHandler, ...numbers)=> {
    let sum = 0;
for (const n of numbers){
    sum +=n;
}

resultHandler(sum);
}

const result = (addition)=>{
console.log(addition);
}

newSum(result,1,2,3,4,5);

// working with bind function

x = 25;

let num = {
    x :39,
    getX: function(){
console.log(this.x)
    }
}

num.getX();
let getX = num.getX;
getX();
let y = num.getX.bind(num);
y();