function solution(k, score) {
  let 명예의전당 = [];
  let 발표점수 = [];

  for (let i = 0; i < score.length; i++) {
    명예의전당.push(score[i]);
    명예의전당.sort((a, b) => b - a);
    if (명예의전당.length > k) {
      명예의전당.splice(k, 1);
    }
    발표점수.push(명예의전당[명예의전당.length - 1]);
  }
  return 발표점수;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
