function solution(str1, str2) {
  var answer = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let str1Arr = [];
  let str2Arr = [];
  let 합집합원소수 = 0;
  let 교집합원소수 = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    if (
      str1[i].charCodeAt(0) >= 65 &&
      str1[i].charCodeAt(0) <= 90 &&
      str1[i + 1].charCodeAt(0) >= 65 &&
      str1[i + 1].charCodeAt(0) <= 90
    ) {
      str1Arr.push(str1[i] + str1[i + 1]);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (
      str2[i].charCodeAt(0) >= 65 &&
      str2[i].charCodeAt(0) <= 90 &&
      str2[i + 1].charCodeAt(0) >= 65 &&
      str2[i + 1].charCodeAt(0) <= 90
    ) {
      str2Arr.push(str2[i] + str2[i + 1]);
    }
  }
  str1Arr.sort();
  str2Arr.sort();

  합집합원소수 = str1Arr.length + str2Arr.length;
  if (합집합원소수 == 0) return 65536;

  for (let i = 0; i < str1Arr.length; i++) {
    for (let j = 0; j < str2Arr.length; j++) {
      if (str1Arr[i] === str2Arr[j]) {
        str1Arr[i] = str2Arr[j] = '.';
        교집합원소수++;
        break;
      }
    }
  }

  answer = Math.floor((교집합원소수 / (합집합원소수 - 교집합원소수)) * 65536);

  return answer;
}

// solution('FRANCE', 'french');
// solution('handshake', 'shake hands');
// solution('aa1+aa2', 'AAAA12');
solution('E=M*C^2', 'e=m*c^2');
