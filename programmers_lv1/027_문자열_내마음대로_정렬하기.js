function solution(strings, n) {
  var answer = [];
  let map = new Map();
  let 오름차순정렬 = [];

  strings.sort();

  strings.forEach((a, i) => {
    if (!map.has(a[n])) {
      map.set(a[n], a);
      오름차순정렬.push(a[n]);
    } else {
      if (Array.isArray(map.get(a[n]))) {
        map.set(a[n], [...map.get(a[n]), a]);
      } else {
        map.set(a[n], [map.get(a[n]), a]);
      }
    }
  });

  오름차순정렬.sort().forEach((a, i) => {
    if (Array.isArray(map.get(a))) {
      answer.push(...map.get(a));
    } else {
      answer.push(map.get(a));
    }
  });

  return answer;
}

// solution(['sun', 'bed', 'car'], 1);
// solution(['abce', 'abcd', 'cdx'], 2);
solution(['ae', 'be', 'ce', 'ae'], 1);
solution(['zbcde', 'ybcdf', 'xbcdg'], 1);
