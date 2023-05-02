// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    s.split('').forEach((a) => {
      if (isNaN(a)) {
        // 문자일 때
        answer = false;
      }
    });
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution('a234'));
console.log(solution('2f34'));
console.log(solution('1234'));
