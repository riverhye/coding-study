const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.sort((a, b) => a - b);

const avg = input.reduce((acc, cur) => acc += cur, 0) / input.length;

console.log(avg);
console.log(input[2]);