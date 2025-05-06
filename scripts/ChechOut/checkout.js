import { cart } from "../../data/cart.js";
import { getProducts } from "../../data/products.js";
let chechOutSummaryHtml = "";

let matchingProduct;
let cartSummaryHtml = "";
const renderCart = async () => {
  const products = await getProducts();
  console.log(products);
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
        chechOutSummaryHtml += renderCheckOutHtml(matchingProduct, cartItem);
        document.querySelector(".checkoutSummaryHtml").innerHTML =
          chechOutSummaryHtml;
      }
    });
  });
};

function renderCheckOutHtml(matchingProduct, cartItem) {
  return `
	<div class="flex my-10 justify-between items-center">
		<div class="flex gap-10 items-center">
			<img
			class="w-10"
			src="${matchingProduct.images}"
			alt=""
			/>
			<p>${matchingProduct.title}</p>
		</div>
		<p>${matchingProduct.discountPercentage * cartItem.quantity}</p>
		
	</div>`;
}
renderCart();
console.log(cart);
console.log(cartSummaryHtml);
