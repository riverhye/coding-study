// 문자열 내 특정 원소 개수 세기

function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
