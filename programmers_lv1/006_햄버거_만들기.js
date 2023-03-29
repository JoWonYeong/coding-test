function solution(ingredient) {
  var 햄버거개수 = 0;

  // ingredient 1: 빵, 2: 야채, 3: 고기
  // 아래서부터, 빵–야채–고기-빵 (1-2-3-1) 로 쌓인 햄버거만 포장

  let i = 0;
  while (ingredient.length >= 4 && i < ingredient.length - 3) {
    if (
      ingredient[i] == 1 &&
      ingredient[i + 1] == 2 &&
      ingredient[i + 2] == 3 &&
      ingredient[i + 3] == 1
    ) {
      ingredient.splice(i, 4);
      i <= 3 ? (i = 0) : (i = i - 3);
      햄버거개수++;
    } else {
      i++;
    }
  }
  return 햄버거개수;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
