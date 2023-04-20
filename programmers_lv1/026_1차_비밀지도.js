// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];

  let 비밀지도1 = [];
  let 비밀지도2 = [];

  arr1.forEach((a, i) => {
    let 이진수로변환 = '';
    while (a >= 1) {
      이진수로변환 = String(a % 2) + 이진수로변환;
      a = Math.floor(a / 2);
    }
    비밀지도1.push(이진수로변환.padStart(n, '0'));
  });

  arr2.forEach((a, i) => {
    let 이진수로변환 = '';
    while (a >= 1) {
      이진수로변환 = String(a % 2) + 이진수로변환;
      a = Math.floor(a / 2);
    }
    비밀지도2.push(이진수로변환.padStart(n, '0'));
  });

  for (let i = 0; i < n; i++) {
    let 한줄 = '';
    for (let j = 0; j < n; j++) {
      if (비밀지도1[i][j] == 1 || 비밀지도2[i][j] == 1) {
        한줄 = 한줄 + '#';
      } else {
        한줄 = 한줄 + ' ';
      }
    }
    answer.push(한줄);
  }
  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
