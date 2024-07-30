const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 홀수는 2배, 짝수는 제곱으로 다시 만들기
const a = arr.map((x) => {
    return x % 2 == 0 ? x ** 2 : 2 * x;
});
console.log(`a : ${a}`);

// 2. 3배수는 '🥕' 5배수는 '🍒' 나머지는 '🍉'
const b = arr.map((x) => {
    return x % 3 == 0 ? '🥕' : x % 5 == 0 ? '🍒' : '🍉';
});
console.log(`b : ${b}`);

const fruits = ['apple', 'banana', 'melon', 'kiwi', 'mango', 'strawberry'];

// 3. 6글자 이상만 과일 명단 남기기
const c = fruits.filter((x) => {
    return x.length >= 6;
});
console.log(`c : ${c}`);

// 알파벳 a가 포함된 과일만 남기기
const d = fruits.filter((x) => {
    return x.includes('a');
});
console.log(`d : ${d}`);
