import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const h = localStorage.getItem("orderHistory");
    if (h) setHistory(JSON.parse(h));
  }, []);

  if (history.length === 0) return <p className="p-6">Belum ada riwayat pembelian.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🧾 Riwayat Pembelian</h2>
      <ul className="divide-y">
        {history.map((item, i) => (
          <li key={i} className="py-2 flex justify-between">
            <span>{item.product.title} x{item.qty}</span>
            <span>${(item.product.price * item.qty).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
