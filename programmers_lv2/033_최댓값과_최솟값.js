// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = '';
  answer = `${Math.min(...s.split(' ').map(Number))} ${Math.max(
    ...s.split(' ').map(Number)
  )}`;

  return answer;
}

solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
