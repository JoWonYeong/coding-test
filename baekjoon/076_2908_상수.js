const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

solution(input);

function solution(input){
  input = input
    .map((v) => v.split('').reverse().join(''))
    .map(Number);    
    
  if(input[0]>input[1]) console.log(input[0])
  else console.log(input[1]);
}

solution(['734', '893'])
solution(['221', '231'])
solution(['839', '237'])