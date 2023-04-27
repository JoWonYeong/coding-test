// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(x + x * i);
  }

  return answer;
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);
