// [solution]
// 무거운 사람은 언제나 구명보트를 1개 가지고 탈출한다.
// 여기에 가벼운 사람을 합쳤을 때 limit보다 작으면 구명보트 개수를 최소화 할 수 있다.

// Ver 1. 내림차순 for loop
function solution(people, limit) {
  people.sort((a, b) => b - a);

  let answer = 0;
  // for loop에서 한번에 두 변수 (i, j)를 정의할 수 있다.
  // 가장 무거운 사람은 언제나 구명보트를 하나 가지고 탈출 => i++ (탈출했으므로, 다음 순회)
  // 가장 가벼운 사람은 무거운 사람이 빠져나갈 때 함께 할 수 있다 => j-- (탈출했으므로, 다음 순회)
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    answer++;
  }

  return answer;
}

// Ver 2. 오름차순 while loop
function solution(people, limit) {
  people.sort((a, b) => a - b);

  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // 가장 가벼운 사람과 함께 탈출
    }
    right--; // 가장 무거운 사람은 항상 탈출
    answer++; // 구명보트 사용 횟수 증가
  }

  return answer;
}
