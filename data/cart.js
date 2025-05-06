// import { deliveryOptions } from "./deliveryOption";

export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    {
      productId: 1,
      quantity: 1,
      deliveryOptionId: "1"
    },
    {
      productId: 2,
      quantity: 2,
      deliveryOptionId: "2"
    },
    {
      productId: 3,
      quantity: 3,
      deliveryOptionId: "3"
    }
  ];
}

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1"
    });
  }
  saveToStorage();
}

export const removeFromCart = (productId) => {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
};
