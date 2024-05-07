function solution(citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬

  let count = 0;

  // 인용된 논문 횟수의 최댓값 구하기
  // 조건 : 논문 개수(count)가 인용된 논문 횟수(citations[i])와 같거나 커야 함.

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) count++;
    else break;
  }

  return count;
}
