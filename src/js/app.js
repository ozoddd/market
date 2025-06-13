const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");
document.getElementById("year").textContent = new Date().getFullYear();

const theme = localStorage.getItem("theme");

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme == "dark" ? true : false;
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dark" : "light";

  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme == "dark" ? true : false;
});

import { products } from "./data.js";
import formatNumber from "./formatNumber.js";

const template = document.querySelector("template");
const productList = document.getElementById("products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);
  const {
    title,
    description: _description,
    thumbnail,
    price: _price,
    discountPercentage,
    rating: _rating,
  } = product;
  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPriceEl = clone.querySelector(".discount-price");

  cardTitle.textContent = textContent;
  description.textContent = _description;
  cardImage.src = thumbnail;

  const discountPrice = formatNumber(_price, product.discountPercentage);
  discountPriceEl.textContent = discountPrice;
  price.textContent = formatNumber(_price);
  productList.appendChild(clone);
});

// const ulEl = document.querySelector("ul");
// const form = document.querySelector("form");

// const deleteNumber = (e) => {
//   e.parentElement.remove();
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = form.title.value;
//   const liEl = document.createElement("li");
//   const buttonEl = document.createElement("button");
//   const spanEl = document.createElement("span");
//   let randomNumber = Math.floor(Math.random() * 50) + 1;

//   buttonEl.setAttribute("onclick", `deleteNumber(this)`);
//   buttonEl.classList.add("btn");
//   buttonEl.textContent = "Delete";
//   buttonEl.dataset.number = randomNumber;
//   spanEl.textContent = title;

//   liEl.appendChild(spanEl);
//   liEl.appendChild(buttonEl);

//   ulEl.appendChild(liEl);
//   form.reset();
// });
