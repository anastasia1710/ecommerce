// Generating products
const products = [
  {
    id: 1,
    name: "Flora Midi Dress Mari Check Print",
    price: "$229",
    image: "images/card1.png",
  },
  {
    id: 2,
    name: "Maxime Bikini Top Vacances Stripe",
    price: "$90",
    image: "images/card2.png",
  },
  {
    id: 3,
    name: "Carmody Top Linden Floral Print",
    price: "$189",
    image: "images/card3.png",
  },
  {
    id: 4,
    name: "Farrah Bikini Top Plain White Textured",
    price: "$95",
    image: "images/card4.png",
  },
];

function generateProductElements(productsToDisplay) {
  const productContainer = document.querySelector(".cards_list");
  productContainer.innerHTML = "";

  productsToDisplay.forEach((product) => {
    console.log("Creating product:", product.name); // Shows that the product was created

    const productElement = document.createElement("li");
    productElement.className = "list_item";

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">Add to cart</button>
    `;

    productContainer.appendChild(productElement);
  });
}


// Sorting products
function sortProductsByName() {
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  generateProductElements(sortedProducts);
}

function sortProductsByLowestPrice() {
  const sortedProducts = [...products].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  generateProductElements(sortedProducts);
}

function sortProductsByHighestPrice() {
  const sortedProducts = [...products].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  generateProductElements(sortedProducts);
}


document.getElementById("sort").addEventListener("change", (event) => {
  switch (event.target.value) {
    case "name":
      sortProductsByName();
      break;
    case "lowest":
      sortProductsByLowestPrice();
      break;
    case "highest":
      sortProductsByHighestPrice();
      break;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  generateProductElements(products);
});



// Cart
document.getElementById('cart-button').addEventListener('click', function() {
  document.getElementById('cart').classList.toggle('open');
});

const cartButton = document.getElementById("cart-button");
const cart = document.getElementById("cart");
const closeCartButton = document.getElementById("close-cart");


cartButton.addEventListener("click", function (e) {
  cart.classList.add("open");
});

closeCartButton.addEventListener("click", function () {
  cart.classList.remove("open");
});


// Adding products to cart
let cartItems = [];
let totalPrice = 0;

function addToCart(productId, productName, productPrice) {

  const price = parseFloat(productPrice.replace('$', ''));

  const product = { id: productId, name: productName, price: price };
  
  cartItems.push(product);
  
  totalPrice += price;
  
  renderCart();
}

function renderCart() {
  const cartContainer = document.querySelector("#cart-items");
  const totalContainer = document.querySelector("#cart-total");
  cartContainer.innerHTML = "";
  

  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      const cartItemElement = document.createElement("li");
      cartItemElement.innerHTML = `
        <span>${item.name}</span> - <span>$${item.price.toFixed(2)}</span>
      `;
      cartContainer.appendChild(cartItemElement);
    });

    totalContainer.innerHTML = `Total: $${totalPrice.toFixed(2)}`;

  } else {
    totalContainer.innerHTML = "Total: $0.00";
  }
}

document.querySelector(".cards_list").addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = e.target.getAttribute("data-product-id");
    const productName = e.target.getAttribute("data-product-name");
    const productPrice = e.target.getAttribute("data-product-price");

    addToCart(productId, productName, productPrice);

    console.log(`'The item has been added: ${productName}, Price: ${productPrice}'`);


    const message = document.getElementById('cart-message');
    message.innerHTML = `'${productName} has been added to the cart'`;

    message.style.display = 'block';

    setTimeout(function() {
      message.style.display = 'none';
    }, 2000);
  }
});