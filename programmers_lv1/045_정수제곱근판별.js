// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let num = n ** (1 / 2);

  if (num === Math.floor(num)) {
    return (num + 1) ** 2;
  } else {
    return -1;
  }

  // if (Number.isInteger(num)){
  //   return ((num+1)**2)
  // }
  // else{
  //   return -1
  // }
}

solution(121);
solution(3);
