const viewProductContainer = document.querySelector(".view-product");
const placeholder = document.querySelector(".placeholder");



const showProduct=(singleProduct)=>{
   const htmlData = `
   <div class="img-container">
     <div class="img-view">
      <img src="${singleProduct.thumbnail}" alt="" class="thumbnail">
     </div>
     <div class="image-slider">
         <span class="product-img "><img src="${singleProduct.images[0]}" alt=""></span>
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
//view images
this.viewProductImage(document.querySelectorAll(".product-img img"),document.querySelector(".thumbnail")); 

const increaseBtn = document.querySelector(".inc-btn"); 
const decreaseValue = document.querySelector(".dec-btn");
const  ItemQty = document.querySelector(".total-item-qty").value;

increaseBtn.addEventListener("click",()=>{
   const updateItemQty = document.querySelector(".total-item-qty");
   increaseItemValue(updateItemQty);
});

decreaseValue.addEventListener("click",()=>{
   const updateItemQty = document.querySelector(".total-item-qty");
   decreaseItemValue(updateItemQty);
});

}


function increaseItemValue(updateItemQty){
   let counter =parseInt(updateItemQty.innerText);
   if(counter<8){
      counter = counter +1;
      updateItemQty.innerHTML = counter;
     }

}

function decreaseItemValue(updateItemQty){
   let counter = parseInt(updateItemQty.innerText);
   counter=counter-1;   
  if(counter<0){
    counter=0;
  }
   updateItemQty.innerHTML =counter;
}




function viewProductImage(images,thumbnail){
  
images.forEach((image)=>{
   image.addEventListener("click",(e)=>{
      const imgPath = e.target.src;
      e.target.classList.add("selected-img");
      thumbnail.src = imgPath;
      this.unSelectImage();
   });
   
    
   
});

function unSelectImage(){
   images.forEach((image)=>{
      if(image.classList.contains("selected-img")){
         image.classList.remove("selected-img");
      }
   });
}


}



const getSingleProduct=async ()=>{

    const url_str = window.location.href;
    const url  = new URL(url_str);
    const search_Params = url.searchParams;
    const id = search_Params.get('id');
    placeholder.classList.add("placeholder-hide");
         const response =  await fetch(`https://dummyjson.com/products/${id}`);
         const product = await response.json();
         showProduct(product);
}




window.onload=()=>{
    getSingleProduct();

}