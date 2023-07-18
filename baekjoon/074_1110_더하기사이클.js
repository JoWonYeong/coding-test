const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input = parseInt(input[0]);

solution(input);

function solution(num) {
  let count = 0;
  let originNum = num;
  while (true) {
    count++;
    let numStr = num.toString().length === 1 ? `0${num}` : num.toString();
    let numSum = numStr[0] * 1 + numStr[1] * 1;
    numSum = numSum.toString().length === 1 ? `0${numSum}` : numSum.toString();
    if (originNum === parseInt(numStr[1] + numSum[1])) break;
    num = numStr[1] + numSum[1];
  }
  console.log(count);
}

// solution(26);
// solution(55);
// solution(1);
// solution(0);
// solution(71);
