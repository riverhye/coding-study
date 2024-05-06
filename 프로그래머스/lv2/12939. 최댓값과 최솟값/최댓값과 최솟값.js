// Math.max/min() : 매개변수로 주어진 숫자 중 가장 큰/작은 수 찾기

function solution(s) {
  const str = s.split(' ');
  const max = Math.max(...str);
  const min = Math.min(...str);
  return min + ' ' + max;
}
