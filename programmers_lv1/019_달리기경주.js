function solution(players, callings) {
  var answer = [];

  let map = new Map();

  players.forEach((a, i) => {
    map.set(a, i);
  });

  callings.forEach((a, i) => {
    let index = map.get(a);
    let temp = players[index - 1];
    players[index - 1] = a;
    players[index] = temp;
    map.set(a, index - 1);
    map.set(temp, index);
  });

  for (let [key, value] of map.entries()) {
    answer[value] = key;
  }

  return answer;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
