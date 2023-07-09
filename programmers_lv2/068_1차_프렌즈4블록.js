// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let answer = 0;
  // m : 높이(세로), n : 폭(가로)
  board = board.map((v) => v.split(''));

  while (true) {
    // 4칸 만들어지는 시작 인덱스 채워넣기
    let indexArr = [];
    let isEnd = true;

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n; j++) {
        if (
          board[i][j] !== ' ' &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          isEnd = false;
          indexArr.push([i, j]);
        }
      }
    }
    if (isEnd) break;
    answer = 0;

    // 4칸 인덱스 돌면서 블록 지우기
    indexArr.forEach((a, i) => {
      board[a[0]][a[1]] =
        board[a[0] + 1][a[1]] =
        board[a[0]][a[1] + 1] =
        board[a[0] + 1][a[1] + 1] =
          ' ';
    });

    // 지워진 블록 위에 블록들 밑으로 보냄
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[j][i] === ' ') {
          // 지워진 블록 갯수+1
          answer++;
          for (let k = j; k > 0; k--) {
            board[k][i] = board[k - 1][i];
            board[k - 1][i] = ' ';
          }
        }
      }
    }
  }
  return answer;
}

solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);
