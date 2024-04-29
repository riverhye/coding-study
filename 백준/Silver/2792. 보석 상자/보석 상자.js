const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const jewlery = input.map(Number);

// 나눠줄 보석의 최소값과 최대값
let min = 0;
let max = Math.max(...jewlery);

while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    
    let totalJewelry = 0;

    for (let i = 0; i < M; i++) {
        totalJewelry += Math.ceil(jewlery[i] / mid); // 나머지를 올림 처리
    }

    if (totalJewelry > N) {
        // 너무 많이 가져가는 경우
        min = mid + 1;
    } else {
        // 적게 가져가는 경우 또는 정확히 가져가는 경우
        max = mid - 1;
    }
}

console.log(min); // 최소 질투심 출력