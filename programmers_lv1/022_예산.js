function solution(d, budget) {
  var answer = 0;

  d = d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) {
      break;
    } else {
      budget -= d[i];
      answer++;
    }
  }
  return answer;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
