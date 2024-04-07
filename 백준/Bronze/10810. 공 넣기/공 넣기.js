// bucket에는 n개의 요소가 있고, 인덱스는 0부터 시작해 n-1까지다.
// 주머니 넣기(for문 순회)는 총 m회 실시된다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const arr = input[0].split(' ').map(Number);
const n = arr[0];
const m = arr[1];

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
