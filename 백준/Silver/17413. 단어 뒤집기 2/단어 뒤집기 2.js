const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const result = input.replace(/<[a-z ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith('<')) {
        return match;
    }
    
    return [...match].reverse().join('');
});
console.log(result);