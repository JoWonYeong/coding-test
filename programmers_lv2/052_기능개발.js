// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  var answer = [];
  let index = 0;

  while (index < progresses.length) {
    let count = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    while (progresses[index] >= 100) {
      count++;
      index++;
    }

    count !== 0 && answer.push(count);
  }

  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
// solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
