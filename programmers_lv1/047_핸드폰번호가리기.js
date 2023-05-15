// https://school.programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  var answer = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  answer += phone_number.slice(-4);
  return answer;
}

solution('01033334444');
// solution('027778888');
