let cart = [];

  const cartItems = [];

  function addToCart(name, price, imgSrc) {
    cartItems.push({ name, price, imgSrc });

    const dropdownList = document.querySelector('.cart-dropdown-list');
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" class="dropdown-item">${name} - Rs ${price.toLocaleString()}</a>`;
    dropdownList.appendChild(li);
  }

  document.getElementById('welcome').addEventListener('show.bs.modal', () => {
    const container = document.getElementById('cartItemsContainer');
    container.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
      total += item.price;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'd-flex justify-content-between align-items-center mb-3 border-bottom pb-2';
      itemDiv.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${item.imgSrc}" width="80" height="80" class="rounded me-3" alt="${item.name}">
          <div>
            <h6 class="mb-0">${item.name}</h6>
            <small class="text-muted">Rs ${item.price.toLocaleString()}</small>
          </div>
        </div>
      `;
      container.appendChild(itemDiv);
    });

    document.getElementById('totalBill').textContent = `Rs ${total.toLocaleString()}`;
  });

function loginUser() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    
    if (!name || !location || !email || !username) {
        alert("Please fill out all fields.");
        return;
    }

    const user = { name, location, email, username };
    localStorage.setItem("user", JSON.stringify(user));

    showAccountSection();
}

function showAccountSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('accountSection').style.display = 'block';

    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById('accountName').textContent = user.name;
    document.getElementById('accountLocation').textContent = user.location;
    document.getElementById('accountEmail').textContent = user.email;
    document.getElementById('accountUsername').textContent = user.username;
}

function logoutUser() {
    localStorage.removeItem("user");

    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('accountSection').style.display = 'none';

    document.getElementById('loginForm').reset();
}
let done=document.querySelector('.done-btn');
done.addEventListener("click",()=>{
alert("Ordered is placed");
})

const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".product");

 
   searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    products.forEach(product => {
      const name = product.dataset.name.toLowerCase();
      if (name.includes(query)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });

        
 
