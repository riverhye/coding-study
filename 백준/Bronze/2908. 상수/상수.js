const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = Number(a.split('').reverse().join(''));
const B = Number(b.split('').reverse().join(''));

console.log(A > B ? A : B);