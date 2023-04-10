function solution(nums) {
  var answer = 0;

  let 더한값 = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        더한값.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  더한값.forEach((a, i) => {
    let flag = false;
    for (let i = 2; i < a / 2 + 1; i++) {
      if (a % i == 0) {
        flag = true;
      }
    }
    if (!flag) {
      answer += 1;
    }
  });
  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
