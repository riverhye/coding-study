function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const newArray = array.slice(i - 1, j).sort((a, b) => a - b);

    return newArray[k - 1];
  });
}
