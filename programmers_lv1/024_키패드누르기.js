// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  var answer = '';
  let 현재위치 = [10, 11]; // [왼, 오]

  // *: 10, # : 11
  let 번호위치 = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 2],
  ];

  numbers.forEach((a, i) => {
    if (a == 1 || a == 4 || a == 7) {
      answer += 'L';
      현재위치[0] = a;
    } else if (a == 3 || a == 6 || a == 9) {
      answer += 'R';
      현재위치[1] = a;
    } else {
      let 왼손거리 = 0;
      let 오른손거리 = 0;

      왼손거리 =
        Math.abs(번호위치[a][0] - 번호위치[현재위치[0]][0]) +
        Math.abs(번호위치[a][1] - 번호위치[현재위치[0]][1]);
      오른손거리 =
        Math.abs(번호위치[a][0] - 번호위치[현재위치[1]][0]) +
        Math.abs(번호위치[a][1] - 번호위치[현재위치[1]][1]);

      if (왼손거리 < 오른손거리) {
        answer += 'L';
        현재위치[0] = a;
      } else if (왼손거리 > 오른손거리) {
        answer += 'R';
        현재위치[1] = a;
      } else {
        if (hand == 'left') {
          answer += 'L';
          현재위치[0] = a;
        } else {
          answer += 'R';
          현재위치[1] = a;
        }
      }
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
