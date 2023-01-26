import React from 'react';

export default function CartProducts(price) {
  return (
    <div>
      <button data-testid="customer_products__button-cart" type="button">
        <p data-testid="customer_products__checkout-bottom-value">
          {`Ver carrinho: R$${price}`}
        </p>
      </button>
    </div>
  );
}
