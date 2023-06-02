// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  var answer = 0;

  function dfs(현재인덱스, sum) {
    // 종료조건
    if (현재인덱스 === numbers.length) {
      if (sum === target) answer++;
    } else {
      dfs(현재인덱스 + 1, sum + numbers[현재인덱스]);
      dfs(현재인덱스 + 1, sum - numbers[현재인덱스]);
    }
  }

  dfs(0, 0);

  return answer;
}

solution([1, 1, 1, 1, 1], 3);
solution([4, 1, 2, 1], 4);
