function solution(keymap, targets) {
  let 쳐야할문자 = [];

  // target 배열의 문자 다 분해해서 set 형태에 집어넣음(중복제거)
  targets.forEach((a, i) => {
    쳐야할문자 = [...쳐야할문자, ...a.split('')];
  });
  const set = new Set(쳐야할문자);
  const 쳐야할문자배열 = [...set];

  let 누르는횟수 = [];
  쳐야할문자배열.forEach((a, i) => {
    let tempArr = [];
    for (let i = 0; i < keymap.length; i++) {
      let temp = keymap[i].split('').findIndex((e) => e === a);
      if (temp >= 0) {
        tempArr.push(temp + 1);
      }
    }
    if (tempArr.length == 0) {
      누르는횟수.push(-1);
    } else {
      누르는횟수.push(Math.min(...tempArr));
    }
  });

  let answer = [];
  let count = 0;
  let flag = true;
  targets.forEach((a, i) => {
    a.split('').forEach((b, j) => {
      if (누르는횟수[쳐야할문자배열.findIndex((e) => e === b)] == -1) {
        flag = false;
      } else {
        count += 누르는횟수[쳐야할문자배열.findIndex((e) => e === b)];
      }
    });
    if (flag) {
      answer.push(count);
    } else {
      answer.push(-1);
    }
    flag = true;
    count = 0;
  });

  return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
console.log(solution(['VSEFS', 'FSIBBW'], ['GER', 'EYERDDRGG']));
