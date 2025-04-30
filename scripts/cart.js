import { cart } from "../data/cart.js";
import { getProducts } from "../data/products.js";

let matchingProduct;
let cartSummaryHtml;
const renderCart = async () => {
  const products = await getProducts();
  console.log(products);
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
        cartSummaryHtml += `<div class="mx-auto my-10 shadow py-2">
          <div class="grid grid-cols-4 items-center">
            <div class="mx-auto flex gap-5">
              <img class="w-10" src="${matchingProduct.images}" alt="" />
              <p>${matchingProduct.title}</p>
            </div>
            <div class="mx-auto">
              <p>${matchingProduct.
				discountPercentage}</p>
            </div>
            <div class="mx-auto">
              <input onchange="${(e)=>{console.log(e)}}" class="text-black w-10 border-1 outline-0 text-xl font-medium pl-4" type="text" placeholder="${cartItem.quantity}" />
            </div>
            <div class="mx-auto">
              <p>${matchingProduct.discountPercentage * (cartItem.quantity)}</p>
            </div>
          </div>
        </div>`;
		document.querySelector('.cartSummaryHtml').innerHTML = cartSummaryHtml
      }
    });
  });
};
renderCart();
console.log(cart);

 
