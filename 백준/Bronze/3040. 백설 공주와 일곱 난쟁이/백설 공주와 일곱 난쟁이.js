let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const sum = input.reduce((acc, cur) => acc += cur, 0);

for(let i = 0; i < 9; i++) {
    for(let j = i + 1; j < 9; j++) {
        if(sum - 100 === input[i] + input[j]) {
            input[i] = -1;
            input[j] = -1;
            break;
        }
    }
}

const result = input.filter(el => el !== -1).join('\n');
console.log(result);