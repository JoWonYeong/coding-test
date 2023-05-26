function solution(arr) {
  let sum = arr.reduce((a, c) => a + c, 0);

  return sum / arr.length;
}

solution([1, 2, 3, 4]);
// solution([5, 5]);
