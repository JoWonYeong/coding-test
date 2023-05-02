// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let 제거한0개수 = 0;
  let 이진변환 = 0;
  let str = s;
  let 변환전 = '';
  let str_len = 0;

  while (str !== '1') {
    이진변환++;
    변환전 = [...str].join('');
    str = str.replaceAll('0', '');
    str_len = str.length;

    제거한0개수 += 변환전.length - str_len;

    let 이진수 = '';
    while (str_len !== 0) {
      if (str_len % 2 == 1) {
        이진수 = 1 + 이진수;
      } else {
        이진수 = 0 + 이진수;
      }
      str_len = Math.floor(str_len / 2);
    }
    str = 이진수;
  }

  return [이진변환, 제거한0개수];
}

solution('110010101001');
solution('01110');
solution('1111111');
