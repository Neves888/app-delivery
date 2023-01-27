import React, { useState } from 'react';

export default function ProductCard(params) {
  const {
    id,
    name,
    price,
    urlImage,
  } = params;

  const [quantity, setQuantity] = useState(0);

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
          onClick={ () => setQuantity(quantity - 1) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="quantityCard"
          id="quantityCard"
          value={ quantity < 0 ? 0 : quantity }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="add"
          onClick={ () => setQuantity(quantity + 1) }
        >
          +
        </button>
      </div>
    </section>
  );
}
