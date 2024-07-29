// cook! recipe 요리시작! recipe() 요리끝!
// taco 함수 1.타코준비 2.재료넣기 3.감싸기
// ramen 함수 1.물끓이기 2.면넣기 3.스프넣기 4.물끄기

const cook = (recipe) => {
  console.log("요리 시작!");
  recipe();
  console.log("요리끝");
};

const taco = (x) => {
  console.log("1.타코 준비");
  console.log(`2.${x} 넣기`);
  console.log("3.감싸기");
};
const ramen = () => {
  console.log("1.물끓임");
  console.log("2.면넣기");
  console.log("3.스프넣기");
  console.log("4.물그만");
};

cook(() => taco("🍅"));
cook(() => taco("🥑"));
cook(() => taco("🍤"));
cook(ramen);

cook(() => {
  console.log("1.물끓이기");
  console.log("2.소금 넣기");
  console.log("3.고기 넣기");
  console.log("4.음식물 쓰레기에 버리기");
});
