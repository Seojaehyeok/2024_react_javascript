const name = "서재혁";
const coffee = "카라멜라떼";

window.console.log(name);
window.console.log(coffee);

// window.console.log("제 이름은 name 이고 좋아하는 커피는 coffee입니다.");

// window.console.log(
//   "제 이름은 " + name + "이고 좋아하는 커피는 " + coffee + "입니다."
// );

// window.console.log(`제 이름은 ${name}이고 좋아하는 커피는 ${coffee}입니다.`);

// mbti, weekend, youtube
// 제 mbti는 ~~이구요, 주말에 ~~하구요, 유튜브는 ~~를 볼거에요!
// 콜솔로 보여주면 됨

// const mbti = "infp";
// const weekend = "야구장 방문";
// const youtube = "게임";

// window.console.log(
//   `제 mbti는 ${mbti} 이고, 주말에 ${weekend}하고, 유튜브는 ${youtube} 유튜브를 볼거에요!`
// );

// 프롬프트로 당신의 핸드폰 기종은?
// 프롬프트로 당신의 PC 기종은?

// 콘솔로 당신이 쓰는 핸드폰은 ~~이고, 당신의 PC는 ~~이군요!

const phone = window.prompt("당신의 핸드폰 기종은?");
const pc = window.prompt("당신의 PC 기종은?");

window.console.log(
  `당신이 쓰는 핸드폰은 ${phone}이고, 당신의 PC는 ${pc}이군요!`
);
