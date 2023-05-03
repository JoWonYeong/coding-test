// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 항의 개수 = x
// 첫째항 = a
// 마지막항 = b
// 등차수열 공식 x(a+b)/2 = n

function solution(n) {
  var answer = 0;
  let x = 0;

  // while (1) {
  let sum = 0;
  while (sum < n) {
    x++;
    sum += x;
    console.log(x);
  }

  // }

  return answer;
}

solution(15);
