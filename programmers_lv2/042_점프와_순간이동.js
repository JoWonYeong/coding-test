function solution(n) {
  var answer = 0;
  while (n >= 1) {
    while (n % 2 == 0 && n !== 0) {
      n = n / 2;
    }

    n -= 1;
    answer += 1;
  }

  return answer;
}

solution(5);
solution(6);
solution(5000);
