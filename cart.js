//  All html blocks we will need for this page

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const quantity = document.querySelector("#q");
const cart = document.querySelector("#cart");
const cartBtn = document.querySelector("#cartBtn");
const form = document.querySelector("#form");
const empty = document.querySelector("#empty");
const merchandize = document.querySelector("#css");
const p = document.querySelector("#totalPrice");
const span = document.querySelector("#howMany");
const deleteBtn = document.querySelector(".delete")


// Code for adding and decreasing merch quantitity

let minQuantity = 1;

plus.addEventListener("click", e=>{
    if(minQuantity === 10){
        return true;
    }
    minQuantity++;
    quantity.textContent = minQuantity;
})

minus.addEventListener("click", e=>{
    if(minQuantity === 1){
        return true;
    }
    minQuantity--;
    quantity.textContent = minQuantity;
})

// Code for adding merch to the cart 

cartBtn.addEventListener("click", e => {

    cart.classList.toggle("hidden");
})

form.addEventListener("submit", e =>{
    e.preventDefault();
    if(cart.classList.contains("hidden")){
        cart.classList.toggle("hidden");
    }
    empty.style.display = "none";
    merchandize.style.display = "flex";
    let price = 125.00 * minQuantity;
    span.innerText = minQuantity;
    p.innerText = price;

})

// Code for deleting merch from the cart


deleteBtn.addEventListener("click", e =>{
    empty.style.display = "flex";
    merchandize.style.display = "none";

})


