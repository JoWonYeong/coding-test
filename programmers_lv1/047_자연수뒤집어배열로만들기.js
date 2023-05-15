// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  var answer = n.toString().split('').map(Number).reverse();

  return answer;
}

solution(12345);
