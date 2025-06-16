import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterSortBar from "../components/FilterSortBar";

export default function Home() {
  const { products, loading } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    if (sortOption === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortOption === "stock") {
      filtered.sort((a, b) => b.stock - a.stock);
    }

    return filtered;
  }, [products, searchQuery, categoryFilter, sortOption]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛍️ Semua Produk</h1>
      <SearchBar onSearch={setSearchQuery} />
      <FilterSortBar onFilter={setCategoryFilter} onSort={setSortOption} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
