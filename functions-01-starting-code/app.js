const startGameBtn = document.getElementById('start-game-btn');
const paper = "PAPER";
const rock = "ROCK";
const scissors = "SCISSORS";
let gameRunning = false;
const defaultVal = "ROCK";


function selection(){
    gameRunning = true;
    try {
        let tool = prompt("Choose paper,Rock or Scissors",'').toUpperCase();

if(tool !== paper &&
tool !== rock &&
tool !== scissors
){
console.log(defaultVal);
return defaultVal
    
}
else{
    return tool
}
    } catch (e) {
        console.log("We have selected rock for you");
        return defaultVal
    }


}
const start =  ()=>{

   if(gameRunning){
       return
   }
   else{
    console.log("Starting......");
    let myTool = selection();
    console.log(myTool);
   }
   
}
   

startGameBtn.addEventListener('click',start);