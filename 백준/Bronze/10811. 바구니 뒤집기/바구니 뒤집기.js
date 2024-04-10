const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const bucketArr = input[0].split(' ').map(Number);
let bucket = Array(bucketArr[0] + 1).fill(0).map((a, b) => a + b); //바구니
const M = +bucketArr[1]; // 횟수


for(let idx = 1; idx <= M; idx++) {
	const [i, j] = input[idx].split(' ').map(Number);

	// bucket에서 인덱스 i부터 j까지 역순으로
	const arr = bucket.slice(i, j + 1).reverse();

  // 인덱스 i부터 arr의 크기만큼 요소를 삭제하고, 그 자리를 arr의 요소로 fill
	bucket.splice(i, arr.length, ...arr);
}

console.log(bucket.slice(1).join(' '));