import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

export default function CartProducts() {
  // const { totalPrice, setTotalPrice, listProducts } = useContext(CartContext);

  // const price = listProducts.reduce((acc, cur) => acc.price + cur.price);
  // console.log(price);
  // console.log(listProducts);
  // setTotalPrice(price);

  return (
    <div>
      <button data-testid="customer_products__button-cart" type="button">
        <p data-testid="customer_products__checkout-bottom-value">
          {`Ver carrinho: R$${0}`}
        </p>
      </button>
    </div>
  );
}
