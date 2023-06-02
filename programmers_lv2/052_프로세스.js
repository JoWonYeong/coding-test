// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  var answer = 0;
  const 원본배열 = [...priorities];
  let index = 0;

  priorities.sort((a, b) => b - a);

  while (true) {
    if (priorities[index] === 원본배열[0]) {
      원본배열.shift();
      answer++;
      if (location === 0) break;
      index++;
      location--;
    } else {
      원본배열.push(원본배열.shift());
      if (location === 0) {
        location = 원본배열.length - 1;
      } else {
        location--;
      }
    }
  }

  return answer;
}

// solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
