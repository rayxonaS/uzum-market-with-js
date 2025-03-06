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
<h2 class="text-xl font-bold mb-2">${product.title}</h2>
    <img class="transition duration-300 w-100 h-auto  shadow-lg rounded-lg bg-gray-300" src="${product.thumbnail}" alt="${product.title}" class="rounded-lg shadow-lg">
    <p class="text-xl font-bold mt-2"><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i>  ${product.rating}</p>
    <p class="mt-4">${product.description}</p>
    <p class="font-bold text-5xl mt-2 text-center rounded-full border-2 border-blue-400 px-6 py-6 inline-block bg-blue-400 mb-5">${product.brand}</p>
    <p class="rounded-2xl border-2 border-gray-200 self-end w-96 h-12 text-center justify-center mb-3">$${product.price}</p>
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
    const price = document.createElement("p");
    title.textContent = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    rating.textContent = `Rating:${product.rating}`;
    text.textContent = product.description;
    brand.textContent = product.brand;
    price.textContent = product.price;
    image.classList.add("shadow-lg", "rounded-lg", "w-full", "h-auto");
  });

  card.append(title, image, rating, text, brand, price);
  container.appendChild(card);
}
