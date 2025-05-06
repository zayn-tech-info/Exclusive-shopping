 // Get all the products needed from the api
//  https://dummyjson.com/products
const url = "https://fakestoreapi.com/products";
export const getProducts = async (products) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const products = data;
    console.log(data);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
getProducts(); 