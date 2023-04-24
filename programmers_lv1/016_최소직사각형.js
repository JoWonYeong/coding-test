function solution(sizes) {
  var answer = 0;
  let 가로 = [];
  let 세로 = [];

  sizes.forEach((a, i) => {
    sizes[i] = a.sort((a, b) => a - b);
  });

  for (const a of sizes) {
    가로.push(a[0]);
    세로.push(a[1]);
  }
  answer = Math.max(...가로) * Math.max(...세로);

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
