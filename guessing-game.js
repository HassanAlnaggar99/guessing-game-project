let secretNumber = 14;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkGuess(num) {
  // console.log(`input: ${num}`);
  if (num > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low.");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}

function askGuess() {
  rl.question("Enter a guess: ", (ans) => {
    let num = Number(ans);
    let guess = checkGuess(num);

    if (guess) {
      console.log("YOU WON!");
      rl.close();
    } else {  // if guess == false
      askGuess();
    }
  });
}

askGuess();
