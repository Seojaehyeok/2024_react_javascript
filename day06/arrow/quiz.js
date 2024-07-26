// 배열, 과일, 갯수를 매개변수로 입력 받고,
// 배열에 {name:과일, count:갯수} 추가되는 함수 만들기

const empty = [];

const add = (arr, fruit, cnt) => {
  arr.push({ name: fruit, count: cnt });
};

add(empty, "사과", 5);
add(empty, "배", 3);
add(empty, "키위", 2);

console.log(empty);
