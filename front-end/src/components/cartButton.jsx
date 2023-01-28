import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartButton() {
  const [button, setButton] = useState(true);
  const { totalPrice } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      setButton(false);
    } else { setButton(true); }
  }, [totalPrice]);

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
        disabled={ button }
        onClick={ () => navigate('/customer/checkout') }
      >
        <span>Ver Carrinho:</span>
        <span> R$</span>
        <span data-testid="customer_products__checkout-bottom-value">
          {`${String(totalPrice).replace('.', ',')}`}
        </span>
      </button>
    </div>
  );
}
