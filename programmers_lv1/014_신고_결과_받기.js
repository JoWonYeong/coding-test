function solution(id_list, report, k) {
  var answer = [];
  let 신고현황 = [];
  let 신고당한횟수 = new Array(id_list.length).fill(0);
  let 정리 = [];

  id_list.forEach((a, i) => {
    정리.push([a]);
  });
  // 정리 = [ [ 'muzi' ], [ 'frodo' ], [ 'apeach' ], [ 'neo' ] ]

  report.forEach((a, i) => {
    신고현황.push(a.split(' '));
    신고당한횟수[id_list.indexOf(a.split(' ')[1])] += 1;
  });

  console.log(신고현황);
  // 중복체크해야됨 두번째 테스트케이스로

  // 신고현황 = [
  //   [ 'muzi', 'frodo' ],
  //   [ 'apeach', 'frodo' ],
  //   [ 'frodo', 'neo' ],
  //   [ 'muzi', 'neo' ],
  //   [ 'apeach', 'muzi' ]
  // ]
  console.log(신고당한횟수);

  // 신고당한횟수 = [ 1, 2, 0, 2 ]

  id_list.forEach((a, i) => {
    let 유저가신고한id = [];
    for (let j = 0; j < 신고현황.length; j++) {
      if (
        신고현황[j][0] == a &&
        !유저가신고한id.join().includes(신고현황[j][1])
      ) {
        유저가신고한id.push(신고현황[j][1]);
      }
    }
    정리[i][1] = 유저가신고한id;
    정리[i][2] = 0;
  });

  // 정리 = [
  //   [ 'muzi', [ 'frodo', 'neo' ], 0 ],
  //   [ 'frodo', [ 'neo' ], 0 ],
  //   [ 'apeach', [ 'frodo', 'muzi' ], 0 ],
  //   [ 'neo', [], 0 ]
  // ]

  let 신고당한사람들 = [];
  신고당한횟수.forEach((a, i) => {
    if (a >= k) {
      신고당한사람들.push(id_list[i]);
    }
  });
  console.log(신고당한사람들);

  정리.forEach((a, i) => {
    신고당한사람들.forEach((b, j) => {
      if (a[1].includes(b)) {
        a[2] += 1;
      }
    });
  });

  console.log(정리);

  return answer;
}

// solution(
//   ['muzi', 'frodo', 'apeach', 'neo'],
//   ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
//   2
// );

solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3);
