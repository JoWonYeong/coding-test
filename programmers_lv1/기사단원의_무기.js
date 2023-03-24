function solution(number, limit, power) {
  var answer = 0;

  // 1. 1부터 number까지 돌면서 그 수의 약수의 개수를 구해서 공격력 배열에 넣음
  for (let i = 1; i <= number; i++) {
    let 공격력 = 0;
    // 약수 구하기 = 약수는 본인을 제외하고 n/2 보다 클 수 없기 때문에 그 수의 절반만큼 돌고 1 더함
    for (let j = 1; j <= i / 2; j++) {
      if (i % j == 0) {
        공격력++;
      }
    }
    // 본인을 약수에 포함
    공격력 += 1;

    // 2. 만약 공격력이 limit 보다 크다면 그 수를 power로 바꿈
    if (공격력 > limit) {
      공격력 = power;
    }

    // 3. 모든 공격력을 더함
    answer += 공격력;
  }

  return answer;
}

console.log(solution(10, 3, 2));
console.log(solution(5, 3, 2));
