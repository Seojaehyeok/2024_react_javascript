const bus_type = ["마을버스", "고속버스", "우등버스"];

const bus_price = {
  마을버스: 1500,
  고속버스: 2000,
  우등버스: 3000,
};

const bus_fee = [1500, 2000, 3000];

const bus = Number(prompt("버스 종류를 입력하세요 : "));
const age = Number(prompt("나이를 입력하세요 : "));

if (age >= 65) {
  alert(
    `${bus_type[bus]} ${bus_price[bus_type[bus]] * 0.7}원 결제 부탁드립니다.`
  );
} else if (age <= 13) {
  alert(`${bus_type[bus]} 0원 결제 부탁드립니다.`);
} else {
  alert(`${bus_type[bus]} ${bus_price[bus_type[bus]]}원 결제 부탁드립니다.`);
}
