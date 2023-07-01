function solution(word) {
  const arr = 'AEIOU';
  const result = [];

  for (let i = 1; i <= 5; i++) {
    dfs('', i);
  }

  function dfs(current, length) {
    if (length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(current + arr[i], length - 1);
    }
  }

  return result.sort().indexOf(word) + 1;
}

solution('AAAAE');
solution('AAAE');
solution('I');
solution('EIO');
