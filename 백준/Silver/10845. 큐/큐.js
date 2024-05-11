let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let queue = [];
let result = '';
for (const cmd of input) {
    const [command, value] = cmd.split(' ');
    switch (command) {
        case 'push':
            queue.push(parseInt(value));
            break;
        case 'pop':
            result += (queue.length ? queue.shift() : -1) + '\n';
            break;
        case 'size':
            result += (queue.length) + '\n';
            break;
        case 'empty':
            result += (queue.length ? 0 : 1) + '\n';
            break;
        case 'front':
            result += (queue.length ? queue[0] : -1) + '\n';
            break;
        case 'back':
            result += (queue.length ? queue[queue.length - 1] : -1) + '\n';
    }
}
console.log(result);