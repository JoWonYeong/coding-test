// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = String(x)
    .split('')
    .reduce((acc, a) => (acc += parseInt(a)), 0);

  if (x % sum == 0) {
    console.log(true);

    return true;
  }
  console.log(false);

  return false;
}

solution(10);
solution(12);
solution(11);
solution(13);
