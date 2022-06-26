//  All html blocks we will need for this page

const ligthtbox = document.querySelector("#lightbox");
const ligthboxOn = document.querySelector(".ligthboxOn");
const ligthboxOff = document.querySelector(".close");
const product1 = document.querySelectorAll(".product1");
const product2 = document.querySelectorAll(".product2");
const product3 = document.querySelectorAll(".product3");
const product4 = document.querySelectorAll(".product4");
const mainProduct = document.querySelector(".mainProductl");
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");


//  Code for adding and removing ligthtbox from page

ligthboxOn.addEventListener("click", e =>{
        ligthtbox.style.display = "flex";
    })


ligthboxOff.addEventListener("click", e =>{
    ligthtbox.style.display = "none";
})


// Code for switching large product image by clicking on the small thumbnail images

product1.forEach(product =>{
    product.addEventListener("click", e =>{
        mainProduct.src = "images/image-product-1.jpg";
        ligthboxOn.src = "images/image-product-1.jpg";
})
} )

product2.forEach(product =>{
    product.addEventListener("click", e =>{
        ligthboxOn.src = "images/image-product-2.jpg";
        mainProduct.src= "images/image-product-2.jpg";
        
})
} )

product3.forEach(product =>{
    product.addEventListener("click", e =>{
        mainProduct.src= "images/image-product-3.jpg";
        ligthboxOn.src = "images/image-product-3.jpg";
})
} )

product4.forEach(product =>{
    product.addEventListener("click", e =>{
        mainProduct.src= "images/image-product-4.jpg";
        ligthboxOn.src = "images/image-product-4.jpg";
})
} )

// Code for switching the large product image by clicking on the poniters


next.addEventListener("click", e =>{
    if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-1.jpg"){
        mainProduct.src = "images/image-product-2.jpg";
    }else if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-2.jpg"){
        mainProduct.src = "images/image-product-3.jpg";
    } else if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-3.jpg"){
        mainProduct.src = "images/image-product-4.jpg";
    } else {
        mainProduct.src = "images/image-product-1.jpg";
        
    }
})


previous.addEventListener("click", e =>{
    if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-1.jpg"){
        mainProduct.src = "images/image-product-4.jpg";
    }else if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-2.jpg"){
        mainProduct.src = "images/image-product-1.jpg";
    } else if (mainProduct.src == "file:///C:/Users/Y2J/Desktop/ecommerce-product-page-main/images/image-product-3.jpg"){
        mainProduct.src = "images/image-product-2.jpg";
    } else {
        mainProduct.src = "images/image-product-3.jpg";
        
    }
})