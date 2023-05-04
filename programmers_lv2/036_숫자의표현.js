// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 항의 개수 = x
// 첫째항 = a
// 마지막항 = b
// 등차수열 공식 x(a+b)/2 = n

function solution(n) {
  var answer = 1; // 본인 미리 1 카운트

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let sum = i;
    let x = i;
    while (sum < n) {
      x += 1;
      sum += x;
      if (sum == n) {
        answer += 1;
        break;
      }
    }
  }

  return answer;
}

solution(15);
