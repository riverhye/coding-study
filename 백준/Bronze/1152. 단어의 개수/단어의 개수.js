const n = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

console.log( n[0] === '' ? 0 : n.length);