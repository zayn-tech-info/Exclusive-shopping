// Get all the products needed from the api
const url = "https://dummyjson.com/products";
export const getProducts = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
getProducts();


