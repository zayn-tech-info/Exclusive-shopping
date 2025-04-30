import { addToCart, saveToStorage } from "../data/cart.js";
import { getProducts } from "../data/products.js";

const productsContainer = document.querySelector(".products");
const renderProducts = async () => {
  const products = await getProducts();

  let productsHtml = "";
  products.forEach((product) => {
    productsHtml += `
	<div class="product-item">
	  <div class="bg-gray-100 group">
		<div class="relative pt-10 px-10 mx-auto">
		  <div>
			<div class="h-43 flex justify-center items-center">
			  <img class="p-3" src="${product.images}" alt="${product.title}" />
			</div>
			<div class="absolute text-black right-3 flex text-xl space-y-5 flex-col top-3">
			  <ion-icon class="bg-white rounded-full p-1" name="eye-outline"></ion-icon>
			  <ion-icon class="bg-white rounded-full p-1" name="heart-outline"></ion-icon>
			</div>
		  </div>
		</div>
		<button
		  class="addToCart flex justify-center opacity-0 rounded-b-md bg-black w-full text-white py-2 group-hover:opacity-100 transition duration-300 ease-in-out"
		  data-product-id="${product.id}"
		>
		  Add To Cart
		</button>
	  </div>
	  <div class="Product-detail mt-2 space-y-1">
		<p class="font-medium">${product.title}</p>
		<div class="flex gap-5">
		  <span class="font-medium text-[#DB4444]">$${product.discountPercentage}</span>
		  <span class="line-through font-medium text-gray-500">$${product.price}</span>
		</div>
		<div class="flex items-center gap-5">
		  <img src="/Images/Products/rate-4.5-star-75.png" alt="${product.title}" />
		  <p class="text-yellow-600 font-medium">${product.rating}</p>
		</div>
	  </div>
	</div>`;
    productsContainer.innerHTML = productsHtml;

    const addToCartbtns = document.querySelectorAll(".addToCart");
    addToCartbtns.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = Number(button.dataset.productId);
		console.log(productId);
        addToCart(productId);
        saveToStorage();
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
