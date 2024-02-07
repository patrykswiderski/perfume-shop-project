import { cart, addToCart, removeFromCart, clearCart, updateCartQuantity, removeOneFromCart,updateDeliveryOption } from '../../data/cart.js';
import { products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function generatorCartSummaryHTML() {
  let cartSummaryHTML = '';

  if (!cart) {
    cart = [];
  };

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      if(product.id === productId) {
        matchingProduct = product;
      };
    });

    cartSummaryHTML += `
      <div class="shopping-cart-products__product row m-0 js-product-${matchingProduct.id}">
        <div class="shopping-cart-products__product-details col-5 p-0">
          <div class="shopping-cart-products__product-details-row row m-0 justify-content-between">
            <div class="shopping-cart-products__product-image col-4 p-0">
              <img class="item-block__img" src="${matchingProduct.image}" alt="">
            </div>

            <div class="shopping-cart-products__product-data col-7 p-0">
              <p class="shopping-cart-products__product-name">${matchingProduct.nameOfProduct}</p>
              <p class="shopping-cart-products__product-brand">${matchingProduct.brand}</p>
              <p class="shopping-cart-products__product-type">${matchingProduct.type}</p>
            </div>
          </div>
        </div>

        <div class="shopping-cart-products__ col-2 p-0">
          <p class="shopping-cart-products__product-price">$${formatCurrency(matchingProduct.priceCents)}</p>
        </div>

        <div class="shopping-cart-products__quantity col-2">
          <div class="shopping-cart-products__quantity-container">
            <div id="minus" class="shopping-cart-products__quantity-minus js-quantity-minus" data-product-id="${matchingProduct.id}">-</div>
            <input class="shopping-cart-products__quantity-picker" type="text" id="number" value="${cartItem.quantity}">
            <div id="plus" class="shopping-cart-products__quantity-plus js-quantity-plus" data-product-id="${matchingProduct.id}">+</div>
          </div>
        </div>

        <div class="shopping-cart-products__total col-3 p-0">
          <p class="shopping-cart-products__product-price">$${formatCurrency(cartItem.quantity * matchingProduct.priceCents)}</p>
          <button class="shopping-cart-products__trash-button js-trash-button" data-product-id="${matchingProduct.id}">
            <img class="shopping-cart-products__trash-icon" src="./app/images/trash_can_icon.png" alt="">
          </button>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-order-products').innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-trash-button')
    .forEach((trashButton) => {
      trashButton.addEventListener('click', () => {
        const productId = trashButton.dataset.productId;
        removeFromCart(productId);
        updateCartQuantity();
        
        const container = document.querySelector(`.js-product-${productId}`);
        container.remove();
        generatorCartSummaryHTML();
        renderPaymentSummary();
      });
    });

  document.querySelectorAll('.js-clear-cart')
    .forEach((clearButton) => { 
      clearButton.addEventListener('click', () => {
        clearCart();
        updateCartQuantity();

        document.querySelector('.js-order-products').innerHTML = '';
      });
    });

  document.querySelectorAll('.js-quantity-minus')
    .forEach((minusButton) => {
      minusButton.addEventListener('click', () => {
        const productId = minusButton.dataset.productId;
        removeOneFromCart(productId);
        generatorCartSummaryHTML();
        renderPaymentSummary();
      });
    });
    
  document.querySelectorAll('.js-quantity-plus')
    .forEach((plusButton) => {
      plusButton.addEventListener('click', () => {
        const productId = plusButton.dataset.productId;
        addToCart(productId);
        generatorCartSummaryHTML();
        renderPaymentSummary();
      });
    });

  document.querySelectorAll('.js-delivery-option-id')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const deliveryOptionId = element.dataset.deliveryOptionId;
        updateDeliveryOption(deliveryOptionId);
        generatorCartSummaryHTML();
        renderPaymentSummary();
      });
    });
};





