const [n, input] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +n;
let scores = input.split(' ').map(Number);

const M = Math.max(...scores);


for (let i = 0; i < N ; i++) {
	scores[i] = scores[i] / M * 100;
}


const result = scores.reduce((acc, cur, idx) => {
	return acc += cur;
}, 0)


console.log((result / N).toFixed(2));