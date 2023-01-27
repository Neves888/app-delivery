import React, { useEffect, useState } from 'react';
import NavBar from '../components/productsNavBar';
import ProductCard from '../components/cardProducts';
import CartButton from '../components/cartButton';

export default function Products() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const apiProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const responseJson = await response.json();
      // console.log(responseJson);
      setProductList(responseJson);
    };
    apiProducts();
  });
  return (
    <div>
      <NavBar />
      <div>
        {
          productList.map((products) => (
            <ProductCard
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
