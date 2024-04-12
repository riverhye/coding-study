const S = require('fs').readFileSync("/dev/stdin").toString().trim().split('');

// alphabet 배열
const alphabet = Array.from({length: 26}, (value, idx) => String.fromCharCode( 97 + idx));

for(let i = 0; i < 26; i++) { // 알파벳 순회
    for(let j = 0; j < S.length; j++ ) { // S 순회
    
        if(S[j].includes(alphabet[i])) {
            alphabet[i] = S.indexOf(S[j]);
        }
    }
}

// string 타입만 -1로 교체
const newAlphabet = alphabet.join(' ').replaceAll(/[a-z]/g, -1);
console.log(newAlphabet);