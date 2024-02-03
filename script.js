let bigImg = document.querySelector(".big-img img");
function showImg(pic) {
  bigImg.src = pic;
}

const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const addBtn = document.querySelector(".add_btn");
const headline = document.getElementById("headline");
let amountValue = 0;
let currentImg = 1;

function handlePlus() {
  amountValue = amountValue + 1;
  amount.innerText = amountValue;
}
function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}
function addItem() {
  if (amountValue > 0) {
    headline.style.display = "block";
  }
}

const button = document.getElementById("colorButton");

button.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
