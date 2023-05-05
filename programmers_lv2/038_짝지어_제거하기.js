// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  let stack = [];
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    if (stack[index] == stack[index - 1]) {
      stack.splice(-2);
      index--;
    } else {
      index++;
    }
  }
  return stack.length == 0 ? 1 : 0;
}

solution('baabaa');
solution('cdcdd');
