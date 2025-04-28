// Get all the products needed from the api
const url = "https://dummyjson.com/products";
const productsContainer = document.querySelector(".products");

const getProducts = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const products = data.products;
    console.log(products);

    let productsHtml = "";
    products.forEach((product) => {
      productsHtml += `<div>
            <div class="bg-gray-100 group">
              <div class="relative pt-10 px-10 mx-auto">
                <div>
                  <div class="h-43 flex justify-center items-center">
                    <img class="p-3" src="${product.images}" />
                  </div>
                  <!-- <span>
                    <span
                      class="absolute top-3 left-5 bg-[#DB4444] text-white px-3 rounded-md py-1"
                      >-40%</span
                    >
                  </span> -->
                  <div
                    class="absolute text-black right-3 flex text-xl space-y-5 flex-col top-3"
                  >
                    <ion-icon
                      class="bg-white rounded-full p-1"
                      name="eye-outline"
                    ></ion-icon>
                    <ion-icon
                      class="bg-white rounded-full p-1"
                      name="heart-outline"
                    ></ion-icon>
                  </div>
                </div>
              </div>
              <button
                class="flex justify-center opacity-0 rounded-b-md bg-black w-1/1 text-white py-2 group-hover:opacity-100 transition-group-hover:block duration-300 ease-in-out"
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
    });
  } catch (error) {
    console.error("Error detected:", error);
    productsContainer.innerHTML =
      "Sorry we couldn't load your product <br> Check  your internet connection or try again later";
  }
};
getProducts();
