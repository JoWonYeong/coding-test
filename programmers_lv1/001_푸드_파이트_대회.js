function solution(food) {
  let answer = '';

  food.forEach((e, i) => {
    if (e > 1) {
      for (let j = 0; j < Math.floor(e / 2); j++) {
        answer += i;
      }
    }
  });
  const temp = [...answer.split('')].reverse();

  answer = answer + 0 + temp.join('');
  return answer;
}

console.log(solution([1, 7, 1, 2]));
console.log(solution([1, 3, 4, 6]));
