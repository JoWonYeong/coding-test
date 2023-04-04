function solution(s) {
  var answer = '';
  let word = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  wordStr = 'one,two,three,four,five,six,seven,eight,nine,zero';
  let count = 0;
  const sArr = s.split('');

  while (count < s.length) {
    if (isNaN(sArr[count])) {
      // 숫자가 아닐 경우
      if (wordStr.includes(sArr.slice(count, count + 5).join(''))) {
        // 5글자 영어인 경우
        answer += word[sArr.slice(count, count + 5).join('')];
        count += 5;
      } else if (wordStr.includes(sArr.slice(count, count + 4).join(''))) {
        // 4글자 영어인 경우
        answer += word[sArr.slice(count, count + 4).join('')];
        count += 4;
      } else {
        // 3글자 영어인 경우
        answer += word[sArr.slice(count, count + 3).join('')];
        count += 3;
      }
    } else {
      // 숫자인 경우
      answer += sArr[count];
      count++;
    }
  }
  return parseInt(answer);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
