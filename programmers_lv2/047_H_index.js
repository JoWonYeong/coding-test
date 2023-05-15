// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  let max = citations.length;

  for (let i = max; i > 0; i--) {
    if (citations[i - 1] >= i) {
      answer = i;
      break;
    }
  }

  return answer;
}

solution([3, 0, 6, 1, 5]);
