

//bill n add in cart



//   function addToCart(productName, price) {
//   cart.push({ name: productName, price });

//   const cartMenu = document.querySelector('.dropdown-menu');
//   const newDropdownItem = document.createElement('li');
//   const link = document.createElement('a');
//   link.className = 'dropdown-item';
//   link.textContent = `${productName} - RS ${price}`;
//   newDropdownItem.appendChild(link);
//   cartMenu.appendChild(newDropdownItem);

//   updateCartModal();
// }
//thumbnail
// function addToCart(productName, price, imageURL) {
//     const cartMenu = document.querySelector('.dropdown-menu');
//     const modalBody = document.querySelector('.modal-body');

//     const newItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.className = 'dropdown-item';
//     link.textContent = `${productName} - RS ${price}`;
//     newItem.appendChild(link);
//     cartMenu.appendChild(newItem);

//     const modalItem = document.createElement('div');
//     modalItem.className = 'd-flex align-items-center gap-3 border-bottom py-2';

//     const img = document.createElement('img');
//     img.src = imageURL;
//     img.alt = productName;
//     img.style.width = '60px';
//     img.style.height = '60px';
//     img.style.objectFit = 'cover';
//     img.style.borderRadius = '8px';

//     const text = document.createElement('div');
//     text.innerHTML = `<strong>${productName}</strong><br><small>RS ${price}</small>`;

//     modalItem.appendChild(img);
//     modalItem.appendChild(text);
//     modalBody.appendChild(modalItem);

//     cartItems.push({ name: productName, price });

//     updateCartModal();
// }

// function updateCartModal() {
//   let total = 0;
//   let bodyContent = "";

//   cart.forEach((item, index) => {
//     total += item.price;
//     bodyContent += `<p>${index + 1}. ${item.name} - Rs ${item.price}</p>`;
//   });

//   document.querySelector('.modal-body-one').innerHTML = bodyContent || "<p>Your cart is empty.</p>";

//   const footerPs = document.querySelectorAll('.modal-footer-one p');
//   if (footerPs.length >= 2) {
//     footerPs[1].textContent = total;
//   }
// // }
//   const cartItems = [];

//   function addToCart(productName, price, imagePath) {
//     cartItems.push({ name: productName, price: price, image: imagePath });

//     updateCartModal();
//   }




//  only thumbnail in modal not bill



//  function updateCartModal() {
//     const modalBody = document.getElementById("modalBody");
//     const totalBillEl = document.getElementById("totalBill");

//     modalBody.innerHTML = "";

//     let total = 0;

//     cartItems.forEach(item => {
//       total += item.price;

//       const itemDiv = document.createElement("div");
//       itemDiv.className = "d-flex align-items-center gap-3 mb-3";

//       const img = document.createElement("img");
//       img.src = item.image;
//       img.alt = item.name;
//       img.style.width = "60px";
//       img.style.height = "60px";
//       img.style.objectFit = "cover";

//       const info = document.createElement("div");
//       info.innerHTML = `<strong>${item.name}</strong><br>RS ${item.price}`;

//       itemDiv.appendChild(img);
//       itemDiv.appendChild(info);
//       modalBody.appendChild(itemDiv);
//     });

//     totalBillEl.textContent = total;
//   }
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

        
 