function solution(board, moves) {
  var answer = 0;
  let 라인별보드 = [];
  let 바구니 = [];

  for (let i = 0; i < board[0].length; i++) {
    let temp = [];
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] != 0) {
        temp.push(board[j][i]);
      }
    }
    라인별보드.push(temp);
  }

  moves.forEach((a, i) => {
    if (라인별보드[a - 1].length != 0) {
      바구니.push(라인별보드[a - 1].pop());
      let 바구니길이 = 바구니.length;

      if (바구니[바구니길이 - 2] == 바구니[바구니길이 - 1]) {
        바구니.splice(바구니길이 - 2, 2);
        answer += 1;
      }
    }
  });

  return answer * 2;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
