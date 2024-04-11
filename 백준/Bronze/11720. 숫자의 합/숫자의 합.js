const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = +input[0];
const nums = input[1];

const numsArr = nums.split('').map(Number);

// Ver 1. reduce 활용
const result = numsArr.reduce((acc, cur, idx) => acc += cur);

// Ver 2. for문으로 하기 (메모리 할당 필요)
// let result = 0;
// for(let i = 0; i < N; i++) {
// 	result += numsArr[i];
// }

console.log(result);