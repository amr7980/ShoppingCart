<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web Storefront</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    header {
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    search-bar {
      margin-top: 1rem;
      text-align: center;
    }
    search-bar input {
      padding: 0.5rem;
      width: 50%;
    }
    main {
      display: flex;
      padding: 1rem;
      gap: 2rem;
    }
    product-list, shopping-cart {
      flex: 1;
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    .product {
      border-bottom: 1px solid #ddd;
      padding: 0.5rem 0;
    }
    .product img {
      width: 100px;
    }
    .cart-item {
      border-bottom: 1px solid #ddd;
      padding: 0.5rem 0;
    }
    button {
      padding: 0.5rem;
      margin-top: 0.5rem;
      background-color: #28a745;
      color: white;
      border: none;
      cursor: pointer;
    }
    button.remove {
      background-color: #dc3545;
    }
  </style>
</head>
<body>
  
  <header>
    <h1>My Web Store</h1>
    <!-- Search Bar -->
    <div id="search-bar">
      <input type="text" placeholder="Search for products...">
    </div>
  </header>

  <main>
    <section id="product-list">
      <h2>Products</h2>
      <div class="product">
        <h3>Product 1</h3>
        <img src="https://via.placeholder.com/100" alt="Product 1">
        <p>$10.00</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <h3>Product 2</h3>
        <img src="https://via.placeholder.com/100" alt="Product 2">
        <p>$20.00</p>
        <button>Add to Cart</button>
      </div>
    </section>
    <aside id="shopping-cart">
      <h2>Shopping Cart</h2>
      <div class="cart-item">
        <p>Product 1 - $10.00</p>
        <button class="remove">Remove</button>
      </div>
      <div class="cart-item">
        <p>Product 2 - $20.00</p>
        <button class="remove">Remove</button>
      </div>
    </aside>

  </main>

</body>
</html>
