import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}
