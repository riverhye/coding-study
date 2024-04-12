const S = require('fs').readFileSync("/dev/stdin").toString().trim();

let result = [];
for(let i = 97; i <= 122; i++) {
	result.push(S.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));