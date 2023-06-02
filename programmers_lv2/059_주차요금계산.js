// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  records.sort((a, b) => a.split(' ')[1] - b.split(' ')[1]);
  var answer = [];
  let info = new Map();
  records.forEach((a, i) => {
    let arr = a.split(' ');
    let min =
      parseInt(arr[0].split(':')[0]) * 60 + parseInt(arr[0].split(':')[1]);
    if (info.has(arr[1])) {
      info.set(arr[1], [...info.get(arr[1]), min]);
    } else {
      info.set(arr[1], [min]);
    }
  });

  info.forEach((a, i) => {
    if (a.length % 2 === 1) {
      // 출차기록 없으면 23:59 출차
      a.push(1439);
    }
    let 누적시간 = 0;
    for (let j = 0; j < a.length; j += 2) {
      누적시간 = 누적시간 + a[j + 1] - a[j];
    }
    if (누적시간 > fees[0]) {
      answer.push(
        fees[1] + Math.ceil((누적시간 - fees[0]) / fees[2]) * fees[3]
      );
    } else {
      answer.push(fees[1]);
    }
  });

  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ]
);

solution(
  [120, 0, 60, 591],
  [
    '16:00 3961 IN',
    '16:00 0202 IN',
    '18:00 3961 OUT',
    '18:00 0202 OUT',
    '23:58 3961 IN',
  ]
);

solution([1, 461, 1, 10], ['00:00 1234 IN']);
