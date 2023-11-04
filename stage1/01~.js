// 2557
// console.log("Hello World!");

// 1000, 1001, 10998 (+, -, *)
// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// const A = parseInt(input[0]);
// const B = parseInt(input[1]);

// console.log(A+B);

// 10869
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = Number(input[0]);
const B = Number(input[1]);

console.log((A+B) + '\n' + (A-B) + '\n' + (A*B) + '\n' + (Math.floor(A/B)) + '\n' + (A%B));
