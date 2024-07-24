// 1. 각도를 물어보고, 0~90 예각, 90 직각, 90~180 둔각, 180 평각

const angle = Number(prompt("각도 입력"));
if (angle == 180) {
  alert("평각");
} else if (angle > 0 && angle < 90) {
  alert("예각");
} else if (angle == 90) {
  alert("직각");
} else if (angle > 90 && angle < 180) {
  alert("둔각");
} else {
  alert("입력오류");
}
// 2. 영어 시험 점수 입력
// 90점 이상 A, 80점 이상 B, 7점 이상 C, 60점 이상 D, 그 외는 나락

const score = Number(prompt("점수 입력"));
if (score >= 90) {
  alert("A");
} else if (score >= 80) {
  alert("B");
} else if (angle >= 70) {
  alert("C");
} else if (angle >= 60) {
  alert("D");
} else {
  alert("나락");
}

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "직관적",
  s: "감각적",
  f: "감성적",
  t: "이성적",
  j: "계획적",
  p: "즉흥적",
};

const ei = prompt("e인가요 i인가요?");
const ns = prompt("n인가요 s인가요?");
const ft = prompt("f인가요 t인가요?");
const jp = prompt("j인가요 p인가요?");

console.log(
  `${ei}${ns}${ft}${jp} => ${mbti[ei]}이고 ${mbti[ns]}이고 ${mbti[ft]}이고 ${mbti[jp]}이다.`
);
