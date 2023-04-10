function solution(n, lost, reserve) {
  // 전체 학생의 수 n
  // 체육복을 도난당한 학생들의 번호가 담긴 배열 lost
  // 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve

  let 체육수업듣는최대학생수 = n - lost.length;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  lost.forEach((a, i) => {
    if (reserve.includes(a)) {
      reserve[reserve.indexOf(a)] = -1;
      lost[i] = -1;
      체육수업듣는최대학생수 += 1;
    }
  });

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      // 도난당한 사람 앞에 여벌체육복 가져온 애가 있는 경우
      reserve[reserve.indexOf(lost[i] - 1)] = -1;
      체육수업듣는최대학생수 += 1;
    } else if (reserve.includes(lost[i] + 1)) {
      // 도난당한 사람 뒤에 여벌체육복 가져온 애가 있는 경우
      reserve[reserve.indexOf(lost[i] + 1)] = -1;
      체육수업듣는최대학생수 += 1;
    }
  }

  return 체육수업듣는최대학생수;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(4, [2, 3], [3, 4]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 2], [3, 5]));
