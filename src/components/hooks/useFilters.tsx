import { useState } from "react";
import { Product } from "@/types/types";

interface UseFiltersReturn {
  filteredProducts: Product[];
  setCategoryFilter: (category: string | null) => void;
  setPriceRange: (range: [number, number] | null) => void;
}

export const useFilters = (products: Product[]): UseFiltersReturn => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = categoryFilter
      ? product.category === categoryFilter
      : true;
    const priceMatch = priceRange
      ? product.price >= priceRange[0] && product.price <= priceRange[1]
      : true;

    return categoryMatch && priceMatch;
  });

  return { filteredProducts, setCategoryFilter, setPriceRange };
};
