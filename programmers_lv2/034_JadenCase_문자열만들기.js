// https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 공백이 여러 개 있으면 정답에도 그 만큼의 공백이 있어야 합니다.
// 문자열의 맨 처음과 끝, 단어 사이 무관합니다.

function solution(s) {
  var answer = '';
  console.log(s.split(' '));

  s.split(' ').forEach((a, i) => {
    if (isNaN(a[0])) {
      // 문자로 시작할 때
      a = a.replace(a[0], a[0].toUpperCase());
    }

    let 소문자확인 = a.slice(1).match(/[a-z]+/g);
    console.log(소문자확인);

    if (소문자확인.length >= 2) {
      let len = 0;
      for (let i = 0; i < 소문자확인.length - 1; i++) {
        a = a.replace(
          a[len + 소문자확인[i].length + i + 1],
          a[len + 소문자확인[i].length + i + 1].toLowerCase()
        );
        len += 소문자확인[i].length;
      }
    }

    answer = answer + a + ' ';
    // console.log(answer);
  });
  answer = answer.slice(0, answer.length - 1);
  console.log(answer);

  return answer;
}

// solution('3people unFollowed me');
// solution('for the last week');
// 'A Aa'
// solution('a aa');
// solution(' for   THE last week ');
// solution('A');
