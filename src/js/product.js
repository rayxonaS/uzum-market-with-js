import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";
import "./dark-mode.js";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);
    displayProduct(product);
  })
  .catch((error) => {
    console.log(error);
  });

function displayProduct(product) {
  const container = document.querySelector(".product-container");
  container.innerHTML = `
<h2 class="text-xl font-bold">${product.title}</h2>
    <img src="${product.thumbnail}" alt="${product.title}" class="rounded-lg shadow-lg">
    <p class="text-xl font-bold mt-2">${product.rating}</p>
    <p class="mt-4">${product.description}</p>
    <p class="font-bold text-3xl>${product.brand}</p>
  `;
}

fetchData("https://dummyjson.com/product/")
  .then(showCards)
  .catch((error) => {
    console.log(error);
  });

function showCards({ products }) {
  const container = document.querySelector(".products-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const title = document.createElement("h2");
    const image = document.createElement("img");
    const rating = document.createElement("p");
    const text = document.createElement("p");
    const brand = document.createElement("p");
    title.textContent = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    rating.textContent = product.rating;
    text.textContent = product.description;
    brand.textContent = product.brand;
    image.classList.add("shadow-lg", "rounded-lg", "w-full", "h-auto");
  });

  card.append(title, image, rating, text, brand);
  container.appendChild(card);
}
