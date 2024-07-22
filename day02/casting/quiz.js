// 프롬프트로 몇년생인지 물어보고 숫자로 2000 입력하면
// 콘솔로 당신의 나이는 24이군요

// const birth = window.prompt("당신은 몇년생인가요?");

// const age = 2024 - Number(birth) + 1;

// window.console.log(`당신의 나이는 ${age} 이군요!`);

// 1. 숫자를 두번 프롬프트로 물어보고,
// 콘솔로 합: 차: 곱: 나타내는 프로그램

const num1 = window.prompt("첫번째 숫자 : ");
const num2 = window.prompt("두번째 숫자 : ");

const sum = Number(num1) + Number(num2);
const sub = Number(num1) - Number(num2);
const mul = Number(num1) * Number(num2);

window.console.log(`첫번째 숫자 : ${num1}, 두번째 숫자 : ${num2}`);
window.console.log(`합 : ${sum}, 차 : ${sub}, 곱 : ${mul}`);

// 2. 프롬프트로 한 변의 길이를 입력하고,
// 콘솔로 정사각형의 넓이는 ~~입니다.
const num = Number(window.prompt("정사각형의 한변의 길이 : "));

const area = num * num;

window.console.log(`한변의 길이 : ${num}`);
window.console.log(`정사각형의 넓이는 ${area}입니다.`);

// 3. 아아(1500) 주문 갯수 프롬프트, 라떼(2500) 주문 갯수 프롬프트
// 콘솔로 총가격은 ~~입니다. ex) 3, 5 -> 17000

const americano = window.prompt("아메리카노의 갯수 : ");
const latte = window.prompt("라떼의 갯수 : ");

const total = 1500 * Number(americano) + 2500 * Number(latte);

window.console.log(`아메리카노의 갯수 : ${americano}, 라떼의 갯수 : ${latte}`);
window.console.log(`총 가격은 ${total}입니다.`);
