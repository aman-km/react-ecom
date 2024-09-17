import React, { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = ({ children }) => {

    const [cartC, setCartC] = useState(0);
    const [searchProduct, setSearchProduct] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

  return (
    <context.Provider value={{ cartC, setCartC, searchProduct, setSearchProduct, cartItems, setCartItems }}>
      {children}
    </context.Provider>
  );
};