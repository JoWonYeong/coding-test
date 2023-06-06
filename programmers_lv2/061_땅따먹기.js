// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  var answer = 0;
  let prev = land[0];

  for (let i = 1; i < land.length; i++) {
    let temp = [];

    land[i].forEach((b, j) => {
      let max = 0;
      prev.forEach((c, k) => {
        if (k !== j) {
          if (max < c) {
            max = c;
          }
        }
      });
      temp.push(b + max);
    });
    prev = [...temp];
  }
  answer = Math.max(...prev);

  return answer;
}

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);
