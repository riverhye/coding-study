// 처음부터 나머지를 input으로 받는다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(el => (+el) % 42);

let setArr = new Set(input);

console.log(setArr.size);