const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, A, M, B] = input.map(v => v.split(' ').map(Number));

A.sort((a, b) => a - b);

const setA = new Set(A);
const result = B.map(b => setA.has(b) ? 1 : 0 );

console.log(result.join(' '));