function solution(n, left, right) {
  let arr = [];

  let l = parseInt(left / n);
  let r = parseInt(right / n);
  while (l <= r) {
    let k = 1;

    while (k <= n) {
      if (k <= l + 1) {
        arr.push(l + 1);
      } else {
        arr.push(k);
      }
      k++;
    }

    l++;
  }

  arr = arr.slice(
    left % n,
    (parseInt(right / n) - parseInt(left / n)) * n + (right % n) + 1
  );
  return arr;
}

solution(3, 2, 5);
solution(4, 7, 14);
