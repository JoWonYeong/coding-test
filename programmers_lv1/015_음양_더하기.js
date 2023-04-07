function solution(absolutes, signs) {
  var answer = 123456789;

  let 수 = [];
  absolutes.forEach((a, i) => {
    if (signs[i] == true) {
      수.push(a);
    } else {
      수.push(parseInt('-' + a));
    }
  });

  answer = 수.reduce((acc, current) => acc + current, 0);

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
