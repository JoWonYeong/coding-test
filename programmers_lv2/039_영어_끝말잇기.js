// https://school.programmers.co.kr/learn/courses/30/lessons/12981
function solution(n, words) {
  var answer = [];
  let out = 0;
  let wordsMap = new Map();

  wordsMap.set(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].substr(-1) === words[i].substr(0, 1)) {
      if (!wordsMap.has(words[i])) {
        wordsMap.set(words[i]);
      } else {
        out = i + 1;
        break;
      }
    } else {
      out = i + 1;
      break;
    }
  }

  // 가장 먼저 탈락하는 사람의 번호
  // 그 사람이 자신의 몇 번째 차례에 탈락하는지
  if (out == 0) {
    answer = [0, 0];
  } else {
    out % n == 0 ? answer.push(n) : answer.push(out % n);
    answer.push(Math.ceil(out / n));
  }

  return answer;
}

solution(3, [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
]);
solution(5, [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
]);

solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
