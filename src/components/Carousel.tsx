"use client";

import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="default-carousel" className="relative w-full me-8">
      <div className="relative h-80 overflow-hidden rounded-lg md:h-[492px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
