function solution(a, b) {
  var answer = 0;

  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

solution(3, 5);
solution(3, 3);
solution(5, 3);
