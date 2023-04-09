function solution(new_id) {
  let str = '';
  // 1. 모든 문자 소문자로 변환
  str = new_id.toLowerCase();

  // 2. 규칙에 맞지않은 문자 제거
  str = str.replace(/[^a-z0-9-_.]*/g, '');

  // 3. . 2번이상 연속되면 하나로
  let temp = str.length - 1;
  for (let i = 0; i < temp; i++) {
    str = str.replace('..', '.');
  }

  // 4. 시작과 끝 . 제거
  if (str[0] == '.') {
    str = str.substring(1, str.length);
  }

  if (str[str.length - 1] == '.') {
    str = str.substring(0, str.length - 1);
  }

  // 5. 빈문자열이면 a대입
  if (str.length == 0) {
    str += 'a';
  }

  // 6. 16자 이상이면 처음부터 15까지만
  if (str.length > 15) {
    str = str.substring(0, 15);
    if (str[str.length - 1] == '.') {
      str = str.substring(0, str.length - 1);
    }
  }

  // 7. 만약 전체길이 2 이하면, 마지막 문자를 길이 3될때까지 반복
  while (str.length < 3) {
    str += str[str.length - 1];
  }

  return str;
}

console.log(solution('...!@BaT#*..y.abcdefgh.ijklm.'));
console.log(solution('=.='));
console.log(solution('..................................'));
