import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, remove, clear } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  if (cart.length === 0)
    return <p className="p-6 text-center">Keranjang kosong. <Link href="/">Belanja yuk!</Link></p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🛒 Keranjang Belanja</h2>
      <ul className="divide-y">
        {cart.map((item) => (
          <li key={item.product.id} className="py-4 flex justify-between">
            <span>{item.product.title} x{item.qty}</span>
            <span>${item.product.price * item.qty}</span>
            <button onClick={() => remove(item.product.id)} className="text-red-600 hover:underline ml-4">
              Hapus
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-gray-300 px-3 py-2 rounded" onClick={clear}>Kosongkan</button>
        <Link href="/checkout">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
