const product_listing = document.querySelector(".product-listing");
const selectCategory = document.querySelector("#Categories");
 


const searchProduct=async(e)=>{
const term  = e.target.value;
const response = await fetch(`https://dummyjson.com/products/search?q=${term}`);
const data = await response.json();
product_listing.innerHTML="";
showProducts(data.products);

};









const showProducts = (productsData) => {
  for (let product of productsData) {
    let htmlData = `<div class="product-box text-center">
      <img src="${product.thumbnail}" alt="">
    <div class="product-name my-10">
     <a href="" class="links semibolder">${product.title}</a> 
    </div>
     <div class="product-price my-10">&dollar;${product.price}</div>
    <div class="add-cart my-10"><button>Add to Cart</button></div>
    </div> `;
    product_listing.innerHTML += htmlData;


  }

}




const getProductOfaCategory = async (CategoryValue) => {

  const response = await fetch(`https://dummyjson.com/products/category/${CategoryValue}`);
  const data = await response.json();
  product_listing.innerHTML = "";
  showProducts(data.products);

}



selectCategory.addEventListener("change", () => {
  const selectedCategory = selectCategory.value;
  if (selectedCategory !== "Categories") {
    getProductOfaCategory(selectedCategory);
  } else {
    getAllProducts();
  }

});







const getAllCategory = async () => {

  // const categories = new Set(productsData.map((product) => {
  //   return product.category;
  // }));

  const response = await fetch(`https://dummyjson.com/products/categories`);
  const data = await response.json();

  for (let category of data) {

    const htmlData = `<option value="${category}">${category}</option>`;

    document.querySelector("select").innerHTML += htmlData;

  }

};




const getAllProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const productsData = await response.json();
  showProducts(productsData.products);
}


window.onload = () => {
  getAllProducts();
  getAllCategory();
}