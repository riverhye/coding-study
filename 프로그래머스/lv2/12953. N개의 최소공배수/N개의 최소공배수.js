// Ver 1. 유클리드 호제법
function solution(arr) {
  const gcd = (a, b) => {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let answer = 1; // 곱셈이므로 0이 아닌 1을 곱해야 함.
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

// Ver 2. 재귀함수를 이용한 유클리드호제법을 reduce로 구현
function solution(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max == 0 ? max : recursive(max, min % max);
    };
    return (acc * cur) / recursive(acc, cur);
  });
}
