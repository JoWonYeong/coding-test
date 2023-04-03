function solution(k, m, score) {
  var answer = 0;
  let 점수모음 = [];

  for (let i = 0; i < k; i++) {
    점수모음.push(0);
  }
  score.forEach((a, i) => {
    점수모음[a - 1] += 1;
  });

  for (let i = k - 1; i >= 0; i--) {
    answer += (i + 1) * m * parseInt(점수모음[i] / m);
    if (i != 0) {
      점수모음[i - 1] += 점수모음[i] % m;
    }
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
