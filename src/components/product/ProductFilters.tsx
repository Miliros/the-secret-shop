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
    <div className="flex gap-6 mb-4 w-9/12 md:w-3/12 mx-auto p-2">
      <div className="w-full">
        <label
          htmlFor="category-select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Categoría
        </label>
        <select
          id="category-select"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black sm:text-base"
          onChange={(e) => onCategoryChange(e.target.value || null)}
        >
          <option value="" className="bg-white hover:text-white">
            Todas
          </option>
          <option value="Computación" className="bg-white hover:text-white">
            Computación
          </option>
          <option value="Audio" className="bg-white hover:text-white">
            Audio
          </option>
        </select>
      </div>

      <div className="w-full">
        <label
          htmlFor="price-select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Precios
        </label>
        <select
          id="price-select"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black sm:text-base"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "low") onPriceRangeChange([0, 50]);
            else if (value === "mid") onPriceRangeChange([51, 200]);
            else if (value === "high") onPriceRangeChange([201, Infinity]);
            else onPriceRangeChange(null);
          }}
        >
          <option value="" className="bg-white hover:text-white">
            Todos
          </option>
          <option value="low" className="bg-white hover:text-white">
            0 - 50
          </option>
          <option value="mid" className="bg-white hover:text-white">
            51 - 200
          </option>
          <option value="high" className="bg-white  hover:text-white">
            200+
          </option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
