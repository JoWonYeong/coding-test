function solution(a, b, n) {
  let 받은콜라병수 = 0;
  let 남은콜라병 = Math.floor(n / a) * b + (n % a);
  받은콜라병수 = Math.floor(n / a) * b;

  while (남은콜라병 >= a) {
    받은콜라병수 += Math.floor(남은콜라병 / a) * b;
    남은콜라병 = Math.floor(남은콜라병 / a) * b + (남은콜라병 % a);
  }

  return 받은콜라병수;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
