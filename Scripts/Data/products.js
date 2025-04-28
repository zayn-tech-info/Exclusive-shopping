// Get all the products needed from the api
const url = "https://dummyjson.com/products"
const getProducts = async() =>{
	try{
		const res = await fetch(url)
		const data = await res.json()
		const products = data.products
		console.log(products)
		
	} catch(error) {
		console.error("Error detected:", error)
	}
}
getProducts()