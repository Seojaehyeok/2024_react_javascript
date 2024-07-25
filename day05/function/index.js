// function []

// 100 -> 200
// 200 -> 300
// 300 -> 400
// x -> x + 100

function add100(x) {
  return x + 100;
}

function minus100(x) {
  return x - 100;
}

function wonyoungThinking(x) {
  return x + "럭키비키잖아";
}

function test(x, y) {
  return (x + y) ** 2;
}

function test2(x) {
  if (x % 2 == 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}

function test3(x, y) {
  return x > y ? x : y;
}

// 두 숫자 넣을 때 같으면 같아요!, 아니면 달라요!
function test4(x, y) {
  return x == y ? "같아요!" : "달라요!";
}

const a = add100(3000); // 3100
const b = minus100(1000); // 900
const c = wonyoungThinking("수업을 하고 있는데 휴강이라서 ");
test2(4);

// 두 숫자를 넣어서 큰 숫자돌려주기

const d = test3(5, 6);
const e = test4(5, 5);

console.log(e);
