function solution(price, money, count) {
  var answer = 0;
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  if (sum > money) {
    answer = sum - money;
  }

  return answer;
}

console.log(solution(3, 20, 4));
