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
      <div className="text-center my-20 p-8">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-custom font-normal md:font-bold tracking-wider text-[#3E2723] ">
          OLD SCHOOL TECH SHOP
        </h2>
        <p className="text-xl sm:text-2xl font-light tracking-wide text-[#3E2723] mt-1">
          TECNOLOGÍA RETRO & VINTAGE
        </p>
      </div>
      <ProductList products={products} />
    </div>
  );
}
