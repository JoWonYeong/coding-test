function solution(arr) {
  min = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == min) {
      arr.splice(i, 1);
    }
  }

  if (arr.length === 0) {
    return [-1];
  } else return arr;
}

solution([4, 3, 2, 1]);
solution([10]);
