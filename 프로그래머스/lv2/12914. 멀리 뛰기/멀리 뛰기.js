// 동적 계획법
function solution(n) {
  if (n <= 2) return n;
  const answer = Array(n).fill(0);
  const mod = 1234567;
  answer[0] = 1;
  answer[1] = 2;
  for (let i = 2; i < n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % mod;
  }
  return answer[n - 1];
}
