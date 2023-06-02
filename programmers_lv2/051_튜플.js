// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
  let map = new Map();
  let temp = [];

  arr.forEach((a, i) => {
    map.set(a.length, a);
  });

  for (let i = 1; i <= map.size; i++) {
    temp.push(...map.get(i));
  }

  return [...new Set(temp)];
}

solution('{{2},{2,1},{2,1,3},{2,1,3,4}}');
solution('{{1,2,3},{2,1},{1,2,4,3},{2}}');
solution('{{20,111},{111}}');
solution('{{123}}');
solution('{{4,2,3},{3},{2,3,4,1},{2,3}}');
