const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, A, M, B] = input.map(v => v.split(' ').map(Number));

// Set 객체는 요소의 중복 불가, Map 객체는 중복 가능.
const map = new Map();

// 1. N 배열의 key를 Map 객체에 세팅한다.
A.forEach(a => {
    if(map.has(a)) {
        map.set(a, map.get(a) + 1);
    } else {
        map.set(a, 1);
    }
});

// 2. 화살표로 저장되므로 결과 배열 새로 가공.
// 이때 A에 없는 b 요소는 0을 넣는다.
let result = [];
B.forEach(b => {
    if(map.get(b)) {
        result.push(map.get(b));
    } else {
        result.push(0);
    }
})

console.log(result.join(' '));