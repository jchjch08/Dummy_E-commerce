export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
    return (
      <input
        type="text"
        placeholder="Cari produk..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
    );
  }