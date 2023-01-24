import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [user, setUser] = useState({});

  const setLocalStorage = (key, info) => {
    localStorage.setItem(key, JSON.stringify(info));
  };

  const contextValue = useMemo(() => ({
    user,
    setUser,
    setLocalStorage,
  }), [user]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
