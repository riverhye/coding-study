let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < T * 2; i++) {
    const N = input[i];
    i++;
    const logs = input[i].split(' ').map(Number);
    console.log(Solution(N, logs));
}

function Solution(N, logs) {
    logs.sort((a, b) => a - b);
    let result = 0;
    for(let i = 2; i < logs.length; i++) {
        result = Math.max(result, Math.abs(logs[i] - logs[i - 2]));
    }
    return result;
}