import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from '../scripts/utils/money.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0,
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499,
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999,
}];


export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption; 
}

export function deliveryOptionHTML(cart) {
  let html = '';

  deliveryOptions.forEach((deliveryOption) => {
    // const deliveryOption = getDeliveryOption(deliveryOptionId);
    
    const today = dayjs();

    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );

    const dateString = deliveryDate.format(
      'dddd, D MMMM'
    );

    const priceString = deliveryOption.priceCents === 0
      ? 'Free'
      : `$${formatCurrency(deliveryOption.priceCents)} -`;
    
    const isChecked = cart[0] && cart[0].deliveryOptionId === deliveryOption.id;
      
    html += `
      <div class="shopping-cart-summary__option delivery-option js-delivery-option-id"
      data-delivery-option-id="${deliveryOption.id}">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="shopping-cart-summary__option-price delivery-option-price">
            ${priceString} Shipping
          </div>
        </div>
      </div>
    
    `
  });
  
  return html;
};