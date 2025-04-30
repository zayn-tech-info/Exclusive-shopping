export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 2,
    },
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
    });
  }
  console.log(cart);

  let cartQuantity = 0;
  const cartTotal = document.querySelector(".js-cart-quantity");
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    cartTotal.innerText = cartQuantity;
    saveToStorage();
  });
  saveToStorage()
}

export const removeFromCart = (productId) => {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  console.log(newCart);
  console.log(cart);
};


