function solution(today, terms, privacies) {
  var answer = [];
  let 유효기간 = new Map();
  let [유효year, 유효month, 유효date] = today.split('.').map(Number);

  terms.forEach((a, i) => {
    let temp = a.split(' ');
    유효기간.set(temp[0], parseInt(temp[1]));
  });

  for (let i = 0; i < privacies.length; i++) {
    let 약관종류 = privacies[i].split(' ')[1];
    let [year, month, date] = privacies[i].split(' ')[0].split('.').map(Number);
    let addMonth = 유효기간.get(약관종류);

    // 정규표현식
    // let year = parseInt(temp[0].match(/^[0-9]{4}/g)[0]);
    // let month = parseInt(temp[0].match(/(?<=\.)[0-9]{2}(?=\.)/g)[0]);
    // let date = parseInt(temp[0].match(/[0-9]{2}$/g)[0]);

    year += Math.floor(addMonth / 12);
    month += addMonth % 12;
    if (month > 12) {
      year += 1;
      month %= 12;
    }

    if (year < 유효year) {
      answer.push(i + 1);
      continue;
    } else if (year === 유효year) {
      if (month < 유효month) {
        answer.push(i + 1);
        continue;
      } else if (month === 유효month) {
        if (date <= 유효date) {
          answer.push(i + 1);
          continue;
        }
      }
    }
  }

  console.log(answer);

  return answer;
}

// solution(
//   '2022.05.19',
//   ['A 6', 'B 12', 'C 3'],
//   ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
// );

solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3', 'D 32'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
);

// solution(
//   '2020.01.01',
//   ['Z 3', 'D 5'],
//   [
//     '2019.01.01 D',
//     '2019.11.15 Z',
//     '2019.08.02 D',
//     '2019.07.01 D',
//     '2018.12.28 Z',
//   ]
// );
// solution('2020.01.02', ['A 1'], ['2020.01.02 A']);
