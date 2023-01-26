import React from 'react';
import NavBar from '../components/productsNavBar';
import ProductCard from '../components/cardProducts';
import CartButton from '../components/cartButton';
import ProductList from '../components/products.image';

export default function Products() {
  return (
    <div>
      <NavBar />
      <div>
        {
          ProductList.map((products) => (
            <ProductCard
              product={ products }
              key={ products.id }
              id={ products.id }
              name={ products.name }
              price={ products.price }
              urlImage={ products.url_image }
            />
          ))
        }
      </div>
      <CartButton />
    </div>
  );
}
