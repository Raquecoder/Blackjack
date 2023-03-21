let firstCard = 0;
let secondCard = 0;
let sum = firstCard + secondCard  ;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
//console.log(messageEl); esto es para probar que agarre el id

let sumEl =document.getElementById("sum-el");
//console.log(sumEl);




function startGame(){
sumEl.textContent = "Sum:"+ sum;
if(sum <21) {
    message ="Do you want to draw a new card?"
} else if (sum === 21) {
message = "You've got BlackJack!"  
hasBlackJack = true
} else {
    message ="You are out of the game!"
    isAlive = false;
}


messageEl.textContent= message;

}
