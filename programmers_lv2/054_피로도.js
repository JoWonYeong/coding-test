function solution(k, dungeons) {
  var answer = [];
  let visited = new Array(dungeons.length).fill(0);

  function dfs(count, k) {
    answer.push(count);
    console.log('answer : ' + answer);
    console.log('visited : ' + visited);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];

      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}

solution(80, [
  [80, 20],
  [30, 10],
  [50, 40],
]);
