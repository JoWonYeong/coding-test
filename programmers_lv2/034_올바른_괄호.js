// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let isOpen = 0;
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      isOpen++;
    } else {
      if (isOpen < 1) {
        return false;
      }
      isOpen--;
    }
  }
  return isOpen === 0 ? true : false;
}

// solution('()()(');
// solution('(())()');
// solution(')()(');
// solution('(()(');
// solution('(()())');
// solution(')');

// 실패예시
function solution2(s) {
  let isOpen = 0;

  s.split('').forEach((a, i) => {
    if (a === '(') {
      isOpen++;
    } else {
      if (isOpen < 1) {
        // forEach 문에서는 return 후 forEach문을 빠져나오지 않고
        // 'continue'처럼 작동
        // forEach는 멈추지 못함
        // 중간에 멈추거나 값 리턴하고 싶을 때는 for문 사용
        return false;
      }
      isOpen--;
    }
  });

  return isOpen === 0 ? true : false;
}
