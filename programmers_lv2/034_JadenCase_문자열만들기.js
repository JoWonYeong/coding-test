// https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 공백이 여러 개 있으면 정답에도 그 만큼의 공백이 있어야 합니다.
// 문자열의 맨 처음과 끝, 단어 사이 무관합니다.

function solution(s) {
  var answer = '';
  let start = true;

  s.split('').forEach((a, i) => {
    if (a === ' ') {
      answer += ' ';
      start = true;
    } else {
      if (start === true) {
        // 첫글자일때
        if (isNaN(a)) {
          // 문자일 때
          answer += a.toUpperCase();
        } else {
          // 숫자일 때
          answer += a;
        }
        start = false;
      } else {
        // 첫글자가 아닐때
        answer += a.toLowerCase();
      }
    }
  });

  return answer;
}

solution('3people unFollowed me');
solution('for the last week');
solution('a aa');
solution(' for   THE last week ');
