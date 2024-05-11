// 피보나치 수는 n이 2이상일 때라는 조건이 존재
// -> n이 0과 1일 때를 초기값으로 설정 (조건문 생략)

// for loop으로 풀이
function solution(n) {
  let answer = 0;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    answer = (a + b) % 1234567;
    a = b;
    b = answer;
  }

  return answer;
}

// 함수로 묶어서
function solution(n) {
  function fibo(n) {
    let a = 0,
      b = 1;
    let answer = 0;
    for (let i = 2; i <= n; i++) {
      answer = (a + b) % 1234567;
      a = b;
      b = answer;
    }

    return answer;
  }

  return fibo(n);
}
