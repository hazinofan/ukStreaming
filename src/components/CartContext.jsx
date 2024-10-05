// src/contexts/CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProduct));
  }, [cartProduct]);

  const addToCart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartProduct.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProduct(updatedCart);
    } else {
      const updatedCart = [...cartProduct, { ...product, quantity: 1 }];
      setCartProduct(updatedCart);
    }
  };

  const deleteItemFromCart = (productId) => {
    const updatedCart = cartProduct.filter((item) => item.id !== productId);
    setCartProduct(updatedCart);
  };

  const clearCart = () => {
    localStorage.clear();
    setCartProduct([]);
  };

  return (
    <CartContext.Provider value={{ cartProduct, addToCart, deleteItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
