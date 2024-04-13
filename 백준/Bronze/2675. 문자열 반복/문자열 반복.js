const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];

for (let i =1; i <= n; i++) {
	const inputArr = input[i].split(' ');
	const R = +inputArr[0];
	const S = inputArr[1].split('');
    
	let P = [];
	for(let j = 0; j < S.length; j++) {
	    P.push(S[j].repeat(R));
	}
    
	 console.log(P.join(''));
}
