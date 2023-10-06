const product_listing = document.querySelector(".product-listing");




const showProducts = (productsData) => {     
    for (product of productsData) {
   let htmlData = `<div class="product-box text-center">
 <img src="${product.images[0]}" alt="">
 <div class="product-name my-10">
     <a href="" class="links semibolder">${product.title}</a> 
 </div>
 <div class="product-price my-10">&dollar;${product.price}</div>
 <div class="add-cart my-10"><button>Add to Cart</button></div>
</div> `;
        product_listing.innerHTML += htmlData;
    }

}


const getProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const productsData = await response.json();
    showProducts(productsData.products);

}


window.onload = () => {
    getProduct();
}