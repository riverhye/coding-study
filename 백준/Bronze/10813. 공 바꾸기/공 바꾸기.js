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