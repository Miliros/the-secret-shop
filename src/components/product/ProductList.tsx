"use client";
import React, { useState } from "react";
import { Product } from "@/types/types";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import { useInfiniteScroll } from "@/components/hooks/useInfiniteScroll";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const { visibleProducts } = useInfiniteScroll(products, 3);

  const displayedProducts = visibleProducts.filter((product) => {
    const categoryMatch = categoryFilter
      ? product.category === categoryFilter
      : true;
    const priceMatch = priceRange
      ? product.price >= priceRange[0] && product.price <= priceRange[1]
      : true;

    return categoryMatch && priceMatch;
  });

  return (
    <div className="flex flex-col items-center min-h-screen pt-10 pb-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <ProductFilters
          onCategoryChange={setCategoryFilter}
          onPriceRangeChange={setPriceRange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="max-w-[300px] mx-auto"
              >
                <ProductCard
                  id={product.id.toString()}
                  name={product.name}
                  price={product.price}
                  description={product.description || ""}
                  detail={product.detail || ""}
                  category={product.category}
                  stars={product.stars}
                  image={product.image}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No se encontraron productos con los filtros aplicados.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
