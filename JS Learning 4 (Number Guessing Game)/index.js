
const min = 1;
const max = 10;
let answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 1;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a random number from ${min} to ${max}`);
    guess = Number(guess)
    if(guess == answer){
        window.alert(`Congratulations! You guessed the number in ${attempts} attemps!`);
        running = false;
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a number between the given interval");
    }
    else if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++
        window.alert("That was incorrect! Try again!");
        answer = Math.round(Math.random() * (max - min + 1) + min);
    }
}
