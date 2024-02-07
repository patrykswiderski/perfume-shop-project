import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption} from "../../data/deliveryOption.js";
import { formatCurrency } from '../utils/money.js';



export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  const deliveryOption = getDeliveryOption(cart[0].deliveryOptionId);
  shippingPriceCents += deliveryOption.priceCents;

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="shopping-cart-summary__cost">
      <div class="shopping-cart-summary__tax">Shipping & handling</div>
      <div class="shopping-cart-summary__tax">${formatCurrency(shippingPriceCents)} USD</div>
    </div>

    <div class="shopping-cart-summary__cost">
      <div class="shopping-cart-summary__subtotal">Total before tax</div>
      <div class="shopping-cart-summary__subtotal">${formatCurrency(productPriceCents)} USD</div>
    </div>

    <div class="shopping-cart-summary__cost">
      <div class="shopping-cart-summary__tax">Estimated tax (10%)</div>
      <div class="shopping-cart-summary__tax">${formatCurrency(taxCents)} USD</div>
    </div>

    <div class="shopping-cart-summary__cost">
      <div class="shopping-cart-summary__total">ORDER TOTAL</div>
      <div class="shopping-cart-summary__total">${formatCurrency(totalCents)} USD</div>
    </div>

    <div class="shopping-cart-summary__button d-flex justify-content-center">
      <a href="#" class="shopping-cart-summary__button-link btn-transparent">PROCEED TO SECURE CHECKOUT</a>
    </div>
  `;

  document.querySelector('.js-calculation')
    .innerHTML = paymentSummaryHTML;
}