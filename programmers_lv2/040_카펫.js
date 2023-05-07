// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let a = brown - 4;
  let b = 1;

  while (true) {
    if (a == (yellow / b) * 2 + b * 2) {
      break;
    }
    b++;
  }

  // 가로 = yellow/b +2
  // 세로 = b+2
  return [yellow / b + 2, b + 2];
}

solution(10, 2);
solution(8, 1);
solution(24, 24);
