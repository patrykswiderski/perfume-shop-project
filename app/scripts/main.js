const products = [{
  gender: 'woman',
  image: 'app/images/Rectangle 1142-00.jpg',
  nameOfProduct: 'JO MALONE VETIVER & GO...',
  brand: 'Ipsa',
  type: 'Luminizing Clay',
  priceCents: 5174,
  launchDate: '2023-11-06T12:30:00',
  numberPurchase: 1564,
  attribute: 'recommended',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-01.jpg',
  nameOfProduct: 'Armaf Passion',
  brand: 'Armaf',
  type: 'Eau De Parfum',
  priceCents: 4174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 1564,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-03.jpg',
  nameOfProduct: 'JO MALONE VETIVER & GO...',
  brand: 'Bvlgari',
  type: 'Eau De Toilette',
  priceCents: 3174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 1564,
  attribute: 'recommended',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-02.jpg',
  nameOfProduct: 'Bvlgari Extreme',
  brand: 'Ipsa',
  type: 'Luminizing Clay',
  priceCents: 6174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 5326,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-1.jpg',
  nameOfProduct: 'Armaf Passion',
  brand: 'Armaf',
  type: 'Eau De Parfum',
  priceCents: 8174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 5516,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-3.jpg',
  nameOfProduct: 'JO MALONE VETIVER & GO...',
  brand: 'Ipsa',
  type: 'Eau De Toilette',
  priceCents: 9174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 1456,
  attribute: 'recommended',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-2.jpg',
  nameOfProduct: 'Bvlgari Extreme',
  brand: 'Ipsa',
  type: 'Luminizing Clay',
  priceCents: 5485,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 2456,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-0.jpg',
  nameOfProduct: 'JO MALONE VETIVER & GO...',
  brand: 'Ipsa',
  type: 'Eau De Parfum',
  priceCents: 5485,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 6,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-002.jpg',
  nameOfProduct: 'Armaf Passion',
  brand: 'Armaf',
  type: 'Eau De Parfum',
  priceCents: 8174,
  launchDate: '2023-11-06T12:30:00',
  numberPurchase: 516,
  attribute: 'recommended',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-003.jpg',
  nameOfProduct: 'Bucci',
  brand: 'Mersace',
  type: 'Eau De Toilette',
  priceCents: 9174,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 156,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-004.jpg',
  nameOfProduct: 'Bvlgari Extreme',
  brand: 'Ipsa',
  type: 'Luminizing Clay',
  priceCents: 5485,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase:956,
  attribute: '',
}, {
  gender: 'woman',
  image: 'app/images/Rectangle 1142-005.jpg',
  nameOfProduct: 'JO MALONE VETIVER & GO...',
  brand: 'Ipsa',
  type: 'Eau De Parfum',
  priceCents: 5485,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 56,
  attribute: '',
}, {
  gender: 'man',
  image: 'app/images/Rectangle 1142-006.jpg',
  nameOfProduct: 'Armaf Passion',
  brand: 'Armaf',
  type: 'Eau De Parfum',
  priceCents: 3524,
  launchDate: '2023-11-06T12:30:00',
  numberPurchase: 2256,
  attribute: '',
}, {
  gender: 'man',
  image: 'app/images/Rectangle 1142-007.jpg',
  nameOfProduct: 'Bucci',
  brand: 'Mersace',
  type: 'Eau De Toilette',
  priceCents: 4574,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 56,
  attribute: '',
}, {
  gender: 'man',
  image: 'app/images/Rectangle 1142-008.jpg',
  nameOfProduct: 'Bvlgari Extreme',
  brand: 'Kimchi',
  type: 'Perfume',
  priceCents: 8565,
  launchDate: '2023-01-06T12:30:00',
  numberPurchase: 56,
  attribute: '',
}, {
  gender: 'man',
  image: 'app/images/Rectangle 1142-0010.jpg',
  nameOfProduct: 'Brutus',
  brand: 'Alladyn',
  type: 'Eau De Parfum',
  priceCents: 5856,
  launchDate: '2023-11-06T12:30:00',
  numberPurchase: 4856,
  attribute: '',
}];


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
        <p class="item-block__content-price">from <span class="item-block__content-price-bold">$${product.priceCents / 100}</span></p>
      </div>

      <div class="item-block__add">
        <a href="#" class="item-block__add-btn">ADD TO BAG</a>
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
