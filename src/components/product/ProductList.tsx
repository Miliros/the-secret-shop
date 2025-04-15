"use client";
import { Product } from "@/types/types";
import { useInfiniteScroll } from "@/components/hooks/useInfiniteScroll";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { visibleProducts } = useInfiniteScroll(products, 3);

  return (
    <div className="flex justify-center items-center min-h-screen pt-10 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visibleProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="max-w-[300px] mx-auto">
            <ProductCard
              id={product.id.toString()}
              name={product.name}
              price={product.price}
              description={product.description || ""}
              detail={product.detail || ""}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
