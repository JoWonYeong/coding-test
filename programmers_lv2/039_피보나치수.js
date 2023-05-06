// https://school.programmers.co.kr/learn/courses/30/lessons/12945
function solution(n) {
  let f = [0, 1];

  for (let i = 2; i <= n; i++) {
    let a = (f[i - 1] + f[i - 2]) % 1234567;
    f.push(a);
  }

  return f[n];
}

solution(3);
solution(5);
solution(8);
