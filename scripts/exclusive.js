import { cart, addToCart } from "../data/cart.js";
import { getProducts } from "../data/products.js";
import { formatCurrency } from "../Utils/formatcurrency.js";

const productsContainer = document.querySelector(".products");
const renderProducts = async () => {
  const products = await getProducts();

  let productsHtml = "";
  products.forEach((product) => {
    productsHtml += `
	<div class="product-item relative">
	  <div class="bg-gray-100 group">
		<div class="relative pt-10 px-10 mx-auto">
		  <div>
			<div class="h-43 flex justify-center items-center">
			  <img class="p-3" src="${product.image}" alt="${product.title}" />
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
	  <div class="addedToCartMes">
	  </div>
	  <div class="Product-detail mt-2 space-y-1">
		<p class="font-medium">${product.title}</p>
		<div class="flex gap-5">
		  <span class="font-medium text-[#DB4444]">$${formatCurrency(
        product.price
      )}</span>
		  <span class="line-through font-medium text-gray-500">$${formatCurrency(
        product.price + 0.1 * product.price
      )}</span>
		</div>
		<div class="flex items-center gap-5">
		  <img src="/Images/Products/rate-4.5-star-75.png" alt="${product.title}" />
		  <p class="text-yellow-600 font-medium">${product.rating.rate}</p>
		</div>
	  </div>
	</div>`;
    productsContainer.innerHTML = productsHtml;

    function updateCartQuantity() {
      let cartQuantity = 0;
      const cartTotal = document.querySelector(".js-cart-quantity");
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        cartTotal.innerText = cartQuantity;
      });
    }
    updateCartQuantity();
    const addToCartbtns = document.querySelectorAll(".addToCart");
    addToCartbtns.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = Number(button.dataset.productId);
        addToCart(productId);
        updateCartQuantity();

        const productItem = button.closest(".product-item");
        const addedToCartMes = productItem.querySelector(".addedToCartMes");
        setTimeout(() => {
          addedToCartMes.innerHTML = "";
        }, 2000);
        addedToCartMes.innerHTML = `
		<div class="py-1 absolute bottom-7 left-13 z-10 h-8 px-3 text-center font-medium text-white w-40 rounded-sm mx-auto bg-[#DB4444]">
			<p>Added to Cart</p>
		</div>`;
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
