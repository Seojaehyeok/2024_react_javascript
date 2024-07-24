// condition

// const num = Number(prompt("숫자 5를 눌러봐!"));

// if (num == 5) {
//   alert("5를 눌렀군요!");
// }

// 숫자를 입력하고 양수면 양수네요! alert 나타내기

// const num = Number(prompt("숫자 입력"));

// if (num > 0) {
//   alert("양수네요!");
// }

// const num = Number(prompt("숫자 입력"));
// if (num > 0) {
//   alert("양수");
// } else if (num == 0) {
//   alert("0");
// } else {
//   alert("음수");
// }

// 나이를 입력하고 20살 이상이면 성인
// 19~17 고등학생, 16~14 중학생, 13~8 초등학생, 그 외는 어린이
const age = Number(prompt("나이 입력"));
if (age >= 20) {
  alert("성인");
} else if (age >= 17) {
  alert("고등학생");
} else if (age >= 14) {
  alert("중학생");
} else if (age >= 8) {
  alert("초등학생");
} else {
  alert("어린이");
}
