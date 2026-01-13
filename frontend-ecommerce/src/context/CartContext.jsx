import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cartItems")) || [];
    } catch {
      return [];
    }
  });

  const save = (items) => {
    setCartItems(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addToCart = (product) => {
    const exist = cartItems.find(i => i._id === product._id);
    if (exist) {
      save(cartItems.map(i => i._id === product._id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      save([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => save(cartItems.filter(i => i._id !== id));
  const updateQty = (id, qty) => save(cartItems.map(i => i._id === id ? { ...i, qty } : i));
  const clearCart = () => save([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);