// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0).sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
