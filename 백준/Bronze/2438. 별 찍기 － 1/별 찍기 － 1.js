const n = require('fs').readFileSync("/dev/stdin").toString().trim();

for(let i = 1; i <= n; i++) {
	console.log('*'.repeat(i));
}