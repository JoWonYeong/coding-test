// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  // truck_weight : 대기 트럭
  let going = Array(bridge_length).fill(0); // 다리를 건너는 트럭
  let finish = []; // 다리를 지난 트럭

  while (true) {
    if (going.filter((v) => v !== 0).length === 0 && truck_weights.length === 0)
      break;
    answer++;

    if (going[0] !== 0) {
      finish.push(going.shift());
      going.push(0);
    } else {
      going.shift();
      going.push(0);
    }
    if (going.reduce((a, c) => a + c, 0) + truck_weights[0] <= weight) {
      going.pop();
      going.push(truck_weights.shift());
    }
  }

  return answer;
}

solution(2, 10, [7, 4, 5, 6]);
solution(100, 100, [10]);
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
solution(10, 12, [1, 1, 1, 1, 2, 2, 4, 4, 4]);
