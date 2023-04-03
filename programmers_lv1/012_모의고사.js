function getScore(answers, 찍기) {
  let temp = 0;
  let 시험결과 = 0;
  while (temp < answers.length) {
    찍기.forEach((a, i) => {
      if (a == answers[temp + i]) {
        시험결과++;
      }
    });
    temp += 찍기.length;
  }
  return 시험결과;
}

function solution(answers) {
  var answer = [];
  let 시험결과 = [0, 0, 0];
  const 찍기1 = [1, 2, 3, 4, 5];
  const 찍기2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const 찍기3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  시험결과[0] = getScore(answers, 찍기1);
  시험결과[1] = getScore(answers, 찍기2);
  시험결과[2] = getScore(answers, 찍기3);

  let index = 0;
  let count = 1;

  while (count <= 3) {
    if (Math.max(...시험결과) != 0) {
      index = 시험결과.indexOf(Math.max(...시험결과));
      answer.push(index + 1);
      시험결과[index] = -1;
    }
    count++;
  }

  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([3, 3, 3, 1, 2, 2, 4]);
