const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [K, N] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let min = 1;
let max = Math.max(...lines);

while(min <= max) {
	const mid = Math.floor((min + max) / 2);
	
	// 각 배열 요소를 기준값으로 자르기
	// <문자열을 숫자로 변환>
	// Number : 순수하게 숫자만, 숫자와 문자열이 포함될 경우 NaN 반환
	// parseInt : 숫자로 시작할 시 문자열 전까지만 숫자로, 문자열로 시작하면 NaN 반환, 소수점 없이 정수만
	const pieceCount = lines.reduce((acc, cur) => parseInt(acc + cur / mid), 0);
	
	if (pieceCount < N) { // 목표 개수보다 작으면
		max = mid - 1; // mid를 줄여서 더 작은 기준값으로 자르기
	} else {
		min = mid + 1; // 목표 개수와 같거나 클 땐 mid를 키워서 최대값에 가까워지기
	}
}

console.log(max); // 최대 개수
