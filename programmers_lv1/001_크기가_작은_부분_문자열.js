function solution(t, p) {
  let length = p.length;
  let tArr = t.split('');
  let count = 0;

  for (let i = 0; i < t.length - (length - 1); i++) {
    let temp = '';
    for (let j = i; j < i + length; j++) {
      temp += tArr[j];
    }
    console.log(temp);

    if (parseInt(p) >= parseInt(temp)) {
      count++;
    }
  }
  return count;
}

console.log(solution('500220839878', '7'));
