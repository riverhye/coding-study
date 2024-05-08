// Ver 1. Better solution
// i: 작업일수(days)에 대한 인덱스
// j: 특정일에 배포되는 기능 개수(answer)에 대한 인덱스
// days[i]: 현재 기능의 배포일
// maxDay: 기준이 될 배포일 (가장 큰 배포일)
function solution(progresses, speeds) {
  let days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let maxDay = days[0];
  let answer = [0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// Ver 2. Compare solution
// - 좋은 접근 방식 : 배포일 계산
// - 개선 방향 :
//     - 계산할 때 인덱스가 필요하다면, `map` 도 좋은 옵션 (그래도 시도는 꽤 해봤다)
//     - `days` : 이전 배포일에 맞춰 숫자를 변환하는 대신, *순수한 각 기능의 배포일*
//     - `최대 배포일` : 중복 요소의 개수를 세는 접근 대신,
//     각 기능 배포일과 최대 배포일을 비교해 *결과 배열에 할당*
function solution(progresses, speeds) {
  let day = 0;
  let days = []; // Direction: 각 기능의 배포일로
  let prevDay = 0; // Direction: 최대 배포일로

  for (let i = 0; i < progresses.length; i++) {
    day = Math.ceil((100 - progresses[i]) / speeds[i]); // Direction: i가 필요하다면 map 활용 생각

    // Direction: 배열 전체를 순회할 게 아니라, 각 기능의 배포일과 최대배포일 비교 후 각 인덱스에 할당
    if (prevDay > 0) {
      if (prevDay > day) {
        days.push(prevDay);
      } else {
        days.push(day);
        prevDay = day;
      }
    } else {
      prevDay = day;
      days.push(day);
    }
  }

  // Direction: 중복 요소 개수 카운트 대신 결과 배열 자체에 할당
  let result = {};
  days.forEach((day) => {
    result[day] = (result[day] || 0) + 1;
  });

  return Object.values(result);
}
