const prompt = require("prompt-sync")();

const question = [
  "고등학교에서 유명했나요(Y or N)? ",
  "스포츠(운동)을 하나요(Y or N)? ",
  "수학을 잘하나요(Y or N)? ",
  "지금 방이 깨끗한가요?(Y or N)? ",
];

const list = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"],
];

let mbti = question.map((x, idx) => {
  let answer;
  do {
    answer = prompt(x).toUpperCase();
  } while (!["Y", "N"].includes(answer));
  return answer == "Y" ? list[idx][0] : list[idx][1];
});

console.log(mbti.join(""));
