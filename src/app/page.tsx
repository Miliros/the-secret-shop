// app/page.tsx
import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import { imageUrls } from "@/utils/imageData";
import MarqueeBar from "@/components/MarqueeBar";
import ProductList from "@/components/product/ProductList";
import { products } from "@/utils/productData";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MarqueeBar />
      <Carousel images={imageUrls} />
      <h2 className="text-center text-6xl md:text-8xl lg:text-9xl font-custom text-[#3E2723] m-4">
        Old School Tech Shop
      </h2>

      <ProductList products={products} />
    </div>
  );
}
