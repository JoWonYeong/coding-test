// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let max = Math.max(...arr);
  let 최소공배수 = max;
  let flag = false;

  while (flag === false) {
    // console.log(최소공배수);
    for (let i = 0; i < arr.length; i++) {
      // console.log('arr[' + i + ']:' + arr[i]);

      if (최소공배수 % arr[i] === 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if (flag === true) {
      break;
    }
    최소공배수 += max;
  }

  return 최소공배수;
}

solution([2, 6, 8, 14]);
solution([1, 2, 3]);
