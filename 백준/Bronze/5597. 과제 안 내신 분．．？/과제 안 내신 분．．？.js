const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let result = [];
for(let i = 1; i <= 30; i++) {
	if(input.includes(i)) continue;
	result.push(i);
}

result.sort((a, b) => a - b); // 오름차순 정렬

console.log(result.join('\n'));