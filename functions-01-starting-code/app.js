const startGameBtn = document.getElementById('start-game-btn');
const paper = "PAPER";
const rock = "ROCK";
const scissors = "SCISSORS";
let gameRunning = false;
const defaultVal = "ROCK";


function selection(){
    
let tool = prompt("Choose paper,Rock or Scissors",'').toUpperCase;
if(tool !== paper &&
tool !== rock &&
tool !== scissors
){
alert(`we have selected ${defaultVal} for you`);
return defaultVal
    
}
else{
    return tool
}

}
const start =  ()=>{

   if(gameRunning){
       return
   }
   else{
    console.log("Starting......");
    let myTool = selection();
    alert(myTool)
   }
   
}
   

startGameBtn.addEventListener('click',start);