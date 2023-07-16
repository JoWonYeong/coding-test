const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = [input[0].split(' ')[0], input[0].split(' ')[1]];

let map = new Map();

for (let i = 1; i < input.length; i++) {
  if (input[i].length >= M) {
    map.set(input[i], (map.get(input[i]) || 0) + 1);
  }
}

map = [...map]
  .sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0].length === b[0].length) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[0].length - a[0].length;
      }
    } else {
      return b[1] - a[1];
    }
  })
  .map((v) => v[0])
  .join('\n');

console.log(map);
