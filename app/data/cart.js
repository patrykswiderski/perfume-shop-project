export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [];
};


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};


export function updateCartQuantity() {
  let cartQuantity = 0;

  if (!cart) {
    cartQuantity = 0;
  } else {
  cart.forEach((item) => {
    cartQuantity += item.quantity
    });
  };

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};


export function addToCart(productId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  };

  updateCartQuantity();

  saveToStorage();
};


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};

export function clearCart() {
  cart = '';

  saveToStorage();
};


