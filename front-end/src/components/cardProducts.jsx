import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard(params) {
  const {
    id,
    name,
    price,
    urlImage,
  } = params;

  const [quantity, setQuantity] = useState(0);

  const {
    listProducts,
    setListProducts,
    setTotalPrice } = useContext(CartContext);

  const someTotalPrice = (newList) => {
    const newPrice = newList
      .reduce((acc, cur) => acc + (cur.price * cur.quantity), 0).toFixed(2);
    setTotalPrice(Number(newPrice));
  };

  useEffect(() => {
    const newList = listProducts.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          quantity,
        };
      }
      return product;
    });
    setListProducts(newList);
    someTotalPrice(newList);
  }, [quantity]);

  // console.log(listProducts);

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
          onClick={ quantity <= 0
            ? () => setQuantity(0) : () => setQuantity(quantity - 1) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="quantityCard"
          id="quantityCard"
          value={ quantity }
          onChange={ (event) => setQuantity(Number(event.target.value)) }
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
