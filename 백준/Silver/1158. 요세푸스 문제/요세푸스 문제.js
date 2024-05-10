const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = new Array(N).fill(1).map((a, b) => a + b);

let result = [];
let i = 1;
while(arr.length > 0) {
    const shiftedEl = arr.shift();
    if(i % K == 0) {
        result.push(shiftedEl);
    } else {
        arr.push(shiftedEl);
    }
    i++;
}
console.log('<' + result.join(', ') + '>');