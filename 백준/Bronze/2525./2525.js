// while문 : 조건의 반복
// 난관 1 : 문서 입출력 부분에 오타가 있었는지 제출하자마자 곧바로 런타임 에러 발생 지속
// 난관 2 : 조건문 === if문이라고만 생각해서 if절이 과히 길어졌다.

const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let [cHr, cMin] = input[0].split(' ').map(Number);
let cTime = +input[1] + cMin;

while (cTime >= 60) {
  cHr += 1;
  if (cHr >= 24) cHr = 0;
  cTime -= 60;
}

console.log(`${cHr} ${cTime}`);

// key :
// 60분을 넘어갈 때부터 시 분 모두 변화(반복 누적)가 생기니까 그때 while문을 사용한다.
// while문으로 돌려주면 `Math.floor`, `%` 같은 게 아예 필요 없다!

// 변수는 백틱으로 묶어 써야(이건 백준 프로그램에 국한된 것 같기도 하지만) 성능이 더 빠르다. (들여쓰기는 노 상관!)
