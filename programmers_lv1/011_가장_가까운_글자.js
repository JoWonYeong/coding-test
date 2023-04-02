function solution(s) {
  var answer = [];
  let 실험 = [];
  s.split('').forEach((a, i) => {
    if (실험.indexOf(a) == -1) {
      실험.push(a);
    } else {
      실험.push(0);
    }
  });

  실험.forEach((a, i) => {
    if (a != 0) {
      answer.push(-1);
    } else {
      answer.push(i - 실험.indexOf(s[i]));
      실험[실험.indexOf(s[i])] = 0;
      실험[i] = s[i];
    }
  });

  return answer;
}

console.log(solution('banana'));
console.log(solution('foobar'));
