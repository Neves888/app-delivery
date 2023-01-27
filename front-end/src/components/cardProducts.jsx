import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard(params) {
  const {
    id,
    name,
    price,
    urlImage,
  } = params;

  const {
    listProducts,
    setListProducts } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const incrementPrice = (productId, productPrice) => {
    for (let i = 0; i < quantity; i += 1) {
      const obj = { id: productId, price: productPrice };
      listProducts.push(obj);
      setListProducts(listProducts);
    }
  };

  const decrementPrice = (productId) => {
    for (let i = 0; i < quantity; i += 1) {
      const index = listProducts.findIndex((value) => value.id === productId);
      if (index >= 0) {
        listProducts.splice(index, 1);
        setListProducts(listProducts);
      }
    }
  };

  return (
    <section>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        style={ {
          width: '100px',
        } }
        src={ urlImage }
        alt={ name }
      />
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="remove"
          onClick={ () => decrementPrice(id) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="quantityCard"
          id="quantityCard"
          onChange={ (event) => setQuantity(event.target.value) }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="add"
          onClick={ () => incrementPrice(id, Number(price)) }
        >
          +
        </button>
      </div>
    </section>
  );
}
