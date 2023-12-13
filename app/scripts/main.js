function getRandomProducts(allProducts, numberOfProducts) {
  const shuffledProducts = allProducts.slice().sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, numberOfProducts);
}

function generateProductHTML(product) {
  return `
    <div class="recommended-products__item item-block">
      <div class="item-block__top">
        <p class="item-block__top-gender">${product.gender}</p>
        
        <button class="item-block__top-wishlist-btn btn-wishlist">
          <img src="app/images/heart_wishlist.svg" alt="" class="item-block__top-wishlist-img btn-wishlist">
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
        <p class="item-block__content-price">from <span class="item-block__content-price-bold">$${(product.priceCents / 100).toFixed(2)}</span></p>
      </div>

      <div class="item-block__add">
        <a href="#" class="item-block__add-btn js-add-cart" data-product-id="${product.id}">ADD TO BAG</a>
      </div>
    </div>
  `;
}

const recommendedProducts = products.filter(product => product.attribute === 'recommended');
const randomRecommendedProducts = getRandomProducts(recommendedProducts, 4);
const recommendedProductsHTML = randomRecommendedProducts.map(generateProductHTML).join('');
document.querySelector('.js-recommended-products').innerHTML = recommendedProductsHTML;

const sortedDateProducts = products.sort((a, b) => new Date(a.launchDate) - new Date(b.launchDate)).slice(0, 4);
const newProductsHTML = sortedDateProducts.map(generateProductHTML).join('');
document.querySelector('.js-new-products').innerHTML = newProductsHTML;

const bestSellersProducts = products.sort((a, b) => b.numberPurchase - a.numberPurchase).slice(0, 4);
const bestSellersProductsHTML = bestSellersProducts.map(generateProductHTML).join('');
document.querySelector('.js-best-sellers-products').innerHTML = bestSellersProductsHTML;

document.querySelectorAll('.js-add-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      })

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        })
      }
      console.log(cart);
    })
  });