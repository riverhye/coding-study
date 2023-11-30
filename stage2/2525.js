// const input = require('fs').readFileSync('/dev/stadin').toString().split('\n');
// let h = Number(input[0].split(' ')[0]);
// let m = Number(input[0].split(' ')[1]);
// const t = Number(input[1]);

let h = 23;
let m = 40;
const t = 80;
// h가 23 이후로는 0, 1, 2, ...
// 할당?

if ((m + t) % 60) {
  h = h + (m + t) / 60;
  m = (m + t) % 60;
} else {
}

console.log(h, m, t);
