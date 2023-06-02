// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  var answer = 0;
  let map = new Map();
  let sum = 0;
  let reset = [...number];

  want.forEach((a, i) => {
    map.set(a, i);
    sum += number[i];
  });

  let index = 0;
  while (index <= discount.length - sum) {
    number = [...reset];
    let zero = 0;

    for (let i = index; i < sum + index; i++) {
      if (map.has(discount[i]) && number[map.get(discount[i])] !== 0) {
        number[map.get(discount[i])]--;
        if (number[map.get(discount[i])] === 0) zero++;
      } else {
        break;
      }
    }

    if (zero == number.length) {
      answer++;
    }
    index++;
  }

  return answer;
}

solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
);
solution(
  ['apple'],
  [10],
  [
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
  ]
);
