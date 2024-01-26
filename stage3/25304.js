const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let total = +input[0];
let cnt = +input[1];
let result = 0;

for (let i = 2; i <= cnt + 1; i++) {
  let cal = input[i].split(' ');
  result += Number(cal[0]) * Number(cal[1]);
  // let cal = input[i].split(' ').map(Number);
  // result += cal[0] * cal[1];
}

console.log(total === result ? 'Yes' : 'No');

// 주석이 있으면 컴파일 시간이 더 걸린다.
// map보다 직접 Number로 형변환 해주는 게 메모리 공간을 덜 차지한다.
