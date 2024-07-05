const prompt = require("prompt-sync")();

let result = 0;

const num = prompt("어디까지 더할까요?");

for (let i = 1; i < Number(num) + 1; i++) {
  result += i;
}

console.log(result);
