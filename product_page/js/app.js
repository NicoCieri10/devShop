const bodyContainer = document.getElementById('main-container');
const productContainer = document.createDocumentFragment('product__container');
const cartElement = document.getElementById('cart');
const footerElement = document.getElementById('footer');
const templateElement = document.getElementById('template');
const templateFooterElement = document.getElementById('templateFooter');
let cart = [];

const showAdminBtn = () => {
  const user = localStorage.getItem('user');
  if (user !== 'administrador') {
      document.querySelector('#adminBtn').classList.add('d-none');
  };
};

showAdminBtn();

function renderCart() {
  cartElement.innerHTML = '';

  cart.forEach((product, index) => {
    const template = templateElement.content.cloneNode(true);

    const productNameElement = template.querySelector('.lead');
    productNameElement.textContent = product.name + " $" + product.price + " x " + product.quantity;

    const increaseButton = template.querySelector('.btn-success');
    increaseButton.addEventListener('click', () => {
      increaseQuantity(index);
    });

    const decreaseButton = template.querySelector('.btn-danger');
    decreaseButton.addEventListener('click', () => {
      decreaseQuantity(index);
    });

    cartElement.appendChild(template);
  });

  updateFooter();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  renderCart();
  saveCartToLocalStorage();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
  saveCartToLocalStorage();
}

function updateFooter() {
  const total = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  footerElement.innerHTML = '';

  if (cart.length > 0) {
    const template = templateFooterElement.content.cloneNode(true);

    const totalPriceElement = template.querySelector('.cart__card-price');
    totalPriceElement.textContent = total.toFixed(2);

    footerElement.appendChild(template);
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    cart = JSON.parse(cartData);
    renderCart();
  }
}

const addButton = document.querySelector('.details__button');
addButton.addEventListener('click', () => {
  
  if (checkUserKey()) {
    const productName = addButton.getAttribute('data-product');
    const productPrice = parseFloat(addButton.getAttribute('data-price'));

    const existingProduct = cart.find((product) => product.name === productName);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    renderCart();
    saveCartToLocalStorage();
  } else {
    window.alert('Para agregar productos al carrito es necesario iniciar sesión.');
  }
});

const suggestionButtons = document.querySelectorAll('.suggestions__card-button');

suggestionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (checkUserKey()) {
      const productName = button.getAttribute('data-product');
      const productPrice = parseFloat(button.getAttribute('data-price'));

      const existingProduct = cart.find((product) => product.name === productName);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
      }

      renderCart();
      saveCartToLocalStorage();
    } else {
      const confirmResult = window.confirm('Para agregar productos al carrito es necesario iniciar sesión. ¿Desea ir a la página de inicio de sesión?');
      if (confirmResult) {
        window.location.href = '';
      } else {
        window.alert('Puede seguir explorando las páginas sin agregar productos al carrito.');
      }
    }
  });
});

loadCartFromLocalStorage();

function checkUserKey() {
  return localStorage.getItem("user") !== null;
}


