function solution(id_list, report, k) {
  var answer = [];

  // id 별로 중복 제외 신고당한 수
  let id별신고당한수 = new Array(id_list.length).fill(0);
  let id별신고한사람 = [];

  for (let i = 0; i < id_list.length; i++) {
    let 배열 = [];
    id별신고한사람.push(배열);
    answer.push(0);
  }

  report.forEach((a, i) => {
    let 신고자 = a.split(' ')[0];
    let 신고당함 = a.split(' ')[1];
    let 신고자index = id_list.indexOf(신고자);

    if (!id별신고한사람[신고자index].includes(신고당함)) {
      id별신고한사람[신고자index].push(신고당함);
      id별신고당한수[id_list.indexOf(신고당함)] += 1;
    }
  });

  let 정지된애들 = [];

  id별신고당한수.forEach((a, i) => {
    if (a >= k) {
      정지된애들.push(id_list[i]);
    }
  });

  id별신고한사람.forEach((a, i) => {
    for (let j = 0; j < 정지된애들.length; j++) {
      if (a.includes(정지된애들[j])) {
        answer[i]++;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
);
