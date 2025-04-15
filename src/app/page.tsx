import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import { imageUrls } from "../utils/imageData";
import MarqueeBar from "@/components/MarqueeBar";
import ProductList from "@/components/ProductList";
import { products } from "@/utils/productData";

export default function Home() {
  return (
    <div>
      <NavBar />

      <MarqueeBar />

      <Carousel images={imageUrls} />
      <h2 className="text-center text-4xl font-serif text-gray-800 m-6">
        Old School Tech Shop
      </h2>
      <ProductList products={products} />
    </div>
  );
}
