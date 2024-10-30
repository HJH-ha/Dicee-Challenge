//alert("테스트");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

//랜덤 숫자 1~6까지 만들어 변수에 입력
let rn1 = Math.floor(Math.random() * 6 + 1); // 0~5.99999까지나와서 +1 해주고
let rn2 = Math.floor(Math.random() * 6 + 1); // 여기서 floor가 버림(소수점 떼버림)으로 정수만 나옴

// console.log(rn1, rn2);

// img1.setAttribute("src", "images/dice" + rn1 + ".png");
// img2.setAttribute("src", "images/dice" + rn2 + ".png");

img1.setAttribute("src", `images/dice${rn1}.png`);
img2.setAttribute("src", `images/dice${rn2}.png`);

// for (let i = 0; i < 100; i++) {
//   console.log(Math.floor(Math.random() * 6 + 1));
// }

//이긴 플레이어를 화면에 표시
const h1 = document.querySelector("h1");
// h1.textContent = "Player 1 Wins!🚩";
if (rn1 > rn2) {
  h1.textContent = "Player 1 Wins!🚩";
} else if (rn1 < rn2) {
  h1.textContent = "Player 2 Wins!🚩";
} else {
  h1.textContent = "Draw!";
}
