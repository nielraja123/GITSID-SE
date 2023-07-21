const readline = require("readline");

function A000124(n) {
  if (isNaN(n) || n <= 0 || n > 1000) {
    throw new Error("Maksimal 1000.");
  }

  const output = [1];
  let currentNumber = 1;

  for (let i = 2; i <= n; i++) {
    currentNumber += i - 1;
    output.push(currentNumber);
  }

  return output.join("-");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input ", (answer) => {
  const input = parseInt(answer);
  try {
    const output = A000124(input);
    console.log("Output:", output);
  } catch (error) {
    console.log(error.message);
  }

  rl.close();
});
