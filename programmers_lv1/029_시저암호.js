// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 아스키코드 -> 문자
// String.fromCharCode(코드번호1, 코드번호2 ...)
// 문자 -> 아스키코드
// 문자열.charCodeAt(변환할문자 index)

function solution(s, n) {
  var answer = '';
  n = n % 26;

  for (let i = 0; i < s.length; i++) {
    let 아스키코드번호 = s.charCodeAt(i);
    // 대문자 : 65 ~ 90
    // 소문자 : 97 ~ 122
    // 공백 : 32

    if (아스키코드번호 === 32) {
      answer += ' ';
    } else if (아스키코드번호 >= 65 && 아스키코드번호 <= 90) {
      // 대문자일때
      if (아스키코드번호 + n > 90) {
        answer += String.fromCharCode(아스키코드번호 + n - 26);
      } else {
        answer += String.fromCharCode(아스키코드번호 + n);
      }
    } else {
      // 소문자일때
      if (아스키코드번호 + n > 122) {
        answer += String.fromCharCode(아스키코드번호 + n - 26);
      } else {
        answer += String.fromCharCode(아스키코드번호 + n);
      }
    }
  }
  return answer;
}

solution('AB', 1);
solution('z', 1);
solution('a B z', 4);
solution('AaZz', 25);
