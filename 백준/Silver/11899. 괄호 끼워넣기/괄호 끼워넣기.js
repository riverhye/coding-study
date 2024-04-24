const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let stack = [];
let count = 0;
for (const one of input) {
    if (one === '(') {
        stack.push(one);
    } else {
        if(stack.length === 0) {
            count++;
        } else {
            stack.pop();
        }
    }
    
}

count += stack.length;

console.log(count);