import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../utils/api";
import { Product } from "../types/product";

interface ProductContextType {
  products: Product[];
  loading: boolean;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: true,
});

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get<{ products: Product[] }>("products?limit=100")
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
