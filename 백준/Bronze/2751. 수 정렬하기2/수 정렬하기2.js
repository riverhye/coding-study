const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const result = input.sort((a, b) => a - b);
console.log(result.join('\n'));
