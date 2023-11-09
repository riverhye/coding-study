const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const score = Number(input)

if (90 <= score) console.log('A')
else if (80 <= score && score < 90) console.log('B')
else if (70 <= score && score < 80) console.log('C')
else if (60 <= score && score < 70) console.log('D')
else console.log('F')

// 하지만 40ms 더 빠르고 코드도 덜 치는 방법이 있으니

const input2 = require('fs').readFileSync('/dev/stdin').toString().trim()
const score2 = Number(input2)

if (score2 < 60) console.log('F')
else if (score2 < 70) console.log('D')
else if (score2 < 80) console.log('C')
else if (score2 < 90) console.log('B')
else console.log('A')