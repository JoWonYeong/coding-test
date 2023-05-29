function solution(msg) {
  var answer = [];
  let dic = new Map();

  // 사전 초기화
  for (let i = 0; i < 26; i++) {
    dic.set(String.fromCharCode(65 + i), i + 1);
  }

  let i = 0;
  while (i < msg.length) {
    let temp = msg[i];

    while (true) {
      // 종료조건1 : 현재문자 + 다음문자 했는것을 dic에 가지지 않았을 때
      if (!dic.has(temp)) {
        answer.push(dic.get(temp.slice(0, -1)));
        dic.set(temp, dic.size + 1);
        break;
      }

      i++;
      // 종료조건2 : 문자열 끝에 도달했을 때
      if (msg[i] === undefined) {
        answer.push(dic.get(temp));
        break;
      }
      temp += msg[i];
    }
  }

  return answer;
}

solution('KAKAO');
solution('TOBEORNOTTOBEORTOBEORNOT');
solution('ABABABABABABABAB');
