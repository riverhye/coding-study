const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);


const arr = Array(30).fill(1).map((a,b) => a+b); //1부터 30이 담긴 배열

let result = [];
for(let i = 0; i < 30; i++) {
	result = arr.filter(el => !input.includes(el));
	result.sort((a, b) => a - b);
}

console.log(result.join('\n'));