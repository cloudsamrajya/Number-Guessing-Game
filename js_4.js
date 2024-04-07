let randomNumber = parseInt(Math.random() *100 +1);
const input = document.querySelector('.inputfield');
const submit = document.querySelector ('.submit');
const prev = document.querySelector('.prev');
const life = document.querySelector('.remaining');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');

let numGuess = 1;

let playGame = true;
// console.log (randomNumber);

if(playGame){
    submit.addEventListener('click',(e)=>{
    e.preventDefault();
   
    const guess = parseInt(input.value);
    // console.log(guess);
    validate(guess);
})
}





validate = (guess)=>{
    
if (isNaN(guess)){
    alert('Please enter a number between 1 and 100');

}
else if (guess <1){
    alert('Please enter a number greater than 1');
}
else if(guess>100){
    alert ('Please enter a number lesser than 100');
}
else{
    
    if (numGuess===10){
        displayMessage("Game Over");
   
        displayGuess(guess);
        endGame();
    }
    else{
     
        displayGuess(guess);
        check(guess);
    }
}







}

check = (guess) =>{
 if ( guess === randomNumber){
    displayMessage("BINGO. You guessed it right");
    endGame();
 }
 else if (guess < randomNumber){
    displayMessage("You are too low");
 }
 else if (guess > randomNumber){
    displayMessage("You are too high");
 }

}





displayGuess = (guess) =>{
   
    prev.innerHTML +=  `${guess} `;
    numGuess ++;
    input.value = ' ';
    life.innerHTML = `${11-numGuess}`;








}

displayMessage = (message) =>{
msg.innerHTML = `<h2>${message}</h2>`;


}

endGame = () =>{
    input.value = '';
    input.setAttribute('disabled','');
    playGame = false;


}



btn.addEventListener('click',()=>{
   randomNumber= parseInt(Math.random() *100 +1);
//    console.log (randomNumber);

    input.value = '';
    input.removeAttribute('disabled');
   
  
    numGuess=1;
    prev.innerHTML = '';
    life.innerHTML = '10';
    msg.innerHTML = '';
    playGame =true;

})
