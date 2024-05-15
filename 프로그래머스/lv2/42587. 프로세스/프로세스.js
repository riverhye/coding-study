// 요소의 이동(shift)에 맞춰 location을 조정
// ㄴshift가 발생하면 기존 location에서 -1
// ㄴ이미 0에 있다면 배열의 가장 뒤부터 순회하도록
// 현재 loop가 출력 순서(Math.max)일 때 location이 0인 경우 return

function solution(priorities, location) {
  let answer = 0;
  let maxPriority = Math.max(...priorities);

  while (true) {
    const current = priorities.shift();
    if (current == maxPriority) {
      answer++;
      if (location == 0) return answer;
      maxPriority = Math.max(...priorities);
    } else {
      priorities.push(current);
    }

    location = location == 0 ? priorities.length - 1 : location - 1;
  }
}
