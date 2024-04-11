const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const S = input[0];
const i = +input[1];

const result = S.charAt(i - 1);
console.log(result);