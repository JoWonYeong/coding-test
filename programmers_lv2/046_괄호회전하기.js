// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  var answer = 0;
  let map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');
  let sArr = [...s];

  for (let i = 0; i < sArr.length; i++) {
    sArr.push(sArr.shift());
    let stack = [];
    sArr.forEach((a, j) => {
      if (map.get(a) !== undefined && map.get(a) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(a);
      }
    });
    if (stack.length === 0) answer++;
  }

  return answer;
}

solution('[](){}');
solution('}]()[{');
solution('[)(]');
solution('}}}');
