function solution(N, stages) {
  var answer = [];
  let 실패한사람 = [];
  let 도달한사람 = [];
  let 실패율 = [];
  let temp = 0;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    stages.forEach((a, j) => {
      if (a <= i) {
        count += 1;
      }
    });
    실패한사람.push(count - temp);
    도달한사람.push(stages.length - temp);
    temp = count;
  }

  for (let i = 0; i < N; i++) {
    if (도달한사람[i] != 0) {
      실패율.push(실패한사람[i] / 도달한사람[i]);
    } else {
      실패율.push(0);
    }
  }

  let 횟수 = 0;
  while (횟수 < N) {
    let index = 실패율.indexOf(Math.max(...실패율));
    answer.push(index + 1);
    실패율[index] = -1;
    횟수++;
  }

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
