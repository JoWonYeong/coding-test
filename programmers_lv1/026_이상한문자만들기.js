// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let arr = s.split(' ');
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split('');

    temp.forEach((a, j) => {
      if (j % 2 == 0) {
        temp[j] = a.toUpperCase();
      } else {
        temp[j] = a.toLowerCase();
      }
    });

    answer.push(temp.join(''));
  }

  return answer.join(' ');
}

solution('try hello world');
