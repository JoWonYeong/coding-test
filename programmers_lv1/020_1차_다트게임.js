function solution(dartResult) {
  var answer = 0;
  let temp = [];

  let j = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] == 'S' || dartResult[i] == 'D' || dartResult[i] == 'T') {
      if (dartResult[i + 1] == '*' || dartResult[i + 1] == '#') {
        temp.push(dartResult.substring(j, i + 2));
        j = i + 2;
      } else {
        temp.push(dartResult.substring(j, i + 1));
        j = i + 1;
      }
    }
  }

  let 답 = 0;
  let 답배열 = [];
  temp.forEach((a, i) => {
    let 숫자 = '';

    for (let j = 0; j < a.length; j++) {
      switch (a[j]) {
        case 'S':
          답 += parseInt(숫자);
          break;
        case 'D':
          답 += parseInt(숫자) ** 2;
          break;
        case 'T':
          답 += parseInt(숫자) ** 3;
          break;
        case '*':
          답 += parseInt(숫자) * 2;
          답 += 답배열[i - 1];
          break;
        case '#':
          break;
        default:
          숫자 += a[j];
          break;
      }
      답배열.push(답);
    }
    console.log(숫자);
  });
  console.log(temp);

  return answer;
}

solution('11S2D*3T');
// solution('1D2S#10S');
// solution('1D#2S*3S');
