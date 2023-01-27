import { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const apiProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const responseJson = await response.json();
      const initialList = responseJson.map(({ id, price }) => ({
        id,
        price,
        quantity: 0,
      }));
      setListProducts(initialList);
    };
    apiProducts();
  }, []);

  const contextValue = useMemo(() => ({
    totalPrice,
    setTotalPrice,
    listProducts,
    setListProducts,
  }), [totalPrice, listProducts]);

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
