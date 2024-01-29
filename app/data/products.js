export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [{
  id: "1",
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
  id: "2",
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
  id: "3",
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
  id: "4",
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
  id: "5",
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
  id: "6",
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
  id: "7",
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
  id: "8",
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
  id: "9",
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
  id: "10",
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
  id: "11",
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
  id: "12",
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
  id: "14",
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
  id: "15",
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
  id: "16",
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
  id: "17",
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