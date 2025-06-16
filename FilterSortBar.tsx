export default function FilterSortBar({
    onFilter,
    onSort,
  }: {
    onFilter: (cat: string) => void;
    onSort: (by: string) => void;
  }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select onChange={(e) => onFilter(e.target.value)} className="p-2 border rounded">
          <option value="">Semua Kategori</option>
          <option value="men's clothing">Pakaian Pria</option>
          <option value="women's clothing">Pakaian Wanita</option>
          <option value="electronics">Elektronik</option>
          <option value="jewelery">Perhiasan</option>
        </select>
  
        <select onChange={(e) => onSort(e.target.value)} className="p-2 border rounded">
          <option value="">Urutkan</option>
          <option value="price-asc">Harga Terendah</option>
          <option value="price-desc">Harga Tertinggi</option>
          <option value="rating">Rating Tertinggi</option>
          <option value="stock">Stok Terbanyak</option>
        </select>
      </div>
    );
  }
  