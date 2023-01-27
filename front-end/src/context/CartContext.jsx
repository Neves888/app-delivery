import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listProducts, setListProducts] = useState([]);

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
