function solution(files) {
  // \d : 숫자 1글자 의미, [0-9]와 같은 뜻
  // \D : 숫자 제외한 1글자 의미, [^0-9]와 같은 뜻

  /*
  .sort((a, b) => {
        if (a[1].toLowerCase() > b[1].toLowerCase()) {
          return a[1].toLowerCase() - b[1].toLowerCase();
        } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
          return b[1].toLowerCase() - a[1].toLowerCase();
        } ...
      })

  안되는 이유

  - sort()함수는 반환값으로 음수, 양수, 0 을 받고 그 정보에 따라 정렬함
  - 숫자의 경우 sort((a,b) => a-b) 로 한번에 오름차순으로 정렬 가능 (숫자니까 빼면 자동으로 반환값 생성)
  - 문자의 경우 빼면 숫자가 나오지 X (이 경우 NaN 반환함)
    따라서 문자의 경우 경우를 나누어서 각각 반환값을 정해줘야함
  */

  return files
    .map((file) => file.match(/(\D+)(\d+)/))
    .sort((a, b) => {
      if (a[1].toLowerCase() > b[1].toLowerCase()) {
        return 1;
      } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
      } else if (a[1].toLowerCase() === b[1].toLowerCase()) {
        return parseInt(a[2]) - parseInt(b[2]);
      }
    })
    .map((file) => file.input);
}

solution([
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
]);

solution([
  'F-5 Freedom Fighter',
  'B-50 Superfortress',
  'A-10 Thunderbolt II',
  'F-14 Tomcat',
]);
