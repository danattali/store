// PRODUCTS ARRAY

let products = [
    {
        id: 2536,
        name: "Sony Pro 32GB XQD",
        price: 500,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/sony.jpg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Gaming Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/lenovo.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/asus.jpg",
    },

    {
        id: 2539,
        name: "Iphone 13 pro",
        price: 1000,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/p6.png",
    },

    {
        id: 2540,
        name: "Airpods",
        price: 100,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/a1.png",
    },

    {
        id: 2541,
        name: "Laptop",
        price: 200,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/laptop2.png",
    },

    {
        id: 2542,
        name: "Ipad",
        price: 300,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/t1.png",
    },

    {
        id: 2543,
        name: "Smart Watch",
        price: 50.6,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/w1.png",
    },

    {
        id: 2544,
        name: "PC Moniter",
        price: 600,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pcm1.png",
    },

    {
        id: 2545,
        name: "iPhone x",
        price: 500,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/phone1.png",
    },

    {
        id: 2546,
        name: "Headphone",
        price: 60,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/h1.png",
    },

    {
        id: 2547,
        name: "Fan",
        price: 50.6,
        category: "Home Gadgets",
        description: " Lorem ipsum dolor sit amet.",
        image: "./images/pr5.png",
    },
    {
        id: 2548,
        name: "Fridge",
        price: 1500,
        category: "Home Gadgets",
        description: " Lorem ipsum dolor sit amet.",
        image: "./images/pr6.png",
    },
    {
        id: 2549,
        name: "Gaming PC",
        price: 500.6,
        category: "Gaming Gadgets",
        description: " Lorem ipsum dolor sit amet.",
        image: "./images/pr7.png",
    },
    {
        id: 2550,
        name: "Moniter",
        price: 250,
        category: "Electronic Gadget",
        description: " Lorem ipsum dolor sit amet.",
        image: "./images/pr8.png",
    },
    {
        id: 2551,
        name: "Smart Watch",
        price: 30.2,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr9.png",
    },
    {
        id: 2552,
        name: "Power Bank",
        price: 100.5,
        category: "Electronic Gadget",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr10.png",
    },
    {
        id: 2553,
        name: "Gaming Mouse",
        price: 30,
        category: "Gaming Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr11.png",
    },
    {
        id: 2554,
        name: "Joysticks",
        price: 150,
        category: "Gaming Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr12.png",
    },
    {
        id: 2555,
        name: "Washion Machine",
        price: 100.5,
        category: "Home Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr1.png",
    },
    {
        id: 2556,
        name: "AC",
        price: 500,
        category: "Home Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr2.png",
    },
    {
        id: 2557,
        name: "Microwave Oven",
        price: 200.3,
        category: "Home Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr3.png",
    },
    {
        id: 2558,
        name: "Fridge",
        price: 300,
        category: "Home Gadgets",
        description: "Lorem ipsum dolor sit amet.",
        image: "./images/pr4.png",
    },
];

// SHOW CARDS FUNCTIONALITY

function showCards() {
    for (let i = 0; i < products.length; i++) {
        let category = products[i].category;
        switch (category) {
            case "Electronic Gadget":
                document.getElementById("electronicProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price} <span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  onClick="addToCart(${products[i].id})"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0"
              onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
                break;
            case "Gaming Gadgets":
                document.getElementById("gamingProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price}<span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  onClick="addToCart(${products[i].id})"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0"
               onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
                break;
            case "Home Gadgets":
                document.getElementById("homeProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price}<span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping" onClick="addToCart(${products[i].id})"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0" 
              onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
                break;
        }
    }
}
showCards();

// OPEN MODAL

function setModal(i) {
    document.getElementById("infoModalLabel").innerText = products[i].name;
    document.getElementById(
        "modalImage"
    ).innerHTML = `<img src="${products[i].image}" alt="products[i].name" style="width:240px">`;
    document.getElementById("modalBody").innerHTML = `
  <p><b>Serial Number:</b> ${products[i].id}</p> 
  <p><b>Category</b>: ${products[i].category}</p>
  <p><b>Description:</b> ${products[i].description}</p>
  <hr class="mt-1 mb-1 "/>
  <h2>$${products[i].price}<span>
  <a  class="add-to-cart text-dark" onClick="addToCart(${products[i].id})">
                <li class="fa-solid fa-cart-shopping"  ></li></a>
  </span></h2>


  `;
}

//  SHOPPING CART

// SELECT ELEMENTS

const cartItemsModalEl = document.querySelector(".show-cart");
const subtotalModalEl = document.querySelector(".total-price");
const totalItemsInCartModalEl = document.querySelector(".total-count");

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

updateCart();

// ADD TO CART
function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCart();
}

// update cart
function updateCart() {
    renderCartItems();
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalModalEl.innerHTML = `$${totalPrice.toFixed(2)}`;
    totalItemsInCartModalEl.innerHTML = totalItems;
}

// // render cart items
function renderCartItems() {
    cartItemsModalEl.innerHTML = ""; // clear cart element
    cart.forEach((item) => {
        cartItemsModalEl.innerHTML += `
          <div class="cart-item text-sm">
              <div class="item-info" ">
              <img src="${item.image}" alt="${item.name}" >
              <h6>${item.name}</h6>
            </div>
            
            <div class="unit-price">
              <small>$</small>${item.price}
            </div>
            <div class="units">
              <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
              <div class="number">${item.numberOfUnits}</div>
              <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
              <i class="fa-regular fa-square-minus ms-4 fs-5" onclick="removeItemFromCart(${item.id})"></i>
            </div>
          </div>    `;
    });
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}