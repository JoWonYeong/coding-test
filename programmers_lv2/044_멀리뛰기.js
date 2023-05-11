// 피보나치 수 문제...

function solution(n) {
  let f = [1, 1];

  for (let i = 2; i <= n; i++) {
    let a = (f[i - 1] + f[i - 2]) % 1234567;
    f.push(a);
  }

  return f[n];
}

solution(4);
solution(3);
solution(7);
solution(8);
