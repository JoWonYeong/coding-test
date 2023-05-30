function solution(n, t, m, p) {
  var answer = '';
  let str = '';
  let num = 0;

  while (num <= t * m) {
    str += num.toString(n).toUpperCase();
    num++;
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;

    if (count === p) {
      answer += str[i];
    }

    if (answer.length === t) break;
    if (count === m) {
      count = 0;
    }
  }

  return answer;
}

solution(2, 4, 2, 1);
solution(16, 16, 2, 1);
solution(16, 16, 2, 2);
