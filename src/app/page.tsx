import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import { imageUrls } from "../utils/imageData"; // Importamos las URLs de las imágenes
import MarqueeBar from "@/components/MarqueeBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h2 className="text-center text-4xl font-serif text-gray-800 m-6">
        Old School Tech Shop
      </h2>{" "}
      <Carousel images={imageUrls} />
      <MarqueeBar />
    </div>
  );
}
