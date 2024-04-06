const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let max = input[0];

for(let i=1; i <= input.length; i++) {
	if(input[i] > max) {
		max = input[i];
	}
}


console.log(max + '\n' + (input.indexOf(max) + 1));