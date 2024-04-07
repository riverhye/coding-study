const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input[0].split(' ').map(Number);
const n = arr[0];
const m = arr[1];

let bucket = [];
for(let i = 0; i < n; i++) {
	bucket.push(0);
}

for(let i = 1; i <= m; i++) { // cmd에 대한 index : i
	let cmd = input[i].split(' ').map(Number);
	let startIdx = cmd[0];
	let endIdx = cmd[1];
	let num = cmd[2];

		bucket[startIdx - 1] = num;
		bucket[endIdx - 1] = num;
		if(endIdx - startIdx > 0) {
			for(let i=startIdx; i<endIdx; i++) {
				bucket[i - 1] = num;
			}
		}
}

console.log(bucket.join(' '));