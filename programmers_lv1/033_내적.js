// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  var answer = 0;
  let temp = [];

  for (let i = 0; i < a.length; i++) {
    temp.push(a[i] * b[i]);
  }

  answer = temp.reduce((acc, a) => acc + a, 0);

  return answer;
}
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);
