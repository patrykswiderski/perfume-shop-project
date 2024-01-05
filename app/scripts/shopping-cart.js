import { cart, addToCart, removeFromCart, clearCart, updateCartQuantity, removeOneFromCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { wishlist } from '../data/wishlist.js';
import { formatCurrency } from './utils/money.js';

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

// (function(){

//   let inputContainer = document.querySelector(".shopping-cart-products__quantity-container");
//   let input = inputContainer.firstElementChild.nextElementSibling;
//   let minus = inputContainer.firstElementChild;
//   let plus = inputContainer.lastElementChild;

//   function changeNumber(e) {
//       if(e.target == minus && input.value > 0) {
//           input.value--;
//       } else if(e.target == plus) {
//           input.value++;
//       }
//   }

//   inputContainer.addEventListener("click", changeNumber);
// })();

function generatorCartSummaryHTML() {
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
          <p class="shopping-cart-products__product-price">$61.49</p>
          <button class="shopping-cart-products__trash-button js-trash-button" data-product-id="${matchingProduct.id}">
            <img class="shopping-cart-products__trash-icon" src="./app/images/trash_can_icon.png" alt="">
          </button>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-order-products').innerHTML = cartSummaryHTML;
};

updateCartQuantity();
generatorCartSummaryHTML();

// function listenerForTrashButton () {

// }

document.querySelectorAll('.js-trash-button')
  .forEach((trashButton) => {
    trashButton.addEventListener('click', () => {
      const productId = trashButton.dataset.productId;
      removeFromCart(productId);
      updateCartQuantity();
      generatorCartSummaryHTML();

      const container = document.querySelector(`.js-product-${productId}`);
      container.remove();
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
    });
  });

  document.querySelectorAll('.js-quantity-plus')
  .forEach((plusButton) => {
    plusButton.addEventListener('click', () => {
      const productId = plusButton.dataset.productId;
      addToCart(productId);
      generatorCartSummaryHTML();
    });
  });
