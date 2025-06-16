import { createContext, useState, useEffect, ReactNode } from "react";
type CartItem = { product: any; qty: number };
export const CartContext = createContext<{
  cart: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  clear: () => void;
}>({
  cart: [],
  add: () => {},
  remove: () => {},
  clear: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) setCart(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const add = (item: CartItem) => setCart(prev => [...prev, item]);
  const remove = (id: number) => setCart(prev => prev.filter(i => i.product.id !== id));
  const clear = () => setCart([]);
  
  return (
    <CartContext.Provider value={{ cart, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}
