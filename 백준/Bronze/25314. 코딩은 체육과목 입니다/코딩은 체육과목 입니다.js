const n = require('fs').readFileSync("/dev/stdin").toString().trim();
let text = 'long ';
const turn = n / 4;

text = text.repeat(turn).trimEnd();

console.log(`${text} int`);