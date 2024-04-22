const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
// shift로 인덱스 0 분리
const [K, N] = input.shift().split(' ').map(Number);
// 나머지 input 정렬
const lines = input.map(Number).sort((a, b) => a - b);

let min = 1;
let max = Math.max(...lines);

// 이진 탐색
while(min <= max) {
    // mid : 랜선을 자르는 길이 기준
	const mid = Math.floor((min + max) / 2);
	
	// <문자열을 숫자로 변환>
	// Number : 순수하게 숫자만, 숫자와 문자열이 포함될 경우 NaN 반환
	// parseInt : 숫자로 시작할 시 문자열 전까지만 숫자로, 문자열로 시작하면 NaN 반환, 소수점 없이 정수만
	const pieceCount = lines.map(line => parseInt(line / mid)).reduce((acc, cur) => acc + cur, 0);
	
    // 목표 개수보다 작다 => 자르는 기준(mid)이 너무 크다 => 탐색 범위를 좁힌다
	if (pieceCount < N) { 
        max = mid - 1;
    // 목표 개수와 같거나 크다 => 자르는 기준(mid) 중에서 최댓값을 찾자
	} else {
		min = mid + 1; 
	}
}

console.log(max);