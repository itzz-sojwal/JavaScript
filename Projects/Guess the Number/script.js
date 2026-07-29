function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let secretNumber = generateRandomNumber();
let attemptCount = 0;

const input = document.getElementById("input");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

console.log(secretNumber);

guessBtn.addEventListener("click", guessNumber);
resetBtn.addEventListener("click", resetgame);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    guessBtn.click();
  }
});

function guessNumber() {
  const guess = Number(input.value)

    attemptCount++
    attempts.textContent = `Attempts : ${attemptCount}`

  if (guess === secretNumber){
    message.textContent = "Congrats !!! You guessed the number"
    attempts.textContent = "Attempts : 0"
    attemptCount = 0;
    input.value = ""
    secretNumber = generateRandomNumber();
    console.log(secretNumber)
  } 
  else if(guess > secretNumber){
    message.textContent = "Nahhh..... the number's smaller"
    input.value = ""
  } 
  else if(guess < secretNumber) {
    message.textContent = "Nahhh..... the number's bigger"
    input.value = ""
  }
}

function resetgame() {
  attemptCount = 0;
  attempts.textContent = "attempt : 0"
  secretNumber = generateRandomNumber();
  message.textContent = "";
  console.log(secretNumber);
}

