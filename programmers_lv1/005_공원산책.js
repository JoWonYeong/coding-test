function solution(park, routes) {
  let move = [];
  let park2Arr = [];
  let W = park[0].length;
  let H = park.length;

  park.forEach((a, i1) => {
    // park 이차원배열로 만들기
    park2Arr.push(a.split(''));

    a.split('').forEach((a, i2) => {
      if (a.includes('S')) {
        // move[y(세로),x(가로)]에 시작시점 넣기
        move.push(i1);
        move.push(i2);
      }
    });
  });

  // move = 움직이는 현재 위치[y,x]
  // 움직이기
  routes.forEach((a, i) => {
    // 방향: a.split(' ')[0], 거리: a.split(' ')[1]
    let op = a.split(' ')[0];
    let n = parseInt(a.split(' ')[1]);
    let flag = false;

    switch (op) {
      case 'E':
        // 공원을 벗어나는지 확인
        if (move[1] + n > W - 1) {
          break;
        }
        for (let i = 1; i <= n; i++) {
          // 주어진 방향으로 이동 중 X 만나는 지 확인
          if (park2Arr[move[0]][move[1] + i] == 'X') {
            flag = true;
            break;
          }
        }
        !flag && (move[1] += n);
        break;
      case 'W':
        if (move[1] - n < 0) {
          break;
        }
        for (let i = 1; i <= n; i++) {
          if (park2Arr[move[0]][move[1] - i] == 'X') {
            flag = true;
            break;
          }
        }
        !flag && (move[1] -= n);
        break;
      case 'S':
        if (move[0] + n > H - 1) {
          break;
        }
        for (let i = 1; i <= n; i++) {
          if (park2Arr[move[0] + i][move[1]] == 'X') {
            flag = true;
            break;
          }
        }
        !flag && (move[0] += n);
        break;
      case 'N':
        if (move[0] - n < 0) {
          break;
        }
        for (let i = 1; i <= n; i++) {
          if (park2Arr[move[0] - i][move[1]] == 'X') {
            flag = true;
            break;
          }
        }
        !flag && (move[0] -= n);
        break;
    }
  });

  return move;
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
