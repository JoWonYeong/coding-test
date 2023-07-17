const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
solution(input);

function solution(input) {
  input.forEach((a, i) => {
    let lineLen = a.split(' ').map(Number);
    lineLen.sort((a, b) => b - a);

    if (lineLen[0] === 0) {
    } else if (lineLen[0] >= lineLen[1] + lineLen[2]) {
      if (lineLen[0] !== 0) console.log('Invalid');
    } else {
      if (lineLen[0] === lineLen[2]) {
        console.log('Equilateral');
      } else if (lineLen[0] === lineLen[1] || lineLen[1] === lineLen[2]) {
        console.log('Isosceles');
      } else {
        console.log('Scalene');
      }
    }
  });
}

// solution(['7 7 7', '6 5 4', '3 2 5', '6 2 6', '0 0 0']);
