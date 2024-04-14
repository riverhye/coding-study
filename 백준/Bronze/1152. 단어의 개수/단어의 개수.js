const n = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').filter(val => val !== '');

console.log(n.length);