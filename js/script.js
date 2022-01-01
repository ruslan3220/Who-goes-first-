let elForm = document.querySelector(".form");
let elLabel = document.querySelector(".label");
let elInput = document.querySelector(".input");
let elCardHeading = document.querySelector(".card__heading");
let elCardHeading1 = document.querySelector(".card__heading1");
let elCardHeading2 = document.querySelector(".card__heading2");
let elCardHeading3 = document.querySelector(".card__heading3");

let person = 3.6;
let bicucle = 20;
let car = 60;
let plane = 200;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let inputValue = elInput.value;

  let person = (inputValue / 3.6).toFixed(2);
  let bicucle = (inputValue / 20.1).toFixed(2);
  let car = (inputValue / 70).toFixed(2);
  let plane = (inputValue / 800).toFixed(2);

  elCardHeading.textContent = `${person} soat!`;
  elCardHeading1.textContent = `${bicucle} soat!`;
  elCardHeading2.textContent = `${car} soat!`;
  elCardHeading3.textContent = `${plane} soat!`;
});
