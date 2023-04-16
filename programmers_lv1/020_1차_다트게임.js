function solution(dartResult) {
  var answer = 0;
  let score = [0, 0, 0];
  let bonus = [1, 1, 1];
  let option = [1, 1, 1];

  let 최종 = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    score[i] = parseInt(dartResult);
    dartResult = dartResult.slice(String(score[i]).length);

    if (dartResult[0] == 'S' || dartResult[0] == 'D' || dartResult[0] == 'T') {
      switch (dartResult[0]) {
        case 'S':
          bonus[i] = 1;
          break;
        case 'D':
          bonus[i] = 2;
          break;
        case 'T':
          bonus[i] = 3;
          break;
      }
      dartResult = dartResult.slice(1);
    }

    if (dartResult[0] == '*' || dartResult[0] == '#') {
      switch (dartResult[0]) {
        case '*':
          option[i] = 2;
          break;
        case '#':
          option[i] = -1;
          break;
      }
      dartResult = dartResult.slice(1);
    }
  }

  for (let i = 0; i < 3; i++) {
    최종[i] = score[i] ** bonus[i];
    최종[i] = 최종[i] * option[i];

    if (i > 0 && option[i] == 2) {
      최종[i - 1] *= 2;
    }
  }

  answer = 최종.reduce((acc, score) => {
    return acc + score;
  }, 0);

  return answer;
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D#2S*3S'));
