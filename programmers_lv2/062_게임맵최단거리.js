function solution(maps) {
  let yLen = maps.length;
  let xLen = maps[0].length;
  let goalY = yLen - 1;
  let goalX = xLen - 1;
  let dy = [0, 0, 1, -1];
  let dx = [-1, 1, 0, 0];
      // const dy = [0, 0, 1, -1];
      // const dx = [-1, 1, 0, 0];

  // [현재 y, x 좌표, 이동한 칸 수]
  let queue = [];
  queue.push([0, 0, 1]);

  //   이제 while문을 사용해 BFS를 시작합니다.
  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      const newY = curY + dy[i];
      const newX = curX + dx[i];

      if(newY>=0 && newY<yLen && newX>=0 && newX<xLen && maps[newY][newX] === 1){
        queue.push([newY, newX, move + 1])
        maps[newY][newX] = 0;
      }
    }
  }

  // 도착지로 갈 경우가 없는 경우
  return -1;
}








console.log(solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]))
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
;
