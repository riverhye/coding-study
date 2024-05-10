const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = new Array(N).fill(1).map((a, b) => a + b);

let result = [];
let i = 1;
while(arr.length > 0) {
    // arr를 다 비우고, 제거 순서대로 result 배열에 추가하려는 것
    // 배열의 첫 요소를 제거
    const firstEl = arr.shift();
    // 지금 순서가 제거해야 할 순서의 배수라면
    if(i % K == 0) {
        // 결과 배열에 추가
        result.push(firstEl);
    } else {
        // 아니라면, 원 배열 끝에 다시 추가
        arr.push(firstEl);
    }
    i++;
}
console.log('<' + result.join(', ') + '>');
