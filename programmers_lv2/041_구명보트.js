// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => a - b);

  while (people.length !== 0) {
    if (people.pop() + people[0] <= limit) {
      people.shift();
      // people.splice(0, 1);
    }
    answer++;
  }

  return answer;
}

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);

// 효율성 검사 통과못함
// function solution(people, limit) {
//   var answer = 0;

//   people.sort((a, b) => a - b);

//   for (let i = 0; i < people.length; i++) {
//     for (let j = people.length - 1; j > i; j--) {
//       if (people[i] + people[j] <= limit && people[i] >= 0 && people[j] >= 0) {
//         people[i] = people[j] = -1;
//         answer++;
//       }
//     }
//     if (people[i] >= 0) {
//       answer++;
//     }
//   }
//   return answer;
// }
