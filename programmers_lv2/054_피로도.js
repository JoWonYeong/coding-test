function solution(k, dungeons) {
  var answer = -1;
  let checked = new Array(dungeons.length).fill(0);
  console.log(checked);

  dungeons.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < dungeons.length; i++) {
    if (k - dungeons[i][0] >= 0) {
      checked[i] = k;
      k -= dungeons[i][1];
    } else {
    }
  }
  console.log(checked);

  return answer;
}

solution(80, [
  [80, 20],
  [30, 10],
  [50, 40],
]);
