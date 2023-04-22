function solution(today, terms, privacies) {
  var answer = [];
  let 유효기간 = new Map();
  let 보관가능날짜 = [];
  let 유효year = parseInt(today.split('.')[0]);
  let 유효month = parseInt(today.split('.')[1]);
  let 유효date = parseInt(today.split('.')[2]);
  console.log(유효year, 유효month, 유효date);

  terms.forEach((a, i) => {
    let temp = a.split(' ');
    유효기간.set(temp[0], parseInt(temp[1]));
  });

  privacies.forEach((a, i) => {
    let temp = a.split(' ');

    let year = parseInt(temp[0].split('.')[0]);
    let month = parseInt(temp[0].split('.')[1]);
    let date = parseInt(temp[0].split('.')[2]);
    console.log(year, month, date);

    // let year = parseInt(temp[0].match(/^[0-9]{4}/g)[0]);
    // let month = parseInt(temp[0].match(/(?<=\.)[0-9]{2}(?=\.)/g)[0]);
    // let date = parseInt(temp[0].match(/[0-9]{2}$/g)[0]);

    month += 유효기간.get(temp[1]);
    date -= 1;
    if (date == 0) {
      month -= 1;
      date = 28;
    }
    if (month > 12) {
      let 달 = month % 12;
      if (달 == 0) {
        month = 12;
      } else {
        // ex month = 25
        month -= 달;
      }
      year += Math.floor(month / 12);
    }

    보관가능날짜.push([year, month, date]);
  });

  for (let i = 0; i < 보관가능날짜.length; i++) {
    if (보관가능날짜[i][0] < 유효year) {
      answer.push(i + 1);
      continue;
    } else if (보관가능날짜[i][1] < 유효month) {
      answer.push(i + 1);
      continue;
    } else if (보관가능날짜[i][2] < 유효date) {
      answer.push(i + 1);
    }
  }

  // console.log(answer);

  return answer;
}

solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
);

solution(
  '2020.01.01',
  ['Z 3', 'D 5'],
  [
    '2019.01.01 D',
    '2019.11.15 Z',
    '2019.08.02 D',
    '2019.07.01 D',
    '2018.12.28 Z',
  ]
);
solution('2020.01.02', ['A 1'], ['2020.01.02 A']);
