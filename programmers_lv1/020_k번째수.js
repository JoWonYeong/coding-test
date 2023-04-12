function solution(array, commands) {
  var answer = [];

  commands.forEach((a, i) => {
    answer.push(array.slice(a[0] - 1, a[1]).sort((a, b) => a - b)[a[2] - 1]);
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
