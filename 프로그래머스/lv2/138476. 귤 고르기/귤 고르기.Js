// tangerine 배열 요소 중 같은 것이 많은 순서대로 k개를 꼽는다면, 총 몇 종류가 되는지
// HashMap

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
  let answer = 0,
    count = 1;
  for (let i = 0; i < bucketArr.length; i++) {
    answer += bucketArr[i][1];
    if (answer >= k) break;
    count++;
  }

  return count;
}
