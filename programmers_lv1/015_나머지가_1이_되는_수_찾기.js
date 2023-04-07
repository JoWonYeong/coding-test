function solution(n) {
  let count = 0;
  let flag = false;

  while (!flag) {
    count++;
    if (n % count == 1) {
      flag = true;
    }
  }

  return count;
}

console.log(solution(10));
console.log(solution(12));
