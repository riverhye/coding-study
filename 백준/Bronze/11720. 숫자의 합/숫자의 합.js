const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = +input[0];
const nums = input[1];

const numsArr = nums.split('').map(Number);

const result = numsArr.reduce((acc, cur, idx) => {
	return acc += cur;
}, 0)

console.log(result);