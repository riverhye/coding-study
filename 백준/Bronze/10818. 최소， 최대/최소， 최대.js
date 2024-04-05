const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +input[0];
const numArr = input[1].split(' ').map(Number);

const max = Math.max(...numArr);
const min = Math.min(...numArr);

console.log(min + ' ' + max);