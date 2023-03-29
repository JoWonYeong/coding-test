function solution(n, m, section) {
  let 페인트칠횟수 = 0;

  let 벽 = [];
  // 벽에 안칠해진 부분 0, 칠해진 부분 1
  for (let i = 0; i < n; i++) {
    if (i == section[0] - 1) {
      section.splice(0, 1);
      벽.push(0);
    } else {
      벽.push(1);
    }
  }

  // 벽을 돌면서
  // 0이 나오면 그 인덱스+(페인트길이-1)까지 전부 1로 바꿈 + 페인트칠횟수+1
  벽.forEach((a, i) => {
    if (a == 0) {
      let count = 0;
      while (count < m) {
        벽[i + count] = 1;
        count++;
      }
      페인트칠횟수++;
    }
  });

  return 페인트칠횟수;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
