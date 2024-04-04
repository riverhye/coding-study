const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = input[0];
const arr = input[1].split(' ');
const v = input[2];

console.log(arr.filter((el) => +el === +v).length);