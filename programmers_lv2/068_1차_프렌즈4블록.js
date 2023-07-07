function solution(m, n, board) {
  // m : 높이(세로), n : 폭(가로)
  let curBoard = [...board];

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 1][j + 1]
      ) {
        console.log(curBoard[i][j]);
        curBoard[i][j + 1] = curBoard[i + 1][j] = curBoard[i + 1][j + 1] = '';
      }
    }
  }
  console.log(board);

  console.log(curBoard);

  var answer = 0;
  return answer;
}

// solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);
solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
