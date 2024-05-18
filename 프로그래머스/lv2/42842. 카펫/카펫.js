// 면적으로 접근
// carpetArea = brown + yellow = width * height
// yellowArea = (width - 2) * (height - 2)

function solution(brown, yellow) {
  const carpetArea = brown + yellow;
  for (let w = carpetArea - 1; w >= 3; w--) {
    const h = Math.floor(carpetArea / w);
    if ((w - 2) * (h - 2) === yellow) return [w, h];
  }
}
