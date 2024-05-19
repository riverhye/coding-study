// Ver 1. HashMap > 배열로 변환 후 sort
function solution(k, tangerine) {
  let bucket = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    const t = tangerine[i];
    if (bucket.get(t)) {
      bucket.set(t, bucket.get(t) + 1);
    } else {
      bucket.set(t, 1);
    }
  }

  const bucketArr = [...bucket];
  bucketArr.sort((a, b) => b[1] - a[1]);
  // > 방법 1. 귤 개수와 가지 수를 따로 계산
  //   let answer = 0,
  //     count = 1;
  //   for (let i = 0; i < bucketArr.length; i++) {
  //     answer += bucketArr[i][1];
  //     if (answer >= k) break;
  //     count++;
  //   }
  // > 방법 2. 귤 개수와 가지 수 한꺼번에 계산
  let count = 0;
  for (const t of bucketArr) {
    count++;
    if (k > t[1]) k -= t[1];
    else break;
  }

  return count;
}

// Ver 2. 객체 > values만 > 요소를 순회하며 k와 비교
function solution(k, tangerine) {
  let bucket = {};
  tangerine.forEach((t) => (bucket[t] = (bucket[t] || 0) + 1));

  const tArr = Object.values(bucket).sort((a, b) => b - a);

  let answer = 0;
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }

  return answer;
}
