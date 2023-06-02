// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  let arr = [...elements, ...elements];
  let temp = [...elements];

  for (let count = 2; count <= elements.length; count++) {
    for (let i = 0; i < elements.length; i++) {
      let sum = 0;
      let index = i;

      while (index < count + i) {
        sum += arr[index];
        index++;
      }
      temp.push(sum);
    }
  }

  const newTemp = [...new Set(temp)];

  return newTemp.length;
}

solution([7, 9, 1, 1, 4]);
