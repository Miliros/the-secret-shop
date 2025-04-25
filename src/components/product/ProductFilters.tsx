"use client";

interface ProductFiltersProps {
  onCategoryChange: (category: string | null) => void;
  onPriceRangeChange: (priceRange: [number, number] | null) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onCategoryChange,
  onPriceRangeChange,
}) => {
  return (
    <div className="flex justify-around items-center mb-4 md:mb-8 px-8">
      <div className="w-1/4">
        <label
          htmlFor="category-select"
          className="block mb-2 text-sm font-medium text-black"
        >
          Categoría
        </label>
        <select
          id="category-select"
          className="block w-full p-2 text-sm text-gray-900 border border-[#3E2723] rounded-lg bg-gray-50 focus:ring-[#3E2723] focus:border-[#3E2723] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          onChange={(e) => onCategoryChange(e.target.value || null)}
        >
          <option value="">Todas</option>
          <option value="Computación">Computación</option>
          <option value="Audio">Audio</option>
          <option value="Fotografía">Fotografía</option>
          <option value="Electrodomésticos">Electrodomésticos</option>
          <option value="Telefonía">Telefonía</option>
          <option value="Oficina">Oficina</option>
        </select>
      </div>

      <div className="w-1/4">
        <label
          htmlFor="price-select"
          className="block mb-2 text-sm font-medium text-black"
        >
          Precios
        </label>
        <select
          id="price-select"
          className="block w-full p-2 text-sm text-gray-900 border border-[#3E2723] rounded-lg bg-gray-50 focus:ring-[#3E2723] focus:border-[#3E2723] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          onChange={(e) =>
            onPriceRangeChange(
              e.target.value ? JSON.parse(e.target.value) : null
            )
          }
        >
          <option value="">Todos</option>
          <option value="[0,50]">$0 - $50</option>
          <option value="[50,100]">$50 - $100</option>
          <option value="[100,200]">$100 - $200</option>
          <option value="[200,500]">$200 - $500</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
