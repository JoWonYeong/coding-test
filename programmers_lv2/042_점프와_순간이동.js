// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  var answer = 0;
  while (n >= 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n -= 1;
      answer += 1;
    }
  }

  return answer;
}

solution(5);
solution(6);
solution(5000);
