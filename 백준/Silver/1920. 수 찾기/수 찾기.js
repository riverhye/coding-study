const [N, A, M, B] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const arrA = A.split(' ');
const arrB = B.split(' ');

const newArrA = new Set(arrA);
const result = arrB.map(el => newArrA.has(el) ? 1 : 0);
console.log(result.join('\n'));