const readline = require("readline");

function isBalanced(expression) {
  const openingBrackets = new Set(["{", "[", "("]);
  const matchingPairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (openingBrackets.has(char)) {
      stack.push({ char, index: i });
    } else if (matchingPairs[char]) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1].char !== matchingPairs[char]
      ) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input bracket: ", (expression) => {
  const result = isBalanced(expression);
  console.log(`Balanced? ${result}`);
  rl.close();
});
