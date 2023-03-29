function solution(s) {
  var answer = 0;
  let 문자열배열 = [];
  let 첫글자 = '';
  let 첫글자횟수 = 0;
  let 다른글자횟수 = 0;

  문자열배열 = s.split('');

  첫글자 = 문자열배열[0];
  첫글자횟수 += 1;

  for (let i = 1; i < 문자열배열.length; i++) {
    if (문자열배열[i] == 첫글자) {
      첫글자횟수 += 1;
    } else {
      다른글자횟수 += 1;
    }

    if (첫글자횟수 == 다른글자횟수) {
      첫글자 = 문자열배열[i + 1];
      첫글자횟수 = 0;
      다른글자횟수 = 0;
      answer += 1;
    }
  }

  if (문자열배열.length % 2 != 0) {
    answer += 1;
  } else {
    if (첫글자횟수 != 다른글자횟수) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution('abracadabraabbaa'));
