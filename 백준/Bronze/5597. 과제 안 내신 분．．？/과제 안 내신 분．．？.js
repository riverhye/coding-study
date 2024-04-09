// Ver 1. 배열 만들어 메서드 활용
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);


const arr = Array(30).fill(1).map((a,b) => a+b); //1부터 30이 담긴 배열

let result = [];
for(let i = 0; i < 30; i++) {
	result = arr.filter(el => !input.includes(el));
}

result.sort((a, b) => a - b); // 오름차순 정렬

console.log(result.join('\n'));


// Ver 2. 배열 생성 없이 순회문의 인덱스 이용
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let result = [];
for(let i = 1; i <= 30; i++) {
	if(input.includes(i)) continue;
	result.push(i);
}

result.sort((a, b) => a - b); // 오름차순 정렬

console.log(result.join('\n'));
