function solution(dirs) {
  const direction = {
    U: [0, 1],
    D: [0, -1], 
    R: [1, 0],
    L: [-1, 0]
  }
  let path = new Set();

  let cur = [0,0];
  dirs.split('').forEach((a, i)=>{
    let moveX = cur[0] + direction[a][0];
    let moveY = cur[1] + direction[a][1];
    if(moveX<=5 && moveX>=-5 && moveY<=5 && moveY>=-5){
      // 경로를 두 방향으로 저장
      // ex) [0,0] -> [1,0] 이면 '0010', '1000' 저장
      path.add(`${cur[0]}${cur[1]}${moveX}${moveY}`);
      path.add(`${moveX}${moveY}${cur[0]}${cur[1]}`);
      cur = [moveX, moveY];
    }
  })
  // 경로를 두 방향으로 저장했기 때문에 2로 나눠줘야 함
  return path.size/2;
}

solution('ULURRDLLU');
solution('LULLLLLLU');
solution('RRRRRLLLLL');