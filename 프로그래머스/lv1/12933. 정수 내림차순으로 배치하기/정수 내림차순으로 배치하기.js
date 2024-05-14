function solution(n) {
  const answer = (n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return +answer;
}
