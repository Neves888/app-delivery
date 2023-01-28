import React, { useEffect, useState } from 'react';
import NavBar from '../components/productsNavBar';
import ProductCard from '../components/cardProducts';
import CartButton from '../components/cartButton';
import CartProvider from '../context/CartContext';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [storageUser, setStorageUser] = useState([]);

  useEffect(() => {
    const apiProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const responseJson = await response.json();
      const storage = JSON.parse(localStorage.getItem('user'));
      setStorageUser(storage);
      setProductList(responseJson);
    };
    apiProducts();
  }, []);

  return (
    <CartProvider>
      <NavBar
        userName={ storageUser.name }
      />
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
    </CartProvider>
  );
}
