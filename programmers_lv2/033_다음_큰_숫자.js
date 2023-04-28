function 이진수1개수반환(num) {
  let 개수 = 0;
  while (num !== 0) {
    if (num % 2 == 1) {
      개수++;
    }
    num = Math.floor(num / 2);
  }
  return 개수;
}

function solution(n) {
  let 이진수1개수 = 이진수1개수반환(n);

  while (1) {
    if (이진수1개수 === 이진수1개수반환(++n)) {
      return n;
    }
  }
}

solution(78);
solution(15);
