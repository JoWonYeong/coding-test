// 아스키코드 대문자(A): 65~ , 소문자(a): 97~
// 문자열 -> 아스키코드: '문자열'.charCodeAt([문자열자릿수]);
// 아스키코드 -> 문자열: String.fromCharCode(n, n, n, n ...);

function solution(s, skip, index) {
  var answer = '';
  let skipArr = [];

  for (let i = 0; i < skip.length; i++) {
    skipArr.push(skip.charCodeAt([i]));
  }

  for (let i = 0; i < s.length; i++) {
    let plus = s.charCodeAt([i]);

    let count = 0;
    while (count < index) {
      if (!skipArr.includes(plus + 1)) {
        count++;
      }
      if (plus < 122) {
        plus++;
      } else {
        // z 일때
        plus = 97;
        while (skipArr.includes(plus)) {
          plus++;
        }
      }
    }
    answer += String.fromCharCode(plus);
  }

  return answer;
}

console.log(solution('aukks', 'wbqd', 5));
console.log(solution('ybcde', 'az', 1));
