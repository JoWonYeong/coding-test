// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  var answer = 1;

  while (true) {
    answer++;
    a = Math.round(a / 2);
    b = Math.round(b / 2);

    if (a === b) {
      break;
    }
  }

  // 4->2->1
  // 3  1  2

  // 7->4->2
  // 8  3  1

  return answer;
}

solution(8, 4, 7);
