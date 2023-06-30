function solution(skill, skill_trees) {
  var answer = 0;
  let skills = skill.split('');

  skill_trees.forEach((a, i) => {
    let useIndex = 0;
    let flag = true;

    for (let j = 0; j < a.split('').length; j++) {
      if (skills.includes(a.split('')[j])) {
        if (skills[useIndex] === a.split('')[j]) {
          useIndex++;
        } else {
          flag = false;
          break;
        }
      }
    }
    flag ? answer++ : null;
  });

  return answer;
}

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);
