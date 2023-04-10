process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  let 가로 = 0;
  let 세로 = 0;
  가로 = parseInt(data.split(' ')[0]);
  세로 = parseInt(data.split(' ')[1]);

  for (let i = 0; i < 세로; i++) {
    let 한줄 = '';
    for (let j = 0; j < 가로; j++) {
      한줄 += '*';
    }
    console.log(한줄);
  }
});
