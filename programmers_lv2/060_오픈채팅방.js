// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let answer = [];
  let nickList = new Map();
  record = record.map((v) => v.split(' '));

  record.forEach((a, i) => {
    // a[0] = Enter, Leave, Change
    // a[1] = 고유한 id
    // a[2] = 닉네임(Leave일 땐 없음)
    let obj = {
      nick: a[0] !== 'Leave' && a[2],
      Enter: `${
        a[0] !== 'Leave' ? a[2] : nickList.get(a[1]).nick
      }님이 들어왔습니다.`,
      Leave: `${
        a[0] !== 'Leave' ? a[2] : nickList.get(a[1]).nick
      }님이 나갔습니다.`,
    };
    nickList.set(a[1], obj);
  });

  record.forEach((a, i) => {
    if (a[0] !== 'Change') {
      answer.push(nickList.get(a[1])[a[0]]);
    }
  });

  return answer;
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Change uid4567 Ryan',
  'Enter uid1234 Prodo',
]);
