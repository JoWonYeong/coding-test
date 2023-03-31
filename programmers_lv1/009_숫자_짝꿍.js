function solution(X, Y) {
  let 통계 = {
    0: [0, 0],
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0],
    6: [0, 0],
    7: [0, 0],
    8: [0, 0],
    9: [0, 0],
  };
  let 횟수 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var answer = '';

  X.split('').forEach((a, i) => {
    통계[a][0] += 1;
  });

  Y.split('').forEach((a, i) => {
    통계[a][1] += 1;
  });

  for (let i = 0; i < 10; i++) {
    횟수[i] = Math.min(...통계[i]);
  }

  let zero = 0;
  횟수.forEach((a, i) => {
    if (a == 0) {
      zero += 1;
    }
  });
  if (zero == 10) {
    return '-1';
  }
  if (zero == 9 && 횟수[0] !== 0) {
    return '0';
  }

  for (let i = 9; i >= 0; i--) {
    let count = 횟수[i];
    let temp = '';
    while (count > 0) {
      temp += i;
      count--;
    }

    answer += temp;
  }
  return answer;
}

console.log(solution('12321', '42531'));
console.log(solution('100', '203045'));
console.log(solution('100', '2345'));
console.log(solution('5525', '1255'));
