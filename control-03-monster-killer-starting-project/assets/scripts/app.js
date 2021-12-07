const attackValue = 10;
const monsterAttackValue = 14;
let choosenMaxLife = 100;
let currentMonsterLife = choosenMaxLife;
let currentPlayerLife = choosenMaxLife;
const strongAttackValue = 25;
const playerHealthValue = 16;
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
   if(currentPlayerLife<=0 && bonusLife){
      bonusLife = false;
      currentPlayerLife = initialHealth;
      alert("you got another chance");
      removeBonusLife();
      setPlayerHealth(currentPlayerLife);

   }
   if(currentMonsterLife<=0 && currentPlayerLife>0){

      alert('you win');
     
     }
     else if(currentPlayerLife<=0 && currentMonsterLife>0){
      alert('you loose');
     }
     else if(currentPlayerLife<=0 && currentMonsterLife<=0){
      alert('draw')
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

}
else{
strength = attackValue

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
}
else{
   alert("sorry you cannot upgrade your health");
   endRound();
}

})