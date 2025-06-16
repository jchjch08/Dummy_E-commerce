import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useContext(ProductContext);
  const { add } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p className="p-4">Produk tidak ditemukan.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.images[0]} alt={product.title} className="w-full md:w-1/2 rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-lg font-semibold mt-2 text-blue-700">${product.price}</p>
          <p className="text-sm mt-2">{product.description}</p>
          <p className="text-sm mt-2 text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => {
              add({ product, qty: 1 });
              router.push("/cart");
            }}
          >
            Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
