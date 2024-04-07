// bucket에는 n개의 요소가 있고, 인덱스는 0부터 시작해 n-1까지다.
// 주머니 넣기(for문 순회)는 총 m회 실시된다.

// 풀이 1. 시간 효율성을 고려한 for문&if문 활용
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 바구니 생성 : n개의 초기값
let bucket = [];
for (let i = 0; i < n; i++) {
  bucket.push(0);
}

for (let i = 1; i <= m; i++) {
  let [startIdx, endIdx, num] = input[i].split(' ').map(Number);

  bucket[startIdx - 1] = num;
  bucket[endIdx - 1] = num;

  // 둘 이상의 바구니에 넣을 경우
  if (endIdx - startIdx > 0) {
    for (let i = startIdx; i < endIdx; i++) {
      bucket[i - 1] = num;
    }
  }
}

console.log(bucket.join(' '));

// 풀이 2. slice(인덱스 맞추기), fill(배열 요소 채워서 만들기)로 가독성 좋게
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// 바구니 생성 : n개의 초기값
const bucket = Array(n + 1).fill(0); // 0번 인덱스는 자리 차지 용도

for(let i = 1; i <= m; i++) {
	const [startIdx, endIdx, num] = input[i].split(' ').map(Number);

		for(let j = startIdx; j <= endIdx; j++) {
			bucket[j] = num;
		}
}

console.log(bucket.slice(1).join(' '));
