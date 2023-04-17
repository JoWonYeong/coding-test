function solution(nums) {
  const set = new Set(nums);
  const temp = [...set];

  if (temp.length >= nums.length / 2) {
    return nums.length / 2;
  }
  return temp.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
