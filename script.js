let cart = [];

function renderProducts(products) {
  const list = $("#product-list");
  list.empty();
  products.forEach((p) => {
    const card = $(`
      <div class="col-md-3 mb-4">
        <div class="card p-3">
          <h5>${p.name}</h5>
          <p>Price: $${p.price.toFixed(2)}</p>
          <button class="btn btn-primary add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    `);
    list.append(card);
  });
}

function renderCart() {
  const list = $("#cart");
  list.empty();
  cart.forEach((item) => {
    list.append(`<li class="list-group-item">${item.name} - $${item.price.toFixed(2)}</li>`);
  });
}

$(document).ready(() => {
  let products = [];

  // Load product JSON using AJAX
  $.getJSON("products.json", (data) => {
    products = data;
    renderProducts(products);
  });

  // Search functionality
  $("#searchBox").on("input", function () {
    const keyword = $(this).val().toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    renderProducts(filtered);
  });

  // Add to cart
  $("#product-list").on("click", ".add-to-cart", function () {
    const id = parseInt($(this).data("id"));
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
  });
});
