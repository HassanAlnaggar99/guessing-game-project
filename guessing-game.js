// let secretNumber = 14;
let secretNumber = randomInRange(0, 100);

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

function randomInRange(min, max) {
  let ans = Math.floor(Math.random() * (max - min + 1) + min);
  return ans;
}

function askRange() {
  rl.question("Enter a min number: ", min => {
    min = Number(min);
    rl.question("Enter a max number: ", max => {
      max = Number(max);

      secretNumber = randomInRange(min, max);
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      askGuess();
      // rl.close();
});
  });
}

// askGuess();
// for (let i = 0; i < 20; i++)
//   console.log(randomInRange(15, 20));
askRange();
