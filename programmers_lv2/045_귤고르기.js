function solution(k, tangerine) {
  var answer = 1;
  let max = Math.max(...tangerine);
  let info = new Array(max).fill(0);

  tangerine.forEach((a, i) => {
    info[a - 1]++;
  });
  info.sort((a, b) => b - a);

  let maxIndex = 0;

  while (k > 0) {
    if (info[maxIndex] === 0) {
      maxIndex++;
      answer++;
    } else {
      info[maxIndex]--;
      k--;
    }
  }
  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
