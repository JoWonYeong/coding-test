function solution(players, callings) {
  var answer = [];

  callings.forEach((a, i) => {
    let index = players.indexOf(a);
    let temp = players[index - 1];
    players[index - 1] = a;
    players[index] = temp;
  });

  console.log(players);

  return answer;
}

solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']);
