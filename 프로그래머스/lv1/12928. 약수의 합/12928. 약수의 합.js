// 약수 : 주어진 숫자를 N으로 나눴을 때 나머지가 0일 경우, N은 그 숫자의 약수이다.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
