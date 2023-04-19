// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  var answer = [];
  let 일치한번호 = 0;
  let 영개수 = 0;
  let 점수 = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  lottos.forEach((a, i) => {
    if (a == 0) {
      영개수++;
    } else if (win_nums.includes(a)) {
      lottos[i] = -1;
      일치한번호++;
      win_nums[win_nums.indexOf(a)] = -1;
    }
  });

  // 최저순위 등록
  answer[1] = 점수[일치한번호];

  // 최고순위 등록
  if (영개수 <= win_nums.length - 일치한번호) {
    answer[0] = 점수[일치한번호 + 영개수];
  } else {
    answer[0] = 점수[일치한번호 + win_nums.length - 일치한번호];
  }
  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
