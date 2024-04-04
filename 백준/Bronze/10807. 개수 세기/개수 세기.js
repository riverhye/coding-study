const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, arr, v] = input;
const arrNum = arr.split(' ');

const result = arrNum.reduce((acc, cur, idx) => {
	if(+cur === +v) {
	acc++;
	}
	return acc;
}, 0);

console.log(result);