function solution(a, b) {
  const 요일 = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);

  return 요일[date.getDay()];
}

solution(5, 24);
