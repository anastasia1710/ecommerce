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
