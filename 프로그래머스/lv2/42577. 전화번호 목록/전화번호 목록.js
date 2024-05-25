// 문제 포인트: 접두어
// some: 배열 메서드. 콜백함수의 조건을 적어도 하나의 요소가 통과하면 true/아닐 경우 false
// => 모든 요소가 통과해야 하므로 거꾸로 return

function solution(phone_book) {
  phone_book.sort();
  return !phone_book.some((num, i) => {
    return phone_book[i + 1]?.startsWith(num);
  });
}

// 문자열 sort
// 1. 그냥 (): 문자열이 시작하는 숫자 기준으로 나열(1, 119, 21 순으로 나열)
// 2. 매개변수 넣어서: 숫자로 간주해 나열 - 1, 21, 119 순으로 나열
// => 접두어만 비교하는 것이라서 sort()로 해야 현재/이후 인덱스로 비교가 가능
