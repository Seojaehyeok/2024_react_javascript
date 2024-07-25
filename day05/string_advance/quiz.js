// 유저에게 뉴스기사를 입력받고, 비꾸고 싶은 단어로 바꾸고
// 바뀐 단어들로 대체된 뉴스기사를 콘솔로 보여주기

// const news_script = prompt("뉴스 기사를 입력하세요 : ");

// const want = prompt(`${news_script} 중 바꾸고 싶은 단어를 선택하세요.`);
// const word = prompt("바꿀 단어를 선택하세요.");
// const replace_news = news_script.replaceAll(want, word);

// console.log(replace_news);

// 단어와 숫자를 입력하면 대문자화 시켜서 숫자만큼 반복된 단어를 돌려주는 함수 만들기

function toUpperAndReapeat(a, num) {
  a.toUpprtCase().repeat(num);

  return a;
}

const b = prompt("단어 입력 : ");
const num = prompt("숫자 입력 : ");

const result = toUpperAndReapeat(b, num);

console.log(result);
