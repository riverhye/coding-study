let N = require('fs').readFileSync('/dev/stdin').toString().trim();
N = +N;

let arr = new Array(N).fill(1).map((el, i) => el + i);

let result = [];
for(let i = 0; i < N; i++) {
    if(arr.length > 1) {
        result.push(arr.shift());
        const selected = arr.shift();
        arr.push(selected);
    }
    else break;
}

console.log(result.concat(arr).join(' '));