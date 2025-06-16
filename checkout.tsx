import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, clear } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("orderHistory", JSON.stringify(cart));
      clear();
    }
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-green-700">✅ Pembayaran Berhasil</h1>
      <p className="mt-4">Total pembayaran: <strong>${total.toFixed(2)}</strong></p>
      <p className="mt-2 text-sm text-gray-500">Order Anda telah disimpan ke Local Storage sebagai riwayat pembelian.</p>
    </div>
  );
}
