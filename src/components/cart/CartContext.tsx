"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface CartProduct {
  id: string;
  quantity: number;
}

interface CartContextType {
  cart: CartProduct[];
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
  decreaseProduct: (id: string) => void;
  getTotalCount: () => number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const cartCookie = Cookies.get("cart");
    if (cartCookie) {
      setCart(JSON.parse(cartCookie));
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
  }, [cart]);

  const addProduct = (id: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };

  const removeProduct = (id: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((product) => product.id !== id);
      return newCart;
    });
  };
  const decreaseProduct = (id: string) => {
    setCart((prevCart) => {
      const productToDecrease = prevCart.find((item) => item.id === id);
      if (productToDecrease && productToDecrease.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };
  const getTotalCount = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        getTotalCount,
        decreaseProduct,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
