const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, x] = input[0].split(' ');
const numArr = input[1].split(' ');

const newArr = numArr.filter(num => +x > +num);

console.log(newArr.join(' '));