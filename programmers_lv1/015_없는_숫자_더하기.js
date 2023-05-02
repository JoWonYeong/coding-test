function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// 성능개선코드
function solution2(numbers) {
  const visited = new Array(10).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    visited[number] = 1;
  }

  let sum = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) sum += i;
  }
  return sum;
}
