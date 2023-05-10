// https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
function solution(num) {
  var answer = 0;

  while (num > 1) {
    answer++;
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    if (answer > 500) {
      return -1;
    }
  }

  return answer;
}

solution(6);
solution(16);
solution(626331);
