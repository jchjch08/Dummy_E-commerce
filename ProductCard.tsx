import { Product } from "../types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-md font-bold text-blue-600">${product.price}</p>
        <p className="text-sm text-yellow-500">⭐ {product.rating.rate} ({product.rating.count})</p>
      </Link>
    </div>
  );
}
