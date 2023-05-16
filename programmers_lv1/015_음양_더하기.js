// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((a, i) => {
    if (signs[i] == true) {
      answer += a;
    } else {
      answer -= a;
    }
  });

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
