// 십진수 -> 이진수로 변경 toString(2)
// 십진수 외 다른 진수 -> 십진수로 변경 parseInt(10)

// String.prototype.match: 정규표현식으로 해당하는 문자열 추출
// length: 배열과 string 모두 사용 가능

// 이진수로 변경한 것을 배열로 만들어 원소의 length를 구할 수는 있지만, 완전한 답은 아니다.
// WHY? split('1')로 1을 ''로 만들었음 -> 빈문자열도 length에 포함 -> 1의 개수 카운트가 아님
// 그래서 문자열은 정규표현식으로 추출하는 게 낫고, 이때 match가 유용

// loop문으로 만들 수도 있지만, 재귀로 표현하면 더 간단하다.
function solution(n) {
  const nBinary = n.toString(2).match(/1/g).length;
  const answer = (nb) => {
    if (nb.toString(2).match(/1/g).length === nBinary) return nb;
    return answer(nb + 1);
  };

  return answer(n + 1);
}
