const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

input = input[0];

solution(input);

function solution(str) {
  const croatia_2 = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
  const croatia_3 = ['dz='];

  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (croatia_2.includes(str[i] + str[i + 1])) {
      i += 1;
    } else if (croatia_3.includes(str[i] + str[i + 1] + str[i + 2])) {
      i += 2;
    }
    i++;
    count++;
  }
  console.log(count);
}

solution('ljes=njak');
solution('ddz=z=');
solution('nljj');
solution('c=c=');
solution('dz=ak');
