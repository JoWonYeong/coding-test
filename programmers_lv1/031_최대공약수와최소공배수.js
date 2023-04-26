function solution(n, m) {
  let max = Math.max(n, m);

  let 최대공약수 = 1;

  for (let i = 1; i < max; i++) {
    if (n % i == 0 && m % i == 0) {
      최대공약수 = i;
    }
  }
  let 최소공배수 = (n * m) / 최대공약수;

  return [최대공약수, 최소공배수];
}

solution(3, 12);
solution(2, 5);
