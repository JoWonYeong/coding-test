// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let p = 0;
  let y = 0;

  [...s].forEach((a, i) => {
    if (a === 'p' || a === 'P') {
      p += 1;
    } else if (a === 'y' || a === 'Y') {
      y += 1;
    }
  });

  return p === y ? true : false;
}

solution('pPoooyY');
solution('Pyy');
