function solution(wallpaper) {
  var answer = [];
  let 바탕화면 = [];
  let lux = -1;
  let luy = -1;
  let rdx = -1;
  let rdy = -1;

  wallpaper.forEach((a, i) => {
    바탕화면.push(a.split(''));
  });

  // 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현
  //  빈칸은 ".", 파일이 있는 칸은 "#"

  let index = 0;

  // 드래그 시작점의 처음값(lux)은 행을 훑으며 처음 '#'가 나왔을 때 index
  while (lux == -1) {
    if (바탕화면[index].includes('#')) {
      lux = index;
    }
    index++;
  }

  // 드래그 시작점의 두번째값(luy)은 열을 훑으며 처음 '#'가 나왔을 때 index
  index = 0;
  while (luy == -1) {
    for (let i = 0; i < 바탕화면.length; i++) {
      if (바탕화면[i][index] == '#') {
        luy = index;
      }
    }
    index++;
  }

  // 드래그 마지막점의 처음값(rdx)은 행을 끝부터 훑으며 처음 '#'가 나왔을 때 index+1
  index = 바탕화면.length - 1;
  while (rdx == -1) {
    if (바탕화면[index].includes('#')) {
      rdx = index + 1;
    }
    index--;
  }

  // 드래그 마지막점의 두번째값(rdy)는 열을 끝부터 훑으며 처음 '#'가 나왔을 때 index+1
  index = 바탕화면[0].length - 1;
  while (rdy == -1) {
    for (let i = 바탕화면.length - 1; i >= 0; i--) {
      if (바탕화면[i][index] == '#') {
        rdy = index + 1;
      }
    }
    index--;
  }

  return [lux, luy, rdx, rdy];
}

console.log(solution(['.#...', '..#..', '...#.']));

console.log(
  solution([
    '..........',
    '.....#....',
    '......##..',
    '...##.....',
    '....#.....',
  ])
);

console.log(
  solution([
    '.##...##.',
    '#..#.#..#',
    '#...#...#',
    '.#.....#.',
    '..#...#..',
    '...#.#...',
    '....#....',
  ])
);
