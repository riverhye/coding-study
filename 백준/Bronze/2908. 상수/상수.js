const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = Array.from(a).reverse().join('');
const B = b.split('').reverse().join('');

let result = 0;
if(Number(A) > Number(B)) {
    result = Number(A);
} else {
    result = Number(B);
}

console.log(result);