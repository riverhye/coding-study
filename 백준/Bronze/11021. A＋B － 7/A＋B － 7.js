const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +input[0];

for(let i = 1; i <= n; i++) {
	let num = input[i].trim().split(' ');
	console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`);
}