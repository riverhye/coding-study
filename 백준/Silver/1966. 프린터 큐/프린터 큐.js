const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

for(let i = 0; i < input.length; i++) {
	const M = input[i].split(' ')[1];
	i++;
	const priorities = input[i].split(' ').map(Number);
	console.log(Solution(M, priorities));
}

function Solution(location, priorities) {
    let answer = 0;
    let maxPriority = Math.max(...priorities);
    
    while(true) {
        const current = priorities.shift();
        if(current == maxPriority) {
            answer++;
            if(location == 0) return answer;
            maxPriority = Math.max(...priorities);
        }
        else {
            priorities.push(current);
        }
        location = location == 0 ? priorities.length - 1 : location - 1;
    }
    
    return answer;
}