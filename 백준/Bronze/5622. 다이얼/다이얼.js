// Ver 1. 객체 : key와 value로 접근
const str = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const dialNumbers = {
    'ABC': 3,
    'DEF': 4,
    'GHI': 5,
    'JKL': 6,
    'MNO': 7,
    'PQRS': 8,
    'TUV': 9,
    'WXYZ': 10
}

let result = 0;
for (let i = 0; i < str.length; i++) {
    for(const dial in dialNumbers) {
        if(dial.includes(str[i])) {
            result += dialNumbers[dial];
        }
    }
}

console.log(result);

// Ver 2. 배열 : for문과 switch - case, reduce 활용
const str = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let result = [];
for(let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A":
            case "B":
            case "C":
                result.push(3);
                break;
            case "D":
            case "E":
            case "F":
                result.push(4);
                break;
            case "G":
            case "H":
            case "I":
                result.push(5);
                break;
            case "J":
            case "K":
            case "L":
                result.push(6);
                break;
            case "M":
            case "N":
            case "O":
                result.push(7);
                break;
            case "P":
            case "Q":
            case "R":
            case "S":
                result.push(8);
                break;
            case "T":
            case "U":
            case "V":
                result.push(9);
                break;
            case "W":
            case "X":
            case "Y":
            case "Z":
                result.push(10);
                break;
        }
}

console.log(result.reduce((acc, cur, idx) => acc += Number(cur), 0));
