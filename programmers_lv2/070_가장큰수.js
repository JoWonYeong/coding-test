function solution(numbers) {
  if (numbers.reduce((a, c) => a + c, 0) === 0) return '0';
  numbers = numbers.map((v) => v.toString());
  numbers.sort((a, b) => {
    if (parseInt(a + b) < parseInt(b + a)) {
      return 1;
    } else if (parseInt(a + b) > parseInt(b + a)) {
      return -1;
    } else {
      return 0;
    }
  });
  return numbers.join('');
}
solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
solution([0, 0, 0]);
