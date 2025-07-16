const products = [
  {
    name: "Smartphone",
    price: 14999,
    image: "images/smartphone.jpg"
  },
  {
    name: "Laptop",
    price: 49999,
    image: "images/laptop.jpg"
  },
  {
    name: "Smartwatch",
    price: 2999,
    image: "images/smartwatch.jpg"
  },
  {
    name: "Headphones",
    price: 999,
    image: "images/headphones.jpg"
  }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartPopup = document.getElementById('cart-popup');

let cart = [];

function renderProducts() {
  products.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function toggleCart() {
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

renderProducts();
