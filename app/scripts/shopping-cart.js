import { cart, addToCart, removeFromCart, clearCart, updateCartQuantity, removeOneFromCart,updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import { wishlist } from '../data/wishlist.js';
import { formatCurrency } from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { deliveryOptions, deliveryOptionHTML, getDeliveryOption } from '../data/deliveryOption.js';
import { generatorCartSummaryHTML } from './checkout/orderSummary.js';

console.log(cart);

function getRandomProducts(allProducts, numberOfProducts) {
  const shuffledProducts = allProducts.slice().sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, numberOfProducts);
};

function generateProductHTML(product) {
  return `
    <div class="recommended-products__item item-block">
      <div class="item-block__top">
        <p class="item-block__top-gender">${product.gender}</p>
        
        <button class="item-block__top-wishlist-btn btn-wishlist js-add-wishlist" data-product-id="${product.id}">
          <img src="app/images/heart_wishlist.svg" alt="" class="item-block__top-wishlist-img btn-wishlist js-wishlist-icon-${product.id}">
          <a class="item-block__top-wishlist" href="#"></a>
        </button>  
      </div>

      <div class="item-block__bootom">
        <img class="item-block__img" src="${product.image}" alt="">
      </div>

      <div class="item-block__content">
        <p class="item-block__content-name">${product.nameOfProduct}</p>
        <p class="item-block__content-brand">by <span class="item-block__content-text-underline">${product.brand}</span></p>
        <p class="item-block__content-type">${product.type}</p>
        <p class="item-block__content-price">from <span class="item-block__content-price-bold">$${formatCurrency(product.priceCents)}</span></p>
      </div>

      <div class="item-block__add">
        <a href="#" class="item-block__add-btn js-add-cart" data-product-id="${product.id}">ADD TO BAG</a>
      </div>
    </div>
  `;
};

const topBeautyProducts = products.sort((a, b) => b.numberPurchase - a.numberPurchase).slice(0, 4);
const topBeautyProductsHTML = topBeautyProducts.map(generateProductHTML).join('');
document.querySelector('.js-top-beauty-products').innerHTML = topBeautyProductsHTML;

document.querySelectorAll('.js-add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    addToCart(productId);

    generatorCartSummaryHTML();
  });
});

document.querySelectorAll('.js-add-wishlist').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItemIndex = '0';

    wishlist.forEach((item, index) => {
      if (productId === item.productId) {
        matchingItemIndex = index;
      };
    });

    const imgElements = document.querySelectorAll(`.js-wishlist-icon-${button.dataset.productId}`);
    const wishlistIcon = "app/images/heart_wishlist.svg";
    const wishlistIconAdded = "app/images/heart_wishlist_full.svg";

    if (matchingItemIndex !== '0') {
      wishlist.splice(matchingItemIndex, 1);
      imgElements.forEach((imgElement) => {
        imgElement.src = wishlistIcon;
      });
    } else {
      wishlist.push({
        productId: productId,
      });
      imgElements.forEach((imgElement) => {
        imgElement.src = wishlistIconAdded;
      });
    };
  });
});

updateCartQuantity();

generatorCartSummaryHTML();

renderPaymentSummary();

document.querySelector('.js-delivery-option').innerHTML = deliveryOptionHTML(cart);


document.querySelectorAll('.js-delivery-option-id')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const deliveryOptionId = element.dataset.deliveryOptionId;
      updateDeliveryOption(deliveryOptionId);
      generatorCartSummaryHTML();
    });
  });

