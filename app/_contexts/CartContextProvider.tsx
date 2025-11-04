"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  id: string;
};

type CartContextType = {
  cart: CartItem[];
  addCartItem: (item: Omit<CartItem, "id">) => void;
  removeCartItem: (itemId: string) => void;
  incrementItemQuantity: (itemId: string) => void;
  decrementItemQuantity: (itemId: string) => void;
  removeAllCartItems: () => void;
};

const CartContext = createContext<CartContextType | undefined>({
  cart: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
  removeAllCartItems: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addCartItem = (newItem: Omit<CartItem, "id">) => {
    if (newItem.quantity === 0) return;
    const existingItem = cart.find((c) => c.name === newItem.name);

    if (existingItem) {
      setCart((c) =>
        c.map((item) => {
          if (item.id !== existingItem.id) {
            return item;
          }

          return { ...item, quantity: item.quantity + newItem.quantity };
        }),
      );
      return;
    }
    setCart((c) => [...c, { ...newItem, id: crypto.randomUUID() }]);
    toast.success("Item added to cart successfully");
  };

  const removeCartItem = (itemId: string) => {
    setCart((c) => c.filter((item) => item.id !== itemId));
    toast.success("Item removed successfully.");
  };

  const incrementItemQuantity = (itemId: string) => {
    setCart((c) =>
      c.map((item) => {
        if (item.id !== itemId) {
          return item;
        }
        return { ...item, quantity: (item.quantity ?? 0) + 1 };
      }),
    );
  };

  const decrementItemQuantity = (itemId: string) => {
    setCart((c) =>
      c.map((item) => {
        if (item.id !== itemId) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
        };
      }),
    );
  };

  const removeAllCartItems = () => {
    setCart([]);
    toast.success("Cart emptied successfully");
  };

  const contextReturnValues = {
    cart,
    addCartItem,
    removeCartItem,
    incrementItemQuantity,
    decrementItemQuantity,
    removeAllCartItems,
  };

  return (
    <CartContext.Provider value={contextReturnValues}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext was used outside its scope.");
  return context;
};

export default useCart;
