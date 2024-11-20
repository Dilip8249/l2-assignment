const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    image:
      "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9waG90b19vZl93aGl0ZV9tYWxlX3RzaGlydF9tb2NrdXBfd2hpdGVfdHNoaV85YjNmOWZjZS03MTZkLTQxYmUtODkzZS05MzkwZWY1NmZiZmFfMi5qcGc.jpg",
    price: 19.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    image:
      "https://i5.walmartimages.com/seo/Bluetooth-Headphones-Wireless-Earbuds-Ear-Intelligent-Noise-Reduction-HiFi-Stereo-Foldable-Headset-Long-Battery-Life-earphone-Gifts-Women-Men_47637b62-5700-4deb-a298-50432a68abbf.750453b7fb821f11a93ad3e5c6056863.jpeg",
    price: 99.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Eco-Friendly Water Bottle",
    image:
      "https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-eco-friendly-water-bottle-png-image_12690922.png",
    price: 22.99,
    quantity: 3,
  },
  {
    id: 4,
    name: "Smartwatch",
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    price: 149.99,
    quantity: 1,
  },
];

let cart = [];

// Function to render products
function renderProducts() {
  const cardsContainer = document.querySelector(".cards");
  let elements = "";
  products.forEach((product) => {
    elements += `
        <div class="card">
          <div class="image-div">
            <img src="${product.image}" class="product-img" alt="${
      product.name
    }" />
          </div>
          <div class="name">${product.name}</div>
          <div class="price">Rs ${product.price.toFixed(
            2
          )}</div> <!-- Price formatting -->
          <div class="cart-btn-div">
            <button class="cart-btn" onclick="addToCart(${
              product.id
            })">Add to Cart</button>
          </div>
        </div>
      `;
  });
  cardsContainer.innerHTML = elements;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

function openCart() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "flex";
  renderCart();
}

function closeCart() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "none";
}

// Function to render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  let itemsHTML = "";

  if (cart.length === 0) {
    itemsHTML = `<p>Cart is empty</p>`;
  } else {
    cart.forEach((item, index) => {
      itemsHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div class="product-info">
              <p>${item.name}</p>
              <div class="quantity">
                <button class="count-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="count-btn" onclick="updateQuantity(${index}, 1)">+</button>
              </div>
              <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
            <p>Rs ${(item.price * item.quantity).toFixed(
              2
            )}</p> <!-- Price formatting -->
          </div>
        `;
    });
  }

  cartItemsContainer.innerHTML = itemsHTML;
  updateTotal();
}

// Function to update quantity
function updateQuantity(index, change) {
  const item = cart[index];
  if (item.quantity + change > 0) {
    item.quantity += change;
  }
  renderCart();
}

// Function to remove item
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Function to update total
function updateTotal() {
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2); // Price formatting
}

// Initial rendering of products
renderProducts();
