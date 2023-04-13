// 런타임에러
// function solution(participant, completion) {
//   for (const item of completion) {
//     if (participant.includes(item)) {
//       participant.splice(participant.indexOf(item), 1);
//     }
//   }
//   return participant[0];
// }

function solution(participant, completion) {
  let arr1 = participant.sort();
  let arr2 = completion.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
