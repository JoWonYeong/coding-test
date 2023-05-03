function solution(left, right) {
  var answer = 0;

  for (let a = left; a <= right; a++) {
    if (Number.isInteger(a ** (1 / 2))) {
      // 약수의 개수 홀수일 때 (제곱수일때)
      answer -= a;
    } else {
      // 약수의 개수 짝수일 때
      answer += a;
    }
  }

  return answer;
}

solution(13, 17);
solution(24, 27);
