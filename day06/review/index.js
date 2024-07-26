// 1. 온도를 입력 받으면, 0 이하면 추워요
// 0~10 쌀쌀해요, 10~20 쾌적해요, 20~30 살짝 더워
// 30 이상이면 더워요 라는 함수 만들기

function temp(tem) {
  if (tem <= 0) console.log("추워요");
  else if (tem < 10) console.log("쌀쌀해요");
  else if (tem < 20) console.log("쾌적해요");
  else if (tem < 30) console.log("살짝 더워요");
  else if (tem >= 30) console.log("더워요");
}

// 2. 올리브영에서 3만원 이상 구매하면, 10% 할인해주고
// 5만원 이상 구매하면 20% 할인해 주는 가격 계싼 함수
function olive_discount(total) {
  if (total >= 50000) {
    return { originPrice: total, discountPrice: 0.8 * total };
  } else if (total >= 30000) {
    return { originPrice: total, discountPrice: 0.9 * total };
  } else {
    return { originPrice: total, discountPrice: 1 * total };
  }
}

temp(Number(prompt("온도 입력 :")));

const price = Number(prompt("가격 입력 : "));

const total = olive_discount(price);

console.log(
  `원래 가격 ${total.originPrice}에서 할인된 가격은 ${total.discountPrice}입니다.`
);
