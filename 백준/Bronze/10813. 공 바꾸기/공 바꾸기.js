// Ver 1.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let bucket = [];
for(let i = 0; i <= n; i++) {
	bucket.push(i);
}

for(let idx = 1; idx <= m; idx++) {
	const [i, j] = input[idx].split(' ');
	const copyBucket = [...bucket];
	copyBucket[i] = bucket[j];
	copyBucket[j] = bucket[i];
	bucket = copyBucket;
}

console.log(bucket.slice(1).join(' '));

// Ver 2.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// make a bucket
const bucket = Array(n + 1).fill(0).map((el, i) => el + i);

// 배열 전체 복사하는 대신 한 값만 변수에 담아두기
for(let idx = 1; idx <= m; idx++) {
	const [i, j] = input[idx].split(' ');
	const tmp = bucket[j];
	bucket[j] = bucket[i];
	bucket[i] = tmp;
}

console.log(bucket.slice(1).join(' '));
