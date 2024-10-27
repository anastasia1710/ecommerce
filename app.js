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

function generateProductElements() {
  const productContainer = document.querySelector(".cards_list");

  products.forEach((product) => {
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

document.addEventListener("DOMContentLoaded", generateProductElements);
что