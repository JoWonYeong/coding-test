function solution(name, yearning, photo) {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let score = 0;

    photo[i].forEach((a, j) => {
      let index = name.indexOf(a);
      if (index != -1) {
        score += yearning[index];
      }
    });
    answer.push(score);
  }

  return answer;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);

console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
);
