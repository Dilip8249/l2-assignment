# l2-assignment

Pseudocode:
Define the Product Data:

Create a list of products, each with an id, name, image, price, and quantity.
Initialize an Empty Cart:

Create an empty cart to store products added by the user.
Function to Render Product Cards:

Loop through the list of products.
For each product, create HTML elements to display its image, name, price, and an "Add to Cart" button.
Add the HTML to the product container on the page.
Function to Add Product to Cart:

When an "Add to Cart" button is clicked:
Find the product using its id.
Check if the product is already in the cart:
If it is, increase its quantity.
If it’s not, add it to the cart with quantity 1.
Update the cart count in the header to reflect the total quantity of items in the cart.
Function to Update Cart Count:

Calculate the total quantity of items in the cart.
Update the cart count display in the header with this total.
Function to Open Cart Popup:

Show the cart popup when the user clicks the cart icon.
Render the items in the cart.
Function to Close Cart Popup:

Hide the cart popup when the user clicks the close button.
Function to Render Cart Items:

If the cart is empty:
Display a message "Cart is empty."
If the cart has items:
Loop through the cart items.
For each item, create HTML elements showing:
Product image
Product name
Product quantity with buttons to increase/decrease quantity
Button to remove the item from the cart
Total price for the item (price * quantity)
Update the total amount of the cart.
Function to Update Quantity of Cart Item:

When the user clicks the "+" or "-" button:
Update the quantity of the item in the cart.
Ensure that the quantity cannot go below 1.
Re-render the cart to reflect the updated quantities.
Function to Remove Item from Cart:

When the user clicks the "Remove" button:
Remove the item from the cart.
Re-render the cart to reflect the updated list of items.
Function to Update Total Amount:

Calculate the total price of all items in the cart (sum of price * quantity).
Display the total price in the cart popup.
Initial Product Rendering:

Render the list of products when the page first loads.
High-Level Pseudocode:
csharp
Copy code
products = [
  {id: 1, name: "Product 1", image: "image1.jpg", price: 19.99, quantity: 2},
  {id: 2, name: "Product 2", image: "image2.jpg", price: 99.99, quantity: 1},
  {id: 3, name: "Product 3", image: "image3.jpg", price: 22.99, quantity: 3},
  {id: 4, name: "Product 4", image: "image4.jpg", price: 149.99, quantity: 1}
]

cart = []

function renderProducts():
  for each product in products:
    create HTML card with product details and "Add to Cart" button
    append card to the cards container

function addToCart(productId):
  product = find product by productId
  if product is already in cart:
    increase its quantity
  else:
    add product to cart with quantity 1
  updateCartCount()

function updateCartCount():
  totalQuantity = sum of quantities in cart
  update cart count display

function openCart():
  display cart popup
  renderCart()

function closeCart():
  hide cart popup

function renderCart():
  if cart is empty:
    display "Cart is empty"
  else:
    for each item in cart:
      create HTML elements for each cart item (image, name, quantity, remove button)
    update total amount of the cart

function updateQuantity(index, change):
  item = cart[index]
  if item.quantity + change > 0:
    update item quantity
  renderCart()

function removeItem(index):
  remove item from cart
  renderCart()

function updateTotal():
  totalAmount = sum of (price * quantity) for each item in cart
  display total amount in the cart

renderProducts()
