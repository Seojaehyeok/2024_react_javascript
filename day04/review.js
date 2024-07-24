// 1. 자동차 속도를 입력하고, 제한 속도를 입력하여,
// 자동차 속도가 과속이면, 과속입니다! 아니면 안전운행 중이네요!

const speed = Number(prompt("자동차 속도는 ?"));
const limit = Number(prompt("제한 속도는 ?"));

const result = speed > limit ? "과속이군요!" : "안전 운행 중이네요!";

console.log(result);

// 2. [영국, 프랑스, 독일, 스페인, 이탈리아, 스위스] 중에서 가고 싶은 국가를
// 0~5까지 번호로 입력하면 콘솔로 ~~나라를 가고 싶어하는 군요! 다음에 같이 가요!

const europe = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];

const want = Number(
  prompt(`${europe} 중 가고 싶은 나라를 선택해 주세요 (0~5) `)
);

console.log(`${europe[want]} 나라를 가고 싶어하는 군요! 다음에 같이 가요!`);
