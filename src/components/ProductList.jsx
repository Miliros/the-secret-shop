import { ProductCard } from "./ProductCard";
import { products } from "../utils/productData";

export default function ProductList() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-10 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-11/12 max-w-6xl">
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            description={producto.description}
            image={producto.image}
          />
        ))}
      </div>
    </div>
  );
}
