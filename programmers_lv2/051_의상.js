// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  var answer = 1;
  let map = new Map();

  clothes.forEach((a, i) => {
    map.has(a[1])
      ? map.set(a[1], [...map.get(a[1]), a[0]])
      : map.set(a[1], [a[0]]);
  });

  map.forEach((a, i) => {
    answer *= a.length + 1;
  });

  return answer - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);

// solution([
//   ['crow_mask', 'face'],
//   ['blue_sunglasses', 'face'],
//   ['smoky_makeup', 'face'],
// ]);
