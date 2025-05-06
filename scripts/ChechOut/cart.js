import { cart, removeFromCart } from "../../data/cart.js";
import { getProducts } from "../../data/products.js";

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
        cartSummaryHtml += renderCartHtml(matchingProduct, cartItem);
        document.querySelector(".cartSummaryHtml").innerHTML = cartSummaryHtml;
        const removeFromCartList = document.querySelectorAll(".removeFromCart");
        console.log(removeFromCartList);
        
        removeFromCartList.forEach((button) => {
          button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            console.log(productId);
            removeFromCart(productId);
            const container = document.querySelector(
              `.cart-item-container-${productId}`
            );
            container.remove();
          });
        });
      }
    });
  });


};

function renderCartHtml(matchingProduct, cartItem) {
  return `
        <div class="mx-auto my-10 shadow py-2 cart-item-container-${
          matchingProduct.id
        }">
          <div class="grid grid-cols-4 items-center">
            <div class="mx-auto flex gap-5">
              <img class="w-10" src="${matchingProduct.image}" alt="" />
              <p>${matchingProduct.title}</p>
            </div>
            <div class="mx-auto">
              <p>${matchingProduct.price}</p>
            </div>
            <div class="mx-auto">
              <input class="text-black w-10 border-1 outline-0 text-xl font-medium pl-4" type="text" placeholder="${
                cartItem.quantity
              }"/>
            </div>
            <div class="mx-auto flex items-center gap-20">
              <p>${matchingProduct.price * cartItem.quantity}</p>

              <span>
                <ion-icon 
                  data-product-id="${matchingProduct.id}" 
                  class="removeFromCart ${
                    matchingProduct.id
                  } text-4xl cursor-pointer hover:bg-[#DB4444] rounded-full hover:text-white duration-200 transition ease-in-out" name="close-circle-outline"></ion-icon>
              </span> 
            </div>
          </div>
        </div>`;
}
renderCart();
console.log(cart);
console.log(cartSummaryHtml);
