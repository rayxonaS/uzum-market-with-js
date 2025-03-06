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
    <del class="price badge badge-soft badge-secondary text-xl "> $${product.price}</del>
    <p class="price-with-discount badge badge-primary font-bold text-xl">$${product.discountPercentage}</p>
    <p class="font-bold text-2xl mb-2 text-center">Delivery: ${product.shippingInformation}</p>
    
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
    const reviews = document.createElement("p");
    const text = document.createElement("p");
    const brand = document.createElement("p");
    const price = document.createElement("del");
    const discount = document.createElement("p");
    const information = document.createElement("p");
    title.textContent = product.title;
    image.src = product.thumbnail;
    image.alt = product.title;
    rating.textContent = product.rating;
    reviews.textContent = product.reviews;
    text.textContent = product.description;
    brand.textContent = product.brand;
    price.textContent = product.price;
    discount.textContent = product.discountPercentage;
    information.textContent = product.shippingInformation;
    image.classList.add("shadow-lg", "rounded-lg", "w-full", "h-auto");
  });

  card.append(title, image, rating, text, brand, price, discount, information);
  container.appendChild(card);
}
