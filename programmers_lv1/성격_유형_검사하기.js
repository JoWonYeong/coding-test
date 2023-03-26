function choiceSet(choice) {
  if (choice == 1 || choice == 7) {
    return 3;
  } else if (choice == 2 || choice == 6) {
    return 2;
  } else if (choice == 3 || choice == 5) {
    return 1;
  } else {
    return 0;
  }
}

function solution(survey, choices) {
  var answer = '';

  // score1[R,T], score2[C,F], score3[J,M], score4[A,N]

  let 최종점수 = {
    score1: [0, 0],
    score2: [0, 0],
    score3: [0, 0],
    score4: [0, 0],
  };

  // choices (점수)
  // 1:매우 비동의(3), 2:비동의(2), 3:약간 비동의(1), 4:모르겠음(0), 5:약간 동의(1), 6:동의(2), 7:매우 동의(3)

  survey.forEach((a, i) => {
    let score = choiceSet(choices[i]);
    if (choices[i] <= 3) {
      switch (a.split('')[0]) {
        case 'R':
          최종점수.score1[0] += score;
          break;
        case 'T':
          최종점수.score1[1] += score;
          break;
        case 'C':
          최종점수.score2[0] += score;
          break;
        case 'F':
          최종점수.score2[1] += score;
          break;
        case 'J':
          최종점수.score3[0] += score;
          break;
        case 'M':
          최종점수.score3[1] += score;
          break;
        case 'A':
          최종점수.score4[0] += score;
          break;
        case 'N':
          최종점수.score4[1] += score;
          break;
      }
    } else if (choices[i] >= 5) {
      switch (a.split('')[1]) {
        case 'R':
          최종점수.score1[0] += score;
          break;
        case 'T':
          최종점수.score1[1] += score;
          break;
        case 'C':
          최종점수.score2[0] += score;
          break;
        case 'F':
          최종점수.score2[1] += score;
          break;
        case 'J':
          최종점수.score3[0] += score;
          break;
        case 'M':
          최종점수.score3[1] += score;
          break;
        case 'A':
          최종점수.score4[0] += score;
          break;
        case 'N':
          최종점수.score4[1] += score;
          break;
      }
    }
  });

  let scores = [
    ...최종점수.score1,
    ...최종점수.score2,
    ...최종점수.score3,
    ...최종점수.score4,
  ];
  let jipyo = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  for (let i = 0; i < scores.length; i += 2) {
    if (scores[i] >= scores[i + 1]) {
      answer = answer + jipyo[i];
    } else {
      answer = answer + jipyo[i + 1];
    }
  }

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
