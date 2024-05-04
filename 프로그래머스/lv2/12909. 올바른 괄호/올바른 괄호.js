function solution(s) {
  let answer = [];

  for (const str of s) {
    if (str === '(') {
      answer.push(1);
    } else {
      if (answer.length === 0) {
        return false;
      } else {
        answer.pop();
      }
    }
  }

  return answer.length > 0 ? false : true;
}
