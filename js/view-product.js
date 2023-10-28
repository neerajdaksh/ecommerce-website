const viewProductContainer = document.querySelector(".view-product");



const showProduct=(singleProduct)=>{
   const htmlData = `
   <div class="img-container">
     <div class="img-view">
    <img src="${singleProduct.thumbnail}" alt="">
     </div>
     <div class="image-slider">
         <span class="product-img"><img src="${singleProduct.images[0]}" alt=""></span>
         <span class="product-img"><img src="${singleProduct.images[1]}" alt=""></span>
         <span class="product-img"><img src="${singleProduct.images[2]}" alt=""></span>
         <span class="product-img"><img src="${singleProduct.images[3]}" alt=""></span>
         <span class="product-img"><img src="${singleProduct.images[4]}" alt=""></span>
     </div>
   </div>
   <div class="product-details">
       
         <h1 class="product-title">${singleProduct.title}</h1>
     
      <div class="pro-rating">
         <span class="rating-no">${singleProduct.rating}</span> <small>Rating</small>
      </div> 
      <div class="product-price">
         <h2>$${singleProduct.price}</h2>
      </div>
      <p class="brand-name">
      ${singleProduct.brand}
      </p>
      
      <div class="btn-container">
         <div class="item-qty"><button class="dec-btn"><span><i class='bx bx-minus'></i></span></button><span class="total-item-qty">0</span><button class="inc-btn"><span><i class='bx bx-plus'></i></span></button></div>
         <div class="add-cart "><button>Add to Cart</button></div>
      </div>
      <div class="pro-discription">
         <h4>Discription</h4>
         <p>${singleProduct.description}</p>
      </div>

 </div>`;
 viewProductContainer.innerHTML = htmlData;


 
}





const getSingleProduct=async ()=>{

    const url_str = window.location.href;
    const url  = new URL(url_str);
    const search_Params = url.searchParams;
    const id = search_Params.get('id');
         const response =  await fetch(`https://dummyjson.com/products/${id}`);
         const product = await response.json();
         showProduct(product);
}




window.onload=()=>{
    getSingleProduct();

}