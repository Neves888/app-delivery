import React from 'react';

export default function ProductCard(params) {
  const {
    id,
    name,
    price,
    urlImage,
  } = params;
  return (
    <section>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{ price }</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="remove"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="quantityCard"
          id="quantityCard"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="add"
        >
          +
        </button>
      </div>
    </section>
  );
}
