const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +input[0];

for(let i = 1; i <= n; i++) {
	let [num1, num2] = input[i].split(' ').map(Number);
	// let num1 = +num[0];
	// let num2 = +num[1];
	console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}