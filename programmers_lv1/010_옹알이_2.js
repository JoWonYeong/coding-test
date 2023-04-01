function check(temp, 해당발음, replaceStr, flag) {
  let indexArr = [];
  while (temp.indexOf(해당발음) != -1) {
    indexArr.push(temp.indexOf(해당발음));
    temp = temp.replace(해당발음, replaceStr);
  }
  for (let i = 0; i < indexArr.length - 1; i++) {
    if (indexArr[i + 1] - indexArr[i] == 해당발음.length) {
      flag = false;
    }
  }
  return flag;
}

function solution(babbling) {
  // 가능한 발음: "aya", "ye", "woo", "ma"
  //  연속해서 같은 발음 X
  var count = 0;

  babbling.forEach((a, i) => {
    let temp = a;
    let flag = true;
    flag = check(temp, 'aya', 'zzz', flag);
    flag ? (flag = check(temp, 'ye', 'zz', flag)) : null;
    flag ? (flag = check(temp, 'woo', 'zzz', flag)) : null;
    flag ? (flag = check(temp, 'ma', 'zz', flag)) : null;

    if (flag == true) {
      a = a
        .replaceAll('aya', '-')
        .replaceAll('ye', '-')
        .replaceAll('woo', '-')
        .replaceAll('ma', '-');

      a = a.replaceAll('-', '');

      if (a.length == 0) {
        count += 1;
      }
    }
  });

  return count;
}

console.log(solution(['aya', 'yee', 'u']));
console.log(solution(['ayaye', 'uuu', 'imyeye', 'yemawoo', 'ayaayaa']));
console.log(solution(['wooyemawooye', 'mayaa', 'ymaeaya']));
