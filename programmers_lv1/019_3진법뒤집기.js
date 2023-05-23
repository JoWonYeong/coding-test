function solution(n) {
  // let answer = 0;
  // let temp = '';

  // while (n >= 3) {
  //   temp = (n % 3) + temp;
  //   n = parseInt(n / 3);
  // }

  // temp = n + temp;

  // let 배열 = temp.split('');
  // 배열.forEach((a, i) => {
  //   answer += parseInt(a) * 3 ** i;
  // });

  // return answer;

  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

console.log(solution(45));
console.log(solution(9));
console.log(solution(125));
