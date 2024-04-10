const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

// 서로 다른 값 === 중복 값을 제외한다.
let setArr = new Set([]);

for(let i = 0; i < input.length; i++) {
	setArr.add(input[i] % 42);
}

console.log(setArr.size);