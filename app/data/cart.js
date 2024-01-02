export let cart = [{
  productId: '2',
  quantity: 5,
}, {
  productId: '5',
  quantity: 1,
}];

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
};

