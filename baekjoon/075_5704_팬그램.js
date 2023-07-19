const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '*') break;
    let str = input[i].replaceAll(' ', '').split('');
    str = [...new Set(str)];

    if (str.length === 26) {
      console.log('Y');
    } else {
      console.log('N');
    }
  }
}
// solution([
//   'jackdawf loves my big quartz sphinx',
//   'abcdefghijklmnopqrstuvwxyz',
//   'hello world',
//   '*',
// ]);
