// if의 닫는 괄호 ) 를 빼먹음
// 변수명은 의미를 담아서

// const year = require('fs').readFileSync('/dev/stdin').toString().trim()
// if ( year%4 == 0 && ( year%100 != 0 || year%400 == 0)) console.log('1')
// else console.log('0');

const x = -10
const y = -9

if(x > 0 && y > 0) console.log(1);
else if (x<0 && y<0) console.log(3);
else if (x>0) console.log(4)
else console.log(2);

// 둘다 양수
// !둘다 양수 => (x만 양수, y만 양수,) 둘다 음수
// !둘다 음수 => x만 양수
// !x만 양수 => y만 양수