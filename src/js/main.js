import ProductData from "./ProductData.mjs";

const productData = new ProductData("category");

//Fetch all product in the category

productData.getData().then((data)=> {
    console.log("All products:", data);
});

// Find a product by ID

(async() => {
    const product = await productData.findProductById("productID");
    console.log("Found product:", product);
})();
