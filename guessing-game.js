let secretNumber = 5;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkGuess(num) {
  console.log(`input: ${num}`);
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}

function askGuess() {

}
