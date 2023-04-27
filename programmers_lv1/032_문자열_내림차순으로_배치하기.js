// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 아스키코드 -> 문자
// String.fromCharCode(코드번호1, 코드번호2 ...)
// 문자 -> 아스키코드
// 문자열.charCodeAt(변환할문자 index)

// 대문자 : 65 ~ 90
// 소문자 : 97 ~ 122

function solution(s) {
  const 소문자아스키코드 = [];
  const 대문자아스키코드 = [];

  [...s].forEach((a, i) => {
    if (a.charCodeAt(0) <= 90) {
      // 대문자일때
      대문자아스키코드.push(a.charCodeAt(0));
    } else {
      // 소문자일때
      소문자아스키코드.push(a.charCodeAt(0));
    }
  });

  대문자아스키코드.sort((a, b) => b - a);
  소문자아스키코드.sort((a, b) => b - a);

  return (
    String.fromCharCode(...소문자아스키코드) +
    String.fromCharCode(...대문자아스키코드)
  );
}

solution('Zbcdefg');
