const attackValue = 10;
const monsterAttackValue = 14;
let choosenMaxLife = 100;
let currentMonsterLife = choosenMaxLife;
let currentPlayerLife = choosenMaxLife;
const strongAttackValue = 25;
const playerHealthValue = 16;
const strongMonsterAttack = "sMattack";
const strongPlayerAttack = "Strong Player Attack";
const monsterAttack = "Monster Attack";
const playerAttack = "Player Attack"
const gameOver = "Game Over";
const Healing = "Healing"
let gameLog = [];

function writeLog(eve,finalPlayerHealth, finalMonsterHealth,val){
let logObj = {
   myEvent:eve,
   playerHealth:finalPlayerHealth,
   monsterHealth:finalMonsterHealth,
   value:val
}
if(eve=== strongPlayerAttack){
logObj.target = "Monster";
}
else if(eve=== playerAttack){
   logObj.target = "Monster";
}
else if(eve=== strongMonsterAttack){
   logObj.target = "Player";
}
else if(eve=== monsterAttack){
   logObj.target = "Player";

}
else if(eve === Healing){
   logObj.target = "Player";
}
gameLog.push(logObj);

}
let strength;
let bonusLife = true;
function reset(){
   currentPlayerLife = choosenMaxLife;
   currentMonsterLife = choosenMaxLife;
   resetGame(choosenMaxLife);
}
function endRound(){

   const playerDamage = dealPlayerDamage(monsterAttackValue);
   let initialHealth = currentPlayerLife;
   currentPlayerLife -= playerDamage;
   writeLog(monsterAttack,currentPlayerLife,currentMonsterLife,playerDamage);
   if(currentPlayerLife<=0 && bonusLife){
      bonusLife = false;
      currentPlayerLife = initialHealth;
      alert("you got another chance");
      removeBonusLife();
      setPlayerHealth(currentPlayerLife);
      

   }
   if(currentMonsterLife<=0 && currentPlayerLife>0){

      alert('you win');
      writeLog(gameOver,currentPlayerLife,currentPlayerLife,"you win");
     
     }
     else if(currentPlayerLife<=0 && currentMonsterLife>0){
      alert('you loose');
      writeLog(gameOver,currentPlayerLife,currentPlayerLife,"you loose");
     }
     else if(currentPlayerLife<=0 && currentMonsterLife<=0){
      alert('draw')
      writeLog(gameOver,currentPlayerLife,currentPlayerLife,"Draw");
      }

   if(currentMonsterLife<=0 && currentPlayerLife>0 ||
      currentPlayerLife<=0 && currentMonsterLife>0 ||
      currentPlayerLife<=0 && currentMonsterLife<=0
      ){
reset();
   }
}


function attack(mode){
if(mode==="Strong"){
strength = strongAttackValue;
writeLog(strongPlayerAttack,currentPlayerLife,currentMonsterLife,strongAttackValue);

}
else{
strength = attackValue
writeLog(playerAttack,currentPlayerLife,currentMonsterLife,attackValue);
}


const damage =  dealMonsterDamage(strength);
currentMonsterLife -=damage;
endRound();

}


attackBtn.addEventListener('click',()=>{
   attack("Weak");

});
strongAttackBtn.addEventListener('click',()=>{

attack("Strong");

})
healBtn.addEventListener('click',()=>{
if(choosenMaxLife>=currentPlayerLife+playerHealthValue){
   increasePlayerHealth(playerHealthValue);
   currentPlayerLife += playerHealthValue;
   endRound();
   writeLog(Healing,currentPlayerLife,currentMonsterLife,"Healing")
}
else{
   alert("sorry you cannot upgrade your health");
   endRound();
}

})
logBtn.addEventListener('click',()=>{
   console.log(gameLog);
})

var names = "Ali";

