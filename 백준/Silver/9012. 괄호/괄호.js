// 1. 입력 세팅
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 2. 테스트 개수 추출
const len = input.shift();

// 3. input 순회
// 테스트 개수를 input에서 제거했으므로, 이제 input은 출력 개수와 동일
for(let i = 0; i < len; i++) {
    // 괄호 개수 차이 : (는 더하고 )는 뺀다
    let count = 0;
    
    // 각 배열 인덱스의 요소를 한번에 순회 : for ...of
    // for of는 반복 가능한 객체 모두 가능하므로 String도 가능
    for(const str of input[i]) {
        // 열린 괄호면 push, 닫힌 괄호면 pop
        count += str === '(' ? 1 : -1
        
        // 닫힌 괄호로 시작 or 닫힌 괄호가 더 많음 : 완전한 괄호가 될 수 없으므로 루프 종료
        // 열린 괄호는 닫힌 괄호가 이후에 등장하면 쇄신할 수 있지만, 닫힌 괄호가 먼저 나오면 보완 불가
        if(count < 0) break;
    }
    
    console.log(count === 0 ? 'YES' : 'NO')
}