import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartButton() {
  const { totalPrice } = useContext(CartContext);

  return (
    <div>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        style={ {
          position: 'fixed',
          bottom: '10px',
          left: '80%',
        } }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          Ver carrinho:
          {' '}
          {`R$${totalPrice}`}
        </p>
      </button>
    </div>
  );
}
