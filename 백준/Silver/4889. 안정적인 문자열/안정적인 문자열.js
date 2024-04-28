const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop(); // 입력의 마지막 줄 제거

for(let i = 0; i < input.length; i++) {
    let count = 0; // 최소 연산 횟수
    let stack = []; // 열린 괄호 모음
	
	for(const s of input[i]) {
		if(s === '{') {
			stack.push(1);
		} else {
				if(!stack.length) { // 첫 요소가 닫힌 괄호라면
                    stack.push(1); // 임의의 열린 괄호로서 추가
                    count++; // 닫힌 -> 열린 괄호로 간주했으므로 추가
				} else {
					stack.pop();
				}
		}
	}
    
    count += stack.length / 2; // 열린 괄호의 절반은 닫힌 괄호로 교체해줘야 하니까 연산 횟수에 추가
    console.log(`${i+1}. ${count}`);
}